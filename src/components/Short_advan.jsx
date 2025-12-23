import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const allQuestions = [
  {
    question: "Shortcut to open Command Palette in VS Code?",
    options: ["Ctrl + Shift + P", "Ctrl + P", "Ctrl + Shift + O", "Alt + P"],
    answer: "Ctrl + Shift + P",
    explanation: "Opens Command Palette to run VS Code commands."
  },
  {
    question: "Shortcut to quickly open a file in VS Code?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + O", "Alt + P"],
    answer: "Ctrl + P",
    explanation: "Quick file navigation in VS Code."
  },
  {
    question: "Shortcut to toggle line comment in VS Code?",
    options: ["Ctrl + /", "Ctrl + Shift + /", "Alt + /", "Ctrl + L"],
    answer: "Ctrl + /",
    explanation: "Comments or uncomments the current line."
  },
  {
    question: "Shortcut to format document in VS Code?",
    options: ["Shift + Alt + F", "Ctrl + F", "Ctrl + Shift + F", "Alt + F"],
    answer: "Shift + Alt + F",
    explanation: "Formats the entire document."
  },
  {
    question: "Shortcut to open terminal in VS Code?",
    options: ["Ctrl + `", "Ctrl + Shift + T", "Alt + T", "Ctrl + Alt + T"],
    answer: "Ctrl + `",
    explanation: "Opens integrated terminal."
  },
  {
    question: "Shortcut to duplicate a line in VS Code?",
    options: ["Shift + Alt + Down", "Ctrl + D", "Alt + Shift + D", "Ctrl + Shift + D"],
    answer: "Shift + Alt + Down",
    explanation: "Duplicates the current line downward."
  },
  {
    question: "Shortcut to move a line up in VS Code?",
    options: ["Alt + Up", "Ctrl + Up", "Shift + Up", "Alt + Shift + Up"],
    answer: "Alt + Up",
    explanation: "Moves the selected line upward."
  },
  {
    question: "Shortcut to select all occurrences of a word in VS Code?",
    options: ["Ctrl + Shift + L", "Ctrl + D", "Alt + Enter", "Ctrl + L"],
    answer: "Ctrl + Shift + L",
    explanation: "Selects all matching occurrences."
  },
  {
    question: "Shortcut to rename symbol in VS Code?",
    options: ["F2", "Ctrl + R", "Alt + R", "Ctrl + Shift + R"],
    answer: "F2",
    explanation: "Renames variables/functions across file."
  },
  {
    question: "Shortcut to open Extensions panel in VS Code?",
    options: ["Ctrl + Shift + X", "Ctrl + Shift + E", "Ctrl + X", "Alt + X"],
    answer: "Ctrl + Shift + X",
    explanation: "Opens Extensions marketplace."
  },
  {
    question: "Shortcut to open browser DevTools?",
    options: ["Ctrl + Shift + I", "Ctrl + Shift + J", "F12", "Alt + I"],
    answer: "Ctrl + Shift + I",
    explanation: "Opens Developer Tools panel."
  },
  {
    question: "Shortcut to open Console tab directly?",
    options: ["Ctrl + Shift + J", "Ctrl + Shift + I", "Ctrl + J", "Alt + J"],
    answer: "Ctrl + Shift + J",
    explanation: "Opens Console in DevTools."
  },
  {
    question: "Shortcut to open Network tab in DevTools?",
    options: ["Ctrl + Shift + E", "Ctrl + Shift + N", "Ctrl + E", "Alt + N"],
    answer: "Ctrl + Shift + E",
    explanation: "Opens Network panel."
  },
  {
    question: "Shortcut to hard reload using DevTools?",
    options: ["Ctrl + Shift + R", "Ctrl + R", "Alt + R", "Shift + R"],
    answer: "Ctrl + Shift + R",
    explanation: "Reloads page ignoring cache."
  },
  {
    question: "Shortcut to focus address bar in browser?",
    options: ["Ctrl + L", "Alt + D", "Ctrl + Shift + L", "Ctrl + A"],
    answer: "Ctrl + L",
    explanation: "Moves cursor to address bar."
  },
  {
    question: "Shortcut to open browser downloads page?",
    options: ["Ctrl + J", "Ctrl + Shift + J", "Ctrl + D", "Alt + J"],
    answer: "Ctrl + J",
    explanation: "Opens downloads panel."
  },
  {
    question: "Shortcut to open browser history?",
    options: ["Ctrl + H", "Ctrl + Shift + H", "Ctrl + Y", "Alt + H"],
    answer: "Ctrl + H",
    explanation: "Opens browsing history."
  },
  {
    question: "Shortcut to open Incognito window?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Alt + N", "Ctrl + Shift + T"],
    answer: "Ctrl + Shift + N",
    explanation: "Opens private browsing window."
  },
  {
    question: "Shortcut to switch to next browser tab?",
    options: ["Ctrl + Tab", "Alt + Tab", "Ctrl + Shift + Tab", "Ctrl + PageDown"],
    answer: "Ctrl + Tab",
    explanation: "Moves to next tab."
  },
  {
    question: "Shortcut to move to specific tab number?",
    options: ["Ctrl + 1–8", "Alt + Number", "Ctrl + Shift + Number", "Ctrl + T"],
    answer: "Ctrl + 1–8",
    explanation: "Jumps to a specific tab."
  },

  // ===== DEV & SYSTEM =====
  {
    question: "Shortcut to open Emoji panel in Windows?",
    options: ["Win + .", "Win + ;", "Ctrl + .", "Alt + ."],
    answer: "Win + .",
    explanation: "Opens emoji picker."
  },
  {
    question: "Shortcut to open Clipboard history?",
    options: ["Win + V", "Ctrl + V", "Win + C", "Alt + V"],
    answer: "Win + V",
    explanation: "Shows clipboard history."
  },
  {
    question: "Shortcut to switch virtual desktops?",
    options: ["Ctrl + Win + Arrow", "Alt + Tab", "Win + Tab", "Ctrl + Tab"],
    answer: "Ctrl + Win + Arrow",
    explanation: "Switches between virtual desktops."
  },
  {
    question: "Shortcut to open Windows search?",
    options: ["Win + S", "Ctrl + S", "Alt + S", "Win + F"],
    answer: "Win + S",
    explanation: "Opens Windows Search."
  },
  {
    question: "Shortcut to open Windows settings?",
    options: ["Win + I", "Win + A", "Ctrl + I", "Alt + I"],
    answer: "Win + I",
    explanation: "Opens system settings."
  },
  {
    question: "Shortcut to open Quick Link menu?",
    options: ["Win + X", "Ctrl + X", "Alt + X", "Win + Q"],
    answer: "Win + X",
    explanation: "Opens power user menu."
  },
  {
    question: "Shortcut to open Task View?",
    options: ["Win + Tab", "Alt + Tab", "Ctrl + Tab", "Win + T"],
    answer: "Win + Tab",
    explanation: "Shows all open windows and desktops."
  },
  {
    question: "Shortcut to pin window left or right?",
    options: ["Win + Left/Right", "Alt + Arrow", "Ctrl + Arrow", "Shift + Arrow"],
    answer: "Win + Left/Right",
    explanation: "Snaps window to screen side."
  },
  {
    question: "Shortcut to open On-Screen Keyboard?",
    options: ["Win + Ctrl + O", "Ctrl + O", "Alt + O", "Win + O"],
    answer: "Win + Ctrl + O",
    explanation: "Opens on-screen keyboard."
  },
  {
    question: "Shortcut to open Magnifier?",
    options: ["Win + +", "Ctrl + +", "Alt + +", "Win + M"],
    answer: "Win + +",
    explanation: "Opens magnifier tool."
  }
];


const Short_advan = () => {
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
            onClick={() => navigate("/Shortcuts")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            ⌨️ Keyboard Shortcuts Quiz - Advance level
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
                onClick={() => navigate("/Shortcuts")}
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

export default Short_advan;
