import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is the main purpose of a query optimizer?",
    options: [
      "Validate SQL syntax",
      "Choose the most efficient execution plan",
      "Create indexes automatically",
      "Cache query results"
    ],
    answer: "Choose the most efficient execution plan",
    explanation: "The optimizer decides how a query should be executed."
  },
  {
    question: "What is a query execution plan?",
    options: [
      "Stored procedure",
      "Step-by-step query execution strategy",
      "Result set",
      "Temporary table"
    ],
    answer: "Step-by-step query execution strategy",
    explanation: "It shows how the database executes a query."
  },
  {
    question: "Which command analyzes query performance?",
    options: ["DESCRIBE", "EXPLAIN", "ANALYZE", "PROFILE"],
    answer: "EXPLAIN",
    explanation: "EXPLAIN displays query execution plan."
  },
  {
    question: "What does EXPLAIN ANALYZE do?",
    options: [
      "Only estimates cost",
      "Executes query and shows actual cost",
      "Creates indexes",
      "Optimizes joins"
    ],
    answer: "Executes query and shows actual cost",
    explanation: "It shows real execution time and rows."
  },
  {
    question: "What is a covering index?",
    options: [
      "Index with foreign key",
      "Index containing all required columns",
      "Clustered index",
      "Unique index"
    ],
    answer: "Index containing all required columns",
    explanation: "Query can be satisfied using index alone."
  },
  {
    question: "What is index selectivity?",
    options: [
      "Index size",
      "Uniqueness of indexed values",
      "Index creation speed",
      "Index type"
    ],
    answer: "Uniqueness of indexed values",
    explanation: "Higher selectivity improves performance."
  },
  {
    question: "Which index works best for range queries?",
    options: [
      "Hash index",
      "B-tree index",
      "Bitmap index",
      "Full-text index"
    ],
    answer: "B-tree index",
    explanation: "B-tree supports range scans efficiently."
  },
  {
    question: "Which index is NOT suitable for range queries?",
    options: [
      "B-tree",
      "Clustered",
      "Hash",
      "Composite"
    ],
    answer: "Hash",
    explanation: "Hash indexes support equality only."
  },
  {
    question: "What is a composite index?",
    options: [
      "Index on multiple tables",
      "Index on multiple columns",
      "Index with constraints",
      "Index with functions"
    ],
    answer: "Index on multiple columns",
    explanation: "Composite index uses more than one column."
  },
  {
    question: "What is the leftmost prefix rule?",
    options: [
      "Join optimization rule",
      "Composite index usage rule",
      "Foreign key rule",
      "Normalization rule"
    ],
    answer: "Composite index usage rule",
    explanation: "Index works only if leading columns are used."
  },
  {
    question: "What is a functional index?",
    options: [
      "Index on function result",
      "Index with trigger",
      "Index on join",
      "Index on procedure"
    ],
    answer: "Index on function result",
    explanation: "Indexes expressions like LOWER(name)."
  },
  {
    question: "What is table partitioning?",
    options: [
      "Splitting table vertically",
      "Splitting table horizontally",
      "Splitting database",
      "Splitting indexes"
    ],
    answer: "Splitting table horizontally",
    explanation: "Partitions divide rows into logical segments."
  },
  {
    question: "Which partitioning improves time-based queries?",
    options: [
      "Hash",
      "Range",
      "List",
      "Composite"
    ],
    answer: "Range",
    explanation: "Range partitioning works well for dates."
  },
  {
    question: "What is sharding?",
    options: [
      "Vertical partitioning",
      "Horizontal scaling across servers",
      "Indexing strategy",
      "Replication method"
    ],
    answer: "Horizontal scaling across servers",
    explanation: "Sharding distributes data across nodes."
  },
  {
    question: "What is replication used for?",
    options: [
      "Performance and availability",
      "Normalization",
      "Indexing",
      "Security"
    ],
    answer: "Performance and availability",
    explanation: "Replication improves read scalability and fault tolerance."
  },
  {
    question: "What is read replica?",
    options: [
      "Primary database",
      "Backup database",
      "Read-only copy",
      "Temporary table"
    ],
    answer: "Read-only copy",
    explanation: "Read replicas handle read queries."
  },
  {
    question: "What is write amplification?",
    options: [
      "Multiple writes for single operation",
      "Slow reads",
      "Index scans",
      "Lock escalation"
    ],
    answer: "Multiple writes for single operation",
    explanation: "Occurs due to indexes, logs, replication."
  },
  {
    question: "Which isolation level prevents dirty reads?",
    options: [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
   answer: "READ COMMITTED",
    explanation: "Dirty reads are prevented at READ COMMITTED."
  },
  {
    question: "Which isolation level prevents phantom reads?",
    options: [
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE",
      "SNAPSHOT"
    ],
    answer: "SERIALIZABLE",
    explanation: "Serializable prevents all concurrency anomalies."
  },
  {
    question: "What is a deadlock?",
    options: [
      "Infinite loop",
      "Two transactions waiting on each other",
      "Long running query",
      "Table lock"
    ],
    answer: "Two transactions waiting on each other",
    explanation: "Deadlock blocks progress permanently."
  },
  {
    question: "How do databases resolve deadlocks?",
    options: [
      "Ignore",
      "Restart server",
      "Rollback one transaction",
      "Wait indefinitely"
    ],
    answer: "Rollback one transaction",
    explanation: "DB aborts one transaction to break deadlock."
  },
  {
    question: "What is optimistic locking?",
    options: [
      "Locks rows immediately",
      "Uses versioning",
      "Blocks reads",
      "Blocks writes"
    ],
    answer: "Uses versioning",
    explanation: "Checks data version before commit."
  },
  {
    question: "What is pessimistic locking?",
    options: [
      "Assumes conflicts",
      "Uses timestamps",
      "No locks",
      "Read-only locking"
    ],
    answer: "Assumes conflicts",
    explanation: "Locks data to prevent concurrent access."
  },
  {
    question: "What is MVCC?",
    options: [
      "Multi-Version Concurrency Control",
      "Multiple Value Column Constraint",
      "Multi View Cache Control",
      "Manual Version Control"
    ],
    answer: "Multi-Version Concurrency Control",
    explanation: "Allows concurrent reads and writes."
  },
  {
    question: "Which databases use MVCC?",
    options: [
      "MySQL InnoDB, PostgreSQL",
      "SQL Server only",
      "Oracle only",
      "All databases"
    ],
    answer: "MySQL InnoDB, PostgreSQL",
    explanation: "These databases implement MVCC."
  },
  {
    question: "What is a window function?",
    options: [
      "Aggregate function",
      "Function operating on window of rows",
      "Scalar function",
      "Trigger function"
    ],
    answer: "Function operating on window of rows",
    explanation: "Window functions don’t collapse rows."
  },
  {
    question: "Which clause defines window partition?",
    options: ["GROUP BY", "PARTITION BY", "ORDER BY", "WINDOW"],
    answer: "PARTITION BY",
    explanation: "PARTITION BY defines window groups."
  },
  {
    question: "Which window function assigns row numbers?",
    options: ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "COUNT()"],
    answer: "ROW_NUMBER()",
    explanation: "ROW_NUMBER assigns unique sequence."
  },
  {
    question: "Difference between RANK and DENSE_RANK?",
    options: [
      "No difference",
      "Dense rank skips gaps",
      "Rank skips gaps",
      "Both skip gaps"
    ],
    answer: "Rank skips gaps",
    explanation: "RANK creates gaps; DENSE_RANK does not."
  },
  {
    question: "What is a CTE?",
    options: [
      "Temporary table",
      "Inline view",
      "Common Table Expression",
      "Index"
    ],
    answer: "Common Table Expression",
    explanation: "CTEs improve readability and recursion."
  },
  {
    question: "Which keyword defines a CTE?",
    options: ["WITH", "AS", "CTE", "TEMP"],
    answer: "WITH",
    explanation: "WITH defines CTEs."
  },
  {
    question: "What is a recursive CTE used for?",
    options: [
      "Hierarchical data",
      "Joins",
      "Indexes",
      "Aggregation"
    ],
    answer: "Hierarchical data",
    explanation: "Recursive CTEs handle tree structures."
  },
  {
    question: "What is data skew?",
    options: [
      "Uneven data distribution",
      "Missing data",
      "Duplicate data",
      "Corrupt data"
    ],
    answer: "Uneven data distribution",
    explanation: "Skew affects query performance."
  },
  {
    question: "Which clause filters window function results?",
    options: ["WHERE", "HAVING", "QUALIFY", "FILTER"],
    answer: "QUALIFY",
    explanation: "QUALIFY filters window function output (supported in some DBs)."
  },
  {
    question: "What is a full table scan?",
    options: [
      "Using index",
      "Scanning all rows",
      "Partition scan",
      "Cache read"
    ],
    answer: "Scanning all rows",
    explanation: "Occurs when indexes aren’t used."
  },
  {
    question: "Which query is hardest to optimize?",
    options: [
      "Simple SELECT",
      "JOIN with index",
      "LIKE '%value%'",
      "Primary key lookup"
    ],
    answer: "LIKE '%value%'",
    explanation: "Leading wildcard prevents index usage."
  },
  {
    question: "What is query cardinality?",
    options: [
      "Number of rows returned",
      "Number of columns",
      "Index size",
      "Query cost"
    ],
    answer: "Number of rows returned",
    explanation: "Used by optimizer for planning."
  },
  {
    question: "What is cost-based optimization?",
    options: [
      "Rule-based execution",
      "Statistics-based execution",
      "Manual tuning",
      "Index-only execution"
    ],
    answer: "Statistics-based execution",
    explanation: "Uses data statistics to choose plan."
  },
  {
    question: "Which statistics help optimizer?",
    options: [
      "Row count",
      "Index selectivity",
      "Data distribution",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Optimizer relies heavily on statistics."
  },
  {
    question: "What is query caching?",
    options: [
      "Caching tables",
      "Caching execution plans",
      "Caching results",
      "Caching indexes"
    ],
    answer: "Caching execution plans",
    explanation: "Plan caching improves repeated queries."
  },
  {
    question: "What is a prepared statement?",
    options: [
      "Hardcoded SQL",
      "Precompiled SQL statement",
      "Stored procedure",
      "Dynamic SQL"
    ],
    answer: "Precompiled SQL statement",
    explanation: "Prepared statements improve performance and security."
  },
  {
    question: "Which attack do prepared statements prevent?",
    options: [
      "XSS",
      "CSRF",
      "SQL Injection",
      "Brute force"
    ],
    answer: "SQL Injection",
    explanation: "They separate data from SQL code."
  },
  {
    question: "What is the biggest SQL performance mistake?",
    options: [
      "Too many joins",
      "Missing indexes",
      "Using DISTINCT unnecessarily",
      "All of these"
    ],
    answer: "All of these",
    explanation: "All impact performance significantly."
  }
];



const Sql_advan = () => {
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
            onClick={() => navigate("/sql")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
           🗄️ SQL Fundamentals Quiz -  Advance level
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

export default Sql_advan;
