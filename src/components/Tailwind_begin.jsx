import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const allQuestions = [
  {
    question: "What is Tailwind CSS?",
    options: [
      "A component library",
      "A utility-first CSS framework",
      "A JavaScript framework",
      "A CSS preprocessor"
    ],
    answer: "A utility-first CSS framework",
    explanation: "Tailwind provides utility classes instead of predefined components."
  },
  {
    question: "Which file is used to configure Tailwind?",
    options: [
      "tailwind.json",
      "tailwind.config.js",
      "config.css",
      "theme.js"
    ],
    answer: "tailwind.config.js",
    explanation: "Tailwind customization happens in tailwind.config.js."
  },
  {
    question: "Which command generates Tailwind CSS output?",
    options: [
      "npm start",
      "tailwind build",
      "npx tailwindcss",
      "npm tailwind"
    ],
    answer: "npx tailwindcss",
    explanation: "Tailwind CLI is run using npx tailwindcss."
  },
  {
    question: "What does utility-first mean?",
    options: [
      "Uses only inline CSS",
      "Uses small reusable utility classes",
      "Uses JavaScript utilities",
      "Uses pre-built components"
    ],
    answer: "Uses small reusable utility classes",
    explanation: "Each class does one job, improving reusability."
  },
  {
    question: "Which class sets text color?",
    options: [
      "font-red",
      "text-red-500",
      "color-red",
      "fg-red"
    ],
    answer: "text-red-500",
    explanation: "text-{color}-{shade} sets text color."
  },
  {
    question: "Which class sets background color?",
    options: [
      "bg-red-500",
      "background-red",
      "bgcolor-red",
      "back-red"
    ],
    answer: "bg-red-500",
    explanation: "bg-* utilities control background color."
  },
  {
    question: "Which class controls padding?",
    options: [
      "p-4",
      "pad-4",
      "padding-4",
      "space-4"
    ],
    answer: "p-4",
    explanation: "p-* controls padding on all sides."
  },
  {
    question: "Which class controls margin?",
    options: [
      "m-4",
      "mg-4",
      "margin-4",
      "gap-4"
    ],
    answer: "m-4",
    explanation: "m-* controls margin."
  },
  {
    question: "Which class applies flexbox?",
    options: [
      "flex",
      "display-flex",
      "d-flex",
      "flexbox"
    ],
    answer: "flex",
    explanation: "flex enables flexbox layout."
  },
  {
    question: "Which class centers items horizontally in flex?",
    options: [
      "items-center",
      "justify-center",
      "content-center",
      "align-center"
    ],
    answer: "justify-center",
    explanation: "justify-center aligns along main axis."
  },
  {
    question: "Which class centers items vertically in flex?",
    options: [
      "justify-center",
      "items-center",
      "align-center",
      "center-items"
    ],
    answer: "items-center",
    explanation: "items-center aligns along cross axis."
  },
  {
    question: "Which class enables grid layout?",
    options: [
      "grid",
      "display-grid",
      "layout-grid",
      "css-grid"
    ],
    answer: "grid",
    explanation: "grid enables CSS Grid."
  },
  {
    question: "Which class defines number of grid columns?",
    options: [
      "grid-cols-3",
      "cols-3",
      "grid-3",
      "column-3"
    ],
    answer: "grid-cols-3",
    explanation: "grid-cols-* defines grid columns."
  },
  {
    question: "Which class controls gap between grid items?",
    options: [
      "gap-4",
      "space-4",
      "grid-gap-4",
      "margin-4"
    ],
    answer: "gap-4",
    explanation: "gap-* adds spacing between grid or flex items."
  },
  {
    question: "Which class sets font size?",
    options: [
      "font-lg",
      "text-lg",
      "size-lg",
      "text-size-lg"
    ],
    answer: "text-lg",
    explanation: "text-* controls font size."
  },
  {
    question: "Which class makes text bold?",
    options: [
      "font-bold",
      "text-bold",
      "bold",
      "weight-bold"
    ],
    answer: "font-bold",
    explanation: "font-bold increases font weight."
  },
  {
    question: "Which class rounds corners?",
    options: [
      "rounded",
      "radius",
      "corner-round",
      "border-round"
    ],
    answer: "rounded",
    explanation: "rounded adds border radius."
  },
  {
    question: "Which class fully rounds an element?",
    options: [
      "rounded-xl",
      "rounded-full",
      "rounded-max",
      "circle"
    ],
    answer: "rounded-full",
    explanation: "rounded-full makes circle or pill shapes."
  },
  {
    question: "Which class adds shadow?",
    options: [
      "shadow",
      "box-shadow",
      "shadow-md",
      "Both shadow and shadow-md"
    ],
    answer: "Both shadow and shadow-md",
    explanation: "shadow utilities add box-shadow."
  },
  {
    question: "Which class hides an element?",
    options: [
      "hidden",
      "invisible",
      "display-none",
      "opacity-0"
    ],
    answer: "hidden",
    explanation: "hidden applies display:none."
  },
  {
    question: "Which class controls opacity?",
    options: [
      "opacity-50",
      "transparent-50",
      "alpha-50",
      "fade-50"
    ],
    answer: "opacity-50",
    explanation: "opacity-* controls transparency."
  },
  {
    question: "Which class sets width?",
    options: [
      "w-64",
      "width-64",
      "size-64",
      "col-64"
    ],
    answer: "w-64",
    explanation: "w-* sets width."
  },
  {
    question: "Which class sets height?",
    options: [
      "h-64",
      "height-64",
      "size-64",
      "row-64"
    ],
    answer: "h-64",
    explanation: "h-* sets height."
  },
  {
    question: "Which class makes element full width?",
    options: [
      "w-screen",
      "w-full",
      "full-width",
      "width-100"
    ],
    answer: "w-full",
    explanation: "w-full sets width to 100%."
  },
  {
    question: "Which class makes text center aligned?",
    options: [
      "text-center",
      "align-center",
      "center-text",
      "justify-center"
    ],
    answer: "text-center",
    explanation: "text-center centers text."
  },
  {
    question: "Which class controls overflow?",
    options: [
      "overflow-hidden",
      "hidden-overflow",
      "clip",
      "scroll-none"
    ],
    answer: "overflow-hidden",
    explanation: "overflow-hidden clips overflowing content."
  },
  {
    question: "Which class sets position relative?",
    options: [
      "relative",
      "position-relative",
      "rel",
      "pos-rel"
    ],
    answer: "relative",
    explanation: "relative enables relative positioning."
  },
  {
    question: "Which class sets position absolute?",
    options: [
      "absolute",
      "position-absolute",
      "abs",
      "pos-abs"
    ],
    answer: "absolute",
    explanation: "absolute removes element from normal flow."
  },
  {
    question: "Which class fixes element to viewport?",
    options: [
      "fixed",
      "sticky",
      "absolute",
      "static"
    ],
    answer: "fixed",
    explanation: "fixed positions element relative to viewport."
  },
  {
    question: "Which class sets z-index?",
    options: [
      "z-10",
      "index-10",
      "layer-10",
      "depth-10"
    ],
    answer: "z-10",
    explanation: "z-* controls stacking order."
  },
  {
    question: "Which class changes cursor to pointer?",
    options: [
      "cursor-pointer",
      "pointer",
      "cursor-hand",
      "mouse-pointer"
    ],
    answer: "cursor-pointer",
    explanation: "cursor-pointer shows clickable cursor."
  },
  {
    question: "Which class disables pointer events?",
    options: [
      "pointer-events-none",
      "no-pointer",
      "disable-click",
      "click-none"
    ],
    answer: "pointer-events-none",
    explanation: "Disables mouse interaction."
  },
  {
    question: "Which class controls font family?",
    options: [
      "font-sans",
      "text-sans",
      "sans",
      "family-sans"
    ],
    answer: "font-sans",
    explanation: "font-sans applies sans-serif font."
  },
  {
    question: "Which class applies hover effect?",
    options: [
      "hover:bg-red-500",
      "onhover:bg-red",
      "hovered-red",
      "hover-red"
    ],
    answer: "hover:bg-red-500",
    explanation: "hover: applies styles on hover."
  },
  {
    question: "Which class applies focus styles?",
    options: [
      "focus:ring",
      "onfocus:ring",
      "focus-style",
      "ring-focus"
    ],
    answer: "focus:ring",
    explanation: "focus: applies when element is focused."
  },
  {
    question: "Which class controls transition?",
    options: [
      "transition",
      "animate",
      "motion",
      "smooth"
    ],
    answer: "transition",
    explanation: "transition enables smooth changes."
  },
  {
    question: "Which class controls transition duration?",
    options: [
      "duration-300",
      "time-300",
      "speed-300",
      "delay-300"
    ],
    answer: "duration-300",
    explanation: "duration-* controls animation time."
  },
  {
    question: "Which class adds delay to transition?",
    options: [
      "delay-200",
      "pause-200",
      "wait-200",
      "hold-200"
    ],
    answer: "delay-200",
    explanation: "delay-* delays transition start."
  },
  {
    question: "Which class controls easing?",
    options: [
      "ease-in-out",
      "smooth",
      "linear-motion",
      "curve"
    ],
    answer: "ease-in-out",
    explanation: "ease-* controls animation timing."
  },
  {
    question: "Which class hides element visually but keeps space?",
    options: [
      "invisible",
      "hidden",
      "opacity-0",
      "collapse"
    ],
    answer: "invisible",
    explanation: "invisible hides but keeps layout space."
  },
  {
    question: "Which class controls list style?",
    options: [
      "list-none",
      "no-list",
      "list-remove",
      "unstyled"
    ],
    answer: "list-none",
    explanation: "list-none removes bullets."
  },
  {
    question: "Which class sets max width?",
    options: [
      "max-w-lg",
      "w-lg",
      "limit-lg",
      "width-max"
    ],
    answer: "max-w-lg",
    explanation: "max-w-* limits width."
  },
  {
    question: "Which class centers container horizontally?",
    options: [
      "mx-auto",
      "center",
      "auto-center",
      "align-center"
    ],
    answer: "mx-auto",
    explanation: "mx-auto centers horizontally."
  },
  {
    question: "Which class controls breakpoints?",
    options: [
      "sm:",
      "break:",
      "media:",
      "screen:"
    ],
    answer: "sm:",
    explanation: "sm:, md:, lg: apply responsive styles."
  },
  {
    question: "Which Tailwind feature removes unused CSS?",
    options: [
      "JIT",
      "Purge",
      "Minify",
      "Compress"
    ],
    answer: "Purge",
    explanation: "Purge removes unused utility classes."
  }
];

const Tailwind_begin = () => {
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

        <div className="w-full h-16 bg-linear-to-r from-teal-600 to-cyan-500 
        flex items-center justify-center px-10 shadow-md relative">

          <button
            className="absolute left-10 w-32 h-10 border border-white/40 text-white
            rounded-lg text-sm font-semibold hover:bg-white hover:text-teal-600"
            onClick={() => navigate("/tailwind")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
           🌬️ Tailwind CSS Fundamentals Quiz - Beginner level
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
                onClick={() => navigate("/tailwind")}
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

export default Tailwind_begin;
