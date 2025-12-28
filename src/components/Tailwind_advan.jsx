import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const allQuestions =  [
  {
    question: "Why is Tailwind considered highly performant in production?",
    options: [
      "Uses inline styles",
      "Generates CSS at runtime",
      "Removes unused utilities via content scanning",
      "Uses JavaScript rendering"
    ],
    answer: "Removes unused utilities via content scanning",
    explanation: "Tailwind generates only the classes actually used in your project."
  },
  {
    question: "What happens if a class is not present in content paths?",
    options: [
      "It throws an error",
      "It is still generated",
      "It is purged from final CSS",
      "It loads dynamically"
    ],
    answer: "It is purged from final CSS",
    explanation: "Tailwind removes unused classes not found in content files."
  },
  {
    question: "Which Tailwind feature enables design tokens?",
    options: [
      "Utilities",
      "Theme configuration",
      "Variants",
      "Presets"
    ],
    answer: "Theme configuration",
    explanation: "Theme values act as design tokens."
  },
  {
    question: "What is a Tailwind preset?",
    options: [
      "A plugin",
      "A reusable Tailwind configuration",
      "A CSS file",
      "A component library"
    ],
    answer: "A reusable Tailwind configuration",
    explanation: "Presets allow sharing Tailwind configs across projects."
  },
  {
    question: "Which config key loads presets?",
    options: [
      "extend",
      "presets",
      "plugins",
      "themes"
    ],
    answer: "presets",
    explanation: "presets array imports shared configurations."
  },
  {
    question: "Which Tailwind approach is best for large applications?",
    options: [
      "Inline utilities everywhere",
      "Component abstraction with @apply",
      "Deep utility chains only",
      "Custom CSS only"
    ],
    answer: "Component abstraction with @apply",
    explanation: "@apply helps reduce repetition in large apps."
  },
  {
    question: "What is the main risk of excessive @apply usage?",
    options: [
      "CSS errors",
      "Larger CSS bundles",
      "Slower JS",
      "Broken responsiveness"
    ],
    answer: "Larger CSS bundles",
    explanation: "Overusing @apply can reduce utility reuse."
  },
  {
    question: "Which utility group affects accessibility the most?",
    options: [
      "Color utilities",
      "Focus and ring utilities",
      "Spacing utilities",
      "Shadow utilities"
    ],
    answer: "Focus and ring utilities",
    explanation: "Focus visibility is critical for keyboard users."
  },
  {
    question: "Which class combination is accessibility-friendly?",
    options: [
      "outline-none",
      "outline-none ring-2",
      "ring-0",
      "focus-none"
    ],
    answer: "outline-none ring-2",
    explanation: "Removing outline should be replaced with visible focus ring."
  },
  {
    question: "Which Tailwind feature supports RTL layouts?",
    options: [
      "Logical properties",
      "Flexbox",
      "Grid",
      "Variants"
    ],
    answer: "Logical properties",
    explanation: "Logical utilities adapt to writing direction."
  },
  {
    question: "Which utility replaces margin-left logically?",
    options: [
      "ml-*",
      "ms-*",
      "mx-*",
      "margin-inline-start"
    ],
    answer: "ms-*",
    explanation: "ms-* works for both LTR and RTL."
  },
  {
    question: "Which Tailwind feature helps reduce CLS?",
    options: [
      "aspect-ratio utilities",
      "shadow utilities",
      "opacity utilities",
      "z-index utilities"
    ],
    answer: "aspect-ratio utilities",
    explanation: "Aspect ratio reserves layout space."
  },
  {
    question: "Which class enables content-visibility optimization?",
    options: [
      "content-auto",
      "visible-auto",
      "render-auto",
      "layout-auto"
    ],
    answer: "content-auto",
    explanation: "content-visibility:auto skips offscreen rendering."
  },
  {
    question: "Which Tailwind utility improves animation performance?",
    options: [
      "top-*",
      "left-*",
      "transform",
      "margin-*"
    ],
    answer: "transform",
    explanation: "Transform uses GPU acceleration."
  },
  {
    question: "Which variant respects reduced motion preferences?",
    options: [
      "animate-safe",
      "motion-reduce",
      "reduce-motion",
      "safe-motion"
    ],
    answer: "motion-reduce",
    explanation: "motion-reduce disables motion for accessibility."
  },
  {
    question: "Which variant applies styles only when motion is allowed?",
    options: [
      "animate:",
      "motion-safe:",
      "safe:",
      "allow-motion:"
    ],
    answer: "motion-safe:",
    explanation: "motion-safe respects user settings."
  },
  {
    question: "Which utility enables scroll snapping?",
    options: [
      "snap-x",
      "scroll-snap",
      "snap-scroll",
      "scroll-lock"
    ],
    answer: "snap-x",
    explanation: "snap-x enables horizontal scroll snapping."
  },
  {
    question: "Which utility controls snap alignment?",
    options: [
      "snap-start",
      "snap-align",
      "snap-pos",
      "snap-point"
    ],
    answer: "snap-start",
    explanation: "snap-start aligns snap point."
  },
  {
    question: "Which Tailwind feature helps with design consistency?",
    options: [
      "Hardcoded values",
      "Theme scales",
      "Arbitrary values everywhere",
      "!important"
    ],
    answer: "Theme scales",
    explanation: "Theme scales enforce consistency."
  },
  {
    question: "When should arbitrary values be avoided?",
    options: [
      "For spacing",
      "For typography",
      "For one-off exceptions",
      "For core design tokens"
    ],
    answer: "For core design tokens",
    explanation: "Core tokens should live in theme config."
  },
  {
    question: "Which Tailwind utility improves touch performance?",
    options: [
      "touch-auto",
      "touch-manipulation",
      "pointer-events-none",
      "select-none"
    ],
    answer: "touch-manipulation",
    explanation: "touch-manipulation improves mobile responsiveness."
  },
  {
    question: "Which utility controls pointer behavior?",
    options: [
      "pointer-events",
      "cursor",
      "select",
      "touch-action"
    ],
    answer: "pointer-events",
    explanation: "pointer-events controls mouse interaction."
  },
  {
    question: "Which class disables scroll chaining?",
    options: [
      "overscroll-none",
      "scroll-none",
      "overflow-hidden",
      "no-scroll"
    ],
    answer: "overscroll-none",
    explanation: "overscroll-none prevents scroll chaining."
  },
  {
    question: "Which Tailwind utility helps build modals safely?",
    options: [
      "fixed + inset-0",
      "absolute + top-0",
      "sticky + top-0",
      "relative + z-50"
    ],
    answer: "fixed + inset-0",
    explanation: "Fixed with inset creates full-screen overlays."
  },
  {
    question: "Which class ensures modal appears above all content?",
    options: [
      "z-10",
      "z-50",
      "z-max",
      "z-auto"
    ],
    answer: "z-50",
    explanation: "Higher z-index ensures visibility."
  },
  {
    question: "Which Tailwind feature supports design systems?",
    options: [
      "Presets",
      "Utilities",
      "Variants",
      "Plugins"
    ],
    answer: "Presets",
    explanation: "Presets allow shared design systems."
  },
  {
    question: "Which Tailwind approach is best for theming?",
    options: [
      "Multiple CSS files",
      "Custom properties + theme",
      "Inline styles",
      "JS styling"
    ],
    answer: "Custom properties + theme",
    explanation: "CSS variables integrate well with Tailwind."
  },
  {
    question: "Which utility controls caret color?",
    options: [
      "cursor-color",
      "caret-color",
      "text-caret",
      "selection-color"
    ],
    answer: "caret-color",
    explanation: "caret-color styles text cursor."
  },
  {
    question: "Which pseudo utility styles selected text?",
    options: [
      "selection:",
      "select:",
      "highlight:",
      "focus:"
    ],
    answer: "selection:",
    explanation: "selection: styles user-selected text."
  },
  {
    question: "Which Tailwind concept reduces CSS conflicts?",
    options: [
      "Global styles",
      "Utility isolation",
      "Deep selectors",
      "!important"
    ],
    answer: "Utility isolation",
    explanation: "Utilities reduce cascade conflicts."
  },
  {
    question: "Which strategy scales best for multi-team apps?",
    options: [
      "One global stylesheet",
      "Component-level Tailwind usage",
      "Inline CSS",
      "Hardcoded styles"
    ],
    answer: "Component-level Tailwind usage",
    explanation: "Scoped utilities avoid cross-team conflicts."
  },
  {
    question: "Which Tailwind feature supports future CSS specs?",
    options: [
      "Plugins",
      "Arbitrary values",
      "Presets",
      "Variants"
    ],
    answer: "Arbitrary values",
    explanation: "Arbitrary values allow early adoption."
  },
  {
    question: "Which Tailwind utility improves text readability?",
    options: [
      "leading-relaxed",
      "tracking-wide",
      "font-bold",
      "uppercase"
    ],
    answer: "leading-relaxed",
    explanation: "Line height improves readability."
  },
  {
    question: "Which class controls font smoothing?",
    options: [
      "font-smooth",
      "antialiased",
      "smooth-font",
      "text-render"
    ],
    answer: "antialiased",
    explanation: "antialiased improves font rendering."
  },
  {
    question: "Which utility ensures consistent container widths?",
    options: [
      "container",
      "max-w-full",
      "w-screen",
      "mx-auto"
    ],
    answer: "container",
    explanation: "container adapts to breakpoints."
  },
  {
    question: "Which Tailwind feature enables print styling?",
    options: [
      "print:",
      "@media print",
      "paper:",
      "page:"
    ],
    answer: "print:",
    explanation: "print: variant targets print media."
  },
  {
    question: "Which class disables animations entirely?",
    options: [
      "animate-none",
      "no-animate",
      "motion-off",
      "stop-animation"
    ],
    answer: "animate-none",
    explanation: "animate-none removes animations."
  },
  {
    question: "Which utility controls outline offset?",
    options: [
      "outline-offset-2",
      "outline-space-2",
      "ring-offset-2",
      "focus-offset-2"
    ],
    answer: "outline-offset-2",
    explanation: "outline-offset controls spacing."
  },
  {
    question: "Which Tailwind feature ensures future maintainability?",
    options: [
      "Hardcoded values",
      "Design tokens in config",
      "Inline styles",
      "!important"
    ],
    answer: "Design tokens in config",
    explanation: "Centralized tokens improve maintainability."
  },
  {
    question: "Which approach is NOT recommended in Tailwind?",
    options: [
      "Utility composition",
      "Theme extension",
      "Excessive !important",
      "Responsive variants"
    ],
    answer: "Excessive !important",
    explanation: "!important breaks Tailwind’s cascade model."
  },
  {
    question: "Which Tailwind philosophy improves developer speed?",
    options: [
      "Component libraries",
      "Utility-first approach",
      "Global CSS",
      "Inline styling"
    ],
    answer: "Utility-first approach",
    explanation: "Utility-first reduces context switching."
  },
  {
    question: "Which Tailwind feature reduces CSS cognitive load?",
    options: [
      "Predictable class naming",
      "Large CSS files",
      "Custom selectors",
      "Deep nesting"
    ],
    answer: "Predictable class naming",
    explanation: "Consistency reduces mental overhead."
  }
];


const Tailwind_advan = () => {
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
            onClick={() => navigate("/tailwind")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            🌬️ Tailwind CSS Fundamentals Quiz - Advance level
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

export default Tailwind_advan;
