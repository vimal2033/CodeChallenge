import { useState, useEffect } from 'react'
import { questions } from './data/questions.js'
import MainScreenHeader from './components/main-screen/Header.jsx'
import MainQuestionsSidebar from './components/main-screen/QuestionsSidebar.jsx'
import MainProblemDescription from './components/main-screen/ProblemDescription.jsx'
import MainCodeEditor from './components/main-screen/CodeEditor.jsx'
import MainTestResult from './components/main-screen/TestResult.jsx'

function App() {
  const [language, setLanguage] = useState('cpp')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [codeTemplate, setCodeTemplate] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setCodeTemplate('')
  }, [currentQuestion, language])

  const resetCodeTemplate = () => {
    setCodeTemplate('')
  }

  const generateSourceCode = () => {
    return codeTemplate
  }

  const generateRunnableSource = () => {
    const currentFunctionName = questions[currentQuestion].functionName

    if (language === 'cpp') {
      return `#include <bits/stdc++.h>
using namespace std;

${codeTemplate}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  int t;
  if (!(cin >> t)) return 0;
  while (t--) {
    long long n;
    cin >> n;
    ${currentFunctionName}(n);
  }
  return 0;
}`
    }

    if (language === 'python') {
      return `${codeTemplate}

import sys

data = sys.stdin.read().split()
if data:
  t = int(data[0])
  index = 1
  for _ in range(t):
    if index < len(data):
      n = int(data[index])
      index += 1
      ${currentFunctionName}(n)`
    }

    if (language === 'node') {
      return `const fs = require('fs');

${codeTemplate}

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
if (input.length > 0) {
  let index = 0;
  const t = parseInt(input[index++]);
  for (let i = 0; i < t && index < input.length; i++) {
    const n = parseInt(input[index++]);
    ${currentFunctionName}(n);
  }
}`
    }

    if (language === 'java') {
      return `import java.util.*;

public class Main {
  ${codeTemplate}

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    for (int i = 0; i < t; i++) {
      int n = sc.nextInt();
      ${currentFunctionName}(n);
    }
    sc.close();
  }
}`
    }

    return codeTemplate
  }

  const runTests = async () => {
    setLoading(true)
    setResults([])

    try {
      const tests = questions[currentQuestion].testCases

      // Run FIRST test case only to check for syntax/compile errors
      if (tests.length === 0) {
        setResults([])
        setLoading(false)
        return
      }

      const firstTest = tests[0]
      const start = performance.now()

      const res = await fetch('http://localhost:4000/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          source: generateRunnableSource(),
          input: firstTest.input
        })
      })

      const end = performance.now()
      const data = await res.json()

      const got = (data.stdout || '').trim()
      const stderr = (data.stderr || '').trim()
      const expected = firstTest.expected.trim()

      // If there's a compile/syntax error, show ONLY ONE result and stop
      if (data.exitCode !== 0 || stderr) {
        setResults([{
          id: 'ERROR',
          input: firstTest.input,
          expected,
          got,
          stderr: stderr || 'Compilation failed',
          exitCode: data.exitCode || 1,
          passed: false,
          time: ((end - start) / 1000).toFixed(2) + 's'
        }])
        setLoading(false)
        return
      }

      // No syntax errors - run ALL test cases
      let allResults = []
      for (let i = 0; i < tests.length; i++) {
        const testStart = performance.now()

        const testRes = await fetch('http://localhost:4000/api/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language,
            source: generateRunnableSource(),
            input: tests[i].input
          })
        })

        const testEnd = performance.now()
        const testData = await testRes.json()

        const testGot = (testData.stdout || '').trim()
        const testStderr = (testData.stderr || '').trim()
        const testExpected = tests[i].expected.trim()

        allResults.push({
          id: i + 1,
          input: tests[i].input,
          expected: testExpected,
          got: testGot,
          stderr: testStderr || null,
          exitCode: testData.exitCode || 0,
          passed: testData.exitCode === 0 && testGot === testExpected,
          time: ((testEnd - testStart) / 1000).toFixed(2) + 's'
        })

        // Stop if any test has compile error (safety check)
        if (testData.exitCode !== 0 || testStderr) {
          setResults(allResults)
          setLoading(false)
          return
        }
      }

      setResults(allResults)
    } catch (e) {
      setResults([{
        id: 'ERROR',
        input: '',
        expected: '',
        got: '',
        stderr: e.message,
        exitCode: 1,
        passed: false,
        time: 'N/A'
      }])
    } finally {
      setLoading(false)
    }
  }

  const currentQ = questions[currentQuestion]

  

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <MainScreenHeader
        currentQ={currentQ}
        language={language}
        setLanguage={setLanguage}
        onResetCode={resetCodeTemplate}
        runTests={runTests}
        loading={loading}
      />
      <div className="flex flex-1 overflow-hidden border-t border-slate-800/80">
        <MainQuestionsSidebar questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
        <div className="flex flex-1 overflow-hidden">
          <MainProblemDescription currentQuestion={currentQ} />
          <div className="flex-1 flex overflow-hidden">
            <MainCodeEditor currentQ={currentQ} language={language} codeTemplate={codeTemplate} setCodeTemplate={setCodeTemplate} />
            <MainTestResult currentQ={currentQ} results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
