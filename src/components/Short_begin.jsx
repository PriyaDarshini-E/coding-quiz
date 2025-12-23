import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "Shortcut for Copy?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    answer: "Ctrl + C",
    explanation: "Ctrl + C copies the selected text or item."
  },
  {
    question: "Shortcut for Paste?",
    options: ["Ctrl + A", "Ctrl + V", "Ctrl + S", "Ctrl + P"],
    answer: "Ctrl + V",
    explanation: "Ctrl + V pastes the copied or cut content."
  },
  {
    question: "Shortcut for Cut?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
    answer: "Ctrl + X",
    explanation: "Ctrl + X cuts the selected content."
  },
  {
    question: "Shortcut for Undo?",
    options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + R"],
    answer: "Ctrl + Z",
    explanation: "Ctrl + Z reverses the last action."
  },
  {
    question: "Shortcut to Select All?",
    options: ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + E"],
    answer: "Ctrl + A",
    explanation: "Ctrl + A selects all content."
  },
  {
    question: "Shortcut to Save?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + A", "Ctrl + F"],
    answer: "Ctrl + S",
    explanation: "Ctrl + S saves the document."
  },
  {
    question: "Shortcut to Print?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    answer: "Ctrl + P",
    explanation: "Ctrl + P opens the print dialog."
  },
  {
    question: "Shortcut to Find text?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + L"],
    answer: "Ctrl + F",
    explanation: "Ctrl + F searches text."
  },
  {
    question: "Shortcut to Bold text?",
    options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + L"],
    answer: "Ctrl + B",
    explanation: "Ctrl + B makes text bold."
  },
  {
    question: "Shortcut to Italic text?",
    options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
    answer: "Ctrl + I",
    explanation: "Ctrl + I makes text italic."
  },
  {
    question: "Shortcut to Close tab?",
    options: ["Ctrl + W", "Ctrl + Q", "Alt + F4", "Ctrl + E"],
    answer: "Ctrl + W",
    explanation: "Ctrl + W closes the tab."
  },
  {
    question: "Shortcut to Open new tab?",
    options: ["Ctrl + T", "Ctrl + N", "Ctrl + Shift + T", "Ctrl + W"],
    answer: "Ctrl + T",
    explanation: "Ctrl + T opens a new tab."
  },
  {
    question: "Shortcut to Lock PC?",
    options: ["Win + L", "Ctrl + L", "Alt + L", "Ctrl + Alt + L"],
    answer: "Win + L",
    explanation: "Win + L locks the computer."
  },
  {
    question: "Shortcut to Open File Explorer?",
    options: ["Win + E", "Win + D", "Win + R", "Win + F"],
    answer: "Win + E",
    explanation: "Opens File Explorer."
  },
  {
    question: "Shortcut to Switch apps?",
    options: ["Alt + Tab", "Ctrl + Tab", "Win + Tab", "Ctrl + Alt"],
    answer: "Alt + Tab",
    explanation: "Switches apps."
  }
];

const Short_begin = () => {
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
            onClick={() => navigate("/Shortcuts")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            ⌨️ Keyboard Shortcuts Quiz - Beginner level
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

export default Short_begin;
