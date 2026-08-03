const MainQuestionsSidebar = (props) => {
    return (
        <>
            <div className="w-64 border-r border-slate-800 flex flex-col bg-slate-950/40 backdrop-blur-sm">
                <div className="p-4 border-b border-slate-800">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Questions</h2>
                    <p className="text-xs text-slate-500 mt-2">{props.questions.length} challenges</p>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {props.questions.map((q, idx) => (
                        <button
                            key={q.id}
                            onClick={() => props.setCurrentQuestion(idx)}
                            className={`w-full p-3 rounded-xl text-left transition-all text-sm border ${props.currentQuestion === idx
                                    ? 'bg-cyan-500/10 border-cyan-400/40 shadow-lg shadow-cyan-950/30'
                                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900'
                                }`}
                        >
                            <div className="font-medium mb-1 text-slate-100">Q{q.id}</div>
                            <div className="text-xs text-slate-300 line-clamp-2">{q.title}</div>
                            <div className="text-[11px] text-slate-500 mt-2 uppercase tracking-[0.18em]">{q.testCases.length} tests</div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MainQuestionsSidebar