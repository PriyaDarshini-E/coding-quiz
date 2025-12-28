import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is the main purpose of an index in MongoDB?",
    options: [
      "Store documents",
      "Improve query performance",
      "Reduce storage",
      "Enforce schema"
    ],
    answer: "Improve query performance",
    explanation: "Indexes speed up query execution by reducing scanned documents."
  },
  {
    question: "Which type of index supports range queries efficiently?",
    options: ["Hashed", "Text", "Single field", "Wildcard"],
    answer: "Single field",
    explanation: "B-tree based indexes support range queries."
  },
  {
    question: "What happens if an index is missing for a query?",
    options: [
      "Query fails",
      "Full collection scan occurs",
      "MongoDB creates index automatically",
      "Query returns empty"
    ],
    answer: "Full collection scan occurs",
    explanation: "MongoDB scans all documents without an index."
  },
  {
    question: "Which command shows query execution plan?",
    options: ["explain()", "analyze()", "profile()", "stats()"],
    answer: "explain()",
    explanation: "explain() shows how MongoDB executes a query."
  },
  {
    question: "Which stage filters documents in aggregation?",
    options: ["$group", "$project", "$match", "$sort"],
    answer: "$match",
    explanation: "$match filters documents early in pipeline."
  },
  {
    question: "Which stage reshapes documents?",
    options: ["$group", "$project", "$match", "$limit"],
    answer: "$project",
    explanation: "$project selects or transforms fields."
  },
  {
    question: "Which stage groups documents?",
    options: ["$group", "$match", "$lookup", "$facet"],
    answer: "$group",
    explanation: "$group aggregates documents by key."
  },
  {
    question: "Which stage sorts documents?",
    options: ["$order", "$sort", "$arrange", "$group"],
    answer: "$sort",
    explanation: "$sort orders pipeline output."
  },
  {
    question: "Which stage limits output count?",
    options: ["$skip", "$limit", "$count", "$slice"],
    answer: "$limit",
    explanation: "$limit restricts number of documents."
  },
  {
    question: "Which stage skips documents?",
    options: ["$offset", "$jump", "$skip", "$remove"],
    answer: "$skip",
    explanation: "$skip ignores specified number of docs."
  },
  {
    question: "What does $lookup perform?",
    options: [
      "Sorting",
      "Filtering",
      "Join operation",
      "Index creation"
    ],
    answer: "Join operation",
    explanation: "$lookup performs left outer join."
  },
  {
    question: "Which aggregation stage flattens arrays?",
    options: ["$group", "$unwind", "$push", "$array"],
    answer: "$unwind",
    explanation: "$unwind deconstructs array fields."
  },
  {
    question: "What is a compound index?",
    options: [
      "Index on array",
      "Index on multiple fields",
      "Index on documents",
      "Index on database"
    ],
    answer: "Index on multiple fields",
    explanation: "Compound index uses more than one field."
  },
  {
    question: "What is the left-most prefix rule?",
    options: [
      "Index size rule",
      "Compound index usage rule",
      "Sharding rule",
      "Aggregation rule"
    ],
    answer: "Compound index usage rule",
    explanation: "Queries must use leading fields of compound index."
  },
  {
    question: "Which index supports text search?",
    options: ["Hashed", "Text", "Wildcard", "TTL"],
    answer: "Text",
    explanation: "Text index enables full-text search."
  },
  {
    question: "Which operator performs full-text search?",
    options: ["$regex", "$search", "$text", "$find"],
    answer: "$text",
    explanation: "$text works with text index."
  },
  {
    question: "Which index automatically deletes documents?",
    options: ["TTL", "Hashed", "Text", "Sparse"],
    answer: "TTL",
    explanation: "TTL index removes expired documents."
  },
  {
    question: "Which index excludes documents without field?",
    options: ["TTL", "Sparse", "Partial", "Wildcard"],
    answer: "Sparse",
    explanation: "Sparse index indexes only existing fields."
  },
  {
    question: "What is a partial index?",
    options: [
      "Indexes some documents based on filter",
      "Indexes arrays only",
      "Indexes text",
      "Indexes joins"
    ],
    answer: "Indexes some documents based on filter",
    explanation: "Partial index uses filter expression."
  },
  {
    question: "What does $addToSet do?",
    options: [
      "Adds duplicate values",
      "Adds unique values to array",
      "Replaces array",
      "Deletes array values"
    ],
    answer: "Adds unique values to array",
    explanation: "$addToSet prevents duplicates."
  },
  {
    question: "What is upsert?",
    options: [
      "Update only",
      "Insert only",
      "Update or insert",
      "Delete or insert"
    ],
    answer: "Update or insert",
    explanation: "Upsert inserts if document doesn’t exist."
  },
  {
    question: "Which option enables upsert?",
    options: ["upsert:true", "insert:true", "merge:true", "force:true"],
    answer: "upsert:true",
    explanation: "Enables insert when no match found."
  },
  {
    question: "What does $elemMatch do?",
    options: [
      "Matches array element condition",
      "Sorts arrays",
      "Removes array element",
      "Adds array element"
    ],
    answer: "Matches array element condition",
    explanation: "$elemMatch matches embedded array criteria."
  },
  {
    question: "What is embedded document modeling best for?",
    options: [
      "Many-to-many",
      "One-to-few",
      "Huge datasets",
      "Cross-collection joins"
    ],
    answer: "One-to-few",
    explanation: "Embedding reduces joins for related data."
  },
  {
    question: "When should referencing be used?",
    options: [
      "Small data",
      "Frequent joins",
      "Large related data",
      "Read-heavy apps"
    ],
    answer: "Large related data",
    explanation: "Referencing avoids document growth."
  },
  {
    question: "What is document growth problem?",
    options: [
      "Index increase",
      "Document exceeding size",
      "Slow reads",
      "Duplicate fields"
    ],
    answer: "Document exceeding size",
    explanation: "MongoDB document limit is 16MB."
  },
  {
    question: "What is the max BSON document size?",
    options: ["8MB", "10MB", "16MB", "32MB"],
    answer: "16MB",
    explanation: "MongoDB enforces 16MB document limit."
  },
  {
    question: "Which command shows collection stats?",
    options: ["stats()", "status()", "info()", "details()"],
    answer: "stats()",
    explanation: "stats() returns storage and index info."
  },
  {
    question: "Which command validates documents?",
    options: ["validate()", "check()", "verify()", "inspect()"],
    answer: "validate()",
    explanation: "validate() checks collection integrity."
  },
  {
    question: "Which feature enforces schema rules?",
    options: ["Indexes", "Validation", "Aggregation", "Sharding"],
    answer: "Validation",
    explanation: "Schema validation enforces document rules."
  },
  {
    question: "Which operator defines validation rules?",
    options: ["$jsonSchema", "$schema", "$validate", "$rule"],
    answer: "$jsonSchema",
    explanation: "Uses JSON Schema for validation."
  },
  {
    question: "What is write concern?",
    options: [
      "Read speed",
      "Write acknowledgment level",
      "Index creation",
      "Transaction isolation"
    ],
    answer: "Write acknowledgment level",
    explanation: "Controls durability of writes."
  },
  {
    question: "What is read concern?",
    options: [
      "Read isolation",
      "Index usage",
      "Query plan",
      "Cache level"
    ],
    answer: "Read isolation",
    explanation: "Controls consistency of reads."
  },
  {
    question: "Which read concern ensures majority data?",
    options: ["local", "available", "majority", "linearizable"],
    answer: "majority",
    explanation: "Reads committed by majority."
  },
  {
    question: "Which write concern ensures replication?",
    options: ["w:1", "w:0", "w:majority", "w:local"],
    answer: "w:majority",
    explanation: "Acknowledged by majority replicas."
  },
  {
    question: "What is a capped collection?",
    options: [
      "Unlimited size",
      "Fixed size collection",
      "Temporary collection",
      "Indexed collection"
    ],
    answer: "Fixed size collection",
    explanation: "Capped collections overwrite old data."
  },
  {
    question: "Which use-case suits capped collection?",
    options: [
      "Logs",
      "User profiles",
      "Transactions",
      "Analytics"
    ],
    answer: "Logs",
    explanation: "FIFO behavior suits logs."
  },
  {
    question: "What does bulkWrite() do?",
    options: [
      "Single insert",
      "Batch operations",
      "Aggregation",
      "Index creation"
    ],
    answer: "Batch operations",
    explanation: "Executes multiple write ops efficiently."
  },
  {
    question: "Which operator counts documents in aggregation?",
    options: ["$sum", "$count", "$size", "$total"],
    answer: "$count",
    explanation: "$count returns document count."
  },
  {
    question: "What does $facet allow?",
    options: [
      "Multiple pipelines",
      "Index creation",
      "Join optimization",
      "Schema validation"
    ],
    answer: "Multiple pipelines",
    explanation: "$facet runs multiple aggregations."
  },
  {
    question: "What is cursor in MongoDB?",
    options: [
      "Single document",
      "Iterator for results",
      "Index pointer",
      "Database lock"
    ],
    answer: "Iterator for results",
    explanation: "Cursor handles query results."
  },
  {
    question: "Which method converts cursor to array?",
    options: ["toArray()", "getAll()", "list()", "fetch()"],
    answer: "toArray()",
    explanation: "toArray() materializes results."
  },
  {
    question: "What is projection?",
    options: [
      "Filtering rows",
      "Selecting fields",
      "Sorting",
      "Indexing"
    ],
    answer: "Selecting fields",
    explanation: "Projection controls returned fields."
  },
  {
    question: "Which projection value excludes field?",
    options: ["1", "true", "0", "null"],
    answer: "0",
    explanation: "0 excludes field from result."
  },
  {
    question: "Which MongoDB feature improves write performance?",
    options: [
      "Bulk writes",
      "Indexes",
      "Joins",
      "Text search"
    ],
    answer: "Bulk writes",
    explanation: "Batching reduces network overhead."
  }
];


const Mongo_inter = () => {
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
            onClick={() => navigate("/mongo")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            🍃 MongoDB Fundamentals Quiz - Intermediate level
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
                onClick={() => navigate("/mongo")}
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

export default Mongo_inter;
