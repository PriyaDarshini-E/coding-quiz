import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is the main purpose of an INDEX?",
    options: [
      "Store data",
      "Improve query performance",
      "Enforce constraints",
      "Reduce storage"
    ],
    answer: "Improve query performance",
    explanation: "Indexes speed up data retrieval."
  },
  {
    question: "Which operation slows down when many indexes exist?",
    options: ["SELECT", "INSERT", "UPDATE", "READ"],
    answer: "INSERT",
    explanation: "Indexes must be updated during insert."
  },
  {
    question: "Which index type allows duplicate values?",
    options: ["Primary index", "Unique index", "Non-unique index", "Clustered index"],
    answer: "Non-unique index",
    explanation: "Non-unique indexes allow duplicates."
  },
  {
    question: "What is a clustered index?",
    options: [
      "Index stored separately",
      "Data sorted physically",
      "Allows duplicates only",
      "Secondary index"
    ],
    answer: "Data sorted physically",
    explanation: "Clustered index defines physical data order."
  },
  {
    question: "How many clustered indexes can a table have?",
    options: ["0", "1", "2", "Unlimited"],
    answer: "1",
    explanation: "Only one physical ordering is possible."
  },
  {
    question: "What is a non-clustered index?",
    options: [
      "Changes data order",
      "Stores pointers to data",
      "Primary key only",
      "Temporary index"
    ],
    answer: "Stores pointers to data",
    explanation: "Non-clustered index stores references."
  },
  {
    question: "What is normalization?",
    options: [
      "Removing indexes",
      "Reducing redundancy",
      "Improving joins",
      "Creating backups"
    ],
    answer: "Reducing redundancy",
    explanation: "Normalization organizes data efficiently."
  },
  {
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "2NF",
    explanation: "2NF removes partial dependency."
  },
  {
    question: "Which normal form removes transitive dependency?",
    options: ["1NF", "2NF", "3NF", "4NF"],
    answer: "3NF",
    explanation: "3NF removes transitive dependency."
  },
  {
    question: "What is denormalization?",
    options: [
      "Splitting tables",
      "Adding redundancy",
      "Removing keys",
      "Index creation"
    ],
    answer: "Adding redundancy",
    explanation: "Denormalization improves read performance."
  },
  {
    question: "What does a VIEW store?",
    options: [
      "Data",
      "Indexes",
      "Query definition",
      "Triggers"
    ],
    answer: "Query definition",
    explanation: "Views store SQL queries, not data."
  },
  {
    question: "Are views updated automatically?",
    options: ["Yes", "No", "Only materialized", "Only indexed"],
    answer: "Yes",
    explanation: "Views reflect base table changes."
  },
  {
    question: "Which view stores data physically?",
    options: [
      "Simple view",
      "Complex view",
      "Materialized view",
      "Temporary view"
    ],
    answer: "Materialized view",
    explanation: "Materialized views store results."
  },
  {
    question: "What is a subquery?",
    options: [
      "Query inside query",
      "Join query",
      "Recursive query",
      "Temporary table"
    ],
    answer: "Query inside query",
    explanation: "Subqueries are nested queries."
  },
  {
    question: "Which subquery returns single value?",
    options: [
      "Scalar subquery",
      "Correlated subquery",
      "Nested subquery",
      "Derived table"
    ],
    answer: "Scalar subquery",
    explanation: "Scalar subquery returns one value."
  },
  {
    question: "What is a correlated subquery?",
    options: [
      "Independent subquery",
      "Depends on outer query",
      "Returns many rows",
      "Uses joins"
    ],
    answer: "Depends on outer query",
    explanation: "Correlated subquery executes per row."
  },
  {
    question: "Which clause executes first logically?",
    options: ["SELECT", "WHERE", "FROM", "ORDER BY"],
    answer: "FROM",
    explanation: "FROM is executed first logically."
  },
  {
    question: "Logical order after FROM?",
    options: ["SELECT", "GROUP BY", "WHERE", "ORDER BY"],
    answer: "WHERE",
    explanation: "WHERE filters rows early."
  },
  {
    question: "Which executes after GROUP BY?",
    options: ["WHERE", "HAVING", "SELECT", "FROM"],
    answer: "HAVING",
    explanation: "HAVING filters grouped results."
  },
  {
    question: "What is a derived table?",
    options: [
      "Temporary table",
      "Subquery in FROM",
      "View",
      "Index table"
    ],
    answer: "Subquery in FROM",
    explanation: "Derived tables act as temporary results."
  },
  {
    question: "What is CROSS JOIN?",
    options: [
      "Matching rows",
      "Cartesian product",
      "Left rows only",
      "Right rows only"
    ],
    answer: "Cartesian product",
    explanation: "CROSS JOIN multiplies rows."
  },
  {
    question: "Which join returns unmatched rows?",
    options: ["INNER", "LEFT", "CROSS", "SELF"],
    answer: "LEFT",
    explanation: "LEFT JOIN includes unmatched left rows."
  },
  {
    question: "What is SELF JOIN?",
    options: [
      "Join same table",
      "Join multiple tables",
      "Recursive join",
      "Cross join"
    ],
    answer: "Join same table",
    explanation: "Self join joins table with itself."
  },
  {
    question: "Which function replaces NULL?",
    options: ["IFNULL()", "NVL()", "COALESCE()", "All of these"],
    answer: "All of these",
    explanation: "Depends on SQL dialect."
  },
  {
    question: "What does COALESCE do?",
    options: [
      "Returns max value",
      "Returns first non-NULL",
      "Replaces zero",
      "Converts type"
    ],
    answer: "Returns first non-NULL",
    explanation: "COALESCE checks multiple values."
  },
  {
    question: "Which function returns current date?",
    options: ["NOW()", "CURDATE()", "GETDATE()", "All of these"],
    answer: "All of these",
    explanation: "Depends on SQL database."
  },
  {
    question: "What is a transaction?",
    options: [
      "Single query",
      "Set of operations",
      "Backup",
      "Index"
    ],
    answer: "Set of operations",
    explanation: "Transaction groups multiple operations."
  },
  {
    question: "Which property ensures atomicity?",
    options: ["ACID", "Consistency", "Atomicity", "Durability"],
    answer: "Atomicity",
    explanation: "Atomicity ensures all or nothing."
  },
  {
    question: "Which command saves transaction?",
    options: ["SAVE", "COMMIT", "END", "STORE"],
    answer: "COMMIT",
    explanation: "COMMIT makes changes permanent."
  },
  {
    question: "Which command undoes changes?",
    options: ["UNDO", "ROLLBACK", "RESET", "REVERT"],
    answer: "ROLLBACK",
    explanation: "ROLLBACK reverses changes."
  },
  {
    question: "What is a savepoint?",
    options: [
      "Backup",
      "Transaction checkpoint",
      "Commit state",
      "Index point"
    ],
    answer: "Transaction checkpoint",
    explanation: "Savepoints allow partial rollback."
  },
  {
    question: "What does UNION do?",
    options: [
      "Joins tables",
      "Combines result sets",
      "Creates index",
      "Deletes duplicates"
    ],
    answer: "Combines result sets",
    explanation: "UNION merges SELECT results."
  },
  {
    question: "UNION vs UNION ALL difference?",
    options: [
      "Same",
      "ALL keeps duplicates",
      "UNION faster",
      "ALL removes duplicates"
    ],
    answer: "ALL keeps duplicates",
    explanation: "UNION removes duplicates by default."
  },
  {
    question: "Which clause restricts update rows?",
    options: ["FROM", "WHERE", "SET", "HAVING"],
    answer: "WHERE",
    explanation: "WHERE limits rows updated."
  },
  {
    question: "What is a composite key?",
    options: [
      "Single column key",
      "Multiple column key",
      "Foreign key",
      "Index key"
    ],
    answer: "Multiple column key",
    explanation: "Composite key uses multiple columns."
  },
  {
    question: "What does EXISTS return?",
    options: ["Data", "Count", "Boolean", "Table"],
    answer: "Boolean",
    explanation: "EXISTS checks row existence."
  },
  {
    question: "Which constraint validates condition?",
    options: ["CHECK", "UNIQUE", "DEFAULT", "INDEX"],
    answer: "CHECK",
    explanation: "CHECK enforces custom rules."
  },
  {
    question: "Which clause limits subquery execution?",
    options: ["TOP", "LIMIT", "FETCH", "All of these"],
    answer: "All of these",
    explanation: "Dialect dependent."
  },
  {
    question: "Which operation is faster: DELETE or TRUNCATE?",
    options: ["DELETE", "TRUNCATE", "Same", "Depends"],
    answer: "TRUNCATE",
    explanation: "TRUNCATE is minimally logged."
  },
  {
    question: "What is implicit join?",
    options: [
      "Using JOIN keyword",
      "Using WHERE condition",
      "Self join",
      "Cross join"
    ],
    answer: "Using WHERE condition",
    explanation: "Old-style joins use WHERE."
  },
  {
    question: "What does EXPLAIN do?",
    options: [
      "Executes query",
      "Shows query plan",
      "Optimizes query",
      "Creates index"
    ],
    answer: "Shows query plan",
    explanation: "EXPLAIN shows execution strategy."
  },
  {
    question: "Which improves query speed most?",
    options: [
      "Indexes",
      "Views",
      "Triggers",
      "Constraints"
    ],
    answer: "Indexes",
    explanation: "Indexes drastically improve performance."
  },
  {
    question: "Which SQL feature enforces business logic?",
    options: [
      "Trigger",
      "Index",
      "View",
      "Join"
    ],
    answer: "Trigger",
    explanation: "Triggers execute automatically."
  }
];



const Sql_inter = () => {
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
            onClick={() => navigate("/sql")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            🗄️ SQL Fundamentals Quiz - Intermediate level
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

export default Sql_inter;
