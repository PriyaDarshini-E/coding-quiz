import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is Node.js?",
    options: [
      "JavaScript framework",
      "JavaScript runtime",
      "Browser",
      "Database"
    ],
    answer: "JavaScript runtime",
    explanation: "Node.js runs JavaScript outside the browser."
  },
  {
    question: "Node.js is built on which engine?",
    options: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"],
    answer: "V8",
    explanation: "Google’s V8 engine powers Node.js."
  },
  {
    question: "Node.js is ___ threaded.",
    options: ["Multi", "Single", "Dual", "Quad"],
    answer: "Single",
    explanation: "Node uses a single-threaded event loop."
  },
  {
    question: "Node.js handles concurrency using?",
    options: [
      "Threads",
      "Event loop",
      "Processes",
      "Workers only"
    ],
    answer: "Event loop",
    explanation: "Event loop enables non-blocking I/O."
  },
  {
    question: "Which type of I/O does Node.js use?",
    options: [
      "Blocking",
      "Non-blocking",
      "Synchronous",
      "Sequential"
    ],
    answer: "Non-blocking",
    explanation: "Allows handling many requests efficiently."
  },
  {
    question: "Which command checks Node version?",
    options: ["node -v", "npm -v", "node --check", "version node"],
    answer: "node -v",
    explanation: "Displays installed Node version."
  },
  {
    question: "Which file initializes Node project?",
    options: ["index.js", "server.js", "package.json", "app.js"],
    answer: "package.json",
    explanation: "Holds project metadata and dependencies."
  },
  {
    question: "Which command initializes a project?",
    options: ["npm start", "npm init", "node init", "npm create"],
    answer: "npm init",
    explanation: "Creates package.json file."
  },
  {
    question: "Which tool manages Node packages?",
    options: ["Node", "NPM", "Yarn", "Both NPM & Yarn"],
    answer: "Both NPM & Yarn",
    explanation: "Both manage dependencies."
  },
  {
    question: "Which folder stores dependencies?",
    options: ["src", "lib", "node_modules", "packages"],
    answer: "node_modules",
    explanation: "Contains installed packages."
  },
  {
    question: "Which keyword exports module?",
    options: ["export", "module.exports", "exports()", "require"],
    answer: "module.exports",
    explanation: "Exports module in CommonJS."
  },
  {
    question: "Which keyword imports module?",
    options: ["import", "include", "require", "load"],
    answer: "require",
    explanation: "Imports CommonJS module."
  },
  {
    question: "Which module is built-in?",
    options: ["fs", "axios", "express", "mongoose"],
    answer: "fs",
    explanation: "fs is core Node module."
  },
  {
    question: "Which module handles file system?",
    options: ["http", "fs", "path", "os"],
    answer: "fs",
    explanation: "fs reads/writes files."
  },
  {
    question: "Which module creates web server?",
    options: ["fs", "net", "http", "url"],
    answer: "http",
    explanation: "http module creates servers."
  },
  {
    question: "Which method starts HTTP server?",
    options: ["start()", "run()", "listen()", "open()"],
    answer: "listen()",
    explanation: "listen() binds server to port."
  },
  {
    question: "What is callback?",
    options: [
      "Function passed as argument",
      "Return value",
      "Promise",
      "Event"
    ],
    answer: "Function passed as argument",
    explanation: "Callbacks execute after task completion."
  },
  {
    question: "Callback problem is known as?",
    options: [
      "Callback hell",
      "Promise chain",
      "Deadlock",
      "Starvation"
    ],
    answer: "Callback hell",
    explanation: "Nested callbacks reduce readability."
  },
  {
    question: "Which solves callback hell?",
    options: ["Loops", "Promises", "Events", "Buffers"],
    answer: "Promises",
    explanation: "Promises flatten async flow."
  },
  {
    question: "Which keyword handles promise result?",
    options: ["then()", "catch()", "await", "All of these"],
    answer: "All of these",
    explanation: "Promises can be consumed multiple ways."
  },
  {
    question: "Which keyword pauses async execution?",
    options: ["pause", "stop", "await", "yield"],
    answer: "await",
    explanation: "await waits for promise resolution."
  },
  {
    question: "Which function marks async function?",
    options: ["async", "await", "promise", "defer"],
    answer: "async",
    explanation: "async enables await usage."
  },
  {
    question: "What is REPL?",
    options: [
      "Runtime Environment",
      "Read Eval Print Loop",
      "Request Event Process Loop",
      "Remote Execution Layer"
    ],
    answer: "Read Eval Print Loop",
    explanation: "Interactive Node shell."
  },
  {
    question: "Which command opens REPL?",
    options: ["node", "npm", "repl", "node repl"],
    answer: "node",
    explanation: "Typing node opens REPL."
  },
  {
    question: "Which module handles paths?",
    options: ["fs", "path", "os", "url"],
    answer: "path",
    explanation: "path handles file paths."
  },
  {
    question: "__dirname represents?",
    options: [
      "File name",
      "Directory path",
      "URL",
      "Module name"
    ],
    answer: "Directory path",
    explanation: "Gives current directory."
  },
  {
    question: "__filename represents?",
    options: [
      "Directory",
      "File path",
      "URL",
      "Module"
    ],
    answer: "File path",
    explanation: "Gives current file path."
  },
  {
    question: "Which module gives OS info?",
    options: ["os", "process", "system", "env"],
    answer: "os",
    explanation: "Provides OS-level information."
  },
  {
    question: "process object is?",
    options: [
      "Global",
      "Local",
      "Module",
      "External"
    ],
    answer: "Global",
    explanation: "Available globally in Node."
  },
  {
    question: "Which property stores env variables?",
    options: ["process.config", "process.env", "process.vars", "process.data"],
    answer: "process.env",
    explanation: "Stores environment variables."
  },
  {
    question: "Which event emitted when Node exits?",
    options: ["close", "exit", "end", "terminate"],
    answer: "exit",
    explanation: "exit event fires on process exit."
  },
  {
    question: "What is buffer used for?",
    options: [
      "Store text",
      "Handle binary data",
      "Cache data",
      "Encrypt data"
    ],
    answer: "Handle binary data",
    explanation: "Buffers manage raw binary streams."
  },
  {
    question: "Which API creates buffer?",
    options: ["Buffer.alloc()", "new Buffer()", "createBuffer()", "All"],
    answer: "Buffer.alloc()",
    explanation: "Safe buffer creation."
  },
  {
    question: "Streams are used for?",
    options: [
      "Large data handling",
      "Small files",
      "State",
      "Routing"
    ],
    answer: "Large data handling",
    explanation: "Streams handle data in chunks."
  },
  {
    question: "Which stream type reads data?",
    options: ["Writable", "Readable", "Duplex", "Transform"],
    answer: "Readable",
    explanation: "Readable streams read data."
  },
  {
    question: "Which stream writes data?",
    options: ["Readable", "Writable", "ReadableWritable", "Transform"],
    answer: "Writable",
    explanation: "Writable streams write data."
  },
  {
    question: "Which stream modifies data?",
    options: ["Readable", "Writable", "Duplex", "Transform"],
    answer: "Transform",
    explanation: "Transform streams modify data."
  },
  {
    question: "Node.js best suited for?",
    options: [
      "CPU heavy apps",
      "I/O intensive apps",
      "Desktop apps",
      "Games"
    ],
    answer: "I/O intensive apps",
    explanation: "Non-blocking I/O shines here."
  },
  {
    question: "Node.js is commonly used for?",
    options: [
      "APIs",
      "Real-time apps",
      "Streaming",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Node supports many use cases."
  },
  {
    question: "Biggest Node.js advantage?",
    options: [
      "Multi-threading",
      "Same language frontend/backend",
      "Strong typing",
      "Built-in ORM"
    ],
    answer: "Same language frontend/backend",
    explanation: "JS everywhere improves productivity."
  },
  {
    question: "Biggest Node.js drawback?",
    options: [
      "Slow I/O",
      "CPU blocking",
      "No async",
      "No libraries"
    ],
    answer: "CPU blocking",
    explanation: "CPU-heavy tasks block event loop."
  }
];


