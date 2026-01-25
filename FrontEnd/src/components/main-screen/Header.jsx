                                                            {/* Header */}

import React from 'react'

const MainScreenHeader = (props) => {
    // const { currentQ, language, setLanguage, setCodeTemplate, runTests, loading } = props
    return (
        <>
            <header className="px-6 py-4 border-b border-gray-700 bg-[#020617]/80 backdrop-blur-sm flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        🧪 Online Compiler
                    </h1>
                    <div className="text-sm bg-blue-900/50 px-3 py-1 rounded-full font-mono">
                        Q{props.currentQ.id}: {props.currentQ.title}
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <select
                        className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-gray-700/50 transition-all text-sm"
                        value={props.language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="cpp">C++</option>
                        <option value="python">Python</option>
                        <option value="node">Node.js</option>
                        <option value="java">Java</option>
                    </select>

                    <button
                        onClick={() => setCodeTemplate(props.currentQ.languageTemplates[language] || props.currentQ.languageTemplates.cpp)}
                        className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg hover:bg-gray-600/50 transition-all backdrop-blur-sm text-sm"
                    >
                        📋 Load Template
                    </button>

                    <button
                        id="run-btn"
                        onClick={props.runTests}
                        disabled={props.loading}
                        className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all backdrop-blur-sm flex items-center gap-2 text-sm"
                    >
                        {props.loading ? (
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
        </>
    )
}

export default MainScreenHeader