import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is Bootstrap?",
    options: [
      "A JavaScript framework",
      "A CSS framework",
      "A database tool",
      "A backend library"
    ],
    answer: "A CSS framework",
    explanation: "Bootstrap is a front-end CSS framework for responsive design."
  },
  {
    question: "Bootstrap is mainly used for?",
    options: [
      "Backend development",
      "Database management",
      "Responsive UI design",
      "Server configuration"
    ],
    answer: "Responsive UI design",
    explanation: "Bootstrap helps build responsive web interfaces."
  },
  {
    question: "Which company originally developed Bootstrap?",
    options: [
      "Google",
      "Facebook",
      "Twitter",
      "Microsoft"
    ],
    answer: "Twitter",
    explanation: "Bootstrap was developed by Twitter engineers."
  },
  {
    question: "Which file contains Bootstrap CSS?",
    options: [
      "bootstrap.js",
      "bootstrap.css",
      "bootstrap.html",
      "bootstrap.json"
    ],
    answer: "bootstrap.css",
    explanation: "bootstrap.css contains all styling rules."
  },
  {
    question: "Which file contains Bootstrap JavaScript?",
    options: [
      "bootstrap.css",
      "bootstrap.js",
      "bootstrap.html",
      "bootstrap.txt"
    ],
    answer: "bootstrap.js",
    explanation: "bootstrap.js adds interactive components."
  },
  {
    question: "Bootstrap uses which layout system?",
    options: [
      "Flex system",
      "Box model",
      "Grid system",
      "Table layout"
    ],
    answer: "Grid system",
    explanation: "Bootstrap uses a 12-column grid system."
  },
  {
    question: "How many columns are there in Bootstrap grid?",
    options: ["6", "8", "10", "12"],
    answer: "12",
    explanation: "Bootstrap grid is divided into 12 columns."
  },
  {
    question: "Which class creates a fixed-width container?",
    options: [
      ".container",
      ".container-fluid",
      ".row",
      ".col"
    ],
    answer: ".container",
    explanation: ".container provides fixed-width layout."
  },
  {
    question: "Which class creates full-width container?",
    options: [
      ".container",
      ".container-fluid",
      ".row",
      ".fluid"
    ],
    answer: ".container-fluid",
    explanation: "container-fluid spans full viewport width."
  },
  {
    question: "Which class creates a row in grid?",
    options: [
      ".grid",
      ".row",
      ".col",
      ".box"
    ],
    answer: ".row",
    explanation: ".row wraps columns in grid."
  },
  {
    question: "Which class defines columns?",
    options: [
      ".row",
      ".grid",
      ".col",
      ".column"
    ],
    answer: ".col",
    explanation: ".col defines grid columns."
  },
  {
    question: "Which class makes image responsive?",
    options: [
      ".img-responsive",
      ".img-fluid",
      ".img-fit",
      ".image-fluid"
    ],
    answer: ".img-fluid",
    explanation: ".img-fluid scales image with parent."
  },
  {
    question: "Which class centers text?",
    options: [
      ".text-middle",
      ".text-center",
      ".align-center",
      ".center-text"
    ],
    answer: ".text-center",
    explanation: ".text-center centers text horizontally."
  },
  {
    question: "Which class makes text bold?",
    options: [
      ".font-bold",
      ".fw-bold",
      ".text-bold",
      ".bold"
    ],
    answer: ".fw-bold",
    explanation: ".fw-bold applies font-weight bold."
  },
  {
    question: "Which class changes text color to primary?",
    options: [
      ".color-primary",
      ".text-primary",
      ".primary-text",
      ".txt-primary"
    ],
    answer: ".text-primary",
    explanation: ".text-primary applies primary theme color."
  },
  {
    question: "Which class sets background to primary?",
    options: [
      ".bg-primary",
      ".background-primary",
      ".primary-bg",
      ".bg-main"
    ],
    answer: ".bg-primary",
    explanation: ".bg-primary sets primary background color."
  },
  {
    question: "Which class adds margin?",
    options: [
      ".p-3",
      ".m-3",
      ".space-3",
      ".gap-3"
    ],
    answer: ".m-3",
    explanation: ".m-* controls margin."
  },
  {
    question: "Which class adds padding?",
    options: [
      ".m-3",
      ".p-3",
      ".pad-3",
      ".space-3"
    ],
    answer: ".p-3",
    explanation: ".p-* controls padding."
  },
  {
    question: "Which class hides element?",
    options: [
      ".hidden",
      ".d-none",
      ".invisible",
      ".hide"
    ],
    answer: ".d-none",
    explanation: ".d-none removes element from layout."
  },
  {
    question: "Which class makes element visible only on large screens?",
    options: [
      ".d-lg-block",
      ".show-lg",
      ".visible-lg",
      ".lg-show"
    ],
    answer: ".d-lg-block",
    explanation: "d-lg-block shows element on lg screens."
  },
  {
    question: "Which class makes button primary?",
    options: [
      ".btn-main",
      ".btn-primary",
      ".btn-blue",
      ".btn-default"
    ],
    answer: ".btn-primary",
    explanation: ".btn-primary styles primary button."
  },
  {
    question: "Which class creates outline button?",
    options: [
      ".btn-outline-primary",
      ".btn-border",
      ".btn-line",
      ".btn-outline"
    ],
    answer: ".btn-outline-primary",
    explanation: "Outline buttons have border only."
  },
  {
    question: "Which class disables button?",
    options: [
      ".disabled",
      ".btn-disabled",
      ".disable",
      ".inactive"
    ],
    answer: ".disabled",
    explanation: ".disabled disables interaction."
  },
  {
    question: "Which class makes navbar responsive?",
    options: [
      ".navbar-responsive",
      ".navbar-expand",
      ".nav-flex",
      ".navbar-fluid"
    ],
    answer: ".navbar-expand",
    explanation: "navbar-expand controls collapse behavior."
  },
  {
    question: "Which class creates a dropdown?",
    options: [
      ".dropdown",
      ".menu",
      ".select",
      ".list"
    ],
    answer: ".dropdown",
    explanation: ".dropdown creates dropdown menu."
  },
  {
    question: "Which class creates a card?",
    options: [
      ".panel",
      ".box",
      ".card",
      ".tile"
    ],
    answer: ".card",
    explanation: "Cards are flexible content containers."
  },
  {
    question: "Which class adds shadow?",
    options: [
      ".shadow",
      ".box-shadow",
      ".shadow-sm",
      ".Both A and C"
    ],
    answer: ".Both A and C",
    explanation: "Bootstrap provides multiple shadow utilities."
  },
  {
    question: "Which class aligns items center using flex?",
    options: [
      ".align-center",
      ".justify-content-center",
      ".flex-center",
      ".center"
    ],
    answer: ".justify-content-center",
    explanation: "Flex utility centers content horizontally."
  },
  {
    question: "Bootstrap icons are included by default?",
    options: [
      "Yes",
      "No",
      "Only in Bootstrap 5",
      "Only in Bootstrap 4"
    ],
    answer: "No",
    explanation: "Bootstrap Icons are a separate library."
  }
];


const Bootstrap_begin = () => {
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
            onClick={() => navigate("/bootstrap")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             🅱️ Bootstrap Fundamentals Quiz - Beginner level
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
                onClick={() => navigate("/bootstrap")}
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

export default Bootstrap_begin;
