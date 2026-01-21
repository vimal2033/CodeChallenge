# CodeChallenge 🚀

![Demo GIF](demo.gif)

**Production-ready online coding platform** with algorithm challenges, automated test cases, and instant feedback across C++, Python, Node.js, and Java. Built with React + Monaco Editor for professional coding experience.

[![Tests](https://img.shields.io/badge/Tests-Passing-green.svg)]()
[![Languages](https://img.shields.io/badge/Languages-4-blue.svg)]()
[![Deployed](https://img.shields.io/badge/Deployed-Live-orange.svg)]()

## ✨ **Features**

| Feature | Description |
|---------|-------------|
| **🎯 Algorithm Challenges** | Classic problems (Square, Factorial, Prime, Fibonacci, GCD, etc.) |
| **🧪 Automated Testing** | Multiple test cases per problem with edge cases |
| **🔥 Multi-Language** | C++ (default), Python, Node.js, Java |
| **✏️ Monaco Editor** | VS Code-like experience with syntax highlighting |
| **✅ Real-time Validation** | Instant compilation + execution feedback |
| **🔍 Syntax Errors** | Detailed compiler error messages |
| **⏱️ Performance** | Test execution timing |
| **🎨 Dark UI** | Responsive, modern interface |

Browse Challenges (Sidebar)

Load Template → Write Solution

Click "Run Tests" → See Results

ALL GREEN ✅ → Next Challenge!


```mermaid
graph TD
    A[Pick Challenge] --> B[Load Template]
    B --> C[Write Solution]
    C --> D[Run Tests]
    D --> E{All Pass?}
    E -->|✅ Yes| F[Next Challenge]
    E -->|❌ No| G[Debug Errors]
    G --> C


🛠️ Tech Stack

Frontend:  React 18 + Vite + Monaco Editor + Tailwind CSS
Backend:   Node.js + Express + compile-run
Deployment: Vercel (FE) + Railway/Render (BE)


🚀 Quick Start
Backend (Port 4000)

cd backend
npm install
npm start
# http://localhost:4000/api/health ✅


Frontend (Port 5173)

cd frontend
npm install
npm run dev
# http://localhost:5173 ✅


📁 Project Structure

```
codechallenge/
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main app
│   │   └── data/questions.js # Challenges
│   └── package.json
├── backend/
│   └── index.js             # Express server
├── screenshots/             # Demo images
└── README.md
```

## 🎮 **How It Works**

