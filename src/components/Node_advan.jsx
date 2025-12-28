import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is the biggest bottleneck in Node.js architecture?",
    options: [
      "Memory",
      "Single-threaded event loop",
      "Garbage collection",
      "Network latency"
    ],
    answer: "Single-threaded event loop",
    explanation: "CPU-heavy sync code blocks all requests."
  },
  {
    question: "Which Node feature helps avoid event loop blocking?",
    options: [
      "Promises",
      "Worker Threads",
      "Callbacks",
      "Streams"
    ],
    answer: "Worker Threads",
    explanation: "Offloads CPU-intensive tasks."
  },
  {
    question: "Worker threads share?",
    options: [
      "Nothing",
      "Event loop",
      "Memory",
      "Process ID"
    ],
    answer: "Memory",
    explanation: "Workers can share memory via SharedArrayBuffer."
  },
  {
    question: "Cluster processes share?",
    options: [
      "Memory",
      "Event loop",
      "Nothing",
      "Heap"
    ],
    answer: "Nothing",
    explanation: "Each process has its own memory space."
  },
  {
    question: "Which module gives true multi-core scaling?",
    options: ["cluster", "worker_threads", "child_process", "os"],
    answer: "cluster",
    explanation: "Uses multiple Node processes."
  },
  {
    question: "Why cluster alone is not enough in production?",
    options: [
      "Memory leaks",
      "Sticky sessions",
      "CPU limits",
      "Slow startup"
    ],
    answer: "Sticky sessions",
    explanation: "Sessions get tied to a single worker."
  },
  {
    question: "Best solution for sticky session problem?",
    options: [
      "Cookies",
      "JWT",
      "Redis",
      "MemoryStore"
    ],
    answer: "Redis",
    explanation: "Centralized session storage."
  },
  {
    question: "What does PM2 cluster mode do?",
    options: [
      "Creates threads",
      "Creates worker processes",
      "Optimizes code",
      "Improves async"
    ],
    answer: "Creates worker processes",
    explanation: "Runs multiple Node instances."
  },
  {
    question: "Zero-downtime reload is achieved by?",
    options: [
      "Restart",
      "Kill process",
      "Graceful reload",
      "Crash recovery"
    ],
    answer: "Graceful reload",
    explanation: "Finish requests before shutdown."
  },
  {
    question: "Which signal is used for graceful shutdown?",
    options: ["SIGKILL", "SIGSTOP", "SIGTERM", "SIGPIPE"],
    answer: "SIGTERM",
    explanation: "Allows cleanup before exit."
  },
  {
    question: "What happens if SIGKILL is sent?",
    options: [
      "Cleanup runs",
      "Event loop finishes",
      "Immediate termination",
      "Graceful stop"
    ],
    answer: "Immediate termination",
    explanation: "Cannot be intercepted."
  },
  {
    question: "What is event loop starvation?",
    options: [
      "Slow I/O",
      "Too many promises",
      "Blocking microtasks",
      "CPU idle"
    ],
    answer: "Blocking microtasks",
    explanation: "nextTick / microtasks prevent I/O."
  },
  {
    question: "Which API can cause starvation if abused?",
    options: ["setTimeout", "setImmediate", "process.nextTick", "fs.readFile"],
    answer: "process.nextTick",
    explanation: "Runs before I/O repeatedly."
  },
  {
    question: "Which queue has highest priority?",
    options: [
      "Timers",
      "I/O",
      "Microtask",
      "Check"
    ],
    answer: "Microtask",
    explanation: "Executes before next loop phase."
  },
  {
    question: "What is backpressure in Node streams?",
    options: [
      "Memory leak",
      "Slow producer",
      "Slow consumer",
      "Network delay"
    ],
    answer: "Slow consumer",
    explanation: "Consumer can't keep up."
  },
  {
    question: "How does Node handle backpressure?",
    options: [
      "Pause/resume",
      "pipe()",
      "Drain event",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Flow control mechanisms."
  },
  {
    question: "Which method indicates writable stream is full?",
    options: [
      "write() returns true",
      "write() returns false",
      "end()",
      "pause()"
    ],
    answer: "write() returns false",
    explanation: "Signals to stop writing."
  },
  {
    question: "Which event resumes writable stream?",
    options: ["resume", "ready", "drain", "flush"],
    answer: "drain",
    explanation: "Safe to resume writes."
  },
  {
    question: "What is memory leak indicator?",
    options: [
      "CPU usage",
      "Increasing heap",
      "Slow logs",
      "Network errors"
    ],
    answer: "Increasing heap",
    explanation: "Heap never released."
  },
  {
    question: "Which tool inspects heap snapshots?",
    options: ["Chrome DevTools", "PM2", "Nodemon", "Morgan"],
    answer: "Chrome DevTools",
    explanation: "Analyze memory leaks."
  },
  {
    question: "Which flag traces garbage collection?",
    options: ["--inspect", "--trace-gc", "--gc", "--memory"],
    answer: "--trace-gc",
    explanation: "Logs GC activity."
  },
  {
    question: "What causes memory leaks most often?",
    options: [
      "Closures",
      "Global references",
      "Event listeners",
      "All of these"
    ],
    answer: "All of these",
    explanation: "References prevent GC."
  },
  {
    question: "What is V8 heap limit (~64-bit)?",
    options: ["512MB", "1.4GB", "4GB", "8GB"],
    answer: "1.4GB",
    explanation: "Default old-space limit."
  },
  {
    question: "How to increase heap size?",
    options: [
      "--max-old-space-size",
      "--heap-size",
      "--memory",
      "--gc"
    ],
    answer: "--max-old-space-size",
    explanation: "Allows larger heap."
  },
  {
    question: "Why increasing heap is not always solution?",
    options: [
      "GC pauses",
      "Hides leaks",
      "Slower performance",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Proper fix is required."
  },
  {
    question: "What is require cache problem?",
    options: [
      "Memory leak",
      "Stale code",
      "Unexpected behavior",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Modules loaded once."
  },
  {
    question: "Which security issue affects Node apps most?",
    options: [
      "XSS",
      "Prototype pollution",
      "CSRF",
      "DDOS"
    ],
    answer: "Prototype pollution",
    explanation: "Alters object prototypes."
  },
  {
    question: "How to prevent prototype pollution?",
    options: [
      "Object.freeze",
      "Input validation",
      "Safe object creation",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Defense in depth."
  },
  {
    question: "Which attack targets Node event loop?",
    options: ["SQL Injection", "XSS", "ReDoS", "CSRF"],
    answer: "ReDoS",
    explanation: "Regex backtracking blocks CPU."
  },
  {
    question: "How to prevent ReDoS?",
    options: [
      "Avoid unsafe regex",
      "Timeouts",
      "Validation",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Regex safety is critical."
  },
  {
    question: "What is sandboxing?",
    options: [
      "Isolation of execution",
      "Encryption",
      "Authentication",
      "Validation"
    ],
    answer: "Isolation of execution",
    explanation: "Limits damage from untrusted code."
  },
  {
    question: "Which API runs code in sandbox?",
    options: ["vm", "cluster", "worker", "child_process"],
    answer: "vm",
    explanation: "Executes code in isolated context."
  },
  {
    question: "Why vm is not fully secure?",
    options: [
      "Shared memory",
      "Escape vulnerabilities",
      "Slow execution",
      "Deprecated"
    ],
    answer: "Escape vulnerabilities",
    explanation: "Not for untrusted user code."
  },
  {
    question: "Which logging style is recommended?",
    options: [
      "console.log",
      "Plain text",
      "Structured JSON logs",
      "No logs"
    ],
    answer: "Structured JSON logs",
    explanation: "Machine-readable logs."
  },
  {
    question: "Which metric indicates Node health?",
    options: [
      "Event loop lag",
      "Heap usage",
      "CPU load",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Holistic monitoring."
  },
  {
    question: "What is event loop lag?",
    options: [
      "Slow network",
      "Delayed task execution",
      "CPU idle",
      "GC time"
    ],
    answer: "Delayed task execution",
    explanation: "Measures responsiveness."
  },
  {
    question: "Which tool measures event loop lag?",
    options: ["clinic.js", "PM2", "nodemon", "eslint"],
    answer: "clinic.js",
    explanation: "Diagnoses performance."
  },
  {
    question: "What is horizontal scaling?",
    options: [
      "More memory",
      "More CPU",
      "More instances",
      "Faster code"
    ],
    answer: "More instances",
    explanation: "Scale by adding servers."
  },
  {
    question: "Node apps scale best when?",
    options: [
      "Stateful",
      "Stateless",
      "Session-based",
      "Memory-heavy"
    ],
    answer: "Stateless",
    explanation: "Easier horizontal scaling."
  },
  {
    question: "Why Node fits microservices well?",
    options: [
      "Lightweight",
      "Fast startup",
      "Async I/O",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Ideal for distributed systems."
  },
  {
    question: "Biggest production mistake in Node?",
    options: [
      "No monitoring",
      "Blocking code",
      "Memory leaks",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Any can crash production."
  }
];

const Node_advan = () => {
  const navigate = useNavigate();
  const TIME_LIMIT = 15;

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
              🟢 Node.js Fundamentals Quiz - Advance level
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

export default Node_advan;
