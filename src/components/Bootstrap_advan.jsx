import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions =  [
  {
    question: "What is the biggest architectural change in Bootstrap 5?",
    options: [
      "Grid rewritten",
      "Dropped jQuery dependency",
      "New color system",
      "Removed components"
    ],
    answer: "Dropped jQuery dependency",
    explanation: "Bootstrap 5 is fully vanilla JS."
  },
  {
    question: "Which utility replaces left/right in Bootstrap 5?",
    options: [
      "start/end",
      "x/y",
      "before/after",
      "inline/block"
    ],
    answer: "start/end",
    explanation: "Logical properties support RTL layouts."
  },
  {
    question: "Which Bootstrap feature enables RTL support?",
    options: [
      "Grid system",
      "Logical properties",
      "Flex utilities",
      "JavaScript plugins"
    ],
    answer: "Logical properties",
    explanation: "Start/end utilities enable RTL."
  },
  {
    question: "Which Sass file controls Bootstrap variables?",
    options: [
      "_variables.scss",
      "_bootstrap.scss",
      "_config.scss",
      "_theme.scss"
    ],
    answer: "_variables.scss",
    explanation: "Bootstrap customization happens via Sass variables."
  },
  {
    question: "Which Sass map controls theme colors?",
    options: [
      "$theme-colors",
      "$colors",
      "$palette",
      "$ui-colors"
    ],
    answer: "$theme-colors",
    explanation: "Theme colors are stored in $theme-colors map."
  },
  {
    question: "Which Bootstrap approach gives smallest CSS bundle?",
    options: [
      "CDN only",
      "Full CSS import",
      "Custom Sass build",
      "Inline styles"
    ],
    answer: "Custom Sass build",
    explanation: "Custom builds include only required components."
  },
  {
    question: "Which utility helps avoid CLS for images?",
    options: [
      ".img-fluid",
      ".ratio",
      ".object-fit",
      ".w-100"
    ],
    answer: ".ratio",
    explanation: "Ratio utility reserves layout space."
  },
  {
    question: "Which class creates 16:9 aspect ratio?",
    options: [
      ".ratio-16x9",
      ".aspect-16-9",
      ".ratio-video",
      ".video-16-9"
    ],
    answer: ".ratio-16x9",
    explanation: "Bootstrap ratio utility supports aspect ratios."
  },
  {
    question: "Which utility improves accessibility for hidden content?",
    options: [
      ".d-none",
      ".invisible",
      ".visually-hidden",
      ".opacity-0"
    ],
    answer: ".visually-hidden",
    explanation: "Keeps content accessible to screen readers."
  },
  {
    question: "Which component manages focus trapping?",
    options: [
      "Dropdown",
      "Modal",
      "Toast",
      "Tooltip"
    ],
    answer: "Modal",
    explanation: "Modal traps focus for accessibility."
  },
  {
    question: "Which attribute enables dismissible alerts?",
    options: [
      "data-bs-dismiss",
      "data-bs-close",
      "data-bs-toggle",
      "data-dismiss"
    ],
    answer: "data-bs-dismiss",
    explanation: "Dismiss attributes control JS behavior."
  },
  {
    question: "Which Bootstrap component supports auto-hiding?",
    options: [
      "Toast",
      "Modal",
      "Popover",
      "Tooltip"
    ],
    answer: "Toast",
    explanation: "Toasts auto-hide by default."
  },
  {
    question: "Which utility creates stacking context?",
    options: [
      ".position-relative",
      ".z-index",
      ".opacity-50",
      ".shadow"
    ],
    answer: ".opacity-50",
    explanation: "Opacity less than 1 creates stacking context."
  },
  {
    question: "Which class ensures modal overlays all content?",
    options: [
      ".z-10",
      ".z-50",
      ".modal-backdrop",
      ".position-fixed"
    ],
    answer: ".modal-backdrop",
    explanation: "Backdrop manages modal layering."
  },
  {
    question: "Which Bootstrap feature supports dark mode?",
    options: [
      "Theme colors",
      "Color utilities",
      "CSS variables",
      "JavaScript plugins"
    ],
    answer: "CSS variables",
    explanation: "Bootstrap 5.3 introduced CSS variable theming."
  },
  {
    question: "Which data attribute initializes tooltips?",
    options: [
      "data-bs-tooltip",
      "data-bs-toggle='tooltip'",
      "data-tooltip",
      "data-toggle='tooltip'"
    ],
    answer: "data-bs-toggle='tooltip'",
    explanation: "Bootstrap 5 uses data-bs-* syntax."
  },
  {
    question: "Which component requires Popper.js?",
    options: [
      "Modal",
      "Dropdown",
      "Toast",
      "Collapse"
    ],
    answer: "Dropdown",
    explanation: "Popper handles positioning."
  },
  {
    question: "Which utility controls scroll behavior?",
    options: [
      ".overflow-auto",
      ".scroll-auto",
      ".scroll-y",
      ".auto-scroll"
    ],
    answer: ".overflow-auto",
    explanation: "Overflow utilities manage scrolling."
  },
  {
    question: "Which Bootstrap API allows JS control?",
    options: [
      "jQuery API",
      "Bootstrap API",
      "Data API",
      "CSS API"
    ],
    answer: "Data API",
    explanation: "Data attributes initialize JS components."
  },
  {
    question: "Which method programmatically shows a modal?",
    options: [
      "modal.open()",
      "Modal.show()",
      "new bootstrap.Modal().show()",
      "show.modal()"
    ],
    answer: "new bootstrap.Modal().show()",
    explanation: "Bootstrap provides JS constructors."
  },
  {
    question: "Which class creates scrollspy behavior?",
    options: [
      ".scrollspy",
      "data-bs-spy='scroll'",
      ".spy-scroll",
      ".scroll-track"
    ],
    answer: "data-bs-spy='scroll'",
    explanation: "Scrollspy tracks scrolling positions."
  },
  {
    question: "Which utility improves print layouts?",
    options: [
      ".print-none",
      ".d-print-none",
      ".hide-print",
      ".print-hidden"
    ],
    answer: ".d-print-none",
    explanation: "Controls print visibility."
  },
  {
    question: "Which class optimizes flex spacing?",
    options: [
      ".gap-*",
      ".g-*",
      ".space-*",
      ".flex-gap"
    ],
    answer: ".gap-*",
    explanation: "Gap utilities work with flex & grid."
  },
  {
    question: "Which component supports keyboard navigation?",
    options: [
      "Toast",
      "Modal",
      "Carousel",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Bootstrap components are keyboard accessible."
  },
  {
    question: "Which Bootstrap feature improves maintainability?",
    options: [
      "Utility-first classes",
      "Component abstraction",
      "Sass variables",
      "Inline styles"
    ],
    answer: "Sass variables",
    explanation: "Centralized variables improve consistency."
  },
  {
    question: "Which class creates offcanvas sidebar?",
    options: [
      ".sidebar",
      ".offcanvas",
      ".drawer",
      ".panel"
    ],
    answer: ".offcanvas",
    explanation: "Offcanvas component creates slide panels."
  },
  {
    question: "Which breakpoint applies styles from 992px?",
    options: ["sm", "md", "lg", "xl"],
    answer: "lg",
    explanation: "lg starts at 992px."
  },
  {
    question: "Which utility helps responsive typography?",
    options: [
      ".fs-*",
      ".text-*",
      ".fw-*",
      ".lh-*"
    ],
    answer: ".fs-*",
    explanation: "Font-size utilities adjust text size."
  },
  {
    question: "Which class visually disables interaction?",
    options: [
      ".disabled",
      ".pe-none",
      ".no-click",
      ".inactive"
    ],
    answer: ".pe-none",
    explanation: "Pointer-events none disables interaction."
  },
  {
    question: "Which class aligns items at bottom in flex?",
    options: [
      ".align-items-end",
      ".justify-content-end",
      ".items-end",
      ".flex-end"
    ],
    answer: ".align-items-end",
    explanation: "Aligns on cross axis."
  },
  {
    question: "Which class ensures equal height columns?",
    options: [
      ".h-100",
      ".align-stretch",
      ".row",
      ".d-flex"
    ],
    answer: ".d-flex",
    explanation: "Flexbox enables equal height columns."
  },
  {
    question: "Which class controls caret visibility?",
    options: [
      ".caret",
      ".dropdown-toggle",
      ".no-caret",
      ".caret-hide"
    ],
    answer: ".dropdown-toggle",
    explanation: "Caret appears via dropdown-toggle."
  },
  {
    question: "Which utility controls opacity?",
    options: [
      ".opacity-50",
      ".transparent-50",
      ".fade-50",
      ".alpha-50"
    ],
    answer: ".opacity-50",
    explanation: "Controls transparency."
  },
  {
    question: "Which class makes table responsive?",
    options: [
      ".table-fluid",
      ".table-responsive",
      ".table-scroll",
      ".table-wrap"
    ],
    answer: ".table-responsive",
    explanation: "Wraps table with horizontal scroll."
  },
  {
    question: "Which class styles active nav link?",
    options: [
      ".active",
      ".current",
      ".selected",
      ".on"
    ],
    answer: ".active",
    explanation: "Active state styling."
  },
  {
    question: "Which Bootstrap utility reduces motion?",
    options: [
      ".motion-reduce",
      ".reduce-motion",
      ".no-animation",
      ".animate-none"
    ],
    answer: ".motion-reduce",
    explanation: "Respects prefers-reduced-motion."
  },
  {
    question: "Which component uses ARIA roles automatically?",
    options: [
      "Modal",
      "Alert",
      "Dropdown",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Bootstrap ensures ARIA compliance."
  },
  {
    question: "Which approach scales best for large Bootstrap apps?",
    options: [
      "Inline styles",
      "Utility-first usage",
      "Custom Sass + utilities",
      "CDN only"
    ],
    answer: "Custom Sass + utilities",
    explanation: "Combines performance and maintainability."
  },
  {
    question: "Which Bootstrap concept reduces CSS conflicts?",
    options: [
      "Scoped utilities",
      "Deep selectors",
      "!important",
      "Inline CSS"
    ],
    answer: "Scoped utilities",
    explanation: "Utilities avoid cascade conflicts."
  },
  {
    question: "Which class ensures responsive images?",
    options: [
      ".img-cover",
      ".img-fluid",
      ".img-responsive",
      ".img-auto"
    ],
    answer: ".img-fluid",
    explanation: "Scales images with container."
  },
  {
    question: "Which Bootstrap version introduced CSS variables?",
    options: ["4", "5.0", "5.2", "5.3"],
    answer: "5.3",
    explanation: "CSS variable theming added in 5.3."
  },
  {
    question: "Which class enables horizontal scrolling nav?",
    options: [
      ".nav-scroll",
      ".overflow-auto",
      ".flex-nowrap",
      ".scroll-x"
    ],
    answer: ".flex-nowrap",
    explanation: "Prevents wrapping."
  },
  {
    question: "Which class controls vertical alignment in table cells?",
    options: [
      ".align-middle",
      ".align-center",
      ".v-middle",
      ".table-middle"
    ],
    answer: ".align-middle",
    explanation: "Aligns table cell content vertically."
  }
];


const Bootstrap_advan = () => {
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
            onClick={() => navigate("/bootstrap")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             🅱️ Bootstrap Fundamentals Quiz - Advance level
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

export default Bootstrap_advan;