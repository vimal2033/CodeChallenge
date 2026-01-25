                                                {/* Code Editor */}
import Editor from '@monaco-editor/react'
const MainCodeEditor = (props) => {
    // const { currentQ, language, codeTemplate, setCodeTemplate } = props;
  return (
    <>
        <div className="w-1/2 border-r border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-700 bg-[#020617]/80 backdrop-blur-sm flex-none">
                <h3 className="text-lg font-semibold text-sky-400 mb-2 flex items-center gap-2">
                  ✏️ Code Editor
                </h3>
                <p className="text-sm text-gray-400">
                  Implement <code className="bg-sky-800/50 px-1 py-px rounded text-xs">{props.currentQ.functionName}(int n)</code>
                </p>
              </div>
              <div className="flex-1">
                <Editor
                  height="100%"
                  language={props.language}
                  value={props.codeTemplate}
                  onChange={props.setCodeTemplate}
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
    </>
  )
}

export default MainCodeEditor