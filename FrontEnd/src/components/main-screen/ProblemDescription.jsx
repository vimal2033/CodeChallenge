                                              {/* Problem Description */}
const MainProblemDescription = (props) => {
    // const { currentQuestion} = props;
  return (
    <>
        <div className="w-1/3 border-r border-gray-700 flex flex-col bg-[#020617]/50 backdrop-blur-sm">
            <div className="p-6 border-b border-gray-700 flex-none">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                💡 {props.currentQuestion.title}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p className="whitespace-pre-wrap">{props.currentQuestion.description}</p>
                
                <div>
                  <div className="font-semibold mb-2 text-emerald-400">Constraints:</div>
                  <pre className="bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-xs font-mono overflow-auto max-h-32">
                    {props.currentQuestion.constraints}
                  </pre>
                </div>

                <div className="text-xs bg-blue-900/50 p-3 rounded-lg border border-blue-800/50">
                  <strong>Function:</strong> <code className="bg-blue-800/50 px-1 py-px rounded text-emerald-400">{props.currentQuestion.functionName}(int n)</code>
                  <br />
                  <strong>Return:</strong> <code className="text-orange-400">int</code>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default MainProblemDescription