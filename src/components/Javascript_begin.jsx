import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is JavaScript?",
    options: [
      "A markup language",
      "A styling language",
      "A programming language",
      "A database language"
    ],
    answer: "A programming language",
    explanation: "JavaScript is a programming language used to create dynamic web content."
  },
  {
    question: "JavaScript runs primarily on which side?",
    options: [
      "Server only",
      "Client only",
      "Both client and server",
      "Database"
    ],
    answer: "Both client and server",
    explanation: "JavaScript runs in browsers and on servers (Node.js)."
  },
  {
    question: "Which keyword is used to declare a variable?",
    options: ["var", "let", "const", "All of these"],
    answer: "All of these",
    explanation: "var, let, and const are used to declare variables."
  },
  {
    question: "Which keyword creates a block-scoped variable?",
    options: ["var", "let", "const", "Both let and const"],
    answer: "Both let and const",
    explanation: "let and const are block scoped."
  },
  {
    question: "Which keyword cannot be reassigned?",
    options: ["var", "let", "const", "function"],
    answer: "const",
    explanation: "const variables cannot be reassigned."
  },
  {
    question: "What is the output of typeof null?",
    options: ["null", "object", "undefined", "number"],
    answer: "object",
    explanation: "This is a known JavaScript quirk."
  },
  {
    question: "Which data type is NOT primitive?",
    options: ["String", "Number", "Object", "Boolean"],
    answer: "Object",
    explanation: "Object is a non-primitive data type."
  },
  {
    question: "Which symbol is used for strict equality?",
    options: ["=", "==", "===", "!=="],
    answer: "===",
    explanation: "=== checks value and type."
  },
  {
    question: "Which operator checks value only?",
    options: ["=", "==", "===", "!=="],
    answer: "==",
    explanation: "== performs type coercion."
  },
  {
    question: "What will Boolean(0) return?",
    options: ["true", "false", "undefined", "error"],
    answer: "false",
    explanation: "0 is a falsy value."
  },
  {
    question: "Which value is NOT falsy?",
    options: ["0", "null", "undefined", "[]"],
    answer: "[]",
    explanation: "Empty arrays are truthy."
  },
  {
    question: "Which method converts string to number?",
    options: ["Number()", "parseInt()", "parseFloat()", "All of these"],
    answer: "All of these",
    explanation: "All can convert strings to numbers."
  },
  {
    question: "Which function logs output to console?",
    options: ["print()", "log()", "console.log()", "write()"],
    answer: "console.log()",
    explanation: "console.log prints to developer console."
  },
  {
    question: "Which keyword defines a function?",
    options: ["function", "def", "fn", "method"],
    answer: "function",
    explanation: "function keyword defines a function."
  },
  {
    question: "How do you call a function?",
    options: ["function()", "call function", "execute()", "run()"],
    answer: "function()",
    explanation: "Functions are invoked using parentheses."
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    answer: "&&",
    explanation: "&& represents logical AND."
  },
  {
    question: "Which operator is used for logical OR?",
    options: ["||", "|", "&&", "&"],
    answer: "||",
    explanation: "|| represents logical OR."
  },
  {
    question: "Which statement is used for decision making?",
    options: ["for", "if", "while", "switch"],
    answer: "if",
    explanation: "if executes code conditionally."
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while",
    explanation: "do...while executes once before condition check."
  },
  {
    question: "Which keyword stops a loop?",
    options: ["stop", "exit", "break", "return"],
    answer: "break",
    explanation: "break exits the loop."
  },
  {
    question: "Which keyword skips current iteration?",
    options: ["skip", "continue", "pass", "next"],
    answer: "continue",
    explanation: "continue skips to next iteration."
  },
  {
    question: "Which object represents the browser window?",
    options: ["document", "screen", "window", "navigator"],
    answer: "window",
    explanation: "window is the global browser object."
  },
  {
    question: "Which object represents the HTML document?",
    options: ["window", "screen", "document", "html"],
    answer: "document",
    explanation: "document represents the DOM."
  },
  {
    question: "Which method selects element by id?",
    options: [
      "getElementById",
      "querySelector",
      "getElementsByClass",
      "selectId"
    ],
    answer: "getElementById",
    explanation: "Selects element by its id."
  },
  {
    question: "Which method selects first matching element?",
    options: [
      "querySelector",
      "querySelectorAll",
      "getElementById",
      "getElementsByTagName"
    ],
    answer: "querySelector",
    explanation: "querySelector returns first match."
  },
  {
    question: "Which method selects all matching elements?",
    options: [
      "querySelector",
      "querySelectorAll",
      "getElementById",
      "selectAll"
    ],
    answer: "querySelectorAll",
    explanation: "Returns a NodeList of matches."
  },
  {
    question: "Which keyword is used to create an array?",
    options: ["{}", "[]", "()", "<>"],
    answer: "[]",
    explanation: "Arrays are created using square brackets."
  },
  {
    question: "Which method adds item to end of array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
    explanation: "push adds element at the end."
  },
  {
    question: "Which method removes last array item?",
    options: ["pop()", "push()", "shift()", "slice()"],
    answer: "pop()",
    explanation: "pop removes last element."
  },
  {
    question: "Which method adds item to beginning?",
    options: ["push()", "unshift()", "shift()", "splice()"],
    answer: "unshift()",
    explanation: "unshift adds at beginning."
  },
  {
    question: "Which method removes first array item?",
    options: ["shift()", "pop()", "slice()", "remove()"],
    answer: "shift()",
    explanation: "shift removes first element."
  },
  {
    question: "Which array method creates a new array?",
    options: ["map()", "forEach()", "push()", "pop()"],
    answer: "map()",
    explanation: "map returns a new array."
  },
  {
    question: "Which array method filters values?",
    options: ["map()", "filter()", "reduce()", "find()"],
    answer: "filter()",
    explanation: "filter returns matching elements."
  },
  {
    question: "Which array method reduces to single value?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    answer: "reduce()",
    explanation: "reduce combines array into one value."
  },
  {
    question: "Which keyword refers to current object?",
    options: ["this", "self", "that", "object"],
    answer: "this",
    explanation: "this refers to current execution context."
  },
  {
    question: "Which event runs when page loads?",
    options: ["onload", "onclick", "onchange", "onready"],
    answer: "onload",
    explanation: "onload fires after page loads."
  },
  {
    question: "Which symbol is used for comments?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//",
    explanation: "// is single-line comment."
  },
  {
    question: "Which keyword returns a value from function?",
    options: ["break", "return", "yield", "stop"],
    answer: "return",
    explanation: "return sends value back."
  },
  {
    question: "Which built-in object handles math operations?",
    options: ["Number", "Math", "Calc", "Integer"],
    answer: "Math",
    explanation: "Math object provides math methods."
  },
  {
    question: "Which method rounds down a number?",
    options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.fix()"],
    answer: "Math.floor()",
    explanation: "floor rounds down."
  },
  {
    question: "Which method rounds up?",
    options: ["Math.floor()", "Math.round()", "Math.ceil()", "Math.up()"],
    answer: "Math.ceil()",
    explanation: "ceil rounds up."
  },
  {
    question: "Which keyword stops function execution?",
    options: ["stop", "exit", "return", "break"],
    answer: "return",
    explanation: "return ends function execution."
  },
  {
    question: "JavaScript is ___ typed language.",
    options: ["Strongly", "Statically", "Dynamically", "Strictly"],
    answer: "Dynamically",
    explanation: "JS determines types at runtime."
  }
];


const Javascript_begin = () => {
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
            onClick={() => navigate("/javascript")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            ⚡ JavaScript Fundamentals Quiz - Beginner level
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

export default Javascript_begin;
