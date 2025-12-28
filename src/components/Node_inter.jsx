import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is the Node.js event loop?",
    options: [
      "Thread pool",
      "Queue system",
      "Mechanism to handle async operations",
      "Garbage collector"
    ],
    answer: "Mechanism to handle async operations",
    explanation: "Event loop handles non-blocking operations."
  },
  {
    question: "Which library implements the event loop?",
    options: ["V8", "libuv", "Node core", "OS"],
    answer: "libuv",
    explanation: "libuv provides async I/O and event loop."
  },
  {
    question: "Which phase executes setTimeout callbacks?",
    options: [
      "Poll",
      "Timers",
      "Check",
      "Close"
    ],
    answer: "Timers",
    explanation: "Timers phase handles setTimeout/setInterval."
  },
  {
    question: "Which phase executes setImmediate callbacks?",
    options: [
      "Timers",
      "Poll",
      "Check",
      "Microtask"
    ],
    answer: "Check",
    explanation: "setImmediate runs in check phase."
  },
  {
    question: "Promise callbacks run in?",
    options: [
      "Timers queue",
      "Poll queue",
      "Microtask queue",
      "Check queue"
    ],
    answer: "Microtask queue",
    explanation: "Promises run before next event loop tick."
  },
  {
    question: "Which executes first?",
    options: [
      "setTimeout",
      "setImmediate",
      "Promise.then",
      "I/O callback"
    ],
    answer: "Promise.then",
    explanation: "Microtasks have highest priority."
  },
  {
    question: "What is process.nextTick?",
    options: [
      "Timer",
      "Microtask with highest priority",
      "Macro task",
      "Thread"
    ],
    answer: "Microtask with highest priority",
    explanation: "Runs before promise microtasks."
  },
  {
    question: "Overusing process.nextTick causes?",
    options: [
      "Better performance",
      "Event loop starvation",
      "Memory optimization",
      "Faster I/O"
    ],
    answer: "Event loop starvation",
    explanation: "It can block I/O execution."
  },
  {
    question: "What is libuv thread pool size by default?",
    options: ["2", "4", "8", "Unlimited"],
    answer: "4",
    explanation: "Used for async file & crypto ops."
  },
  {
    question: "Which operations use thread pool?",
    options: [
      "HTTP requests",
      "File system",
      "Timers",
      "Promises"
    ],
    answer: "File system",
    explanation: "FS operations are offloaded."
  },
  {
    question: "How to increase thread pool size?",
    options: [
      "process.env.UV_THREADPOOL_SIZE",
      "node --threads",
      "config file",
      "libuv.set()"
    ],
    answer: "process.env.UV_THREADPOOL_SIZE",
    explanation: "Environment variable controls pool."
  },
  {
    question: "What is blocking code in Node?",
    options: [
      "Async code",
      "CPU-heavy synchronous code",
      "Promises",
      "Callbacks"
    ],
    answer: "CPU-heavy synchronous code",
    explanation: "Blocks the event loop."
  },
  {
    question: "Which pattern avoids callback hell?",
    options: [
      "Nested callbacks",
      "Promises",
      "Global variables",
      "Events only"
    ],
    answer: "Promises",
    explanation: "Promises flatten async logic."
  },
  {
    question: "What does async/await improve?",
    options: [
      "Performance",
      "Readability",
      "Thread usage",
      "Security"
    ],
    answer: "Readability",
    explanation: "Async/await is syntactic sugar."
  },
  {
    question: "Async functions always return?",
    options: ["Value", "Callback", "Promise", "Boolean"],
    answer: "Promise",
    explanation: "Even returned values are wrapped."
  },
  {
    question: "Unhandled promise rejection causes?",
    options: [
      "Silent ignore",
      "Crash in newer Node versions",
      "Warning only",
      "Memory leak"
    ],
    answer: "Crash in newer Node versions",
    explanation: "Unhandled rejections terminate process."
  },
  {
    question: "How to handle unhandled rejections?",
    options: [
      "try/catch",
      ".catch()",
      "process.on('unhandledRejection')",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Multiple safe handling methods."
  },
  {
    question: "What is stream backpressure?",
    options: [
      "Slow consumer problem",
      "Memory leak",
      "Network delay",
      "Event loop block"
    ],
    answer: "Slow consumer problem",
    explanation: "Producer outpaces consumer."
  },
  {
    question: "Which method handles backpressure?",
    options: [
      "pipe()",
      "write()",
      "end()",
      "pause()"
    ],
    answer: "pipe()",
    explanation: "pipe handles flow control automatically."
  },
  {
    question: "What is duplex stream?",
    options: [
      "Read-only",
      "Write-only",
      "Read & write",
      "Transform only"
    ],
    answer: "Read & write",
    explanation: "Duplex streams support both."
  },
  {
    question: "Transform stream differs by?",
    options: [
      "Only reads",
      "Only writes",
      "Modifies data",
      "Buffers data"
    ],
    answer: "Modifies data",
    explanation: "Transforms input to output."
  },
  {
    question: "What is EventEmitter?",
    options: [
      "Thread handler",
      "Observer pattern",
      "Promise wrapper",
      "Callback handler"
    ],
    answer: "Observer pattern",
    explanation: "Implements pub-sub pattern."
  },
  {
    question: "Which method listens to events?",
    options: ["emit()", "on()", "once()", "listen()"],
    answer: "on()",
    explanation: "Registers event listener."
  },
  {
    question: "emit() does what?",
    options: [
      "Registers event",
      "Triggers event",
      "Removes event",
      "Pauses event"
    ],
    answer: "Triggers event",
    explanation: "Emits event to listeners."
  },
  {
    question: "Memory leak in EventEmitter caused by?",
    options: [
      "Too many listeners",
      "Few listeners",
      "Async code",
      "Promises"
    ],
    answer: "Too many listeners",
    explanation: "Exceeds default listener limit."
  },
  {
    question: "How to avoid EventEmitter memory leak?",
    options: [
      "Remove listeners",
      "Increase max listeners",
      "Use once()",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Proper listener management."
  },
  {
    question: "What is child_process used for?",
    options: [
      "Async I/O",
      "Run external processes",
      "Threads",
      "Events"
    ],
    answer: "Run external processes",
    explanation: "Executes system commands."
  },
  {
    question: "Which method spawns process with streams?",
    options: ["exec()", "spawn()", "fork()", "run()"],
    answer: "spawn()",
    explanation: "Efficient for large output."
  },
  {
    question: "fork() is special case of?",
    options: ["exec()", "spawn()", "cluster", "worker"],
    answer: "spawn()",
    explanation: "Fork spawns Node processes."
  },
  {
    question: "What is IPC?",
    options: [
      "Inter Process Communication",
      "Internal Process Call",
      "Immediate Promise Callback",
      "I/O Process Control"
    ],
    answer: "Inter Process Communication",
    explanation: "Allows message passing."
  },
  {
    question: "Which module enables clustering?",
    options: ["worker_threads", "cluster", "child_process", "os"],
    answer: "cluster",
    explanation: "Creates multiple Node processes."
  },
  {
    question: "Cluster improves?",
    options: [
      "Memory usage",
      "CPU utilization",
      "Async speed",
      "File access"
    ],
    answer: "CPU utilization",
    explanation: "Uses multiple cores."
  },
  {
    question: "Worker threads differ from cluster by?",
    options: [
      "Separate memory",
      "Shared memory",
      "No messaging",
      "No async"
    ],
    answer: "Shared memory",
    explanation: "Workers can share memory."
  },
  {
    question: "When to use worker_threads?",
    options: [
      "I/O tasks",
      "CPU-heavy tasks",
      "Routing",
      "Events"
    ],
    answer: "CPU-heavy tasks",
    explanation: "Offloads CPU work."
  },
  {
    question: "What is garbage collection?",
    options: [
      "Memory allocation",
      "Memory cleanup",
      "Disk cleanup",
      "Cache clear"
    ],
    answer: "Memory cleanup",
    explanation: "Frees unused memory."
  },
  {
    question: "Which engine handles GC?",
    options: ["Node", "libuv", "V8", "OS"],
    answer: "V8",
    explanation: "V8 manages memory."
  },
  {
    question: "What causes memory leaks?",
    options: [
      "Global variables",
      "Closures",
      "Uncleared timers",
      "All of these"
    ],
    answer: "All of these",
    explanation: "References prevent GC."
  },
  {
    question: "Which flag enables heap profiling?",
    options: [
      "--inspect",
      "--trace-gc",
      "--heap",
      "--memory"
    ],
    answer: "--inspect",
    explanation: "Used with Chrome DevTools."
  },
  {
    question: "What is require cache?",
    options: [
      "Module storage",
      "Memory leak",
      "Import optimization",
      "File cache"
    ],
    answer: "Module storage",
    explanation: "Modules are cached after load."
  },
  {
    question: "Clearing require cache does?",
    options: [
      "Reload module",
      "Delete file",
      "Restart server",
      "Crash app"
    ],
    answer: "Reload module",
    explanation: "Forces fresh import."
  },
  {
    question: "What is hot reload?",
    options: [
      "Restart server",
      "Reload code without restart",
      "Clear cache",
      "Kill process"
    ],
    answer: "Reload code without restart",
    explanation: "Improves dev productivity."
  },
  {
    question: "Which signal stops Node gracefully?",
    options: ["SIGKILL", "SIGSTOP", "SIGTERM", "SIGINT"],
    answer: "SIGTERM",
    explanation: "Allows cleanup before exit."
  },
  {
    question: "Which tool monitors Node process?",
    options: ["PM2", "Nodemon", "Forever", "All of these"],
    answer: "All of these",
    explanation: "Used for monitoring/restarts."
  }
];


const Node_inter = () => {
  const navigate = useNavigate();
  const TIME_LIMIT = 30;

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
              🟢 Node.js Fundamentals Quiz - Intermediate level
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

export default Node_inter;
