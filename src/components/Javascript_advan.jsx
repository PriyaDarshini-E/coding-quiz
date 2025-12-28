import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions   = [
  {
    question: "What is the JavaScript execution context?",
    options: [
      "Memory only",
      "Code execution environment",
      "Call stack",
      "Event loop"
    ],
    answer: "Code execution environment",
    explanation: "Execution context manages scope, variables, and this."
  },
  {
    question: "How many execution contexts are created for a JS program?",
    options: [
      "One",
      "Two",
      "Multiple",
      "Depends on functions"
    ],
    answer: "Multiple",
    explanation: "Global and one per function invocation."
  },
  {
    question: "What does the call stack store?",
    options: [
      "Variables",
      "Execution contexts",
      "Promises",
      "Events"
    ],
    answer: "Execution contexts",
    explanation: "Call stack tracks function execution order."
  },
  {
    question: "What causes stack overflow?",
    options: [
      "Large arrays",
      "Too many callbacks",
      "Infinite recursion",
      "Memory leak"
    ],
    answer: "Infinite recursion",
    explanation: "Excessive function calls exhaust stack."
  },
  {
    question: "What is the heap used for?",
    options: [
      "Primitive values",
      "Function calls",
      "Dynamic memory allocation",
      "Scope storage"
    ],
    answer: "Dynamic memory allocation",
    explanation: "Objects are stored in heap memory."
  },
  {
    question: "What is garbage collection?",
    options: [
      "Deleting variables manually",
      "Freeing unused memory",
      "Clearing call stack",
      "Optimizing code"
    ],
    answer: "Freeing unused memory",
    explanation: "GC removes unreachable objects."
  },
  {
    question: "Which GC algorithm is used in modern JS engines?",
    options: [
      "Reference counting",
      "Mark and sweep",
      "Stop and copy",
      "Manual"
    ],
    answer: "Mark and sweep",
    explanation: "GC marks reachable objects, sweeps rest."
  },
  {
    question: "What causes memory leaks in JavaScript?",
    options: [
      "Closures",
      "Unused variables",
      "Detached DOM nodes",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Improper references prevent GC."
  },
  {
    question: "What is lexical environment?",
    options: [
      "Block scope",
      "Variable environment",
      "Scope chain data structure",
      "Call stack"
    ],
    answer: "Scope chain data structure",
    explanation: "Lexical environment stores identifiers."
  },
  {
    question: "What forms the scope chain?",
    options: [
      "Call stack",
      "Lexical environments",
      "Heap objects",
      "Closures"
    ],
    answer: "Lexical environments",
    explanation: "Scope chain links lexical environments."
  },
  {
    question: "What is tail call optimization?",
    options: [
      "Async optimization",
      "Reducing recursion stack",
      "Promise chaining",
      "Event optimization"
    ],
    answer: "Reducing recursion stack",
    explanation: "Reuses stack frame for tail calls."
  },
  {
    question: "Is tail call optimization widely supported?",
    options: [
      "Yes",
      "No",
      "Only in browsers",
      "Only in Node"
    ],
    answer: "No",
    explanation: "Limited or disabled in most engines."
  },
  {
    question: "What is the purpose of WeakMap?",
    options: [
      "Strong references",
      "Prevent garbage collection",
      "Allow garbage collection",
      "Improve performance"
    ],
    answer: "Allow garbage collection",
    explanation: "Keys are weakly referenced."
  },
  {
    question: "When should WeakSet be used?",
    options: [
      "Storing primitives",
      "Tracking object existence",
      "Iterating values",
      "Storing keys"
    ],
    answer: "Tracking object existence",
    explanation: "WeakSet holds weak object references."
  },
  {
    question: "What is the difference between Map and Object?",
    options: [
      "No difference",
      "Map keys can be any type",
      "Object is iterable",
      "Map is slower"
    ],
    answer: "Map keys can be any type",
    explanation: "Map allows non-string keys."
  },
  {
    question: "What does Object.create(null) do?",
    options: [
      "Creates empty object",
      "Creates object without prototype",
      "Creates frozen object",
      "Creates sealed object"
    ],
    answer: "Creates object without prototype",
    explanation: "No inherited properties."
  },
  {
    question: "What is shadowing in JavaScript?",
    options: [
      "Overwriting global variables",
      "Same variable name in inner scope",
      "Memory leak",
      "Prototype override"
    ],
    answer: "Same variable name in inner scope",
    explanation: "Inner variable shadows outer one."
  },
  {
    question: "What is function currying?",
    options: [
      "Calling function once",
      "Breaking function into unary functions",
      "Memoization",
      "Partial execution"
    ],
    answer: "Breaking function into unary functions",
    explanation: "Transforms f(a,b) → f(a)(b)."
  },
  {
    question: "What is memoization?",
    options: [
      "Caching results",
      "Optimizing loops",
      "Async execution",
      "Garbage collection"
    ],
    answer: "Caching results",
    explanation: "Stores function results for reuse."
  },
  {
    question: "What is throttling?",
    options: [
      "Delaying execution",
      "Limiting execution rate",
      "Stopping execution",
      "Batch processing"
    ],
    answer: "Limiting execution rate",
    explanation: "Executes at fixed intervals."
  },
  {
    question: "What is debouncing?",
    options: [
      "Limiting rate",
      "Executing after delay",
      "Stopping execution",
      "Repeating execution"
    ],
    answer: "Executing after delay",
    explanation: "Executes after inactivity."
  },
  {
    question: "Which is better for scroll events?",
    options: [
      "Debounce",
      "Throttle",
      "Promise",
      "Async"
    ],
    answer: "Throttle",
    explanation: "Scroll events fire frequently."
  },
  {
    question: "What is idempotent function?",
    options: [
      "Always async",
      "Same result on multiple calls",
      "Returns promise",
      "Pure function only"
    ],
    answer: "Same result on multiple calls",
    explanation: "Repeated calls have same effect."
  },
  {
    question: "What is a pure function?",
    options: [
      "Uses global state",
      "Has side effects",
      "Deterministic output",
      "Async only"
    ],
    answer: "Deterministic output",
    explanation: "No side effects, same input → output."
  },
  {
    question: "What is referential transparency?",
    options: [
      "Object comparison",
      "Function purity",
      "Variable scope",
      "Prototype access"
    ],
    answer: "Function purity",
    explanation: "Expression can be replaced with its value."
  },
  {
    question: "What does Object.is() handle differently?",
    options: [
      "+0 and -0",
      "NaN comparison",
      "Type coercion",
      "Deep equality"
    ],
    answer: "NaN comparison",
    explanation: "Object.is(NaN, NaN) is true."
  },
  {
    question: "Which equality check is safest?",
    options: [
      "==",
      "===",
      "Object.is",
      "JSON.stringify"
    ],
    answer: "Object.is",
    explanation: "Handles edge cases correctly."
  },
  {
    question: "What is a generator function?",
    options: [
      "Async function",
      "Function that yields values",
      "Recursive function",
      "Promise-based function"
    ],
    answer: "Function that yields values",
    explanation: "Uses function* and yield."
  },
  {
    question: "What does yield do?",
    options: [
      "Stops function",
      "Pauses execution",
      "Returns value",
      "Throws error"
    ],
    answer: "Pauses execution",
    explanation: "Pauses and resumes generator."
  },
  {
    question: "What is an iterator?",
    options: [
      "Loop",
      "Object with next()",
      "Array method",
      "Promise"
    ],
    answer: "Object with next()",
    explanation: "Implements iteration protocol."
  },
  {
    question: "What protocol enables for...of?",
    options: [
      "Iterable protocol",
      "Async protocol",
      "Generator protocol",
      "Loop protocol"
    ],
    answer: "Iterable protocol",
    explanation: "Uses Symbol.iterator."
  },
  {
    question: "What is Symbol used for?",
    options: [
      "Private keys",
      "Unique identifiers",
      "Async operations",
      "Memory optimization"
    ],
    answer: "Unique identifiers",
    explanation: "Symbols avoid property collisions."
  },
  {
    question: "What is Reflect API?",
    options: [
      "Math API",
      "Proxy helper",
      "DOM API",
      "Async API"
    ],
    answer: "Proxy helper",
    explanation: "Reflect mirrors object operations."
  },
  {
    question: "What is Proxy used for?",
    options: [
      "Async handling",
      "Intercept operations",
      "Memory control",
      "Inheritance"
    ],
    answer: "Intercept operations",
    explanation: "Proxy traps object behavior."
  },
  {
    question: "What is tree shaking?",
    options: [
      "Removing unused CSS",
      "Removing unused JS exports",
      "Code splitting",
      "Minification"
    ],
    answer: "Removing unused JS exports",
    explanation: "Eliminates dead code."
  },
  {
    question: "Which module system supports tree shaking best?",
    options: [
      "CommonJS",
      "AMD",
      "ES Modules",
      "UMD"
    ],
    answer: "ES Modules",
    explanation: "Static imports enable analysis."
  },
  {
    question: "What does dynamic import return?",
    options: [
      "Module",
      "Object",
      "Promise",
      "Function"
    ],
    answer: "Promise",
    explanation: "Loads module asynchronously."
  },
  {
    question: "What is code splitting?",
    options: [
      "Splitting functions",
      "Splitting bundles",
      "Splitting loops",
      "Splitting files"
    ],
    answer: "Splitting bundles",
    explanation: "Loads code on demand."
  },
  {
    question: "What is hydration in JS frameworks?",
    options: [
      "Rendering HTML",
      "Attaching event listeners",
      "Fetching data",
      "Building DOM"
    ],
    answer: "Attaching event listeners",
    explanation: "Hydration adds interactivity to SSR HTML."
  },
  {
    question: "What is the cost of excessive closures?",
    options: [
      "CPU usage",
      "Memory retention",
      "Slower loops",
      "Stack overflow"
    ],
    answer: "Memory retention",
    explanation: "Closures keep references alive."
  },
  {
    question: "Which practice improves JS performance?",
    options: [
      "Deep recursion",
      "Avoid global variables",
      "Frequent DOM access",
      "Inline event handlers"
    ],
    answer: "Avoid global variables",
    explanation: "Reduces lookup cost and leaks."
  },
  {
    question: "Which API batches DOM updates?",
    options: [
      "setTimeout",
      "requestAnimationFrame",
      "Promise",
      "MutationObserver"
    ],
    answer: "requestAnimationFrame",
    explanation: "Syncs updates with repaint."
  },
  {
    question: "Which API observes DOM changes?",
    options: [
      "IntersectionObserver",
      "ResizeObserver",
      "MutationObserver",
      "PerformanceObserver"
    ],
    answer: "MutationObserver",
    explanation: "Watches DOM mutations."
  },
  {
    question: "Which API detects element visibility?",
    options: [
      "MutationObserver",
      "ResizeObserver",
      "IntersectionObserver",
      "VisibilityAPI"
    ],
    answer: "IntersectionObserver",
    explanation: "Detects viewport intersection."
  },
  {
    question: "Which API measures performance metrics?",
    options: [
      "Timing API",
      "PerformanceObserver",
      "Console API",
      "Profiler"
    ],
    answer: "PerformanceObserver",
    explanation: "Observes performance entries."
  },
  {
    question: "What is the biggest JS interview red flag?",
    options: [
      "Not knowing syntax",
      "Overusing frameworks",
      "Ignoring fundamentals",
      "Avoiding async"
    ],
    answer: "Ignoring fundamentals",
    explanation: "Strong JS fundamentals matter most."
  }
];


const Javascript_advan = () => {
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
            onClick={() => navigate("/javascript")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            ⚡ JavaScript Fundamentals Quiz - Advance level
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
                onClick={() => navigate("/javascript")}
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

export default Javascript_advan;
