import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language",
    explanation: "HTML stands for Hyper Text Markup Language."
  },
  {
    question: "Which tag is used to create a paragraph?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    answer: "<p>",
    explanation: "<p> tag is used to define a paragraph."
  },
  {
    question: "Which tag is used for the largest heading?",
    options: ["<h6>", "<h4>", "<h1>", "<head>"],
    answer: "<h1>",
    explanation: "<h1> defines the largest heading in HTML."
  },
  {
    question: "Which tag is used to insert a line break?",
    options: ["<br>", "<lb>", "<break>", "<hr>"],
    answer: "<br>",
    explanation: "<br> inserts a line break."
  },
  {
    question: "Which tag is used to create a link?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
    explanation: "<a> tag is used to create hyperlinks."
  },
  {
    question: "Which attribute specifies a link address?",
    options: ["src", "href", "link", "url"],
    answer: "href",
    explanation: "href specifies the URL of the page the link goes to."
  },
  {
    question: "Which tag is used to display an image?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answer: "<img>",
    explanation: "<img> is used to display images."
  },
  {
    question: "Which attribute is used to provide image path?",
    options: ["href", "path", "src", "alt"],
    answer: "src",
    explanation: "src specifies the image source path."
  },
  {
    question: "Which attribute provides alternate text for images?",
    options: ["src", "title", "alt", "name"],
    answer: "alt",
    explanation: "alt provides alternative text if image fails to load."
  },
  {
    question: "Which tag creates an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
    explanation: "<ul> creates an unordered list."
  },
  {
    question: "Which tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ol>",
    explanation: "<ol> creates an ordered list."
  },
  {
    question: "Which tag defines a list item?",
    options: ["<li>", "<ul>", "<ol>", "<list>"],
    answer: "<li>",
    explanation: "<li> defines each list item."
  },
  {
    question: "Which tag is used for bold text?",
    options: ["<b>", "<strong>", "<bold>", "Both <b> and <strong>"],
    answer: "Both <b> and <strong>",
    explanation: "<b> and <strong> both make text bold."
  },
  {
    question: "Which tag is used for italic text?",
    options: ["<i>", "<em>", "<italic>", "Both <i> and <em>"],
    answer: "Both <i> and <em>",
    explanation: "<i> and <em> both display italic text."
  },
  {
    question: "Which tag is used to underline text?",
    options: ["<u>", "<underline>", "<ul>", "<line>"],
    answer: "<u>",
    explanation: "<u> underlines the text."
  },
  {
    question: "Which tag is used to create a table?",
    options: ["<table>", "<tab>", "<tr>", "<td>"],
    answer: "<table>",
    explanation: "<table> creates a table."
  },
  {
    question: "Which tag defines a table row?",
    options: ["<tr>", "<td>", "<th>", "<row>"],
    answer: "<tr>",
    explanation: "<tr> defines a table row."
  },
  {
    question: "Which tag defines table data?",
    options: ["<td>", "<tr>", "<th>", "<data>"],
    answer: "<td>",
    explanation: "<td> defines table data."
  },
  {
    question: "Which tag defines a table header cell?",
    options: ["<td>", "<tr>", "<th>", "<head>"],
    answer: "<th>",
    explanation: "<th> defines a table header cell."
  },
  {
    question: "Which tag is used to create a form?",
    options: ["<form>", "<input>", "<fieldset>", "<label>"],
    answer: "<form>",
    explanation: "<form> is used to create forms."
  },
  {
    question: "Which tag is used to take user input?",
    options: ["<input>", "<form>", "<textarea>", "<button>"],
    answer: "<input>",
    explanation: "<input> takes user input."
  },
  {
    question: "Which input type is used for passwords?",
    options: ["text", "password", "hidden", "secure"],
    answer: "password",
    explanation: "password type hides the entered text."
  },
  {
    question: "Which tag creates a button?",
    options: ["<btn>", "<button>", "<input>", "<click>"],
    answer: "<button>",
    explanation: "<button> creates a clickable button."
  },
  {
    question: "Which tag is used for dropdown list?",
    options: ["<select>", "<option>", "<list>", "<dropdown>"],
    answer: "<select>",
    explanation: "<select> creates a dropdown list."
  },
  {
    question: "Which tag defines dropdown options?",
    options: ["<select>", "<option>", "<list>", "<item>"],
    answer: "<option>",
    explanation: "<option> defines options in dropdown."
  },
  {
    question: "Which tag is used to add comments?",
    options: [
      "// comment",
      "<!-- comment -->",
      "/* comment */",
      "# comment"
    ],
    answer: "<!-- comment -->",
    explanation: "HTML comments use <!-- -->."
  },
  {
    question: "Which tag is used to embed audio?",
    options: ["<audio>", "<sound>", "<mp3>", "<media>"],
    answer: "<audio>",
    explanation: "<audio> embeds audio files."
  },
  {
    question: "Which tag is used to embed video?",
    options: ["<video>", "<media>", "<movie>", "<mp4>"],
    answer: "<video>",
    explanation: "<video> embeds video files."
  },
  {
    question: "Which tag is used to group content?",
    options: ["<div>", "<span>", "<group>", "<section>"],
    answer: "<div>",
    explanation: "<div> is used to group block elements."
  },
  {
    question: "Which tag is inline by default?",
    options: ["<div>", "<p>", "<span>", "<section>"],
    answer: "<span>",
    explanation: "<span> is an inline element."
  },
  {
    question: "Which tag defines the document title?",
    options: ["<title>", "<head>", "<meta>", "<name>"],
    answer: "<title>",
    explanation: "<title> sets the browser tab title."
  },
  {
    question: "Which tag contains metadata?",
    options: ["<head>", "<body>", "<html>", "<meta>"],
    answer: "<head>",
    explanation: "<head> contains metadata."
  },
  {
    question: "Which tag contains visible content?",
    options: ["<head>", "<meta>", "<title>", "<body>"],
    answer: "<body>",
    explanation: "<body> contains visible webpage content."
  },
  {
    question: "Which tag defines the root of HTML document?",
    options: ["<html>", "<body>", "<head>", "<root>"],
    answer: "<html>",
    explanation: "<html> is the root element."
  },
  {
    question: "Which attribute opens link in new tab?",
    options: ["target", "href", "blank", "new"],
    answer: "target",
    explanation: "target='_blank' opens link in new tab."
  },
  {
    question: "Which HTML version is latest?",
    options: ["HTML3", "HTML4", "HTML5", "HTML6"],
    answer: "HTML5",
    explanation: "HTML5 is the latest standard."
  },
  {
    question: "Which tag is used for horizontal line?",
    options: ["<br>", "<hr>", "<line>", "<hl>"],
    answer: "<hr>",
    explanation: "<hr> creates a horizontal rule."
  },
  {
    question: "Which attribute is mandatory for <img>?",
    options: ["alt", "src", "title", "width"],
    answer: "src",
    explanation: "src is required to load an image."
  },
  {
    question: "Which tag is semantic?",
    options: ["<div>", "<span>", "<section>", "<b>"],
    answer: "<section>",
    explanation: "<section> is a semantic tag."
  },
  {
    question: "Which tag defines navigation links?",
    options: ["<nav>", "<menu>", "<links>", "<ul>"],
    answer: "<nav>",
    explanation: "<nav> defines navigation links."
  },
  {
    question: "Which tag is used for footer?",
    options: ["<bottom>", "<footer>", "<end>", "<section>"],
    answer: "<footer>",
    explanation: "<footer> defines footer section."
  },
  {
    question: "Which tag is used for main content?",
    options: ["<main>", "<section>", "<article>", "<body>"],
    answer: "<main>",
    explanation: "<main> defines main content."
  },
  {
    question: "Which tag defines an article?",
    options: ["<article>", "<section>", "<div>", "<content>"],
    answer: "<article>",
    explanation: "<article> defines independent content."
  },
  {
    question: "Which tag is used for emphasis?",
    options: ["<b>", "<strong>", "<em>", "<i>"],
    answer: "<em>",
    explanation: "<em> emphasizes text."
  },
  {
    question: "HTML is a ___ language.",
    options: ["Programming", "Markup", "Scripting", "Styling"],
    answer: "Markup",
    explanation: "HTML is a markup language."
  }
];

const Html_begin = () => {
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
            onClick={() => navigate("/html")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            📄 HTML Fundamentals Quiz - Beginner level
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

export default Html_begin;
