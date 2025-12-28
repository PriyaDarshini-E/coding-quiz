import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Style Sheets"
    ],
    answer: "Cascading Style Sheets",
    explanation: "CSS stands for Cascading Style Sheets."
  },
  {
    question: "Which HTML tag is used to apply CSS internally?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: "<style>",
    explanation: "<style> is used for internal CSS."
  },
  {
    question: "Which attribute links an external CSS file?",
    options: ["src", "href", "rel", "type"],
    answer: "href",
    explanation: "href specifies the path to the CSS file."
  },
  {
    question: "Which property changes text color?",
    options: ["font-color", "color", "text-color", "fgcolor"],
    answer: "color",
    explanation: "color sets the text color."
  },
  {
    question: "Which property sets background color?",
    options: ["bgcolor", "background", "background-color", "color"],
    answer: "background-color",
    explanation: "background-color sets element background color."
  },
  {
    question: "Which unit is relative to parent element?",
    options: ["px", "em", "cm", "pt"],
    answer: "em",
    explanation: "em is relative to parent font size."
  },
  {
    question: "Which selector selects all elements?",
    options: ["*", "all", "body", "."],
    answer: "*",
    explanation: "* selects all elements."
  },
  {
    question: "Which selector selects by id?",
    options: [".", "#", "*", "&"],
    answer: "#",
    explanation: "# selects element by id."
  },
  {
    question: "Which selector selects by class?",
    options: ["#", ".", "*", "&"],
    answer: ".",
    explanation: ". selects elements by class."
  },
  {
    question: "Which property changes font size?",
    options: ["font", "font-style", "font-size", "text-size"],
    answer: "font-size",
    explanation: "font-size controls text size."
  },
  {
    question: "Which property makes text bold?",
    options: ["font-style", "font-weight", "text-bold", "bold"],
    answer: "font-weight",
    explanation: "font-weight controls thickness."
  },
  {
    question: "Which value makes text italic?",
    options: ["italic", "bold", "underline", "oblique"],
    answer: "italic",
    explanation: "italic slants the text."
  },
  {
    question: "Which property aligns text horizontally?",
    options: ["align", "text-align", "position", "float"],
    answer: "text-align",
    explanation: "text-align aligns text."
  },
  {
    question: "Which property removes underline from links?",
    options: ["text-style", "decoration", "text-decoration", "font-style"],
    answer: "text-decoration",
    explanation: "text-decoration removes underline."
  },
  {
    question: "Which value removes list bullets?",
    options: ["none", "hidden", "0", "remove"],
    answer: "none",
    explanation: "list-style-type:none removes bullets."
  },
  {
    question: "Which property controls element width?",
    options: ["size", "width", "length", "box"],
    answer: "width",
    explanation: "width defines element width."
  },
  {
    question: "Which property controls element height?",
    options: ["size", "height", "length", "box"],
    answer: "height",
    explanation: "height defines element height."
  },
  {
    question: "Which property adds space inside element?",
    options: ["margin", "padding", "gap", "space"],
    answer: "padding",
    explanation: "padding adds inner spacing."
  },
  {
    question: "Which property adds space outside element?",
    options: ["margin", "padding", "gap", "space"],
    answer: "margin",
    explanation: "margin adds outer spacing."
  },
  {
    question: "Which shorthand controls all margins?",
    options: ["margin-all", "margin", "space", "padding"],
    answer: "margin",
    explanation: "margin shorthand sets all sides."
  },
  {
    question: "Which property controls border color?",
    options: ["border", "border-style", "border-color", "outline"],
    answer: "border-color",
    explanation: "border-color sets border color."
  },
  {
    question: "Which property rounds corners?",
    options: ["corner", "border-radius", "radius", "round"],
    answer: "border-radius",
    explanation: "border-radius rounds corners."
  },
  {
    question: "Which property hides overflow content?",
    options: ["overflow", "hidden", "clip", "scroll"],
    answer: "overflow",
    explanation: "overflow controls overflow behavior."
  },
  {
    question: "Which value hides overflow?",
    options: ["none", "hidden", "clip", "remove"],
    answer: "hidden",
    explanation: "hidden hides overflow content."
  },
  {
    question: "Which display value makes element inline?",
    options: ["block", "inline", "flex", "grid"],
    answer: "inline",
    explanation: "inline makes element inline."
  },
  {
    question: "Which display value hides element but keeps space?",
    options: ["none", "hidden", "visibility:hidden", "opacity:0"],
    answer: "visibility:hidden",
    explanation: "visibility:hidden hides but keeps space."
  },
  {
    question: "Which display value removes element from layout?",
    options: ["hidden", "none", "opacity", "invisible"],
    answer: "none",
    explanation: "display:none removes element."
  },
  {
    question: "Which property changes cursor?",
    options: ["mouse", "pointer", "cursor", "hand"],
    answer: "cursor",
    explanation: "cursor changes mouse pointer."
  },
  {
    question: "Which value shows hand cursor?",
    options: ["grab", "hand", "pointer", "click"],
    answer: "pointer",
    explanation: "pointer shows clickable cursor."
  },
  {
    question: "Which property controls transparency?",
    options: ["visibility", "opacity", "alpha", "filter"],
    answer: "opacity",
    explanation: "opacity controls transparency."
  },
  {
    question: "Which property sets background image?",
    options: ["bg-image", "background", "background-image", "image"],
    answer: "background-image",
    explanation: "background-image sets image."
  },
  {
    question: "Which value repeats background by default?",
    options: ["repeat", "no-repeat", "repeat-x", "repeat-y"],
    answer: "repeat",
    explanation: "repeat is default background behavior."
  },
  {
    question: "Which property controls background size?",
    options: ["bg-size", "background-size", "size", "image-size"],
    answer: "background-size",
    explanation: "background-size controls image scaling."
  },
  {
    question: "Which value covers entire container?",
    options: ["contain", "fit", "cover", "stretch"],
    answer: "cover",
    explanation: "cover fills container."
  },
  {
    question: "Which property changes font family?",
    options: ["font-style", "font", "font-family", "text-font"],
    answer: "font-family",
    explanation: "font-family sets font type."
  },
  {
    question: "Which value is default position?",
    options: ["relative", "absolute", "static", "fixed"],
    answer: "static",
    explanation: "static is default position."
  },
  {
    question: "Which property controls stacking order?",
    options: ["layer", "index", "z-index", "stack"],
    answer: "z-index",
    explanation: "z-index controls stack order."
  },
  {
    question: "Which position uses viewport?",
    options: ["relative", "absolute", "fixed", "static"],
    answer: "fixed",
    explanation: "fixed positions relative to viewport."
  },
  {
    question: "Which property controls text wrapping?",
    options: ["white-space", "wrap", "text-wrap", "overflow"],
    answer: "white-space",
    explanation: "white-space controls wrapping."
  },
  {
    question: "Which unit is viewport-based?",
    options: ["em", "px", "vh", "pt"],
    answer: "vh",
    explanation: "vh is viewport height."
  },
  {
    question: "Which property adds shadow to text?",
    options: ["box-shadow", "text-shadow", "shadow", "font-shadow"],
    answer: "text-shadow",
    explanation: "text-shadow adds shadow to text."
  },
  {
    question: "Which property adds shadow to box?",
    options: ["shadow", "text-shadow", "box-shadow", "border-shadow"],
    answer: "box-shadow",
    explanation: "box-shadow adds shadow to elements."
  },
  {
    question: "Which CSS is highest priority?",
    options: ["external", "internal", "inline", "browser default"],
    answer: "inline",
    explanation: "Inline CSS has highest priority."
  },
  {
    question: "Which keyword resets property to default?",
    options: ["unset", "none", "default", "initial"],
    answer: "initial",
    explanation: "initial resets property."
  },
  {
    question: "Which property smooths font edges?",
    options: ["font-smooth", "antialias", "text-rendering", "smooth"],
    answer: "text-rendering",
    explanation: "text-rendering improves font display."
  },
  {
    question: "Which property transforms element?",
    options: ["animate", "transform", "translate", "rotate"],
    answer: "transform",
    explanation: "transform applies transformation."
  }
];

const Css_begin = () => {
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
            onClick={() => navigate("/css")}
          >
            BACK
          </button>
          
          <header className="text-lg md:text-xl font-extrabold text-white tracking-wide">
            🎨 CSS Fundamentals Quiz - Beginner level
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
                ${selected
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
                onClick={() => navigate("/css")}
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

export default Css_begin;
