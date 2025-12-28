import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions   = [
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query Language",
      "Standard Query Logic"
    ],
    answer: "Structured Query Language",
    explanation: "SQL is used to manage and query relational databases."
  },
  {
    question: "Which SQL statement is used to fetch data?",
    options: ["GET", "FETCH", "SELECT", "READ"],
    answer: "SELECT",
    explanation: "SELECT retrieves data from tables."
  },
  {
    question: "Which clause filters rows in SQL?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    answer: "WHERE",
    explanation: "WHERE filters rows before grouping."
  },
  {
    question: "Which SQL keyword sorts the result set?",
    options: ["SORT", "ORDER BY", "GROUP BY", "FILTER"],
    answer: "ORDER BY",
    explanation: "ORDER BY sorts query results."
  },
  {
    question: "Which order is default in ORDER BY?",
    options: ["ASC", "DESC", "RANDOM", "NONE"],
    answer: "ASC",
    explanation: "Ascending is the default order."
  },
  {
    question: "Which keyword removes duplicate rows?",
    options: ["UNIQUE", "DISTINCT", "FILTER", "GROUP"],
    answer: "DISTINCT",
    explanation: "DISTINCT removes duplicate values."
  },
  {
    question: "Which SQL statement inserts data?",
    options: ["ADD", "INSERT", "INSERT INTO", "PUT"],
    answer: "INSERT INTO",
    explanation: "INSERT INTO adds new records."
  },
  {
    question: "Which statement updates existing data?",
    options: ["MODIFY", "UPDATE", "CHANGE", "SET"],
    answer: "UPDATE",
    explanation: "UPDATE modifies existing records."
  },
  {
    question: "Which statement deletes rows?",
    options: ["REMOVE", "DROP", "DELETE", "TRUNCATE"],
    answer: "DELETE",
    explanation: "DELETE removes specific rows."
  },
  {
    question: "Which clause specifies columns in SELECT?",
    options: ["FROM", "WHERE", "SELECT", "ORDER"],
    answer: "SELECT",
    explanation: "SELECT defines columns to retrieve."
  },
  {
    question: "Which clause specifies the table?",
    options: ["FROM", "TABLE", "INTO", "USING"],
    answer: "FROM",
    explanation: "FROM specifies the table source."
  },
  {
    question: "Which operator checks equality?",
    options: ["==", "=", "!=", "<>"],
    answer: "=",
    explanation: "= checks equality in SQL."
  },
  {
    question: "Which operator checks range?",
    options: ["IN", "BETWEEN", "LIKE", "RANGE"],
    answer: "BETWEEN",
    explanation: "BETWEEN checks a range of values."
  },
  {
    question: "Which operator matches patterns?",
    options: ["LIKE", "MATCH", "PATTERN", "SEARCH"],
    answer: "LIKE",
    explanation: "LIKE is used with wildcards."
  },
  {
    question: "Which wildcard represents many characters?",
    options: ["*", "%", "_", "#"],
    answer: "%",
    explanation: "% matches zero or more characters."
  },
  {
    question: "Which wildcard matches one character?",
    options: ["%", "_", "*", "?"],
    answer: "_",
    explanation: "_ matches exactly one character."
  },
  {
    question: "Which operator checks multiple values?",
    options: ["IN", "ANY", "ALL", "BETWEEN"],
    answer: "IN",
    explanation: "IN checks against a list of values."
  },
  {
    question: "Which SQL function counts rows?",
    options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
    answer: "COUNT()",
    explanation: "COUNT() returns number of rows."
  },
  {
    question: "Which function returns total sum?",
    options: ["SUM()", "ADD()", "TOTAL()", "COUNT()"],
    answer: "SUM()",
    explanation: "SUM() adds numeric values."
  },
  {
    question: "Which function returns average?",
    options: ["AVG()", "MEAN()", "SUM()", "COUNT()"],
    answer: "AVG()",
    explanation: "AVG() calculates average."
  },
  {
    question: "Which function returns maximum value?",
    options: ["MAX()", "HIGH()", "TOP()", "GREATEST()"],
    answer: "MAX()",
    explanation: "MAX() returns highest value."
  },
  {
    question: "Which function returns minimum value?",
    options: ["MIN()", "LOW()", "LEAST()", "BOTTOM()"],
    answer: "MIN()",
    explanation: "MIN() returns smallest value."
  },
  {
    question: "Which clause groups rows?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
    answer: "GROUP BY",
    explanation: "GROUP BY groups rows by column."
  },
  {
    question: "Which clause filters groups?",
    options: ["WHERE", "FILTER", "HAVING", "GROUP"],
    answer: "HAVING",
    explanation: "HAVING filters aggregated results."
  },
  {
    question: "WHERE vs HAVING difference?",
    options: [
      "No difference",
      "WHERE before grouping",
      "HAVING before grouping",
      "HAVING is faster"
    ],
    answer: "WHERE before grouping",
    explanation: "WHERE filters rows, HAVING filters groups."
  },
  {
    question: "Which keyword creates a table?",
    options: ["MAKE", "NEW TABLE", "CREATE TABLE", "ADD TABLE"],
    answer: "CREATE TABLE",
    explanation: "CREATE TABLE defines a new table."
  },
  {
    question: "Which keyword removes a table permanently?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    answer: "DROP",
    explanation: "DROP deletes table structure and data."
  },
  {
    question: "Which keyword removes all rows but keeps structure?",
    options: ["DELETE", "DROP", "TRUNCATE", "CLEAR"],
    answer: "TRUNCATE",
    explanation: "TRUNCATE removes all rows quickly."
  },
  {
    question: "Which constraint ensures unique values?",
    options: ["PRIMARY KEY", "UNIQUE", "NOT NULL", "CHECK"],
    answer: "UNIQUE",
    explanation: "UNIQUE enforces distinct values."
  },
  {
    question: "Which constraint uniquely identifies rows?",
    options: ["UNIQUE", "FOREIGN KEY", "PRIMARY KEY", "INDEX"],
    answer: "PRIMARY KEY",
    explanation: "Primary key uniquely identifies each row."
  },
  {
    question: "Which constraint prevents NULL values?",
    options: ["UNIQUE", "CHECK", "NOT NULL", "DEFAULT"],
    answer: "NOT NULL",
    explanation: "NOT NULL disallows NULL entries."
  },
  {
    question: "Which constraint enforces referential integrity?",
    options: ["PRIMARY KEY", "UNIQUE", "FOREIGN KEY", "CHECK"],
    answer: "FOREIGN KEY",
    explanation: "Foreign key links tables."
  },
  {
    question: "Which statement adds a column?",
    options: ["ALTER TABLE", "UPDATE", "MODIFY", "ADD"],
    answer: "ALTER TABLE",
    explanation: "ALTER TABLE modifies table structure."
  },
  {
    question: "Which keyword renames a table?",
    options: ["RENAME", "ALTER", "CHANGE", "UPDATE"],
    answer: "RENAME",
    explanation: "RENAME changes table name."
  },
  {
    question: "Which join returns matching rows only?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    answer: "INNER JOIN",
    explanation: "INNER JOIN returns matching rows."
  },
  {
    question: "Which join returns all rows from left table?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    answer: "LEFT JOIN",
    explanation: "LEFT JOIN includes all left rows."
  },
  {
    question: "Which join returns all rows from both tables?",
    options: ["INNER", "LEFT", "RIGHT", "FULL"],
    answer: "FULL",
    explanation: "FULL JOIN returns all rows."
  },
  {
    question: "Which keyword limits rows returned?",
    options: ["TOP", "LIMIT", "ROWNUM", "All of these"],
    answer: "All of these",
    explanation: "Depends on SQL dialect."
  },
  {
    question: "Which keyword sorts before limiting?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    answer: "ORDER BY",
    explanation: "ORDER BY works before LIMIT."
  },
  {
    question: "Which SQL command is DDL?",
    options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
    answer: "CREATE",
    explanation: "DDL defines structure."
  },
  {
    question: "Which SQL command is DML?",
    options: ["CREATE", "DROP", "INSERT", "ALTER"],
    answer: "INSERT",
    explanation: "DML modifies data."
  },
  {
    question: "Which SQL command is DQL?",
    options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
    answer: "SELECT",
    explanation: "DQL queries data."
  },
  {
    question: "Which SQL command controls access?",
    options: ["DCL", "DDL", "DML", "DQL"],
    answer: "DCL",
    explanation: "DCL manages permissions."
  },
  {
    question: "Which keyword grants permission?",
    options: ["ALLOW", "GRANT", "PERMIT", "ACCESS"],
    answer: "GRANT",
    explanation: "GRANT gives database privileges."
  },
  {
    question: "Which keyword removes permission?",
    options: ["DELETE", "DENY", "REVOKE", "DROP"],
    answer: "REVOKE",
    explanation: "REVOKE removes access rights."
  }
];



const Sql_begin = () => {
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
            onClick={() => navigate("/sql")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
           🗄️ SQL Fundamentals Quiz - Beginner level
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
                onClick={() => navigate("/sql")}
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

export default Sql_begin;
