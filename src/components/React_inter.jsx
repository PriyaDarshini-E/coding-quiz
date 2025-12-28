import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What problem does useEffect solve?",
    options: [
      "State management",
      "Side effects handling",
      "Routing",
      "Styling"
    ],
    answer: "Side effects handling",
    explanation: "useEffect handles side effects like API calls."
  },
  {
    question: "Which lifecycle does useEffect replace?",
    options: [
      "componentDidMount only",
      "componentDidUpdate only",
      "componentWillUnmount only",
      "All of these"
    ],
    answer: "All of these",
    explanation: "useEffect can mimic multiple lifecycle methods."
  },
  {
    question: "When does useEffect cleanup run?",
    options: [
      "Before next effect",
      "On unmount",
      "On dependency change",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Cleanup runs before re-execution and unmount."
  },
  {
    question: "What happens if dependency array is omitted?",
    options: [
      "Runs once",
      "Runs on mount only",
      "Runs on every render",
      "Never runs"
    ],
    answer: "Runs on every render",
    explanation: "No dependency array triggers on each render."
  },
  {
    question: "What does strict mode do in development?",
    options: [
      "Improves performance",
      "Runs effects twice",
      "Disables hooks",
      "Optimizes DOM"
    ],
    answer: "Runs effects twice",
    explanation: "Helps detect side-effect issues."
  },
  {
    question: "Which hook is best for derived state?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useMemo",
    explanation: "Avoids recalculating derived values."
  },
  {
    question: "What does useCallback return?",
    options: [
      "Memoized value",
      "Memoized function",
      "Reference",
      "Effect"
    ],
    answer: "Memoized function",
    explanation: "Prevents function recreation."
  },
  {
    question: "When should useCallback be avoided?",
    options: [
      "Simple components",
      "Heavy computation",
      "Child memoization",
      "Event handlers"
    ],
    answer: "Simple components",
    explanation: "Overuse can harm readability."
  },
  {
    question: "What causes unnecessary re-renders?",
    options: [
      "State change",
      "New object references",
      "Props change",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Reference changes trigger re-render."
  },
  {
    question: "What does React.memo do?",
    options: [
      "Memoizes component output",
      "Stores state",
      "Prevents routing",
      "Caches API calls"
    ],
    answer: "Memoizes component output",
    explanation: "Skips re-render if props unchanged."
  },
  {
    question: "React.memo works best with?",
    options: [
      "Primitive props",
      "Changing props",
      "Context",
      "Stateful logic"
    ],
    answer: "Primitive props",
    explanation: "Shallow comparison works best."
  },
  {
    question: "What is shallow comparison?",
    options: [
      "Deep object check",
      "Reference comparison",
      "Value comparison",
      "JSON comparison"
    ],
    answer: "Reference comparison",
    explanation: "Checks reference, not deep equality."
  },
  {
    question: "What is lifting state up?",
    options: [
      "Moving state to parent",
      "Deleting state",
      "Using context",
      "Using refs"
    ],
    answer: "Moving state to parent",
    explanation: "Allows sharing state between siblings."
  },
  {
    question: "Which hook replaces this.setState logic?",
    options: ["useReducer", "useState", "useEffect", "useContext"],
    answer: "useReducer",
    explanation: "Centralized state transitions."
  },
  {
    question: "When is useReducer preferred?",
    options: [
      "Simple state",
      "Complex state logic",
      "Styling",
      "Routing"
    ],
    answer: "Complex state logic",
    explanation: "Better for predictable updates."
  },
  {
    question: "What does useRef NOT trigger?",
    options: [
      "Re-render",
      "DOM access",
      "Mutable value",
      "Persistence"
    ],
    answer: "Re-render",
    explanation: "Updating ref doesn’t re-render."
  },
  {
    question: "Common use case for useRef?",
    options: [
      "API calls",
      "DOM access",
      "Global state",
      "Routing"
    ],
    answer: "DOM access",
    explanation: "Refs access DOM nodes."
  },
  {
    question: "What is controlled form input?",
    options: [
      "DOM controlled",
      "State controlled",
      "Read-only",
      "Uncontrolled"
    ],
    answer: "State controlled",
    explanation: "Value comes from state."
  },
  {
    question: "What causes infinite re-render loop?",
    options: [
      "setState in render",
      "Missing dependency",
      "State update in effect",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Improper state updates cause loops."
  },
  {
    question: "What is context best suited for?",
    options: [
      "Local state",
      "Props replacement",
      "Global data",
      "Forms"
    ],
    answer: "Global data",
    explanation: "Used for theme, auth, locale."
  },
  {
    question: "Downside of Context?",
    options: [
      "Performance issues",
      "Hard debugging",
      "Re-renders",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Overuse causes complexity."
  },
  {
    question: "What is render prop?",
    options: [
      "Component as prop",
      "JSX render",
      "Callback returning JSX",
      "Template literal"
    ],
    answer: "Callback returning JSX",
    explanation: "Shares logic via function."
  },
  {
    question: "What is Higher Order Component (HOC)?",
    options: [
      "Component wrapper",
      "Hook",
      "Context",
      "Reducer"
    ],
    answer: "Component wrapper",
    explanation: "Enhances component behavior."
  },
  {
    question: "HOC naming convention?",
    options: ["withFeature", "useFeature", "Feature", "getFeature"],
    answer: "withFeature",
    explanation: "Prefix with 'with'."
  },
  {
    question: "Which hook runs before paint?",
    options: ["useEffect", "useLayoutEffect", "useMemo", "useRef"],
    answer: "useLayoutEffect",
    explanation: "Runs synchronously before paint."
  },
  {
    question: "When should useLayoutEffect be avoided?",
    options: [
      "DOM measurement",
      "Animations",
      "Blocking operations",
      "Layout fixes"
    ],
    answer: "Blocking operations",
    explanation: "It blocks rendering."
  },
  {
    question: "What is reconciliation key role?",
    options: [
      "Identify elements",
      "Optimize DOM updates",
      "Prevent remount",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Keys help diffing algorithm."
  },
  {
    question: "Index as key is bad when?",
    options: [
      "Static list",
      "Sorted list",
      "Dynamic list",
      "Small list"
    ],
    answer: "Dynamic list",
    explanation: "Causes incorrect UI updates."
  },
  {
    question: "What is lazy loading in React?",
    options: [
      "Loading data late",
      "Code splitting",
      "Deferred rendering",
      "Caching"
    ],
    answer: "Code splitting",
    explanation: "Loads components on demand."
  },
  {
    question: "Which API enables lazy loading?",
    options: ["React.lazy", "useMemo", "Suspense", "Both A & C"],
    answer: "Both A & C",
    explanation: "Lazy + Suspense work together."
  },
  {
    question: "What does Suspense require?",
    options: [
      "Fallback UI",
      "Reducer",
      "Context",
      "Provider"
    ],
    answer: "Fallback UI",
    explanation: "Displayed during loading."
  },
  {
    question: "What is error boundary?",
    options: [
      "Try-catch",
      "Component catching errors",
      "Hook",
      "Middleware"
    ],
    answer: "Component catching errors",
    explanation: "Handles render errors."
  },
  {
    question: "Error boundaries catch errors in?",
    options: [
      "Render",
      "Lifecycle",
      "Child components",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Except event handlers."
  },
  {
    question: "Hooks can be used in?",
    options: [
      "Loops",
      "Conditions",
      "Functions",
      "Top-level only"
    ],
    answer: "Top-level only",
    explanation: "Rules of hooks."
  },
  {
    question: "Why hooks must not be conditional?",
    options: [
      "Performance",
      "Consistency",
      "Hook order",
      "Syntax"
    ],
    answer: "Hook order",
    explanation: "Ensures consistent execution."
  },
  {
    question: "What is state batching?",
    options: [
      "Grouping updates",
      "Delaying renders",
      "Async state",
      "Caching state"
    ],
    answer: "Grouping updates",
    explanation: "React batches updates for efficiency."
  },
  {
    question: "Automatic batching introduced in?",
    options: ["React 16", "React 17", "React 18", "React 15"],
    answer: "React 18",
    explanation: "Batching across async events."
  },
  {
    question: "What is concurrent rendering?",
    options: [
      "Multi-threading",
      "Interruptible rendering",
      "Parallel DOM",
      "Async hooks"
    ],
    answer: "Interruptible rendering",
    explanation: "Improves responsiveness."
  },
  {
    question: "Which hook starts transition?",
    options: ["useTransition", "useDeferredValue", "useMemo", "useCallback"],
    answer: "useTransition",
    explanation: "Marks non-urgent updates."
  },
  {
    question: "What is useDeferredValue used for?",
    options: [
      "Delay value update",
      "Throttle API",
      "Cache value",
      "Memoize function"
    ],
    answer: "Delay value update",
    explanation: "Improves UI responsiveness."
  },
  {
    question: "What is the biggest React performance mistake?",
    options: [
      "Overusing state",
      "Inline functions",
      "Unnecessary re-renders",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Combined issues hurt performance."
  },
  {
    question: "React favors ___ over inheritance.",
    options: ["Composition", "Abstraction", "Encapsulation", "Polymorphism"],
    answer: "Composition",
    explanation: "Components are composed together."
  },
  {
    question: "What is custom hook?",
    options: [
      "Built-in hook",
      "Reusable logic function",
      "Component",
      "Library"
    ],
    answer: "Reusable logic function",
    explanation: "Encapsulates hook logic."
  },
  {
    question: "Custom hooks naming must start with?",
    options: ["use", "hook", "with", "create"],
    answer: "use",
    explanation: "Required by rules of hooks."
  }
];


const React_inter = () => {
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
            onClick={() => navigate("/react")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             ⚛️ React Fundamentals Quiz - Intermediate level
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

export default React_inter;
