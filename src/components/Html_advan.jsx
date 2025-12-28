import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "How does the browser handle unknown HTML tags?",
    options: [
      "Throws error",
      "Ignores completely",
      "Treats as inline element",
      "Creates generic HTML element"
    ],
    answer: "Creates generic HTML element",
    explanation: "Browsers create unknown tags as generic HTML elements."
  },
  {
    question: "What is the purpose of the inert attribute?",
    options: [
      "Disable animations",
      "Prevent user interaction",
      "Hide element",
      "Freeze DOM"
    ],
    answer: "Prevent user interaction",
    explanation: "inert disables focus and interaction within an element."
  },
  {
    question: "Which HTML feature enables client-side template rendering?",
    options: ["<template>", "<slot>", "<shadow>", "<render>"],
    answer: "<template>",
    explanation: "<template> stores HTML without rendering it immediately."
  },
  {
    question: "What happens to <template> content on page load?",
    options: [
      "Rendered normally",
      "Ignored permanently",
      "Stored in DOM but not rendered",
      "Removed from DOM"
    ],
    answer: "Stored in DOM but not rendered",
    explanation: "Template content exists but is not rendered."
  },
  {
    question: "Which tag is mandatory for Web Components?",
    options: ["<shadow>", "<template>", "<slot>", "None"],
    answer: "None",
    explanation: "Web Components rely on JS APIs, not mandatory HTML tags."
  },
  {
    question: "What does <slot> do in Shadow DOM?",
    options: [
      "Inject CSS",
      "Insert external JS",
      "Project light DOM content",
      "Create layout"
    ],
    answer: "Project light DOM content",
    explanation: "<slot> allows content projection in Shadow DOM."
  },
  {
    question: "Which attribute prevents clickjacking in iframes?",
    options: [
      "sandbox",
      "allow",
      "referrerpolicy",
      "frameborder"
    ],
    answer: "sandbox",
    explanation: "sandbox restricts iframe capabilities for security."
  },
  {
    question: "What is the effect of loading='lazy' on images?",
    options: [
      "Loads after DOM ready",
      "Loads on scroll into viewport",
      "Loads after JS execution",
      "Never loads"
    ],
    answer: "Loads on scroll into viewport",
    explanation: "Lazy loading improves performance by deferring load."
  },
  {
    question: "Which tag allows declarative shadow DOM?",
    options: [
      "<shadowroot>",
      "<template>",
      "<slot>",
      "<dom-shadow>"
    ],
    answer: "<template>",
    explanation: "Declarative Shadow DOM uses <template shadowroot>."
  },
  {
    question: "What does the fetchpriority attribute control?",
    options: [
      "Network protocol",
      "Resource loading priority",
      "Cache behavior",
      "Script execution"
    ],
    answer: "Resource loading priority",
    explanation: "fetchpriority hints browser resource importance."
  },
  {
    question: "Which attribute improves Largest Contentful Paint (LCP)?",
    options: [
      "loading='lazy'",
      "fetchpriority='high'",
      "async",
      "defer"
    ],
    answer: "fetchpriority='high'",
    explanation: "High priority helps LCP images load faster."
  },
  {
    question: "What happens if multiple elements share the same id?",
    options: [
      "Browser crashes",
      "All are selected",
      "First one is targeted",
      "HTML invalid but still rendered"
    ],
    answer: "HTML invalid but still rendered",
    explanation: "IDs must be unique, but browser still renders."
  },
  {
    question: "Which HTML feature helps prevent XSS in links?",
    options: [
      "rel='noopener'",
      "rel='nofollow'",
      "rel='noreferrer'",
      "Both noopener and noreferrer"
    ],
    answer: "Both noopener and noreferrer",
    explanation: "They prevent access to window.opener and referrer."
  },
  {
    question: "What is the purpose of referrerpolicy attribute?",
    options: [
      "Control CSS loading",
      "Control referrer information",
      "Improve SEO",
      "Secure forms"
    ],
    answer: "Control referrer information",
    explanation: "It controls how much referrer data is sent."
  },
  {
    question: "Which HTML API enables communication between tabs?",
    options: [
      "BroadcastChannel",
      "LocalStorage",
      "SessionStorage",
      "WebSocket"
    ],
    answer: "BroadcastChannel",
    explanation: "BroadcastChannel allows tab-to-tab messaging."
  },
  {
    question: "What does the popover attribute do?",
    options: [
      "Creates modal dialog",
      "Creates tooltip-like UI",
      "Adds dropdown",
      "Triggers animation"
    ],
    answer: "Creates tooltip-like UI",
    explanation: "popover creates native floating UI elements."
  },
  {
    question: "Which element provides built-in modal behavior?",
    options: [
      "<dialog>",
      "<modal>",
      "<popup>",
      "<alert>"
    ],
    answer: "<dialog>",
    explanation: "<dialog> provides native modal functionality."
  },
  {
    question: "What does <dialog open> indicate?",
    options: [
      "Dialog enabled",
      "Dialog visible",
      "Dialog focused",
      "Dialog interactive"
    ],
    answer: "Dialog visible",
    explanation: "open attribute makes dialog visible."
  },
  {
    question: "Which attribute blocks form submission validation?",
    options: [
      "novalidate",
      "formnovalidate",
      "disable",
      "ignore"
    ],
    answer: "formnovalidate",
    explanation: "formnovalidate bypasses validation on submit."
  },
  {
    question: "What is the difference between hidden and aria-hidden?",
    options: [
      "Same behavior",
      "aria-hidden hides from screen readers",
      "hidden hides visually only",
      "aria-hidden removes DOM"
    ],
    answer: "aria-hidden hides from screen readers",
    explanation: "aria-hidden affects accessibility tree only."
  },
  {
    question: "Which tag supports the nonce attribute?",
    options: [
      "<script>",
      "<style>",
      "Both script and style",
      "<meta>"
    ],
    answer: "Both script and style",
    explanation: "nonce works with CSP for inline scripts/styles."
  },
  {
    question: "What does CSP primarily protect against?",
    options: [
      "SQL Injection",
      "XSS attacks",
      "CSRF",
      "Clickjacking"
    ],
    answer: "XSS attacks",
    explanation: "Content Security Policy mitigates XSS."
  },
  {
    question: "Which HTML attribute allows fullscreen API?",
    options: [
      "allowfullscreen",
      "fullscreen",
      "allow",
      "sandbox"
    ],
    answer: "allowfullscreen",
    explanation: "allowfullscreen permits fullscreen mode."
  },
  {
    question: "What happens if <noscript> is used?",
    options: [
      "Runs JS fallback",
      "Displays content when JS disabled",
      "Blocks scripts",
      "Throws warning"
    ],
    answer: "Displays content when JS disabled",
    explanation: "<noscript> shows content if JS is off."
  },
  {
    question: "Which attribute improves form autofill accuracy?",
    options: [
      "name",
      "id",
      "autocomplete",
      "placeholder"
    ],
    answer: "autocomplete",
    explanation: "autocomplete helps browsers autofill correctly."
  },
  {
    question: "What does inputmode attribute control?",
    options: [
      "Validation",
      "Keyboard type on mobile",
      "Input styling",
      "Form behavior"
    ],
    answer: "Keyboard type on mobile",
    explanation: "inputmode hints virtual keyboard layout."
  },
  {
    question: "Which element participates in accessibility tree but not layout?",
    options: [
      "<template>",
      "<meta>",
      "<slot>",
      "<noscript>"
    ],
    answer: "<slot>",
    explanation: "<slot> affects accessibility without layout."
  },
  {
    question: "What does the role='presentation' do?",
    options: [
      "Adds style",
      "Removes semantics",
      "Adds animation",
      "Improves SEO"
    ],
    answer: "Removes semantics",
    explanation: "role='presentation' removes semantic meaning."
  },
  {
    question: "Which HTML feature supports streaming rendering?",
    options: [
      "Server-Sent Events",
      "Progressive HTML parsing",
      "WebSockets",
      "Shadow DOM"
    ],
    answer: "Progressive HTML parsing",
    explanation: "Browsers render HTML progressively."
  },
  {
    question: "Which attribute controls spell checking?",
    options: [
      "spellcheck",
      "validate",
      "grammar",
      "check"
    ],
    answer: "spellcheck",
    explanation: "spellcheck enables/disables spell checking."
  },
  {
    question: "What is the main benefit of semantic HTML?",
    options: [
      "Faster loading",
      "Better accessibility & SEO",
      "More styling",
      "Smaller DOM"
    ],
    answer: "Better accessibility & SEO",
    explanation: "Semantic HTML improves meaning and accessibility."
  },
  {
    question: "Which attribute controls how links are crawled by search engines?",
    options: [
      "nofollow",
      "noopener",
      "noreferrer",
      "external"
    ],
    answer: "nofollow",
    explanation: "nofollow instructs search engines not to follow."
  },
  {
    question: "What does rel='preload' do?",
    options: [
      "Loads resource immediately",
      "Loads resource with high priority",
      "Caches resource",
      "Delays resource loading"
    ],
    answer: "Loads resource with high priority",
    explanation: "preload fetches critical resources early."
  },
  {
    question: "Which attribute links form controls to form outside it?",
    options: [
      "form",
      "connect",
      "target",
      "action"
    ],
    answer: "form",
    explanation: "form attribute associates control to a form."
  },
  {
    question: "What happens when <base> tag is used?",
    options: [
      "Sets default CSS",
      "Changes relative URL resolution",
      "Improves SEO",
      "Loads scripts globally"
    ],
    answer: "Changes relative URL resolution",
    explanation: "<base> affects relative paths."
  },
  {
    question: "Which tag is parsed but not rendered?",
    options: [
      "<meta>",
      "<template>",
      "<link>",
      "<script>"
    ],
    answer: "<template>",
    explanation: "Template content is parsed but not rendered."
  },
  {
    question: "Which attribute ensures privacy for analytics scripts?",
    options: [
      "anonymize",
      "referrerpolicy",
      "crossorigin",
      "nonce"
    ],
    answer: "referrerpolicy",
    explanation: "Controls referrer data leakage."
  },
  {
    question: "What does the inert attribute affect?",
    options: [
      "Only mouse",
      "Only keyboard",
      "Both focus and interaction",
      "Only screen readers"
    ],
    answer: "Both focus and interaction",
    explanation: "inert disables all user interaction."
  },
  {
    question: "Which HTML concept reduces cumulative layout shift (CLS)?",
    options: [
      "Fixed dimensions",
      "Lazy loading",
      "Async scripts",
      "Defer scripts"
    ],
    answer: "Fixed dimensions",
    explanation: "Defining width/height prevents layout shift."
  },
  {
    question: "Which element is best for dynamic notification messages?",
    options: [
      "role='alert'",
      "<output>",
      "<status>",
      "<message>"
    ],
    answer: "role='alert'",
    explanation: "alert role announces updates to screen readers."
  },
  {
    question: "What does <output> element represent?",
    options: [
      "Console output",
      "Calculation result",
      "Server response",
      "Debug info"
    ],
    answer: "Calculation result",
    explanation: "<output> represents calculation results."
  },
  {
    question: "Which attribute prevents focus trapping issues?",
    options: [
      "tabindex",
      "inert",
      "aria-hidden",
      "disabled"
    ],
    answer: "inert",
    explanation: "inert prevents focus entering unwanted areas."
  },
  {
    question: "Which HTML practice is best for accessibility?",
    options: [
      "Div-based layout",
      "Semantic tags",
      "Inline styles",
      "Nested spans"
    ],
    answer: "Semantic tags",
    explanation: "Semantic tags provide meaning to assistive tech."
  }
];

const Html_advan = () => {
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
            onClick={() => navigate("/html")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            📄 HTML Fundamentals Quiz - Advance level
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

export default Html_advan;
