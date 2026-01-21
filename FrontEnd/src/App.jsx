import { useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { questions } from './data/questions.js'

function App() {
  const [language, setLanguage] = useState('cpp')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [codeTemplate, setCodeTemplate] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const q = questions[currentQuestion]
    const template = q.languageTemplates[language] || q.languageTemplates.cpp
    setCodeTemplate(template)
  }, [currentQuestion, language])

  const generateSourceCode = () => {
    const q = questions[currentQuestion]
    const funcName = q.functionName

    const cppFuncMap = {
      'square': 'square',
      'isEven': 'isEven', 
      'factorial': 'factorial',
      'isPrime': 'isPrime',
      'fibonacci': 'fibonacci',
      'sumOfDigits': 'sumOfDigits',
      'reverseNumber': 'reverseNumber',
      'isPalindrome': 'isPalindrome',
      'gcd': 'gcd',
      'isPowerOfTwo': 'isPowerOfTwo'
    }

    if (language === 'cpp') {
      const cppFunc = cppFuncMap[funcName] || funcName
      return `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

${codeTemplate}

int main() {
  string allInput;
  string line;
  while(getline(cin, line)) {
    allInput += line + "\\n";
  }
  
  stringstream ss(allInput);
  vector<int> numbers;
  int num;
  while(ss >> num) {
    numbers.push_back(num);
  }
  
  if(numbers.empty()) return 0;
  int t = numbers[0];
  
  for(size_t i = 1; i <= t && i < numbers.size(); i++) {
    cout << ${cppFunc}(numbers[i]) << endl;
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
      print(${funcName}(n))`
    }

    if (language === 'node') {
      return `const fs = require('fs');

${codeTemplate}

const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
if (input.length > 0) {
  let index = 0;
  const t = parseInt(input[index++]);
  for(let i = 0; i < t && index < input.length; i++) {
    const n = parseInt(input[index++]);
    console.log(${funcName}(n));
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
    for(int i = 0; i < t; i++) {
      int n = sc.nextInt();
      System.out.println(${funcName}(n));
    }
    sc.close();
  }
}`
    }

    return `#include <iostream>
using namespace std;
int main() { return 0; }`
  }

  const runTests = async () => {
    setLoading(true)
    setResults([])

    try {
      const tests = questions[currentQuestion].testCases
      let allResults = []

      for (let i = 0; i < tests.length; i++) {
        const start = performance.now()

        const res = await fetch('http://localhost:4000/api/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language,
            source: generateSourceCode(),
            input: tests[i].input
          })
        })

        const end = performance.now()
        const data = await res.json()

        const got = (data.stdout || '').trim()
        const stderr = (data.stderr || '').trim()
        const expected = tests[i].expected.trim()

        allResults.push({
          id: i + 1,
          input: tests[i].input,
          expected,
          got,
          stderr: stderr || null,
          exitCode: data.exitCode || 0,
          passed: data.exitCode === 0 && got === expected,
          time: ((end - start) / 1000).toFixed(2) + 's'
        })
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

  const formatInputForDisplay = (input) => {
    if (!input) return ''
    const parts = input.trim().split(/\s+/)
    return parts.slice(1).join(' ')
  }

  return (
    <div className="h-screen bg-[#0f172a] text-gray-200 flex flex-col font-mono">

      {/* ------------------------------------------------------------------ */}

      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-700 bg-[#020617]/80 backdrop-blur-sm flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            🧪 Online Compiler
          </h1>
          <div className="text-sm bg-blue-900/50 px-3 py-1 rounded-full font-mono">
            Q{currentQ.id}: {currentQ.title}
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <select
            className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-gray-700/50 transition-all text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="node">Node.js</option>
            <option value="java">Java</option>
          </select>

          <button
            onClick={() => setCodeTemplate(currentQ.languageTemplates[language] || currentQ.languageTemplates.cpp)}
            className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg hover:bg-gray-600/50 transition-all backdrop-blur-sm text-sm"
          >
            📋 Load Template
          </button>

          <button
            id="run-btn"
            onClick={runTests}
            disabled={loading}
            className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all backdrop-blur-sm flex items-center gap-2 text-sm"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Running...
              </>
            ) : (
              '🚀 Run Tests'
            )}
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* ---------------------------------------------------------------- */}

        {/* Questions Sidebar */}
        <div className="w-64 border-r border-gray-700 flex flex-col bg-[#020617]/50 backdrop-blur-sm">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold text-purple-400">📚 Questions ({questions.length})</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {questions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(idx)}
                className={`w-full p-3 rounded-xl text-left transition-all text-sm ${
                  currentQuestion === idx
                    ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-400/50 shadow-lg'
                    : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50'
                }`}
              >
                <div className="font-semibold mb-1">Q{q.id}: {q.title}</div>
                <div className="text-xs text-gray-400">{q.testCases.length} tests</div>
              </button>
            ))}
          </div>
        </div>
            {/* ------------------------------------------------------------- */}

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">

          {/* ---------------------------------------------------------------------- */}

          {/* Problem Description */}
          <div className="w-1/3 border-r border-gray-700 flex flex-col bg-[#020617]/50 backdrop-blur-sm">
            <div className="p-6 border-b border-gray-700 flex-none">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                💡 {currentQ.title}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p className="whitespace-pre-wrap">{currentQ.description}</p>
                
                <div>
                  <div className="font-semibold mb-2 text-emerald-400">Constraints:</div>
                  <pre className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-xs font-mono overflow-auto max-h-32">
                    {currentQ.constraints}
                  </pre>
                </div>

                <div className="text-xs bg-blue-900/50 p-3 rounded-lg border border-blue-800/50">
                  <strong>Function:</strong> <code className="bg-blue-800/50 px-1 py-px rounded text-emerald-400">{currentQ.functionName}(int n)</code>
                  <br />
                  <strong>Return:</strong> <code className="text-orange-400">int</code>
                </div>
              </div>
            </div>
          </div>

            {/* ------------------------------------------------------------------------ */}

          {/* Editor + Results */}
          <div className="flex-1 flex overflow-hidden">

            {/* ---------------------------------------------------------------------------- */}

            {/* Code Editor */}
            <div className="w-1/2 border-r border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-700 bg-[#020617]/80 backdrop-blur-sm flex-none">
                <h3 className="text-lg font-semibold text-sky-400 mb-2 flex items-center gap-2">
                  ✏️ Code Editor
                </h3>
                <p className="text-sm text-gray-400">
                  Implement <code className="bg-sky-800/50 px-1 py-px rounded text-xs">{currentQ.functionName}(int n)</code>
                </p>
              </div>
              <div className="flex-1">
                <Editor
                  height="100%"
                  language={language}
                  value={codeTemplate}
                  onChange={setCodeTemplate}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    automaticLayout: true,
                    folding: false,
                    scrollBeyondLastLine: false,
                    wordWrap: 'on'
                  }}
                />
              </div>
            </div>

            {/* ---------------------------------------------------------------------------- */}
            {/* Test Results */}
            <div className="flex-1 flex flex-col overflow-hidden bg-[#020617]/50 backdrop-blur-sm">
              {results.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 space-y-4 p-8">
                  <div className="text-6xl">🧪</div>
                  <div>
                    <p className="text-xl font-semibold mb-2">Ready to Test</p>
                    <p className="text-sm">{currentQ.testCases.length} test cases ready</p>
                    <p className="text-xs">Click "Load Template" then "Run Tests"</p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* ---------------------------------- */}
                  {/* Summary */}
                  <div className="p-6 bg-gradient-to-r from-slate-800/50 to-gray-900/50 rounded-2xl border border-slate-700/50 shadow-2xl backdrop-blur-sm text-center mt-6">
                    <div className="text-3xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                      {results.every(r => r.passed) 
                        ? '🎉 ALL TESTS PASSED!' 
                        : `✅ ${results.filter(r => r.passed).length} / ${results.length}`
                      }
                    </div>
                    <div className="text-lg font-semibold text-gray-300 mb-2">
                      Total Time: {results.reduce((sum, r) => sum + parseFloat(r.time || 0), 0).toFixed(2)}s
                    </div>
                  </div>
                  {/* --------------------------------- */}
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className={`p-5 rounded-2xl border-2 shadow-lg transition-all flex-none ${
                        result.passed
                          ? 'bg-green-900/40 border-green-500/70 hover:bg-green-900/60'
                          : 'bg-red-900/40 border-red-500/70 hover:bg-red-900/60'
                      }`}
                    >
                      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <h4 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                          Test #{result.id}
                        </h4>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={`px-4 py-2 rounded-full font-bold text-sm shadow-lg ${
                            result.passed 
                              ? 'bg-green-500/90 text-white' 
                              : 'bg-red-500/90 text-white'
                          }`}>
                            {result.passed ? '✅ PASS' : '❌ FAIL'}
                          </span>
                          <span className="text-gray-400">⏱️ {result.time}</span>
                          {result.exitCode !== 0 && (
                            <span className="text-orange-400 text-xs">⚠️ Exit: {result.exitCode}</span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <label className="font-semibold text-gray-300 text-xs block">Input</label>
                          <pre className="bg-black/60 backdrop-blur-sm p-3 rounded-xl border border-gray-800 text-xs font-mono max-h-24 overflow-auto">
                            {formatInputForDisplay(result.input)}
                          </pre>
                        </div>
                        <div className="space-y-2">
                          <label className="font-semibold text-emerald-400 text-xs block">Expected</label>
                          <code className="block bg-emerald-900/50 p-3 rounded-xl border border-emerald-800/50 text-xs font-mono max-h-24 overflow-auto">
                            {result.expected}
                          </code>
                        </div>
                      </div>

                      {/* Enhanced Output Section */}
                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex gap-4 mb-3 items-center flex-wrap">
                          <label className="font-semibold text-sky-400 text-xs">Got</label>
                          {result.stderr && (
                            <label className="font-semibold text-orange-400 text-xs flex items-center gap-1">
                              ⚠️ Compile Error
                            </label>
                          )}
                        </div>
                        
                        {result.stderr ? (
                          <div className="bg-orange-900/50 p-4 rounded-xl border-2 border-orange-600/50 text-xs font-mono max-h-32 overflow-auto">
                            <div className="text-orange-300 mb-2 font-semibold">🔥 SYNTAX/COMPILATION ERROR:</div>
                            <pre>{result.stderr}</pre>
                            <div className="text-xs text-orange-400 mt-2 bg-orange-900/30 p-2 rounded font-mono">
                              Fix syntax → Run Tests again
                            </div>
                          </div>
                        ) : result.got ? (
                          <code className="block bg-slate-900/50 p-3 rounded-xl border border-slate-800/50 text-xs font-mono max-h-32 overflow-auto break-all">
                            {result.got || 'No output'}
                          </code>
                        ) : (
                          <div className="text-center py-8 text-gray-500 text-sm italic bg-slate-900/30 p-4 rounded-xl border border-slate-800/50">
                            No output (empty stdout)
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
