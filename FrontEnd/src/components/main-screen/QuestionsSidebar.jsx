                                                         {/* Questions Sidebar */}

import React from 'react'

const MainQuestionsSidebar = (props) => {
    // const { questions, currentQuestion, setCurrentQuestion } = props;
    return (
        <>
            <div className="w-64 border-r border-gray-700 flex flex-col bg-[#020617]/50 backdrop-blur-sm">
                <div className="p-4 border-b border-gray-700">
                    <h2 className="text-lg font-bold text-purple-400">📚 Questions ({props.questions.length})</h2>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {props.questions.map((q, idx) => (
                        <button
                            key={q.id}
                            onClick={() => props.setCurrentQuestion(idx)}
                            className={`w-full p-3 rounded-xl text-left transition-all text-sm ${props.currentQuestion === idx
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
        </>
    )
}

export default MainQuestionsSidebar