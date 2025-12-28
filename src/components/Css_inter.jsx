import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What does the CSS cascade primarily depend on?",
    options: [
      "Order, specificity, importance",
      "Only selector type",
      "Only inheritance",
      "Browser defaults"
    ],
    answer: "Order, specificity, importance",
    explanation: "Cascade resolves conflicts using importance, specificity, then order."
  },
  {
    question: "Which selector has the highest specificity?",
    options: [
      "Element selector",
      "Class selector",
      "Attribute selector",
      "ID selector"
    ],
    answer: "ID selector",
    explanation: "ID selectors have higher specificity than class or element selectors."
  },
  {
    question: "What does !important do?",
    options: [
      "Improves performance",
      "Overrides all specificity rules",
      "Overrides inline styles",
      "Stops inheritance"
    ],
    answer: "Overrides all specificity rules",
    explanation: "!important forces a rule to take precedence."
  },
  {
    question: "Which pseudo-class selects the first child?",
    options: [
      ":first",
      ":first-child",
      ":first-of-type",
      ":child"
    ],
    answer: ":first-child",
    explanation: ":first-child selects the first child of a parent."
  },
  {
    question: "Difference between :nth-child and :nth-of-type?",
    options: [
      "No difference",
      "nth-of-type ignores element type",
      "nth-child counts all nodes",
      "nth-of-type counts same type elements"
    ],
    answer: "nth-of-type counts same type elements",
    explanation: ":nth-of-type counts only same tag elements."
  },
  {
    question: "Which property creates a flex container?",
    options: [
      "display: flex",
      "flex: container",
      "position: flex",
      "align-items"
    ],
    answer: "display: flex",
    explanation: "display:flex creates a flex formatting context."
  },
  {
    question: "Which flex property controls main-axis alignment?",
    options: [
      "align-items",
      "align-content",
      "justify-content",
      "flex-wrap"
    ],
    answer: "justify-content",
    explanation: "justify-content aligns items along main axis."
  },
  {
    question: "Which flex property controls cross-axis alignment?",
    options: [
      "justify-content",
      "align-items",
      "flex-direction",
      "flex-flow"
    ],
    answer: "align-items",
    explanation: "align-items aligns along cross axis."
  },
  {
    question: "Which value reverses row direction in flexbox?",
    options: [
      "column-reverse",
      "row-inverse",
      "row-reverse",
      "reverse-row"
    ],
    answer: "row-reverse",
    explanation: "row-reverse reverses main axis direction."
  },
  {
    question: "What does flex-wrap: wrap do?",
    options: [
      "Shrinks items",
      "Wraps items to next line",
      "Centers items",
      "Stacks items vertically"
    ],
    answer: "Wraps items to next line",
    explanation: "wrap allows items to move to next line."
  },
  {
    question: "Which property defines grid container?",
    options: [
      "display: grid",
      "grid: true",
      "grid-container",
      "layout: grid"
    ],
    answer: "display: grid",
    explanation: "display:grid enables CSS Grid."
  },
  {
    question: "Which property defines grid columns?",
    options: [
      "grid-template-columns",
      "grid-columns",
      "grid-auto-columns",
      "column-template"
    ],
    answer: "grid-template-columns",
    explanation: "Defines number and size of columns."
  },
  {
    question: "What does fr unit represent?",
    options: [
      "Fixed ratio",
      "Fraction of free space",
      "Font relative",
      "Frame resolution"
    ],
    answer: "Fraction of free space",
    explanation: "fr distributes available space proportionally."
  },
  {
    question: "Which property creates gap between grid items?",
    options: [
      "margin",
      "spacing",
      "grid-gap",
      "padding"
    ],
    answer: "grid-gap",
    explanation: "grid-gap adds spacing between grid cells."
  },
  {
    question: "Which pseudo-class applies when input is focused?",
    options: [
      ":active",
      ":focus",
      ":hover",
      ":target"
    ],
    answer: ":focus",
    explanation: ":focus applies when element gains focus."
  },
  {
    question: "Which pseudo-class applies when mouse is over element?",
    options: [
      ":hover",
      ":active",
      ":visited",
      ":focus"
    ],
    answer: ":hover",
    explanation: ":hover triggers on mouse hover."
  },
  {
    question: "What does position: relative do?",
    options: [
      "Moves element relative to viewport",
      "Removes element from flow",
      "Positions relative to itself",
      "Fixes element"
    ],
    answer: "Positions relative to itself",
    explanation: "relative offsets element without removing from flow."
  },
  {
    question: "Which position removes element from normal flow?",
    options: [
      "relative",
      "absolute",
      "static",
      "sticky"
    ],
    answer: "absolute",
    explanation: "absolute removes element from document flow."
  },
  {
    question: "What does position: sticky require?",
    options: [
      "z-index",
      "top or bottom",
      "display flex",
      "float"
    ],
    answer: "top or bottom",
    explanation: "Sticky requires offset like top."
  },
  {
    question: "Which property clips overflowing content?",
    options: [
      "overflow",
      "clip-path",
      "mask",
      "visibility"
    ],
    answer: "clip-path",
    explanation: "clip-path clips content into shapes."
  },
  {
    question: "Which value of overflow allows scrolling?",
    options: [
      "hidden",
      "clip",
      "scroll",
      "visible"
    ],
    answer: "scroll",
    explanation: "scroll always shows scrollbars."
  },
  {
    question: "What does object-fit control?",
    options: [
      "Image size",
      "Image position inside container",
      "Background size",
      "Aspect ratio"
    ],
    answer: "Image position inside container",
    explanation: "object-fit controls how replaced elements fit."
  },
  {
    question: "Which value preserves image aspect ratio?",
    options: [
      "fill",
      "cover",
      "contain",
      "stretch"
    ],
    answer: "contain",
    explanation: "contain keeps full image visible."
  },
  {
    question: "Which property animates changes smoothly?",
    options: [
      "animation",
      "transition",
      "transform",
      "motion"
    ],
    answer: "transition",
    explanation: "transition animates property changes."
  },
  {
    question: "Which transition property defines duration?",
    options: [
      "transition-delay",
      "transition-time",
      "transition-duration",
      "transition-speed"
    ],
    answer: "transition-duration",
    explanation: "Defines how long transition lasts."
  },
  {
    question: "Which property defines keyframe animation?",
    options: [
      "@keyframes",
      "animation-frame",
      "frames",
      "@animate"
    ],
    answer: "@keyframes",
    explanation: "@keyframes defines animation steps."
  },
  {
    question: "Which property starts animation automatically?",
    options: [
      "animation-name",
      "animation-play-state",
      "animation",
      "animation-fill-mode"
    ],
    answer: "animation",
    explanation: "animation shorthand starts animation."
  },
  {
    question: "Which value pauses animation?",
    options: [
      "stop",
      "pause",
      "paused",
      "freeze"
    ],
    answer: "paused",
    explanation: "paused stops animation temporarily."
  },
  {
    question: "Which property controls animation repetition?",
    options: [
      "animation-count",
      "animation-repeat",
      "animation-iteration-count",
      "animation-loop"
    ],
    answer: "animation-iteration-count",
    explanation: "Controls number of animation cycles."
  },
  {
    question: "Which unit is relative to root font size?",
    options: [
      "em",
      "px",
      "rem",
      "%"
    ],
    answer: "rem",
    explanation: "rem is relative to root element."
  },
  {
    question: "Which property enables smooth scrolling?",
    options: [
      "scroll-behavior",
      "scroll-smooth",
      "overflow",
      "scroll-style"
    ],
    answer: "scroll-behavior",
    explanation: "scroll-behavior: smooth enables smooth scroll."
  },
  {
    question: "Which selector selects direct children only?",
    options: [
      " ",
      ">",
      "+",
      "~"
    ],
    answer: ">",
    explanation: "> selects direct children."
  },
  {
    question: "Which selector selects adjacent sibling?",
    options: [
      "+",
      "~",
      ">",
      "*"
    ],
    answer: "+",
    explanation: "+ selects immediate sibling."
  },
  {
    question: "Which selector selects all following siblings?",
    options: [
      "+",
      "~",
      ">",
      "|"
    ],
    answer: "~",
    explanation: "~ selects all following siblings."
  },
  {
    question: "Which property controls element resizing?",
    options: [
      "resize",
      "scale",
      "transform",
      "zoom"
    ],
    answer: "resize",
    explanation: "resize allows user resizing."
  },
  {
    question: "Which value enables resizing?",
    options: [
      "auto",
      "both",
      "resize",
      "enable"
    ],
    answer: "both",
    explanation: "both allows horizontal and vertical resize."
  },
  {
    question: "Which property hides element visually but keeps accessibility?",
    options: [
      "display:none",
      "visibility:hidden",
      "opacity:0",
      "clip-path"
    ],
    answer: "opacity:0",
    explanation: "opacity hides visually but remains accessible."
  },
  {
    question: "Which property creates stacking context?",
    options: [
      "position",
      "z-index",
      "opacity",
      "float"
    ],
    answer: "z-index",
    explanation: "z-index participates in stacking context."
  },
  {
    question: "Which CSS feature enables dark mode detection?",
    options: [
      "prefers-color-scheme",
      "color-mode",
      "theme",
      "dark-mode"
    ],
    answer: "prefers-color-scheme",
    explanation: "Media query detects user theme."
  },
  {
    question: "Which at-rule applies styles for print?",
    options: [
      "@print",
      "@media print",
      "@page",
      "@screen"
    ],
    answer: "@media print",
    explanation: "Print-specific styles use media query."
  },
  {
    question: "Which property controls aspect ratio?",
    options: [
      "ratio",
      "aspect-ratio",
      "width/height",
      "scale"
    ],
    answer: "aspect-ratio",
    explanation: "aspect-ratio locks width/height proportion."
  },
  {
    question: "Which value prevents image distortion?",
    options: [
      "fill",
      "cover",
      "contain",
      "none"
    ],
    answer: "contain",
    explanation: "contain avoids distortion."
  },
  {
    question: "Which CSS feature allows condition-based styling?",
    options: [
      "media queries",
      "keyframes",
      "variables",
      "mixins"
    ],
    answer: "media queries",
    explanation: "Media queries apply styles conditionally."
  },
  {
    question: "Which property stores reusable values?",
    options: [
      "constants",
      "variables",
      "custom properties",
      "values"
    ],
    answer: "custom properties",
    explanation: "CSS variables are custom properties."
  }
];

const Css_inter = () => {
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
            onClick={() => navigate("/css")}
          >
            BACK
          </button>

          <header className="text-lg md:text-xl font-extrabold text-white tracking-wide">
            🎨 CSS Fundamentals Quiz - Intermediate level
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

export default Css_inter;
