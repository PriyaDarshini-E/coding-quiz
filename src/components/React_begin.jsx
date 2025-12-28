import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is React?",
    options: [
      "Backend framework",
      "JavaScript library for UI",
      "Database", 
      "Programming language"
    ],
    answer: "JavaScript library for UI",
    explanation: "React is used to build user interfaces."
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Twitter"],
    answer: "Facebook",
    explanation: "React was developed by Facebook."
  },
  {
    question: "What is the main purpose of React?",
    options: [
      "Styling pages",
      "Building UI components",
      "Managing databases",
      "Handling servers"
    ],
    answer: "Building UI components",
    explanation: "React focuses on reusable UI components."
  },
  {
    question: "What is a component in React?",
    options: [
      "A function or class that returns UI",
      "A database table",
      "A CSS file",
      "An API"
    ],
    answer: "A function or class that returns UI",
    explanation: "Components are the building blocks of React."
  },
  {
    question: "Which syntax is used in React?",
    options: ["HTML", "JSX", "XML", "Template"],
    answer: "JSX",
    explanation: "JSX allows writing HTML inside JavaScript."
  },
  {
    question: "JSX stands for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript XHTML"
    ],
    answer: "JavaScript XML",
    explanation: "JSX is JavaScript XML."
  },
  {
    question: "Which method renders React UI?",
    options: [
      "render()",
      "ReactDOM.render()",
      "display()",
      "mount()"
    ],
    answer: "ReactDOM.render()",
    explanation: "Used to render React components to DOM."
  },
  {
    question: "What is a functional component?",
    options: [
      "Class-based component",
      "JavaScript function returning JSX",
      "CSS component",
      "API function"
    ],
    answer: "JavaScript function returning JSX",
    explanation: "Functional components are simple JS functions."
  },
  {
    question: "Which hook manages state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
    explanation: "useState manages component state."
  },
  {
    question: "What does useState return?",
    options: [
      "Value only",
      "Setter only",
      "State and setter",
      "Boolean"
    ],
    answer: "State and setter",
    explanation: "useState returns [state, setState]."
  },
  {
    question: "What is state in React?",
    options: [
      "Permanent data",
      "Component data that changes",
      "Props",
      "External data"
    ],
    answer: "Component data that changes",
    explanation: "State holds dynamic data."
  },
  {
    question: "What are props?",
    options: [
      "Component state",
      "Data passed to components",
      "Hooks",
      "Events"
    ],
    answer: "Data passed to components",
    explanation: "Props allow data flow from parent to child."
  },
  {
    question: "Are props mutable?",
    options: ["Yes", "No", "Sometimes", "Only in class"],
    answer: "No",
    explanation: "Props are read-only."
  },
  {
    question: "What is one-way data flow?",
    options: [
      "Data flows parent to child",
      "Child to parent",
      "Both ways",
      "Random"
    ],
    answer: "Data flows parent to child",
    explanation: "React follows unidirectional data flow."
  },
  {
    question: "Which hook handles side effects?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useEffect",
    explanation: "useEffect handles side effects."
  },
  {
    question: "When does useEffect run by default?",
    options: [
      "Once",
      "On every render",
      "On mount only",
      "On unmount"
    ],
    answer: "On every render",
    explanation: "Without dependency array, it runs on every render."
  },
  {
    question: "What does empty dependency array mean?",
    options: [
      "Run always",
      "Run once on mount",
      "Run on unmount",
      "Never run"
    ],
    answer: "Run once on mount",
    explanation: "[] means run only once."
  },
  {
    question: "Which hook accesses DOM directly?",
    options: ["useRef", "useState", "useMemo", "useEffect"],
    answer: "useRef",
    explanation: "useRef can access DOM elements."
  },
  {
    question: "What is virtual DOM?",
    options: [
      "Real browser DOM",
      "Copy of real DOM",
      "Database DOM",
      "Shadow DOM"
    ],
    answer: "Copy of real DOM",
    explanation: "Virtual DOM is an in-memory representation."
  },
  {
    question: "Why React uses virtual DOM?",
    options: [
      "Security",
      "Performance",
      "Styling",
      "Routing"
    ],
    answer: "Performance",
    explanation: "Minimizes costly DOM updates."
  },
  {
    question: "What is reconciliation?",
    options: [
      "Comparing virtual DOMs",
      "Rendering JSX",
      "Creating state",
      "Unmounting"
    ],
    answer: "Comparing virtual DOMs",
    explanation: "React updates only changed parts."
  },
  {
    question: "Which attribute replaces class in JSX?",
    options: ["class", "className", "css", "style"],
    answer: "className",
    explanation: "className is used instead of class."
  },
  {
    question: "Which attribute is used for inline styles?",
    options: ["style", "css", "class", "inline"],
    answer: "style",
    explanation: "Style accepts JS object."
  },
  {
    question: "How do you write comments in JSX?",
    options: [
      "// comment",
      "/* comment */",
      "{/* comment */}",
      "<!-- -->"
    ],
    answer: "{/* comment */}",
    explanation: "JSX uses JS comment syntax."
  },
  {
    question: "Which event handles click?",
    options: ["onclick", "onClick", "click", "handleClick"],
    answer: "onClick",
    explanation: "React uses camelCase events."
  },
  {
    question: "Which event handles input change?",
    options: ["onInput", "onChange", "onType", "onKey"],
    answer: "onChange",
    explanation: "onChange tracks input value."
  },
  {
    question: "What is controlled component?",
    options: [
      "DOM controlled",
      "State controlled input",
      "Uncontrolled input",
      "Readonly input"
    ],
    answer: "State controlled input",
    explanation: "Input value controlled by state."
  },
  {
    question: "What is uncontrolled component?",
    options: [
      "State controlled",
      "Using refs",
      "No input",
      "Error"
    ],
    answer: "Using refs",
    explanation: "DOM manages value using ref."
  },
  {
    question: "What is key prop used for?",
    options: [
      "Styling",
      "Performance in lists",
      "Routing",
      "Security"
    ],
    answer: "Performance in lists",
    explanation: "Helps React identify list items."
  },
  {
    question: "Key should be?",
    options: [
      "Index",
      "Random",
      "Unique & stable",
      "Optional"
    ],
    answer: "Unique & stable",
    explanation: "Avoid index as key."
  },
  {
    question: "Which hook shares data globally?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: "useContext",
    explanation: "Context avoids prop drilling."
  },
  {
    question: "What is prop drilling?",
    options: [
      "Passing props deeply",
      "Removing props",
      "Validating props",
      "Default props"
    ],
    answer: "Passing props deeply",
    explanation: "Passing props through many levels."
  },
  {
    question: "Which hook optimizes performance?",
    options: ["useEffect", "useMemo", "useState", "useContext"],
    answer: "useMemo",
    explanation: "Memoizes expensive calculations."
  },
  {
    question: "Which hook memoizes functions?",
    options: ["useMemo", "useCallback", "useRef", "useReducer"],
    answer: "useCallback",
    explanation: "Prevents unnecessary re-creation."
  },
  {
    question: "What is fragment?",
    options: [
      "Wrapper component",
      "Extra DOM node",
      "Invisible wrapper",
      "HTML tag"
    ],
    answer: "Invisible wrapper",
    explanation: "Fragments group elements without DOM."
  },
  {
    question: "Syntax for fragment?",
    options: ["<div>", "<Fragment>", "<></>", "<span>"],
    answer: "<></>",
    explanation: "Shorthand fragment syntax."
  },
  {
    question: "What is conditional rendering?",
    options: [
      "Always render",
      "Render based on condition",
      "Loop rendering",
      "Lazy loading"
    ],
    answer: "Render based on condition",
    explanation: "Uses conditions to show UI."
  },
  {
    question: "Which operator commonly used in JSX condition?",
    options: ["&&", "??", "::", "**"],
    answer: "&&",
    explanation: "Short-circuit rendering."
  },
  {
    question: "How to pass data child to parent?",
    options: [
      "Props",
      "Callback function",
      "Context",
      "State"
    ],
    answer: "Callback function",
    explanation: "Parent passes function as prop."
  },
  {
    question: "Which hook handles complex state?",
    options: ["useState", "useReducer", "useEffect", "useMemo"],
    answer: "useReducer",
    explanation: "Better for complex state logic."
  },
  {
    question: "React is ___ library.",
    options: ["Opinionated", "Unopinionated", "Backend", "Database"],
    answer: "Unopinionated",
    explanation: "React gives flexibility."
  },
  {
    question: "Which file usually renders App component?",
    options: ["index.js", "App.js", "main.js", "render.js"],
    answer: "index.js",
    explanation: "Entry point renders App."
  },
  {
    question: "What is SPA?",
    options: [
      "Single Page Application",
      "Server Page App",
      "Static Page App",
      "Styled Page App"
    ],
    answer: "Single Page Application",
    explanation: "React commonly builds SPAs."
  },
  {
    question: "React updates UI using?",
    options: ["Direct DOM", "Virtual DOM diffing", "Reload page", "Server push"],
    answer: "Virtual DOM diffing",
    explanation: "Efficient UI updates."
  },
  {
    question: "Biggest advantage of React?",
    options: [
      "Database handling",
      "Reusable components",
      "Authentication",
      "SEO"
    ],
    answer: "Reusable components",
    explanation: "Components improve maintainability."
  }
];


const React_begin = () => {
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
            onClick={() => navigate("/react")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             ⚛️ React Fundamentals Quiz - Beginner level
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

export default React_begin;
