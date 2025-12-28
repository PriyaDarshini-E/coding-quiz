import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const allQuestions = [
  {
    question: "What is JIT mode in Tailwind CSS?",
    options: [
      "A CSS minifier",
      "A runtime compiler that generates styles on demand",
      "A JavaScript framework",
      "A build optimizer only for production"
    ],
    answer: "A runtime compiler that generates styles on demand",
    explanation: "JIT generates CSS only when classes are used."
  },
  {
    question: "Which Tailwind feature enables responsive design?",
    options: [
      "Utilities",
      "Variants",
      "Breakpoints",
      "Plugins"
    ],
    answer: "Breakpoints",
    explanation: "Responsive prefixes like sm:, md:, lg: enable responsiveness."
  },
  {
    question: "What does md:text-lg mean?",
    options: [
      "Applies on all screens",
      "Applies only on mobile",
      "Applies at medium screens and above",
      "Applies below medium screens"
    ],
    answer: "Applies at medium screens and above",
    explanation: "md: applies from medium breakpoint upwards."
  },
  {
    question: "Which file controls Tailwind theme customization?",
    options: [
      "index.css",
      "tailwind.config.js",
      "postcss.config.js",
      "package.json"
    ],
    answer: "tailwind.config.js",
    explanation: "Theme values are customized in tailwind.config.js."
  },
  {
    question: "Which key is used to extend default Tailwind theme?",
    options: [
      "theme",
      "extend",
      "custom",
      "override"
    ],
    answer: "extend",
    explanation: "extend adds values without overwriting defaults."
  },
  {
    question: "Which utility controls flex direction?",
    options: [
      "flex-row",
      "flex-align",
      "flex-order",
      "direction-flex"
    ],
    answer: "flex-row",
    explanation: "flex-row and flex-col control direction."
  },
  {
    question: "Which class makes flex items wrap?",
    options: [
      "flex-wrap",
      "wrap",
      "flex-flow",
      "flex-auto"
    ],
    answer: "flex-wrap",
    explanation: "flex-wrap allows items to wrap."
  },
  {
    question: "Which class aligns items to end on cross-axis?",
    options: [
      "items-end",
      "justify-end",
      "content-end",
      "self-end"
    ],
    answer: "items-end",
    explanation: "items-end aligns items vertically (cross-axis)."
  },
  {
    question: "Which class controls flex item growth?",
    options: [
      "grow",
      "flex-grow",
      "scale",
      "expand"
    ],
    answer: "grow",
    explanation: "grow allows flex items to expand."
  },
  {
    question: "Which utility prevents flex item shrinking?",
    options: [
      "shrink-0",
      "no-shrink",
      "flex-lock",
      "grow-0"
    ],
    answer: "shrink-0",
    explanation: "shrink-0 prevents shrinking."
  },
  {
    question: "Which grid utility spans columns?",
    options: [
      "col-span-2",
      "grid-span-2",
      "span-2",
      "cols-2"
    ],
    answer: "col-span-2",
    explanation: "col-span-* controls column spanning."
  },
  {
    question: "Which utility controls row span?",
    options: [
      "row-span-2",
      "grid-row-2",
      "rows-2",
      "span-row-2"
    ],
    answer: "row-span-2",
    explanation: "row-span-* controls row span."
  },
  {
    question: "Which class creates auto-fit grid behavior?",
    options: [
      "grid-cols-auto",
      "auto-fit",
      "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
      "grid-auto"
    ],
    answer: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
    explanation: "Arbitrary values enable auto-fit grids."
  },
  {
    question: "What are arbitrary values in Tailwind?",
    options: [
      "Invalid classes",
      "User-defined CSS values",
      "Deprecated utilities",
      "JS-based values"
    ],
    answer: "User-defined CSS values",
    explanation: "Arbitrary values allow custom CSS inside brackets."
  },
  {
    question: "Which syntax represents an arbitrary value?",
    options: [
      "w-100px",
      "w(px)",
      "w-[100px]",
      "width-100px"
    ],
    answer: "w-[100px]",
    explanation: "Square brackets define arbitrary values."
  },
  {
    question: "Which class applies hover only on supported devices?",
    options: [
      "hover:",
      "supports-hover:",
      "group-hover:",
      "motion-safe:hover:"
    ],
    answer: "motion-safe:hover:",
    explanation: "motion-safe ensures accessibility."
  },
  {
    question: "Which variant applies styles when parent has hover?",
    options: [
      "hover:",
      "peer-hover:",
      "group-hover:",
      "focus-hover:"
    ],
    answer: "group-hover:",
    explanation: "group-hover applies when parent is hovered."
  },
  {
    question: "Which class must be added to parent for group-hover?",
    options: [
      "group",
      "hover-group",
      "parent",
      "wrapper"
    ],
    answer: "group",
    explanation: "Parent must have group class."
  },
  {
    question: "Which variant reacts to sibling state?",
    options: [
      "group-hover",
      "peer-hover",
      "sibling",
      "near-hover"
    ],
    answer: "peer-hover",
    explanation: "peer-hover works based on sibling state."
  },
  {
    question: "Which class is required for peer variants?",
    options: [
      "peer",
      "group",
      "relative",
      "focus"
    ],
    answer: "peer",
    explanation: "peer class enables sibling-based styling."
  },
  {
    question: "Which utility handles dark mode?",
    options: [
      "dark:",
      "theme-dark:",
      "night:",
      "mode-dark:"
    ],
    answer: "dark:",
    explanation: "dark: applies styles in dark mode."
  },
  {
    question: "Where is dark mode strategy configured?",
    options: [
      "index.css",
      "tailwind.config.js",
      "postcss.config.js",
      "app.js"
    ],
    answer: "tailwind.config.js",
    explanation: "Dark mode strategy is set in config."
  },
  {
    question: "Which dark mode strategy uses class toggling?",
    options: [
      "media",
      "system",
      "class",
      "manual"
    ],
    answer: "class",
    explanation: "class strategy toggles dark via class."
  },
  {
    question: "Which utility controls text truncation?",
    options: [
      "truncate",
      "text-clip",
      "overflow-text",
      "line-cut"
    ],
    answer: "truncate",
    explanation: "truncate applies ellipsis for overflow text."
  },
  {
    question: "Which class limits text to specific lines?",
    options: [
      "line-clamp-2",
      "truncate-2",
      "text-limit-2",
      "overflow-2"
    ],
    answer: "line-clamp-2",
    explanation: "line-clamp limits text lines."
  },
  {
    question: "Which plugin enables line-clamp?",
    options: [
      "@tailwindcss/forms",
      "@tailwindcss/typography",
      "@tailwindcss/line-clamp",
      "@tailwindcss/aspect-ratio"
    ],
    answer: "@tailwindcss/line-clamp",
    explanation: "Line-clamp requires official plugin."
  },
  {
    question: "Which utility controls aspect ratio?",
    options: [
      "ratio-16/9",
      "aspect-video",
      "aspect-auto",
      "video-ratio"
    ],
    answer: "aspect-video",
    explanation: "aspect-video is 16:9 ratio."
  },
  {
    question: "Which plugin provides prose styling?",
    options: [
      "@tailwindcss/forms",
      "@tailwindcss/typography",
      "@tailwindcss/aspect-ratio",
      "@tailwindcss/line-clamp"
    ],
    answer: "@tailwindcss/typography",
    explanation: "Typography plugin provides prose classes."
  },
  {
    question: "Which class disables transitions for accessibility?",
    options: [
      "motion-reduce",
      "no-motion",
      "reduce-motion",
      "safe-motion"
    ],
    answer: "motion-reduce",
    explanation: "motion-reduce respects user preferences."
  },
  {
    question: "Which variant applies animation only if motion allowed?",
    options: [
      "animate:",
      "motion-safe:",
      "safe:",
      "allow-motion:"
    ],
    answer: "motion-safe:",
    explanation: "motion-safe applies only when motion allowed."
  },
  {
    question: "Which utility controls ring color?",
    options: [
      "ring-red-500",
      "outline-red-500",
      "border-ring-red",
      "focus-ring-red"
    ],
    answer: "ring-red-500",
    explanation: "ring-* controls focus ring color."
  },
  {
    question: "Which class removes focus outline but keeps accessibility?",
    options: [
      "outline-none focus:ring",
      "focus-none",
      "ring-0",
      "no-outline"
    ],
    answer: "outline-none focus:ring",
    explanation: "Use ring instead of removing focus indication."
  },
  {
    question: "Which utility controls backdrop blur?",
    options: [
      "blur",
      "backdrop-blur",
      "filter-blur",
      "glass"
    ],
    answer: "backdrop-blur",
    explanation: "backdrop-blur applies blur behind element."
  },
  {
    question: "Which utility enables glassmorphism effect?",
    options: [
      "opacity + blur",
      "backdrop-blur + bg-opacity",
      "shadow + blur",
      "filter + opacity"
    ],
    answer: "backdrop-blur + bg-opacity",
    explanation: "Backdrop blur with transparency creates glass effect."
  },
  {
    question: "Which utility controls overflow scrolling on mobile?",
    options: [
      "scroll-auto",
      "overscroll-auto",
      "overflow-scroll",
      "touch-scroll"
    ],
    answer: "overscroll-auto",
    explanation: "overscroll controls scroll chaining."
  },
  {
    question: "Which utility disables text selection?",
    options: [
      "select-none",
      "no-select",
      "user-none",
      "disable-select"
    ],
    answer: "select-none",
    explanation: "select-none disables text selection."
  },
  {
    question: "Which utility applies pointer-events none?",
    options: [
      "pointer-events-none",
      "no-pointer",
      "disable-pointer",
      "click-none"
    ],
    answer: "pointer-events-none",
    explanation: "Disables pointer interaction."
  },
  {
    question: "Which utility controls object-fit?",
    options: [
      "object-cover",
      "fit-cover",
      "img-cover",
      "media-cover"
    ],
    answer: "object-cover",
    explanation: "object-cover fills container preserving ratio."
  },
  {
    question: "Which utility enables sticky positioning?",
    options: [
      "sticky",
      "position-sticky",
      "fixed-top",
      "pin"
    ],
    answer: "sticky",
    explanation: "sticky sticks relative to scroll."
  },
  {
    question: "Which class controls top offset?",
    options: [
      "top-0",
      "y-0",
      "offset-top",
      "pos-top"
    ],
    answer: "top-0",
    explanation: "top-* sets top offset."
  },
  {
    question: "Which Tailwind feature enables plugin ecosystem?",
    options: [
      "Utilities",
      "Variants",
      "Plugins",
      "Presets"
    ],
    answer: "Plugins",
    explanation: "Plugins extend Tailwind functionality."
  },
  {
    question: "Which config key registers plugins?",
    options: [
      "modules",
      "plugins",
      "extensions",
      "addons"
    ],
    answer: "plugins",
    explanation: "plugins array registers Tailwind plugins."
  },
  {
    question: "Which Tailwind concept improves scalability?",
    options: [
      "Inline styles",
      "Utility composition",
      "Deep nesting",
      "!important usage"
    ],
    answer: "Utility composition",
    explanation: "Composable utilities scale better."
  }
];


const Tailwind_inter = () => {
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
            🌬️ Tailwind CSS Fundamentals Quiz - Intermediate level
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

export default Tailwind_inter;
