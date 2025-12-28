import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What creates a new stacking context in CSS?",
    options: [
      "position: relative",
      "z-index alone",
      "opacity less than 1",
      "float property"
    ],
    answer: "opacity less than 1",
    explanation: "Any element with opacity < 1 creates a new stacking context."
  },
  {
    question: "Which CSS feature isolates layout, style, and paint?",
    options: [
      "contain",
      "isolation",
      "will-change",
      "overflow"
    ],
    answer: "contain",
    explanation: "contain optimizes rendering by isolating element behavior."
  },
  {
    question: "What does contain: layout do?",
    options: [
      "Prevents repaint",
      "Prevents reflow outside element",
      "Freezes element",
      "Stops animations"
    ],
    answer: "Prevents reflow outside element",
    explanation: "Layout containment prevents layout recalculation outside."
  },
  {
    question: "Which property hints browser for future animations?",
    options: [
      "transition",
      "will-change",
      "transform",
      "animation"
    ],
    answer: "will-change",
    explanation: "will-change prepares browser for upcoming changes."
  },
  {
    question: "Improper use of will-change can cause?",
    options: [
      "Slower JS",
      "Memory leaks",
      "CSS errors",
      "Layout shift"
    ],
    answer: "Memory leaks",
    explanation: "will-change consumes resources if overused."
  },
  {
    question: "Which CSS feature enables container-based responsiveness?",
    options: [
      "media queries",
      "container queries",
      "flexbox",
      "grid"
    ],
    answer: "container queries",
    explanation: "Container queries respond to parent size, not viewport."
  },
  {
    question: "Which at-rule defines container queries?",
    options: [
      "@media",
      "@container",
      "@supports",
      "@query"
    ],
    answer: "@container",
    explanation: "@container enables container query rules."
  },
  {
    question: "What does isolation: isolate do?",
    options: [
      "Creates stacking context",
      "Stops inheritance",
      "Improves performance",
      "Locks z-index"
    ],
    answer: "Creates stacking context",
    explanation: "isolation:isolate creates a new stacking context."
  },
  {
    question: "Which property prevents margin collapse?",
    options: [
      "overflow: hidden",
      "display: flex",
      "position: relative",
      "contain: layout"
    ],
    answer: "display: flex",
    explanation: "Flex containers prevent margin collapsing."
  },
  {
    question: "Which CSS feature enables logical layouts for RTL languages?",
    options: [
      "logical properties",
      "flexbox",
      "grid",
      "writing-mode"
    ],
    answer: "logical properties",
    explanation: "Logical properties adapt to text direction."
  },
  {
    question: "Which logical property replaces margin-left?",
    options: [
      "margin-start",
      "margin-inline-start",
      "margin-logical",
      "margin-x"
    ],
    answer: "margin-inline-start",
    explanation: "margin-inline-start adapts to text direction."
  },
  {
    question: "What does writing-mode control?",
    options: [
      "Font orientation",
      "Text direction flow",
      "Language",
      "Character encoding"
    ],
    answer: "Text direction flow",
    explanation: "writing-mode controls text flow direction."
  },
  {
    question: "Which CSS function clamps responsive values?",
    options: [
      "min()",
      "max()",
      "clamp()",
      "calc()"
    ],
    answer: "clamp()",
    explanation: "clamp() defines min, ideal, and max values."
  },
  {
    question: "Which function combines different units mathematically?",
    options: [
      "clamp()",
      "var()",
      "calc()",
      "env()"
    ],
    answer: "calc()",
    explanation: "calc() allows runtime calculations."
  },
  {
    question: "Which CSS feature accesses OS environment variables?",
    options: [
      "var()",
      "env()",
      "sys()",
      "root()"
    ],
    answer: "env()",
    explanation: "env() accesses environment values like safe-area."
  },
  {
    question: "Which property improves font loading behavior?",
    options: [
      "font-display",
      "font-smooth",
      "text-rendering",
      "font-style"
    ],
    answer: "font-display",
    explanation: "font-display controls font loading strategy."
  },
  {
    question: "Which value avoids invisible text during font load?",
    options: [
      "block",
      "auto",
      "swap",
      "fallback"
    ],
    answer: "swap",
    explanation: "swap displays fallback font immediately."
  },
  {
    question: "Which CSS feature isolates blend effects?",
    options: [
      "mix-blend-mode",
      "background-blend-mode",
      "isolation",
      "opacity"
    ],
    answer: "isolation",
    explanation: "isolation prevents blending with background."
  },
  {
    question: "Which property controls how elements blend?",
    options: [
      "filter",
      "mix-blend-mode",
      "opacity",
      "overlay"
    ],
    answer: "mix-blend-mode",
    explanation: "mix-blend-mode controls blending behavior."
  },
  {
    question: "Which CSS feature enables scroll-driven animations?",
    options: [
      "scroll-behavior",
      "scroll-timeline",
      "position: sticky",
      "overflow"
    ],
    answer: "scroll-timeline",
    explanation: "Scroll timelines drive animations by scroll."
  },
  {
    question: "Which pseudo-class detects focus visibility?",
    options: [
      ":focus",
      ":focus-visible",
      ":active",
      ":hover"
    ],
    answer: ":focus-visible",
    explanation: "focus-visible applies only when focus is visible."
  },
  {
    question: "Which selector checks browser feature support?",
    options: [
      "@media",
      "@supports",
      "@container",
      "@feature"
    ],
    answer: "@supports",
    explanation: "@supports enables feature queries."
  },
  {
    question: "Which property improves scrolling performance?",
    options: [
      "scroll-snap",
      "will-change",
      "overflow",
      "touch-action"
    ],
    answer: "touch-action",
    explanation: "touch-action improves gesture handling."
  },
  {
    question: "Which property disables default touch behavior?",
    options: [
      "touch-action",
      "pointer-events",
      "user-select",
      "overscroll-behavior"
    ],
    answer: "touch-action",
    explanation: "touch-action controls touch gestures."
  },
  {
    question: "Which property controls scroll chaining?",
    options: [
      "scroll-behavior",
      "overscroll-behavior",
      "overflow",
      "scroll-snap"
    ],
    answer: "overscroll-behavior",
    explanation: "overscroll-behavior controls scroll chaining."
  },
  {
    question: "Which CSS feature reduces CLS in images?",
    options: [
      "aspect-ratio",
      "object-fit",
      "contain",
      "overflow"
    ],
    answer: "aspect-ratio",
    explanation: "aspect-ratio reserves layout space."
  },
  {
    question: "Which property prevents text selection?",
    options: [
      "pointer-events",
      "user-select",
      "touch-action",
      "selection"
    ],
    answer: "user-select",
    explanation: "user-select controls text selection."
  },
  {
    question: "Which property allows click-through behavior?",
    options: [
      "opacity",
      "pointer-events",
      "z-index",
      "visibility"
    ],
    answer: "pointer-events",
    explanation: "pointer-events:none disables mouse interaction."
  },
  {
    question: "Which CSS feature supports theme switching?",
    options: [
      "media queries",
      "custom properties",
      "calc()",
      "supports"
    ],
    answer: "custom properties",
    explanation: "CSS variables enable dynamic theming."
  },
  {
    question: "Which pseudo-element styles user-selected text?",
    options: [
      "::selection",
      "::highlight",
      "::focus",
      "::active"
    ],
    answer: "::selection",
    explanation: "::selection styles selected text."
  },
  {
    question: "Which property improves animation smoothness?",
    options: [
      "left/top",
      "transform",
      "margin",
      "padding"
    ],
    answer: "transform",
    explanation: "transform uses GPU acceleration."
  },
  {
    question: "Which CSS property enables subgrid?",
    options: [
      "grid-template",
      "display: subgrid",
      "grid-template-columns: subgrid",
      "subgrid: true"
    ],
    answer: "grid-template-columns: subgrid",
    explanation: "Subgrid inherits grid tracks from parent."
  },
  {
    question: "Which CSS feature scopes styles locally?",
    options: [
      "Shadow DOM",
      "BEM",
      "Modules",
      "Custom properties"
    ],
    answer: "Shadow DOM",
    explanation: "Shadow DOM provides true style encapsulation."
  },
  {
    question: "Which property controls caret appearance?",
    options: [
      "cursor",
      "caret-color",
      "selection",
      "outline"
    ],
    answer: "caret-color",
    explanation: "caret-color styles text cursor."
  },
  {
    question: "Which CSS feature supports safe-area insets?",
    options: [
      "env()",
      "var()",
      "calc()",
      "constant()"
    ],
    answer: "env()",
    explanation: "env() supports safe-area insets."
  },
  {
    question: "Which property delays image rendering offscreen?",
    options: [
      "loading",
      "object-fit",
      "contain",
      "display"
    ],
    answer: "loading",
    explanation: "loading='lazy' defers offscreen images."
  },
  {
    question: "Which CSS feature enables print layout control?",
    options: [
      "@page",
      "@media print",
      "@supports",
      "@container"
    ],
    answer: "@page",
    explanation: "@page controls printed page layout."
  },
  {
    question: "Which property controls page breaks in print?",
    options: [
      "page-break-before",
      "break-inside",
      "print-break",
      "Both A and B"
    ],
    answer: "Both A and B",
    explanation: "Page break properties manage print flow."
  },
  {
    question: "Which CSS property improves accessibility focus?",
    options: [
      "outline",
      "border",
      "box-shadow",
      "ring"
    ],
    answer: "outline",
    explanation: "outline preserves focus visibility."
  },
  {
    question: "Which CSS feature enables layout without media queries?",
    options: [
      "clamp()",
      "container queries",
      "flexbox",
      "grid"
    ],
    answer: "container queries",
    explanation: "Container queries reduce media query usage."
  },
  {
    question: "Which property controls rendering order optimization?",
    options: [
      "content-visibility",
      "contain",
      "display",
      "visibility"
    ],
    answer: "content-visibility",
    explanation: "content-visibility skips offscreen rendering."
  },
  {
    question: "Which value renders element only when visible?",
    options: [
      "auto",
      "hidden",
      "visible",
      "contain"
    ],
    answer: "auto",
    explanation: "auto defers rendering until visible."
  },
  {
    question: "Which CSS concept minimizes repaint cost?",
    options: [
      "Reflow avoidance",
      "Transform usage",
      "Opacity",
      "Display none"
    ],
    answer: "Transform usage",
    explanation: "Transforms avoid layout recalculation."
  },
  {
    question: "Which CSS principle improves maintainability?",
    options: [
      "High specificity",
      "Utility-first",
      "Deep nesting",
      "Inline styles"
    ],
    answer: "Utility-first",
    explanation: "Utility-first reduces cascade complexity."
  },
  {
    question: "Which CSS approach scales best for large apps?",
    options: [
      "Inline CSS",
      "Global styles",
      "Component-scoped styles",
      "!important usage"
    ],
    answer: "Component-scoped styles",
    explanation: "Scoped styles prevent global conflicts."
  }
];

const Css_advan = () => {
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
            onClick={() => navigate("/css")}
          >
            BACK
          </button>

          <header className="text-lg md:text-xl font-extrabold text-white tracking-wide">
            🎨 CSS Fundamentals Quiz - Advance level
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

export default Css_advan;
