import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const allQuestions = [
 
  {
    question: "Shortcut to justify text in MS Word?",
    options: ["Ctrl + J", "Ctrl + E", "Ctrl + L", "Ctrl + R"],
    answer: "Ctrl + J",
    explanation: "Ctrl + J aligns text to both left and right margins."
  },
  {
    question: "Shortcut to center align text in Word?",
    options: ["Ctrl + E", "Ctrl + C", "Ctrl + J", "Ctrl + M"],
    answer: "Ctrl + E",
    explanation: "Ctrl + E centers the selected text."
  },
  {
    question: "Shortcut to increase font size in Word?",
    options: ["Ctrl + Shift + >", "Ctrl + >", "Alt + >", "Ctrl + +"],
    answer: "Ctrl + Shift + >",
    explanation: "Increases font size incrementally."
  },
  {
    question: "Shortcut to decrease font size in Word?",
    options: ["Ctrl + Shift + <", "Ctrl + <", "Alt + <", "Ctrl + -"],
    answer: "Ctrl + Shift + <",
    explanation: "Decreases font size incrementally."
  },
  {
    question: "Shortcut to apply superscript in Word?",
    options: ["Ctrl + Shift + =", "Ctrl + =", "Alt + =", "Ctrl + Shift + S"],
    answer: "Ctrl + Shift + =",
    explanation: "Applies superscript formatting."
  },
  {
    question: "Shortcut to apply subscript in Word?",
    options: ["Ctrl + =", "Ctrl + Shift + =", "Alt + =", "Ctrl + -"],
    answer: "Ctrl + =",
    explanation: "Applies subscript formatting."
  },
  {
    question: "Shortcut to insert hyperlink in Word?",
    options: ["Ctrl + K", "Ctrl + H", "Alt + K", "Ctrl + L"],
    answer: "Ctrl + K",
    explanation: "Inserts a hyperlink."
  },
  {
    question: "Shortcut to remove character formatting in Word?",
    options: ["Ctrl + Spacebar", "Ctrl + Shift + C", "Alt + Space", "Ctrl + R"],
    answer: "Ctrl + Spacebar",
    explanation: "Clears character formatting."
  },
  {
    question: "Shortcut to remove paragraph formatting in Word?",
    options: ["Ctrl + Q", "Ctrl + Shift + Q", "Alt + Q", "Ctrl + P"],
    answer: "Ctrl + Q",
    explanation: "Removes paragraph formatting."
  },
  {
    question: "Shortcut to insert page break in Word?",
    options: ["Ctrl + Enter", "Alt + Enter", "Shift + Enter", "Ctrl + Shift + Enter"],
    answer: "Ctrl + Enter",
    explanation: "Inserts a page break."
  },
  {
    question: "Shortcut to edit active cell in Excel?",
    options: ["F2", "Ctrl + U", "Alt + Enter", "Ctrl + E"],
    answer: "F2",
    explanation: "Allows editing of the active cell."
  },
  {
    question: "Shortcut to insert new worksheet in Excel?",
    options: ["Shift + F11", "Ctrl + N", "Alt + F11", "Ctrl + Shift + N"],
    answer: "Shift + F11",
    explanation: "Inserts a new worksheet."
  },
  {
    question: "Shortcut to open Format Cells dialog in Excel?",
    options: ["Ctrl + 1", "Ctrl + F1", "Alt + 1", "Ctrl + Shift + 1"],
    answer: "Ctrl + 1",
    explanation: "Opens Format Cells dialog."
  },
  {
    question: "Shortcut to apply currency format in Excel?",
    options: ["Ctrl + Shift + $", "Ctrl + $", "Alt + $", "Ctrl + Shift + C"],
    answer: "Ctrl + Shift + $",
    explanation: "Applies currency format."
  },
  {
    question: "Shortcut to apply percentage format in Excel?",
    options: ["Ctrl + Shift + %", "Ctrl + %", "Alt + %", "Ctrl + P"],
    answer: "Ctrl + Shift + %",
    explanation: "Formats numbers as percentage."
  },
  {
    question: "Shortcut to apply date format in Excel?",
    options: ["Ctrl + Shift + #", "Ctrl + D", "Alt + D", "Ctrl + Shift + D"],
    answer: "Ctrl + Shift + #",
    explanation: "Applies date format."
  },
  {
    question: "Shortcut to select entire column in Excel?",
    options: ["Ctrl + Spacebar", "Shift + Spacebar", "Ctrl + A", "Alt + Space"],
    answer: "Ctrl + Spacebar",
    explanation: "Selects the entire column."
  },
  {
    question: "Shortcut to select entire row in Excel?",
    options: ["Shift + Spacebar", "Ctrl + Spacebar", "Ctrl + R", "Alt + Space"],
    answer: "Shift + Spacebar",
    explanation: "Selects the entire row."
  },
  {
    question: "Shortcut to insert current date in Excel?",
    options: ["Ctrl + ;", "Ctrl + Shift + ;", "Alt + D", "Ctrl + D"],
    answer: "Ctrl + ;",
    explanation: "Inserts current date."
  },
  {
    question: "Shortcut to insert current time in Excel?",
    options: ["Ctrl + Shift + ;", "Ctrl + ;", "Alt + T", "Ctrl + T"],
    answer: "Ctrl + Shift + ;",
    explanation: "Inserts current time."
  },
  {
    question: "Shortcut to start slideshow from beginning in PowerPoint?",
    options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"],
    answer: "F5",
    explanation: "Starts slideshow from first slide."
  },
  {
    question: "Shortcut to start slideshow from current slide?",
    options: ["Shift + F5", "F5", "Ctrl + F5", "Alt + F5"],
    answer: "Shift + F5",
    explanation: "Starts slideshow from current slide."
  },
  {
    question: "Shortcut to insert new slide in PowerPoint?",
    options: ["Ctrl + M", "Ctrl + N", "Ctrl + Shift + M", "Alt + M"],
    answer: "Ctrl + M",
    explanation: "Inserts a new slide."
  },
  {
    question: "Shortcut to duplicate slide in PowerPoint?",
    options: ["Ctrl + D", "Ctrl + M", "Alt + D", "Shift + D"],
    answer: "Ctrl + D",
    explanation: "Duplicates selected slide."
  },
  {
    question: "Shortcut to group objects in PowerPoint?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Alt + G", "Ctrl + U"],
    answer: "Ctrl + G",
    explanation: "Groups selected objects."
  },
  {
    question: "Shortcut to ungroup objects in PowerPoint?",
    options: ["Ctrl + Shift + G", "Ctrl + G", "Alt + G", "Ctrl + U"],
    answer: "Ctrl + Shift + G",
    explanation: "Ungroups selected objects."
  },
  {
    question: "Shortcut to align objects to center in PowerPoint?",
    options: ["Alt + H + A + C", "Ctrl + E", "Alt + C", "Ctrl + Shift + C"],
    answer: "Alt + H + A + C",
    explanation: "Aligns objects to center horizontally."
  },
  {
    question: "Shortcut to insert textbox in PowerPoint?",
    options: ["Ctrl + Alt + T", "Alt + N + X", "Ctrl + T", "Alt + T"],
    answer: "Alt + N + X",
    explanation: "Inserts a text box."
  },
  {
    question: "Shortcut to black screen during slideshow?",
    options: ["B", "W", "Esc", "Ctrl + B"],
    answer: "B",
    explanation: "Turns screen black during presentation."
  },
  {
    question: "Shortcut to white screen during slideshow?",
    options: ["W", "B", "Esc", "Ctrl + W"],
    answer: "W",
    explanation: "Turns screen white during presentation."
  }
];

const Short_inter = () => {
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
            onClick={() => navigate("/shortcuts")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            ⌨️ Keyboard Shortcuts Quiz - Intermediate level
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
                onClick={() => navigate("/shortcuts")}
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

export default Short_inter;
