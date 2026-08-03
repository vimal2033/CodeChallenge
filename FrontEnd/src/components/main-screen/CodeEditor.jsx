import Editor from '@monaco-editor/react'
const MainCodeEditor = (props) => {
  return (
    <>
        <div className="w-1/2 border-r border-slate-800 flex flex-col bg-slate-950/40">
              <div className="p-4 border-b border-slate-800 bg-slate-950/70 backdrop-blur-sm flex-none">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-200">
                    Editor
                  </h3>
                  <span className="text-xs text-slate-400 uppercase tracking-[0.2em]">{props.language}</span>
                </div>
                <p className="text-sm text-slate-400">
                  Start from scratch and write your full solution here.
                </p>
              </div>
              <div className="flex-1">
                <Editor
                  height="100%"
                  language={props.language}
                  value={props.codeTemplate}
                  onChange={props.setCodeTemplate}
                  theme="studio-dark"
                  beforeMount={(monaco) => {
                    monaco.editor.defineTheme('studio-dark', {
                      base: 'vs-dark',
                      inherit: true,
                      rules: [
                        { token: 'comment', foreground: '6b7280' },
                        { token: 'keyword', foreground: '38bdf8' },
                        { token: 'number', foreground: 'f59e0b' },
                        { token: 'string', foreground: 'a3e635' },
                        { token: 'type.identifier', foreground: 'e2e8f0' }
                      ],
                      colors: {
                        'editor.background': '#0b1120',
                        'editor.foreground': '#e2e8f0',
                        'editorLineNumber.foreground': '#475569',
                        'editorLineNumber.activeForeground': '#cbd5e1',
                        'editor.selectionBackground': '#1d4ed833',
                        'editor.inactiveSelectionBackground': '#33415566',
                        'editorCursor.foreground': '#38bdf8',
                        'editorLineHighlightBackground': '#111827',
                        'editorIndentGuide.background': '#1f2937',
                        'editorIndentGuide.activeBackground': '#334155'
                      }
                    })
                  }}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    automaticLayout: true,
                    folding: false,
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                    padding: { top: 16, bottom: 16 },
                    renderLineHighlight: 'all',
                    smoothScrolling: true,
                    cursorSmoothCaretAnimation: 'on'
                  }}
                />
              </div>
            </div>
    </>
  )
}

export default MainCodeEditor