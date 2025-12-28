import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
 {
    question: "What is the purpose of the <!DOCTYPE html> declaration?",
    options: [
      "Defines document language",
      "Tells browser HTML version",
      "Links CSS file",
      "Adds metadata"
    ],
    answer: "Tells browser HTML version",
    explanation: "DOCTYPE tells the browser which HTML version is used."
  },
  {
    question: "Which HTML tag is used to define responsive images?",
    options: ["<img>", "<picture>", "<source>", "<media>"],
    answer: "<picture>",
    explanation: "<picture> allows multiple image sources for responsiveness."
  },
  {
    question: "Which attribute is used with <source> inside <picture>?",
    options: ["src", "media", "type", "Both media and srcset"],
    answer: "Both media and srcset",
    explanation: "<source> commonly uses media and srcset attributes."
  },
  {
    question: "What does the 'defer' attribute do in script tag?",
    options: [
      "Loads script after page load",
      "Executes script immediately",
      "Defers execution until HTML parsed",
      "Blocks HTML parsing"
    ],
    answer: "Defers execution until HTML parsed",
    explanation: "defer loads script after HTML parsing is complete."
  },
  {
    question: "What is the default method of a <form>?",
    options: ["POST", "GET", "PUT", "DELETE"],
    answer: "GET",
    explanation: "GET is the default method for HTML forms."
  },
  {
    question: "Which attribute prevents form resubmission on reload?",
    options: ["novalidate", "autocomplete", "method", "action"],
    answer: "autocomplete",
    explanation: "autocomplete controls form value caching."
  },
  {
    question: "Which input type allows selecting multiple files?",
    options: ["file", "files", "upload", "multi"],
    answer: "file",
    explanation: "file input with multiple attribute allows multi-file upload."
  },
  {
    question: "Which attribute enables multiple file selection?",
    options: ["multi", "multiple", "files", "many"],
    answer: "multiple",
    explanation: "multiple attribute allows selecting multiple files."
  },
  {
    question: "Which tag is used to embed external HTML pages?",
    options: ["<iframe>", "<embed>", "<object>", "<frame>"],
    answer: "<iframe>",
    explanation: "<iframe> embeds another HTML page."
  },
  {
    question: "What is the purpose of the sandbox attribute in iframe?",
    options: [
      "Improve performance",
      "Apply CSS",
      "Restrict iframe capabilities",
      "Enable fullscreen"
    ],
    answer: "Restrict iframe capabilities",
    explanation: "sandbox increases security by restricting iframe actions."
  },
  {
    question: "Which HTML attribute improves accessibility for screen readers?",
    options: ["role", "aria-label", "tabindex", "alt"],
    answer: "aria-label",
    explanation: "aria-label provides accessibility information."
  },
  {
    question: "What does tabindex='-1' do?",
    options: [
      "Removes element",
      "Makes element focusable programmatically",
      "Disables element",
      "Hides element"
    ],
    answer: "Makes element focusable programmatically",
    explanation: "tabindex -1 allows focus via JS but not tab key."
  },
  {
    question: "Which tag is used to mark highlighted text?",
    options: ["<mark>", "<highlight>", "<strong>", "<em>"],
    answer: "<mark>",
    explanation: "<mark> highlights text."
  },
  {
    question: "What is the use of <time> tag?",
    options: [
      "Display system time",
      "Format date",
      "Represent date/time semantically",
      "Create timer"
    ],
    answer: "Represent date/time semantically",
    explanation: "<time> provides semantic meaning for date/time."
  },
  {
    question: "Which attribute specifies character encoding?",
    options: ["lang", "charset", "encoding", "meta-type"],
    answer: "charset",
    explanation: "charset defines character encoding like UTF-8."
  },
  {
    question: "Where should <meta charset> be placed?",
    options: [
      "End of body",
      "Inside head at top",
      "Inside footer",
      "Anywhere"
    ],
    answer: "Inside head at top",
    explanation: "It should appear early inside <head>."
  },
  {
    question: "Which tag improves SEO by defining main content?",
    options: ["<main>", "<section>", "<article>", "<div>"],
    answer: "<main>",
    explanation: "<main> defines the dominant content."
  },
  {
    question: "Difference between <section> and <article>?",
    options: [
      "No difference",
      "Article is reusable content",
      "Section is reusable content",
      "Section is standalone"
    ],
    answer: "Article is reusable content",
    explanation: "<article> is self-contained and reusable."
  },
  {
    question: "Which attribute specifies input field must be filled?",
    options: ["validate", "required", "mandatory", "filled"],
    answer: "required",
    explanation: "required enforces mandatory input."
  },
  {
    question: "What does contenteditable attribute do?",
    options: [
      "Edits HTML file",
      "Makes content editable in browser",
      "Edits database",
      "Allows form editing"
    ],
    answer: "Makes content editable in browser",
    explanation: "contenteditable allows inline editing."
  },
  {
    question: "Which tag defines expandable content?",
    options: ["<expand>", "<details>", "<summary>", "<toggle>"],
    answer: "<details>",
    explanation: "<details> creates expandable content."
  },
  {
    question: "Which tag acts as summary for <details>?",
    options: ["<head>", "<title>", "<summary>", "<label>"],
    answer: "<summary>",
    explanation: "<summary> provides heading for details."
  },
  {
    question: "What does preload attribute do in audio/video?",
    options: [
      "Plays automatically",
      "Loads media in advance",
      "Loops media",
      "Mutes media"
    ],
    answer: "Loads media in advance",
    explanation: "preload hints browser to load media early."
  },
  {
    question: "Which value of rel attribute improves security?",
    options: ["noopener", "nofollow", "external", "secure"],
    answer: "noopener",
    explanation: "noopener prevents tab-nabbing attacks."
  },
  {
    question: "Which attribute disables browser autocomplete?",
    options: ["autocomplete='off'", "cache='false'", "disable", "off"],
    answer: "autocomplete='off'",
    explanation: "autocomplete='off' disables suggestions."
  },
  {
    question: "Which input type validates email format?",
    options: ["text", "email", "mail", "validate"],
    answer: "email",
    explanation: "email input validates email format."
  },
  {
    question: "Which tag is used for progress indication?",
    options: ["<meter>", "<progress>", "<range>", "<status>"],
    answer: "<progress>",
    explanation: "<progress> shows task completion."
  },
  {
    question: "Difference between <meter> and <progress>?",
    options: [
      "Same",
      "Meter is scalar measurement",
      "Progress is scalar measurement",
      "Progress is static"
    ],
    answer: "Meter is scalar measurement",
    explanation: "<meter> represents known range values."
  },
  {
    question: "Which attribute allows drag and drop?",
    options: ["draggable", "drag", "drop", "movable"],
    answer: "draggable",
    explanation: "draggable enables drag-and-drop."
  },
  {
    question: "Which tag defines ruby annotations?",
    options: ["<ruby>", "<rt>", "<rp>", "All of these"],
    answer: "All of these",
    explanation: "Ruby annotations use ruby, rt, and rp."
  },
  {
    question: "What does hidden attribute do?",
    options: [
      "Deletes element",
      "Hides element from view",
      "Removes from DOM",
      "Disables element"
    ],
    answer: "Hides element from view",
    explanation: "hidden hides element without removing DOM."
  },
  {
    question: "Which tag is deprecated in HTML5?",
    options: ["<font>", "<section>", "<aside>", "<nav>"],
    answer: "<font>",
    explanation: "<font> is deprecated in HTML5."
  },
  {
    question: "Which tag defines sidebar content?",
    options: ["<aside>", "<nav>", "<section>", "<article>"],
    answer: "<aside>",
    explanation: "<aside> defines related sidebar content."
  },
  {
    question: "What does crossorigin attribute do?",
    options: [
      "Blocks requests",
      "Handles CORS for external resources",
      "Secures form",
      "Encrypts data"
    ],
    answer: "Handles CORS for external resources",
    explanation: "crossorigin controls CORS requests."
  },
  {
    question: "Which attribute specifies language of document?",
    options: ["lang", "charset", "type", "locale"],
    answer: "lang",
    explanation: "lang specifies document language."
  },
  {
    question: "Which tag is best for blog post?",
    options: ["<article>", "<section>", "<main>", "<div>"],
    answer: "<article>",
    explanation: "<article> is ideal for blog posts."
  },
  {
    question: "Which HTML API supports offline storage?",
    options: [
      "Cookies",
      "Session Storage",
      "Local Storage",
      "Both local and session storage"
    ],
    answer: "Both local and session storage",
    explanation: "HTML5 provides Web Storage APIs."
  },
  {
    question: "Which attribute makes video play automatically?",
    options: ["autoplay", "auto", "play", "start"],
    answer: "autoplay",
    explanation: "autoplay starts media automatically."
  },
  {
    question: "Which attribute prevents video from playing sound?",
    options: ["silent", "mute", "muted", "volume=0"],
    answer: "muted",
    explanation: "muted disables audio output."
  },
  {
    question: "Which tag defines caption for figure?",
    options: ["<caption>", "<figcaption>", "<title>", "<label>"],
    answer: "<figcaption>",
    explanation: "<figcaption> defines figure caption."
  },
  {
    question: "Which tag wraps media content?",
    options: ["<media>", "<figure>", "<container>", "<wrap>"],
    answer: "<figure>",
    explanation: "<figure> groups media content."
  },
  {
    question: "Which attribute enforces minimum input value?",
    options: ["min", "least", "start", "low"],
    answer: "min",
    explanation: "min defines minimum allowed value."
  },
  {
    question: "Which input type shows slider?",
    options: ["number", "range", "slider", "scroll"],
    answer: "range",
    explanation: "range input displays slider control."
  },
  {
    question: "Which attribute controls keyboard navigation order?",
    options: ["tabindex", "order", "focus", "index"],
    answer: "tabindex",
    explanation: "tabindex controls tab navigation."
  },
  {
    question: "Which HTML element is NOT semantic?",
    options: ["<section>", "<article>", "<div>", "<nav>"],
    answer: "<div>",
    explanation: "<div> has no semantic meaning."
  }
];

const Html_inter = () => {
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
            onClick={() => navigate("/html")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            📄 HTML Fundamentals Quiz - Intermediate level
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
                onClick={() => navigate("/html")}
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

export default Html_inter;
