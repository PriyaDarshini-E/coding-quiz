import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is a replica set in MongoDB?",
    options: [
      "Single database",
      "Group of mongod instances",
      "Shard cluster",
      "Index structure"
    ],
    answer: "Group of mongod instances",
    explanation: "Replica sets provide redundancy and high availability."
  },
  {
    question: "Which node accepts write operations?",
    options: ["Secondary", "Arbiter", "Primary", "Hidden"],
    answer: "Primary",
    explanation: "All writes go to the primary node."
  },
  {
    question: "What is an arbiter?",
    options: [
      "Stores data",
      "Handles reads",
      "Votes in elections",
      "Balances shards"
    ],
    answer: "Votes in elections",
    explanation: "Arbiters do not store data, only vote."
  },
  {
    question: "What triggers a replica set election?",
    options: [
      "Query timeout",
      "Primary failure",
      "Index creation",
      "Slow query"
    ],
    answer: "Primary failure",
    explanation: "Election occurs when primary becomes unavailable."
  },
  {
    question: "Which protocol is used for replication?",
    options: ["Sync", "Async", "Semi-sync", "Manual"],
    answer: "Async",
    explanation: "MongoDB uses asynchronous replication."
  },
  {
    question: "What is oplog?",
    options: [
      "Operation log",
      "Index log",
      "Error log",
      "Query log"
    ],
    answer: "Operation log",
    explanation: "Oplog records all write operations."
  },
  {
    question: "Where is oplog stored?",
    options: [
      "local.oplog.rs",
      "admin.oplog",
      "system.oplog",
      "config.oplog"
    ],
    answer: "local.oplog.rs",
    explanation: "Oplog resides in the local database."
  },
  {
    question: "What happens if oplog overflows?",
    options: [
      "Data loss",
      "Secondary resync required",
      "Primary shutdown",
      "Writes stop"
    ],
    answer: "Secondary resync required",
    explanation: "Secondary must resync from primary."
  },
  {
    question: "What is read preference?",
    options: [
      "Write speed",
      "Read routing rule",
      "Index usage",
      "Replication lag"
    ],
    answer: "Read routing rule",
    explanation: "Determines which replica handles reads."
  },
  {
    question: "Which read preference ensures strongest consistency?",
    options: ["secondary", "nearest", "primary", "primaryPreferred"],
    answer: "primary",
    explanation: "Reads always from primary."
  },
  {
    question: "What is sharding?",
    options: [
      "Replication",
      "Horizontal data partitioning",
      "Vertical scaling",
      "Index splitting"
    ],
    answer: "Horizontal data partitioning",
    explanation: "Sharding distributes data across servers."
  },
  {
    question: "What is a shard key?",
    options: [
      "Primary key",
      "Index key",
      "Partition key",
      "Foreign key"
    ],
    answer: "Partition key",
    explanation: "Shard key determines data distribution."
  },
  {
    question: "Poor shard key leads to?",
    options: [
      "Balanced cluster",
      "Hotspot",
      "Faster reads",
      "Lower latency"
    ],
    answer: "Hotspot",
    explanation: "Uneven distribution overloads some shards."
  },
  {
    question: "Which shard key type evenly distributes data?",
    options: ["Range", "Hashed", "Compound", "Sparse"],
    answer: "Hashed",
    explanation: "Hashed keys randomize distribution."
  },
  {
    question: "What is a mongos?",
    options: [
      "Storage engine",
      "Query router",
      "Config server",
      "Replica node"
    ],
    answer: "Query router",
    explanation: "mongos routes queries to shards."
  },
  {
    question: "What do config servers store?",
    options: [
      "User data",
      "Shard metadata",
      "Indexes",
      "Logs"
    ],
    answer: "Shard metadata",
    explanation: "They store cluster configuration."
  },
  {
    question: "Minimum config servers required?",
    options: ["1", "2", "3", "5"],
    answer: "3",
    explanation: "Ensures fault tolerance."
  },
  {
    question: "What is chunk in sharding?",
    options: [
      "Collection",
      "Group of documents",
      "Index",
      "Shard"
    ],
    answer: "Group of documents",
    explanation: "Chunks are data units moved across shards."
  },
  {
    question: "What triggers chunk migration?",
    options: [
      "Manual command",
      "Chunk imbalance",
      "Index creation",
      "Query failure"
    ],
    answer: "Chunk imbalance",
    explanation: "Balancer redistributes chunks."
  },
  {
    question: "What is balancer?",
    options: [
      "Load balancer",
      "Chunk manager",
      "Query optimizer",
      "Replica voter"
    ],
    answer: "Chunk manager",
    explanation: "Balancer moves chunks across shards."
  },
  {
    question: "MongoDB supports transactions starting from?",
    options: ["3.2", "3.6", "4.0", "4.2"],
    answer: "4.0",
    explanation: "Multi-document ACID transactions introduced in 4.0."
  },
  {
    question: "Transactions are supported on?",
    options: [
      "Standalone",
      "Replica set",
      "Sharded cluster",
      "Replica set & sharded cluster"
    ],
    answer: "Replica set & sharded cluster",
    explanation: "Supported across distributed setups."
  },
  {
    question: "Which storage engine supports transactions?",
    options: ["MMAPv1", "WiredTiger", "RocksDB", "InMemory"],
    answer: "WiredTiger",
    explanation: "WiredTiger is default engine."
  },
  {
    question: "What isolation level does MongoDB provide?",
    options: [
      "Read uncommitted",
      "Read committed",
      "Snapshot",
      "Serializable"
    ],
    answer: "Snapshot",
    explanation: "Snapshot isolation used in transactions."
  },
  {
    question: "What is write conflict?",
    options: [
      "Index conflict",
      "Concurrent document modification",
      "Replication lag",
      "Shard imbalance"
    ],
    answer: "Concurrent document modification",
    explanation: "Occurs when two writes target same data."
  },
  {
    question: "What is journaling?",
    options: [
      "Logging queries",
      "Crash recovery mechanism",
      "Replication",
      "Index creation"
    ],
    answer: "Crash recovery mechanism",
    explanation: "Journal ensures durability."
  },
  {
    question: "Which file stores journal data?",
    options: ["journal", "oplog", "data", "config"],
    answer: "journal",
    explanation: "Journal files store write intent."
  },
  {
    question: "What is WiredTiger cache?",
    options: [
      "Disk cache",
      "Memory cache",
      "Index cache",
      "Query cache"
    ],
    answer: "Memory cache",
    explanation: "Improves read/write performance."
  },
  {
    question: "Which metric indicates slow queries?",
    options: [
      "opcounters",
      "system.profile",
      "serverStatus",
      "currentOp"
    ],
    answer: "system.profile",
    explanation: "Profiler captures slow operations."
  },
  {
    question: "Which profiler level logs slow queries?",
    options: ["0", "1", "2", "3"],
    answer: "1",
    explanation: "Level 1 logs slow operations."
  },
  {
    question: "What is change streams?",
    options: [
      "Schema changes",
      "Real-time data changes",
      "Index updates",
      "Replication log"
    ],
    answer: "Real-time data changes",
    explanation: "Allows listening to data changes."
  },
  {
    question: "Change streams rely on?",
    options: ["Indexes", "Oplog", "Transactions", "Balancer"],
    answer: "Oplog",
    explanation: "Reads changes from oplog."
  },
  {
    question: "What is schema design anti-pattern?",
    options: [
      "Embedding",
      "Unbounded arrays",
      "Indexing",
      "Referencing"
    ],
    answer: "Unbounded arrays",
    explanation: "Can exceed document size."
  },
  {
    question: "Which operation is atomic in MongoDB?",
    options: [
      "Multi-document update",
      "Single document update",
      "Aggregation",
      "Bulk write"
    ],
    answer: "Single document update",
    explanation: "Atomicity guaranteed at document level."
  },
  {
    question: "What is write skew?",
    options: [
      "Replication delay",
      "Transaction anomaly",
      "Index mismatch",
      "Shard conflict"
    ],
    answer: "Transaction anomaly",
    explanation: "Occurs under snapshot isolation."
  },
  {
    question: "Which command shows current operations?",
    options: ["currentOp()", "serverStatus()", "stats()", "oplog.rs"],
    answer: "currentOp()",
    explanation: "Shows running operations."
  },
  {
    question: "Which command kills running operation?",
    options: ["killOp()", "stop()", "terminate()", "abort()"],
    answer: "killOp()",
    explanation: "Terminates long-running ops."
  },
  {
    question: "What is multi-key index?",
    options: [
      "Index on arrays",
      "Compound index",
      "Text index",
      "TTL index"
    ],
    answer: "Index on arrays",
    explanation: "Automatically created for array fields."
  },
  {
    question: "Limitation of multi-key index?",
    options: [
      "Cannot be unique",
      "Cannot be compound",
      "Cannot be sparse",
      "Cannot be partial"
    ],
    answer: "Cannot be unique",
    explanation: "Arrays can produce duplicate keys."
  },
  {
    question: "Which feature supports global transactions?",
    options: [
      "Replica sets",
      "Sharding",
      "Sessions",
      "Oplog"
    ],
    answer: "Sessions",
    explanation: "Sessions track transactional state."
  },
  {
    question: "What is causal consistency?",
    options: [
      "Strict consistency",
      "Preserves operation order",
      "Eventual consistency",
      "Read preference"
    ],
    answer: "Preserves operation order",
    explanation: "Ensures dependent operations order."
  },
  {
    question: "What is snapshot reads used for?",
    options: [
      "Backup",
      "Consistent reads",
      "Replication",
      "Indexing"
    ],
    answer: "Consistent reads",
    explanation: "Provides point-in-time view."
  },
  {
    question: "What is the biggest MongoDB performance mistake?",
    options: [
      "Over-indexing",
      "Under-indexing",
      "Poor shard key",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Each can severely impact performance."
  }
];



const Mongo_advan = () => {
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
            onClick={() => navigate("/mongo")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            🍃 MongoDB Fundamentals Quiz - Advance level
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

export default Mongo_advan;
