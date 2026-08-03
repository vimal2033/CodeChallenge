                                                            {/* Header */}

const MainScreenHeader = (props) => {
    return (
        <>
            <header className="px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl flex justify-between items-center gap-4">
                <div className="flex items-center gap-4 min-w-0">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight text-slate-50">
                            Code Challenge Studio
                        </h1>
                        <p className="text-xs text-slate-400 mt-1">Clean editor, language runner, and instant feedback.</p>
                    </div>
                    <div className="hidden sm:inline-flex text-xs uppercase tracking-[0.2em] text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full">
                        Q{props.currentQ.id} · {props.currentQ.title}
                    </div>
                </div>

                <div className="flex gap-3 items-center shrink-0">
                    <select
                        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100 outline-none hover:border-slate-500 transition-colors"
                        value={props.language}
                        onChange={(e) => props.setLanguage(e.target.value)}
                    >
                        <option value="cpp">C++</option>
                        <option value="python">Python</option>
                        <option value="node">Node.js</option>
                        <option value="java">Java</option>
                    </select>

                    <button
                        onClick={props.onResetCode}
                        className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors text-sm text-slate-100"
                    >
                        Reset
                    </button>

                    <button
                        onClick={props.runTests}
                        disabled={props.loading}
                        className="px-6 py-2 bg-slate-900 border border-cyan-700 text-cyan-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-lg transition-colors text-sm"
                    >
                        Submit
                    </button>

                    <button
                        id="run-btn"
                        onClick={props.runTests}
                        disabled={props.loading}
                        className="px-8 py-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-lg transition-colors flex items-center gap-2 text-sm"
                    >
                        {props.loading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                                Running...
                            </>
                        ) : (
                            'Run Tests'
                        )}
                    </button>
                </div>
            </header>
        </>
    )
}

export default MainScreenHeader