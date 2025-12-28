import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is hoisting in JavaScript?",
    options: [
      "Moving variables to bottom",
      "Accessing variables before declaration",
      "Copying variables",
      "Deleting variables"
    ],
    answer: "Accessing variables before declaration",
    explanation: "Hoisting moves declarations to the top of scope."
  },
  {
    question: "Which variables are hoisted but not initialized?",
    options: ["var", "let", "const", "Both let and const"],
    answer: "Both let and const",
    explanation: "let and const are hoisted but in temporal dead zone."
  },
  {
    question: "What is the Temporal Dead Zone?",
    options: [
      "Memory leak",
      "Scope before initialization",
      "Garbage collection phase",
      "Async execution delay"
    ],
    answer: "Scope before initialization",
    explanation: "TDZ exists until variable is initialized."
  },
  {
    question: "What does 'this' refer to in a regular function?",
    options: [
      "Function itself",
      "Calling object",
      "Global object",
      "Depends on invocation"
    ],
    answer: "Depends on invocation",
    explanation: "`this` is determined by how a function is called."
  },
  {
    question: "What does 'this' refer to in arrow functions?",
    options: [
      "Calling object",
      "Global object",
      "Lexical scope",
      "Function scope"
    ],
    answer: "Lexical scope",
    explanation: "Arrow functions inherit `this` from parent scope."
  },
  {
    question: "Which method explicitly sets `this`?",
    options: ["bind()", "call()", "apply()", "All of these"],
    answer: "All of these",
    explanation: "bind, call, and apply control `this`."
  },
  {
    question: "Difference between call() and apply()?",
    options: [
      "No difference",
      "Arguments format",
      "Return value",
      "Execution speed"
    ],
    answer: "Arguments format",
    explanation: "call uses comma args, apply uses array."
  },
  {
    question: "What does bind() return?",
    options: [
      "Function result",
      "New bound function",
      "Object",
      "Undefined"
    ],
    answer: "New bound function",
    explanation: "bind returns a new function."
  },
  {
    question: "What is a closure?",
    options: [
      "Function inside function",
      "Function with preserved outer scope",
      "Block scope",
      "Async function"
    ],
    answer: "Function with preserved outer scope",
    explanation: "Closures remember lexical environment."
  },
  {
    question: "Which feature enables data privacy?",
    options: [
      "Closures",
      "Prototypes",
      "Callbacks",
      "Promises"
    ],
    answer: "Closures",
    explanation: "Closures hide variables from global scope."
  },
  {
    question: "What is event bubbling?",
    options: [
      "Event travels parent to child",
      "Event travels child to parent",
      "Event stops immediately",
      "Event loops infinitely"
    ],
    answer: "Event travels child to parent",
    explanation: "Bubbling propagates upward."
  },
  {
    question: "What is event capturing?",
    options: [
      "Child to parent",
      "Parent to child",
      "Async event",
      "Stopped event"
    ],
    answer: "Parent to child",
    explanation: "Capturing propagates downward."
  },
  {
    question: "How to stop event propagation?",
    options: [
      "stop()",
      "preventDefault()",
      "stopPropagation()",
      "cancelEvent()"
    ],
    answer: "stopPropagation()",
    explanation: "Stops bubbling or capturing."
  },
  {
    question: "What does preventDefault() do?",
    options: [
      "Stops propagation",
      "Stops browser default behavior",
      "Stops event execution",
      "Stops async calls"
    ],
    answer: "Stops browser default behavior",
    explanation: "Prevents default browser action."
  },
  {
    question: "What is event delegation?",
    options: [
      "Multiple listeners",
      "Single listener on parent",
      "Event capturing",
      "Event bubbling stop"
    ],
    answer: "Single listener on parent",
    explanation: "Delegation uses bubbling for efficiency."
  },
  {
    question: "Which keyword creates a Promise?",
    options: ["async", "new Promise", "await", "resolve"],
    answer: "new Promise",
    explanation: "Promises are created using constructor."
  },
  {
    question: "Promise has how many states?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "Pending, Fulfilled, Rejected."
  },
  {
    question: "Which method handles promise success?",
    options: ["catch()", "then()", "finally()", "resolve()"],
    answer: "then()",
    explanation: "then handles fulfilled state."
  },
  {
    question: "Which method handles promise failure?",
    options: ["then()", "catch()", "reject()", "error()"],
    answer: "catch()",
    explanation: "catch handles rejected state."
  },
  {
    question: "What does finally() do?",
    options: [
      "Handles success",
      "Handles error",
      "Always executes",
      "Cancels promise"
    ],
    answer: "Always executes",
    explanation: "Runs regardless of result."
  },
  {
    question: "What does async function return?",
    options: ["Value", "Promise", "Object", "Undefined"],
    answer: "Promise",
    explanation: "Async functions always return promises."
  },
  {
    question: "What does await do?",
    options: [
      "Blocks thread",
      "Pauses async execution",
      "Stops function",
      "Resolves promise immediately"
    ],
    answer: "Pauses async execution",
    explanation: "Await waits for promise resolution."
  },
  {
    question: "Which loop works with async/await?",
    options: [
      "forEach",
      "for",
      "map",
      "filter"
    ],
    answer: "for",
    explanation: "for supports async/await properly."
  },
  {
    question: "What is the event loop?",
    options: [
      "Infinite loop",
      "JS engine",
      "Task scheduling mechanism",
      "Callback stack"
    ],
    answer: "Task scheduling mechanism",
    explanation: "Event loop manages async execution."
  },
  {
    question: "Which has higher priority?",
    options: [
      "setTimeout",
      "Microtasks",
      "Callbacks",
      "Events"
    ],
    answer: "Microtasks",
    explanation: "Promises run before macrotasks."
  },
  {
    question: "Which queue stores Promises?",
    options: [
      "Callback queue",
      "Event queue",
      "Microtask queue",
      "Task queue"
    ],
    answer: "Microtask queue",
    explanation: "Promise callbacks go to microtask queue."
  },
  {
    question: "What is destructuring?",
    options: [
      "Copying objects",
      "Extracting values",
      "Deleting keys",
      "Freezing objects"
    ],
    answer: "Extracting values",
    explanation: "Destructuring extracts values from arrays/objects."
  },
  {
    question: "Which operator spreads values?",
    options: ["...", "*", "&", "=>"],
    answer: "...",
    explanation: "Spread operator expands values."
  },
  {
    question: "Difference between spread and rest?",
    options: [
      "No difference",
      "Spread expands, rest collects",
      "Rest expands",
      "Spread collects"
    ],
    answer: "Spread expands, rest collects",
    explanation: "Opposite behaviors."
  },
  {
    question: "What is optional chaining?",
    options: [
      "Looping",
      "Safe property access",
      "Async chaining",
      "Promise chaining"
    ],
    answer: "Safe property access",
    explanation: "?. prevents runtime errors."
  },
  {
    question: "What does nullish coalescing (??) do?",
    options: [
      "Checks falsy values",
      "Checks null or undefined",
      "Checks zero",
      "Checks empty string"
    ],
    answer: "Checks null or undefined",
    explanation: "?? ignores falsy except null/undefined."
  },
  {
    question: "Which object freezes properties?",
    options: [
      "Object.seal()",
      "Object.freeze()",
      "Object.lock()",
      "Object.block()"
    ],
    answer: "Object.freeze()",
    explanation: "Prevents modification."
  },
  {
    question: "Difference between seal and freeze?",
    options: [
      "No difference",
      "Seal allows value change",
      "Freeze allows adding properties",
      "Seal removes properties"
    ],
    answer: "Seal allows value change",
    explanation: "Seal prevents add/remove only."
  },
  {
    question: "What is prototype?",
    options: [
      "Copy of object",
      "Inheritance mechanism",
      "Class instance",
      "Memory location"
    ],
    answer: "Inheritance mechanism",
    explanation: "JS uses prototype-based inheritance."
  },
  {
    question: "Which keyword creates class inheritance?",
    options: ["extends", "inherits", "prototype", "super"],
    answer: "extends",
    explanation: "extends creates subclass."
  },
  {
    question: "What does super() do?",
    options: [
      "Calls child constructor",
      "Calls parent constructor",
      "Stops execution",
      "Creates object"
    ],
    answer: "Calls parent constructor",
    explanation: "super initializes parent."
  },
  {
    question: "Which method converts JSON string to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.convert()"
    ],
    answer: "JSON.parse()",
    explanation: "Parses JSON string."
  },
  {
    question: "Which method converts object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toString()",
      "JSON.convert()"
    ],
    answer: "JSON.stringify()",
    explanation: "Stringifies object."
  },
  {
    question: "What is shallow copy?",
    options: [
      "Copies nested objects",
      "Copies reference",
      "Creates deep clone",
      "Freezes object"
    ],
    answer: "Copies reference",
    explanation: "Nested objects share reference."
  },
  {
    question: "Which creates shallow copy?",
    options: [
      "Object.assign()",
      "JSON.parse",
      "structuredClone",
      "deepClone"
    ],
    answer: "Object.assign()",
    explanation: "Creates shallow copy."
  },
  {
    question: "What is deep copy?",
    options: [
      "Copies only first level",
      "Copies entire structure",
      "Freezes object",
      "Copies prototype"
    ],
    answer: "Copies entire structure",
    explanation: "No shared references."
  },
  {
    question: "Which API creates deep copy?",
    options: [
      "structuredClone()",
      "Object.assign()",
      "spread operator",
      "slice()"
    ],
    answer: "structuredClone()",
    explanation: "Native deep clone API."
  }
];



const Javascript_inter = () => {
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
            onClick={() => navigate("/javascript")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
           ⚡ JavaScript Fundamentals Quiz - Intermediate level
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

export default Javascript_inter;
