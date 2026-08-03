const MainTestResult = (props) => {
    const formatInputForDisplay = (input) => {
    if (!input) return ''
    const parts = input.trim().split(/\s+/)
    return parts.slice(1).join('\n')
  }

  const formatOutputForDisplay = (value) => {
    if (!value) return ''
    return value.trim().split(/\s+/).join('\n')
  }

  return (
    <>
        <div className="flex-1 flex flex-col overflow-hidden bg-slate-950/40 backdrop-blur-sm">
              {props.results.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 space-y-4 p-8">
                  <div className="text-5xl font-light text-slate-500">01</div>
                  <div>
                    <p className="text-xl font-semibold mb-2 text-slate-100">Ready to run</p>
                    <p className="text-sm">{props.currentQ.testCases.length} test cases available</p>
                    <p className="text-xs text-slate-500">Use Reset if you want the starter code back.</p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {/* Summary */}
                  <div className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-sm text-center mt-6">
                    <div className="text-3xl font-semibold mb-4 text-slate-50">
                      {props.results.every(r => r.passed) 
                        ? 'All tests passed' 
                        : `${props.results.filter(r => r.passed).length} / ${props.results.length} passed`
                      }
                    </div>
                    <div className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-[0.2em]">
                      Total Time: {props.results.reduce((sum, r) => sum + parseFloat(r.time || 0), 0).toFixed(2)}s
                    </div>
                  </div>
                  
                  {props.results.map((result) => (
                    <div
                      key={result.id}
                      className={`p-5 rounded-2xl border shadow-lg transition-all flex-none ${
                        result.passed
                          ? 'bg-emerald-950/40 border-emerald-800 hover:bg-emerald-950/60'
                          : 'bg-rose-950/40 border-rose-800 hover:bg-rose-950/60'
                      }`}
                    >
                      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <h4 className="text-lg font-semibold text-slate-50">
                          {result.id === 'ERROR' ? 'Syntax error' : `Test #${result.id}`}
                        </h4>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={`px-4 py-2 rounded-full font-bold text-sm shadow-lg ${
                            result.passed 
                              ? 'bg-emerald-500 text-slate-950' 
                              : 'bg-rose-500 text-white'
                          }`}>
                            {result.passed ? 'PASS' : 'FAIL'}
                          </span>
                          <span className="text-slate-400">{result.time}</span>
                          {result.exitCode !== 0 && result.id !== 'ERROR' && (
                            <span className="text-amber-400 text-xs">Exit: {result.exitCode}</span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <label className="font-semibold text-slate-300 text-xs block uppercase tracking-[0.2em]">Input</label>
                          <pre className="bg-slate-950/70 backdrop-blur-sm p-3 rounded-xl border border-slate-800 text-xs font-mono max-h-24 overflow-auto text-slate-300">
                            {formatInputForDisplay(result.input)}
                          </pre>
                        </div>
                        <div className="space-y-2">
                          <label className="font-semibold text-cyan-300 text-xs block uppercase tracking-[0.2em]">Expected</label>
                          <code className="block bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-xs font-mono max-h-24 overflow-auto text-slate-200">
                            {formatOutputForDisplay(result.expected)}
                          </code>
                        </div>
                      </div>

                      {/* Enhanced Output Section */}
                      <div className="pt-4 border-t border-slate-800">
                        <div className="flex gap-4 mb-3 items-center flex-wrap">
                          <label className="font-semibold text-cyan-300 text-xs uppercase tracking-[0.2em]">Got</label>
                          {result.stderr && (
                            <label className="font-semibold text-amber-400 text-xs flex items-center gap-1 uppercase tracking-[0.2em]">
                              Compile error
                            </label>
                          )}
                        </div>
                        
                        {result.stderr ? (
                          <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-800 text-xs font-mono max-h-32 overflow-auto text-amber-100">
                            <div className="text-amber-300 mb-2 font-semibold">Syntax or compilation error</div>
                            <pre>{result.stderr}</pre>
                            <div className="text-xs text-amber-300 mt-2 bg-amber-950/30 p-2 rounded font-mono">
                              Fix the issue and run again.
                            </div>
                          </div>
                        ) : result.got ? (
                          <code className="block bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-xs font-mono max-h-32 overflow-auto break-all text-slate-100">
                            {formatOutputForDisplay(result.got) || 'No output'}
                          </code>
                        ) : (
                          <div className="text-center py-8 text-slate-500 text-sm italic bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                            No output captured
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