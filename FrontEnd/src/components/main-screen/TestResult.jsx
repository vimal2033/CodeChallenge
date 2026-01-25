                                                {/* Test Results */}

const MainTestResult = (props) => {
    // const { currentQ, results } = props;

    const formatInputForDisplay = (input) => {
    if (!input) return ''
    const parts = input.trim().split(/\s+/)
    return parts.slice(1).join(' ')
  }

  return (
    <>
        <div className="flex-1 flex flex-col overflow-hidden bg-[#020617]/50 backdrop-blur-sm">
              {props.results.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 space-y-4 p-8">
                  <div className="text-6xl">🧪</div>
                  <div>
                    <p className="text-xl font-semibold mb-2">Ready to Test</p>
                    <p className="text-sm">{props.currentQ.testCases.length} test cases ready</p>
                    <p className="text-xs">Click "Load Template" then "Run Tests"</p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {/* Summary */}
                  <div className="p-6 bg-gradient-to-r from-slate-800/50 to-gray-900/50 rounded-2xl border border-slate-700/50 shadow-2xl backdrop-blur-sm text-center mt-6">
                    <div className="text-3xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                      {props.results.every(r => r.passed) 
                        ? '🎉 ALL TESTS PASSED!' 
                        : `✅ ${props.results.filter(r => r.passed).length} / ${props.results.length}`
                      }
                    </div>
                    <div className="text-lg font-semibold text-gray-300 mb-2">
                      Total Time: {props.results.reduce((sum, r) => sum + parseFloat(r.time || 0), 0).toFixed(2)}s
                    </div>
                  </div>
                  
                  {props.results.map((result) => (
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
                          {result.id === 'ERROR' ? '🔥 SYNTAX ERROR' : `Test #${result.id}`}
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
                          {result.exitCode !== 0 && result.id !== 'ERROR' && (
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
    </>
  )
}

export default MainTestResult