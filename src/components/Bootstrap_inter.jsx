import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What breakpoint does `md` represent in Bootstrap 5?",
    options: ["≥576px", "≥768px", "≥992px", "≥1200px"],
    answer: "≥768px",
    explanation: "md breakpoint starts at 768px."
  },
  {
    question: "Which class enables responsive column sizing?",
    options: [".col-auto", ".col-md", ".row-auto", ".grid-md"],
    answer: ".col-md",
    explanation: "col-md applies column rules at md and above."
  },
  {
    question: "What does `.g-3` control?",
    options: ["Margin", "Padding", "Grid gap", "Column width"],
    answer: "Grid gap",
    explanation: "g-* controls gutter spacing."
  },
  {
    question: "Which utility hides element visually but keeps space?",
    options: [".d-none", ".invisible", ".opacity-0", ".hidden"],
    answer: ".invisible",
    explanation: ".invisible hides element but keeps layout space."
  },
  {
    question: "Which class aligns items vertically in flexbox?",
    options: [".justify-content-center", ".align-items-center", ".flex-center", ".items-center"],
    answer: ".align-items-center",
    explanation: "Aligns items along cross axis."
  },
  {
    question: "Which utility enables flexbox?",
    options: [".flex", ".d-flex", ".flexbox", ".display-flex"],
    answer: ".d-flex",
    explanation: ".d-flex enables flex container."
  },
  {
    question: "Which class reverses flex direction?",
    options: [".flex-reverse", ".flex-row-reverse", ".row-reverse", ".reverse-flex"],
    answer: ".flex-row-reverse",
    explanation: "Reverses horizontal direction."
  },
  {
    question: "What does `.order-1` do?",
    options: [
      "Changes DOM order",
      "Changes visual order",
      "Moves element first always",
      "Affects z-index"
    ],
    answer: "Changes visual order",
    explanation: "order utilities affect visual order only."
  },
  {
    question: "Which class makes image float left?",
    options: [".float-left", ".float-start", ".img-left", ".left"],
    answer: ".float-start",
    explanation: "Bootstrap 5 uses logical directions."
  },
  {
    question: "Which class clears floats?",
    options: [".clearfix", ".clear", ".float-none", ".reset-float"],
    answer: ".clearfix",
    explanation: "clearfix clears floated elements."
  },
  {
    question: "Which class makes navbar collapse on mobile?",
    options: [".navbar-collapse", ".navbar-expand-lg", ".collapse", ".nav-mobile"],
    answer: ".navbar-expand-lg",
    explanation: "Navbar expands from lg breakpoint."
  },
  {
    question: "Which attribute triggers dropdown?",
    options: ["data-bs-toggle", "data-toggle", "data-dropdown", "data-menu"],
    answer: "data-bs-toggle",
    explanation: "Bootstrap 5 uses data-bs-* attributes."
  },
  {
    question: "Which component requires JavaScript?",
    options: ["Grid", "Buttons", "Cards", "Modal"],
    answer: "Modal",
    explanation: "Modal needs JS for interactivity."
  },
  {
    question: "Which class centers modal vertically?",
    options: [".modal-center", ".modal-dialog-centered", ".center-modal", ".modal-middle"],
    answer: ".modal-dialog-centered",
    explanation: "Centers modal vertically."
  },
  {
    question: "Which utility controls text wrapping?",
    options: [".text-wrap", ".text-break", ".text-nowrap", "All of these"],
    answer: "All of these",
    explanation: "Bootstrap provides multiple wrapping utilities."
  },
  {
    question: "Which class limits container width?",
    options: [".container", ".container-fluid", ".container-md", ".w-100"],
    answer: ".container-md",
    explanation: "Responsive containers adjust by breakpoint."
  },
  {
    question: "Which utility controls overflow?",
    options: [".overflow-hidden", ".hide-overflow", ".clip", ".no-overflow"],
    answer: ".overflow-hidden",
    explanation: "Controls content overflow."
  },
  {
    question: "Which class adds rounded corners?",
    options: [".rounded", ".radius", ".corner", ".border-round"],
    answer: ".rounded",
    explanation: "Adds border radius."
  },
  {
    question: "Which utility adds shadow intensity?",
    options: [".shadow-lg", ".shadow-xl", ".box-shadow", ".deep-shadow"],
    answer: ".shadow-lg",
    explanation: "Bootstrap provides shadow sizes."
  },
  {
    question: "Which class aligns text responsively?",
    options: [".text-md-center", ".align-md-center", ".center-md", ".md-text-center"],
    answer: ".text-md-center",
    explanation: "Applies alignment at md and above."
  },
  {
    question: "Which utility sets width to auto?",
    options: [".w-auto", ".width-auto", ".auto-w", ".fit"],
    answer: ".w-auto",
    explanation: "Auto width utility."
  },
  {
    question: "Which class enables sticky positioning?",
    options: [".sticky", ".position-sticky", ".fixed-top", ".sticky-top"],
    answer: ".sticky-top",
    explanation: "Sticky element sticks at top."
  },
  {
    question: "Which helper visually hides text but keeps accessibility?",
    options: [".d-none", ".visually-hidden", ".invisible", ".hide"],
    answer: ".visually-hidden",
    explanation: "Used for screen-reader-only content."
  },
  {
    question: "Which class controls line height?",
    options: [".lh-1", ".line-height", ".leading", ".text-height"],
    answer: ".lh-1",
    explanation: "Line-height utilities."
  },
  {
    question: "Which utility sets max-width?",
    options: [".mw-100", ".max-w", ".w-max", ".limit"],
    answer: ".mw-100",
    explanation: "Controls max width."
  },
  {
    question: "Which class enables list group?",
    options: [".list", ".list-group", ".group-list", ".ul-group"],
    answer: ".list-group",
    explanation: "List group component."
  },
  {
    question: "Which utility controls gap in flex?",
    options: [".gap-3", ".space-3", ".flex-gap", ".g-3"],
    answer: ".gap-3",
    explanation: "Gap works with flex & grid."
  }
];


const Bootstrap_inter = () => {
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
            onClick={() => navigate("/bootstrap")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             🅱️ Bootstrap Fundamentals Quiz - Intermediate level
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

export default Bootstrap_inter;
