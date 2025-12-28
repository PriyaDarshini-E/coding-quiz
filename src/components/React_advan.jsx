import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is React Fiber?",
    options: [
      "Rendering engine",
      "Reconciliation algorithm",
      "State manager",
      "Compiler"
    ],
    answer: "Reconciliation algorithm",
    explanation: "Fiber enables incremental rendering."
  },
  {
    question: "Main goal of React Fiber?",
    options: [
      "Reduce bundle size",
      "Enable interruptible rendering",
      "Remove virtual DOM",
      "Improve SEO"
    ],
    answer: "Enable interruptible rendering",
    explanation: "Allows prioritizing updates."
  },
  {
    question: "What does concurrent rendering allow?",
    options: [
      "Multi-threaded DOM",
      "Pausing and resuming rendering",
      "Faster API calls",
      "Parallel state"
    ],
    answer: "Pausing and resuming rendering",
    explanation: "Improves responsiveness."
  },
  {
    question: "Which React version introduced concurrent features?",
    options: ["16", "17", "18", "15"],
    answer: "18",
    explanation: "React 18 added concurrent features."
  },
  {
    question: "What is startTransition used for?",
    options: [
      "Urgent updates",
      "Non-urgent updates",
      "State reset",
      "Side effects"
    ],
    answer: "Non-urgent updates",
    explanation: "Marks updates as low priority."
  },
  {
    question: "Difference between useTransition and startTransition?",
    options: [
      "Same",
      "Hook vs function",
      "Sync vs async",
      "Blocking vs non-blocking"
    ],
    answer: "Hook vs function",
    explanation: "useTransition is a hook wrapper."
  },
  {
    question: "What is Suspense primarily used for?",
    options: [
      "Error handling",
      "Data fetching",
      "Lazy loading",
      "Routing"
    ],
    answer: "Lazy loading",
    explanation: "Suspense handles loading states."
  },
  {
    question: "Can Suspense handle data fetching?",
    options: ["Yes", "No", "Only with libraries", "Deprecated"],
    answer: "Only with libraries",
    explanation: "Requires compatible data libraries."
  },
  {
    question: "What is selective hydration?",
    options: [
      "Partial DOM hydration",
      "Server rendering",
      "Static rendering",
      "Client-only rendering"
    ],
    answer: "Partial DOM hydration",
    explanation: "Hydrates interactive parts first."
  },
  {
    question: "Which feature improves Time To Interactive?",
    options: [
      "Suspense",
      "Selective hydration",
      "useMemo",
      "Fragments"
    ],
    answer: "Selective hydration",
    explanation: "Prioritizes critical UI."
  },
  {
    question: "What is server-side rendering (SSR)?",
    options: [
      "Rendering on client",
      "Rendering on server",
      "Static rendering",
      "Hydration"
    ],
    answer: "Rendering on server",
    explanation: "HTML generated on server."
  },
  {
    question: "SSR advantage?",
    options: [
      "Lower memory",
      "Better SEO & initial load",
      "Smaller bundle",
      "Less JS"
    ],
    answer: "Better SEO & initial load",
    explanation: "Search engines see rendered HTML."
  },
  {
    question: "SSR downside?",
    options: [
      "Slower TTI",
      "Complex setup",
      "Server load",
      "All of these"
    ],
    answer: "All of these",
    explanation: "SSR increases complexity."
  },
  {
    question: "What is hydration?",
    options: [
      "Re-rendering DOM",
      "Attaching event handlers",
      "Rebuilding UI",
      "Loading CSS"
    ],
    answer: "Attaching event handlers",
    explanation: "Hydration makes HTML interactive."
  },
  {
    question: "What is mismatch hydration error?",
    options: [
      "Server-client HTML mismatch",
      "JS error",
      "CSS mismatch",
      "Network error"
    ],
    answer: "Server-client HTML mismatch",
    explanation: "Occurs when markup differs."
  },
  {
    question: "What causes hydration mismatch?",
    options: [
      "Date.now()",
      "Random values",
      "Conditional rendering",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Non-deterministic rendering."
  },
  {
    question: "What is code splitting?",
    options: [
      "Splitting CSS",
      "Loading JS on demand",
      "Breaking components",
      "Tree shaking"
    ],
    answer: "Loading JS on demand",
    explanation: "Improves initial load."
  },
  {
    question: "Which tool performs code splitting?",
    options: ["React.lazy", "Webpack", "Vite", "All of these"],
    answer: "All of these",
    explanation: "Bundlers support splitting."
  },
  {
    question: "What is tree shaking?",
    options: [
      "Removing unused code",
      "Splitting bundles",
      "Lazy loading",
      "Minification"
    ],
    answer: "Removing unused code",
    explanation: "Eliminates dead code."
  },
  {
    question: "Why keys are critical in reconciliation?",
    options: [
      "Performance",
      "Correct state mapping",
      "Avoid remount",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Keys maintain element identity."
  },
  {
    question: "What is controlled vs uncontrolled tradeoff?",
    options: [
      "Control vs performance",
      "Security",
      "Styling",
      "Routing"
    ],
    answer: "Control vs performance",
    explanation: "Controlled gives more control, less perf."
  },
  {
    question: "What is portal?",
    options: [
      "Routing",
      "Render outside DOM hierarchy",
      "Lazy loading",
      "Context"
    ],
    answer: "Render outside DOM hierarchy",
    explanation: "Useful for modals, tooltips."
  },
  {
    question: "Which API creates portal?",
    options: [
      "createPortal",
      "ReactDOM.createPortal",
      "portal()",
      "renderPortal"
    ],
    answer: "ReactDOM.createPortal",
    explanation: "Renders children to different DOM node."
  },
  {
    question: "What is event delegation in React?",
    options: [
      "Each element has listener",
      "Single root listener",
      "Native browser feature",
      "Event bubbling off"
    ],
    answer: "Single root listener",
    explanation: "Improves performance."
  },
  {
    question: "Where does React attach event listeners?",
    options: ["Document", "Window", "Root container", "Each node"],
    answer: "Root container",
    explanation: "React uses synthetic events."
  },
  {
    question: "What is synthetic event?",
    options: [
      "Browser event",
      "Cross-browser wrapper",
      "Custom event",
      "Async event"
    ],
    answer: "Cross-browser wrapper",
    explanation: "Normalizes events."
  },
  {
    question: "What is batching benefit?",
    options: [
      "Fewer renders",
      "Performance",
      "Consistency",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Batching optimizes updates."
  },
  {
    question: "What breaks automatic batching?",
    options: [
      "setTimeout",
      "Promise",
      "Native event",
      "flushSync"
    ],
    answer: "flushSync",
    explanation: "flushSync forces immediate render."
  },
  {
    question: "When should flushSync be used?",
    options: [
      "Always",
      "Rarely",
      "Never",
      "Debugging"
    ],
    answer: "Rarely",
    explanation: "Used only for critical sync updates."
  },
  {
    question: "What is React Strict Mode used for?",
    options: [
      "Production optimization",
      "Detect unsafe patterns",
      "Performance",
      "Error handling"
    ],
    answer: "Detect unsafe patterns",
    explanation: "Dev-only checks."
  },
  {
    question: "Does StrictMode run in production?",
    options: ["Yes", "No", "Sometimes", "Only in SSR"],
    answer: "No",
    explanation: "StrictMode is dev-only."
  },
  {
    question: "What is state colocation?",
    options: [
      "Global state",
      "State near usage",
      "Context",
      "Redux"
    ],
    answer: "State near usage",
    explanation: "Improves maintainability."
  },
  {
    question: "What is prop drilling alternative?",
    options: ["Redux", "Context", "Composition", "All of these"],
    answer: "All of these",
    explanation: "Multiple solutions exist."
  },
  {
    question: "What is render phase?",
    options: [
      "DOM update",
      "Virtual DOM creation",
      "Commit phase",
      "Hydration"
    ],
    answer: "Virtual DOM creation",
    explanation: "Pure computation phase."
  },
  {
    question: "What is commit phase?",
    options: [
      "DOM mutations",
      "VDOM diff",
      "Scheduling",
      "Reconciliation"
    ],
    answer: "DOM mutations",
    explanation: "Applies changes to DOM."
  },
  {
    question: "Which operations are allowed in render phase?",
    options: [
      "Side effects",
      "Pure calculations",
      "DOM mutations",
      "API calls"
    ],
    answer: "Pure calculations",
    explanation: "Render must be pure."
  },
  {
    question: "What is tearing in concurrent mode?",
    options: [
      "State inconsistency",
      "DOM crash",
      "Memory leak",
      "Event loss"
    ],
    answer: "State inconsistency",
    explanation: "UI reads inconsistent state."
  },
  {
    question: "Which hook helps avoid tearing?",
    options: ["useSyncExternalStore", "useEffect", "useRef", "useMemo"],
    answer: "useSyncExternalStore",
    explanation: "Safe external store subscription."
  },
  {
    question: "What is useId used for?",
    options: [
      "Keys",
      "Unique stable IDs",
      "State",
      "Refs"
    ],
    answer: "Unique stable IDs",
    explanation: "Avoids hydration mismatch."
  },
  {
    question: "What problem does useInsertionEffect solve?",
    options: [
      "CSS injection timing",
      "Side effects",
      "State updates",
      "API calls"
    ],
    answer: "CSS injection timing",
    explanation: "Runs before layout effects."
  },
  {
    question: "When should useInsertionEffect be used?",
    options: [
      "Normal components",
      "Libraries only",
      "Forms",
      "Data fetching"
    ],
    answer: "Libraries only",
    explanation: "Advanced use case."
  },
  {
    question: "Biggest React architectural mistake?",
    options: [
      "Too much global state",
      "Over-optimizing early",
      "Ignoring performance",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Leads to complex code."
  }
];


const React_advan = () => {
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
            onClick={() => navigate("/react")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             ⚛️ React Fundamentals Quiz - Advance level
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
                onClick={() => navigate("/react")}
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

export default React_advan;