const Node_begin = () => {
  const navigate = useNavigate();
  const TIME_LIMIT = 45;

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [timer, setTimer] = useState(TIME_LIMIT);
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  /* ===== LOAD QUIZ ===== */
  useEffect(() => {
    const shuffled = [...allQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20);

    setQuestions(shuffled);
    setCurrent(0);
    setTimer(TIME_LIMIT);
  }, []);

  /* ===== TIMER ===== */
  useEffect(() => {
    if (selected || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, selected]);

  useEffect(() => {
    if (timer === 0) setShowPopup(true);
  }, [timer]);

  if (questions.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-bold">
        Loading Quiz...
      </div>
    );
  }

  const q = questions[current];

  /* ===== HANDLE ANSWER ===== */
  const handleAnswer = (opt) => {
    setSelected(opt);
    if (opt === q.answer) setScore((prev) => prev + 1);
    setShowPopup(true);
  };

  /* ===== NEXT QUESTION ===== */
  const handleNext = () => {
    setSelected(null);
    setShowPopup(false);
    setTimer(TIME_LIMIT);

    if (current < questions.length - 1) {
      setCurrent((p) => p + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6">

        {/* HEADER */}
        <div className="w-full h-16 bg-linear-to-r from-teal-600 to-cyan-500 
        flex items-center justify-center px-10 shadow-md relative">

          <button
            className="absolute left-10 w-32 h-10 border border-white/40 text-white
            rounded-lg text-sm font-semibold hover:bg-white hover:text-teal-600"
            onClick={() => navigate("/node")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
              🟢 Node.js Fundamentals Quiz - Beginner level
          </header>
        </div>

        {/* QUESTION CARD */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4">

          <div className="flex justify-between text-sm font-semibold text-slate-600">
            <span>Question {current + 1} / 20</span>
            <span>⏱ {timer}s</span>
          </div>

          <h2 className="text-lg font-bold">{q.question}</h2>

          {q.options.map((opt, i) => (
            <button
              key={i}
              disabled={selected}
              onClick={() => handleAnswer(opt)}
              className={`w-full p-2 rounded-lg border text-left
                ${
                  selected
                    ? opt === q.answer
                      ? "bg-green-200"
                      : opt === selected
                      ? "bg-red-200"
                      : "opacity-60"
                    : "hover:bg-slate-100"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* EXPLANATION POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80 text-center">
            <p className="font-bold mb-2">Correct Answer:</p>
            <p className="mb-4">{q.answer}</p>
            <p className="text-sm mb-4">{q.explanation}</p>
            <button
              onClick={handleNext}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* FINAL REVIEW POPUP */}
      {showResult && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-80 text-center">
            <h2 className="text-2xl font-extrabold text-teal-600 mb-4">
              🎉 Quiz Completed!
            </h2>

            <p>Total Questions: 20</p>
            <p>Correct Answers: {score}</p>
            <p>Wrong Answers: {20 - score}</p>

            <p className="font-bold mt-2">
              Score: {score} / 20
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-teal-600 text-white py-2 rounded-lg"
              >
                Restart
              </button>

              <button
                onClick={() => navigate("/node")}
                className="flex-1 border py-2 rounded-lg"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Node_begin;
