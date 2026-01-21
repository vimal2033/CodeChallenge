const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { cpp, python, node, java } = require('compile-run');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

const runners = {
  cpp, python, node, java
};

app.post('/api/run', async (req, res) => {
  const { language, source, input } = req.body;
  console.log(`📥 ${language}: input="${input?.substring(0, 50)}..."`);

  if (!language || !source) {
    return res.status(400).json({ error: 'language and source are required' });
  }

  const runner = runners[language];
  if (!runner) {
    return res.status(400).json({ error: `Unsupported language: ${language}` });
  }

  try {
    const result = await runner.runSource(source, {
      stdin: input || '',
      timeout: 5000,
      compileTimeout: 5000
    });

    const normalizedStdout = (result.stdout || '').replace(/\r\n/g, '\n').trim();
    console.log(`📤 ${language}: exitCode=${result.exitCode}, stdout="${normalizedStdout.substring(0, 50)}..."`);

    res.json({
      stdout: normalizedStdout,
      stderr: result.stderr || '',
      exitCode: result.exitCode || 0
    });
  } catch (err) {
    console.error('❌ Execution error:', err.message);
    res.status(500).json({
      stdout: '',
      stderr: err.message || 'Execution failed',
      exitCode: 1
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});
