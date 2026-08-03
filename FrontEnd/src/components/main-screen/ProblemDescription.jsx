const MainProblemDescription = (props) => {
  return (
    <>
        <div className="w-1/3 border-r border-slate-800 flex flex-col bg-slate-950/40 backdrop-blur-sm">
            <div className="p-6 border-b border-slate-800 flex-none">
              <h2 className="text-xl font-semibold mb-4 text-slate-50">
                {props.currentQuestion.title}
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
                <p className="whitespace-pre-wrap">{props.currentQuestion.description}</p>
                
                <div>
                  <div className="font-semibold mb-2 text-cyan-300 uppercase tracking-[0.2em] text-[11px]">Constraints</div>
                  <pre className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-xs font-mono overflow-auto max-h-32 text-slate-300">
                    {props.currentQuestion.constraints}
                  </pre>
                </div>

                <div className="text-xs bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-slate-300">
                  <strong className="text-slate-100">Function:</strong> <code className="bg-slate-800 px-1 py-px rounded text-cyan-300">{props.currentQuestion.functionName}(int n)</code>
                  <br />
                  <strong className="text-slate-100">Output:</strong> <span className="text-slate-200">print the answer inside your solution</span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default MainProblemDescription