import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What type of database is MongoDB?",
    options: ["Relational", "NoSQL", "Graph", "In-memory"],
    answer: "NoSQL",
    explanation: "MongoDB is a document-based NoSQL database."
  },
  {
    question: "MongoDB stores data in which format?",
    options: ["XML", "JSON", "BSON", "CSV"],
    answer: "BSON",
    explanation: "MongoDB stores data in Binary JSON (BSON)."
  },
  {
    question: "What is a collection in MongoDB?",
    options: [
      "Group of databases",
      "Group of documents",
      "Group of tables",
      "Group of schemas"
    ],
    answer: "Group of documents",
    explanation: "Collections hold multiple documents."
  },
  {
    question: "What is a document in MongoDB?",
    options: [
      "Row",
      "Table",
      "JSON-like record",
      "Schema"
    ],
    answer: "JSON-like record",
    explanation: "Documents are key-value pairs."
  },
  {
    question: "MongoDB is schema ___?",
    options: ["Strict", "Fixed", "Flexible", "Mandatory"],
    answer: "Flexible",
    explanation: "Documents can have different structures."
  },
  {
    question: "Which command shows databases?",
    options: ["show dbs", "list db", "display db", "get dbs"],
    answer: "show dbs",
    explanation: "Displays all databases."
  },
  {
    question: "Which command selects a database?",
    options: ["select db", "use db", "open db", "connect db"],
    answer: "use db",
    explanation: "Switches to specified database."
  },
  {
    question: "Which command shows collections?",
    options: ["show tables", "show collections", "list collections", "db.show()"],
    answer: "show collections",
    explanation: "Lists collections in current DB."
  },
  {
    question: "Which command inserts one document?",
    options: ["insert()", "insertOne()", "addOne()", "saveOne()"],
    answer: "insertOne()",
    explanation: "insertOne adds a single document."
  },
  {
    question: "Which command inserts multiple documents?",
    options: ["insert()", "insertMany()", "addMany()", "saveMany()"],
    answer: "insertMany()",
    explanation: "insertMany adds multiple documents."
  },
  {
    question: "Which method fetches all documents?",
    options: ["find()", "get()", "select()", "fetch()"],
    answer: "find()",
    explanation: "find() retrieves documents."
  },
  {
    question: "Which method fetches one document?",
    options: ["find()", "findOne()", "getOne()", "selectOne()"],
    answer: "findOne()",
    explanation: "Returns first matched document."
  },
  {
    question: "Which method updates one document?",
    options: ["update()", "updateOne()", "modifyOne()", "changeOne()"],
    answer: "updateOne()",
    explanation: "Updates a single document."
  },
  {
    question: "Which method updates many documents?",
    options: ["update()", "updateMany()", "modifyMany()", "changeMany()"],
    answer: "updateMany()",
    explanation: "Updates multiple documents."
  },
  {
    question: "Which method deletes one document?",
    options: ["delete()", "deleteOne()", "removeOne()", "dropOne()"],
    answer: "deleteOne()",
    explanation: "Deletes one matched document."
  },
  {
    question: "Which method deletes many documents?",
    options: ["delete()", "deleteMany()", "removeMany()", "dropMany()"],
    answer: "deleteMany()",
    explanation: "Deletes multiple documents."
  },
  {
    question: "Which operator matches exact value?",
    options: ["$eq", "$gt", "$in", "$ne"],
    answer: "$eq",
    explanation: "$eq matches equal value."
  },
  {
    question: "Which operator means greater than?",
    options: ["$gt", "$lt", "$gte", "$ne"],
    answer: "$gt",
    explanation: "$gt checks greater than."
  },
  {
    question: "Which operator checks multiple values?",
    options: ["$or", "$and", "$in", "$eq"],
    answer: "$in",
    explanation: "$in matches any value in array."
  },
  {
    question: "Which operator performs logical OR?",
    options: ["$and", "$or", "$not", "$nor"],
    answer: "$or",
    explanation: "$or matches at least one condition."
  },
  {
    question: "Which operator performs logical AND?",
    options: ["$and", "$or", "$not", "$nor"],
    answer: "$and",
    explanation: "$and matches all conditions."
  },
  {
    question: "Which operator updates a field value?",
    options: ["$set", "$push", "$add", "$update"],
    answer: "$set",
    explanation: "$set modifies field value."
  },
  {
    question: "Which operator increments number?",
    options: ["$add", "$inc", "$sum", "$plus"],
    answer: "$inc",
    explanation: "$inc increases numeric value."
  },
  {
    question: "Which operator removes field?",
    options: ["$remove", "$delete", "$unset", "$pull"],
    answer: "$unset",
    explanation: "$unset removes a field."
  },
  {
    question: "Which operator adds value to array?",
    options: ["$push", "$add", "$append", "$set"],
    answer: "$push",
    explanation: "$push adds element to array."
  },
  {
    question: "Which operator removes value from array?",
    options: ["$pop", "$pull", "$remove", "$splice"],
    answer: "$pull",
    explanation: "$pull removes matching values."
  },
  {
    question: "What is _id field?",
    options: [
      "Optional field",
      "Primary key",
      "Index field",
      "Foreign key"
    ],
    answer: "Primary key",
    explanation: "_id uniquely identifies document."
  },
  {
    question: "Which command removes a collection?",
    options: ["delete()", "remove()", "drop()", "clear()"],
    answer: "drop()",
    explanation: "drop() deletes collection."
  },
  {
    question: "Which command removes database?",
    options: ["deleteDB()", "removeDB()", "dropDatabase()", "clearDB()"],
    answer: "dropDatabase()",
    explanation: "Deletes current database."
  },
  {
    question: "MongoDB default port?",
    options: ["3306", "27017", "5432", "1521"],
    answer: "27017",
    explanation: "MongoDB runs on port 27017."
  },
  {
    question: "Which tool is MongoDB shell?",
    options: ["mongo", "mongod", "mongosh", "mongoDB"],
    answer: "mongosh",
    explanation: "mongosh is modern MongoDB shell."
  },
  {
    question: "Which process runs MongoDB server?",
    options: ["mongo", "mongod", "mongosh", "dbserver"],
    answer: "mongod",
    explanation: "mongod runs MongoDB server."
  },
  {
    question: "Which data type stores array?",
    options: ["Array", "List", "Collection", "Set"],
    answer: "Array",
    explanation: "MongoDB supports arrays natively."
  },
  {
    question: "Which data type stores object?",
    options: ["Document", "Object", "Map", "Embedded document"],
    answer: "Embedded document",
    explanation: "Documents can contain nested documents."
  },
  {
    question: "Which command counts documents?",
    options: ["count()", "countDocuments()", "size()", "total()"],
    answer: "countDocuments()",
    explanation: "Returns accurate document count."
  },
  {
    question: "Which operator checks field existence?",
    options: ["$exists", "$has", "$present", "$available"],
    answer: "$exists",
    explanation: "$exists checks field presence."
  },
  {
    question: "Which operator matches pattern?",
    options: ["$like", "$regex", "$pattern", "$match"],
    answer: "$regex",
    explanation: "$regex performs pattern matching."
  },
  {
    question: "Which command sorts result?",
    options: ["sort()", "order()", "arrange()", "group()"],
    answer: "sort()",
    explanation: "sort() orders query results."
  },
  {
    question: "Which command limits result?",
    options: ["limit()", "skip()", "restrict()", "slice()"],
    answer: "limit()",
    explanation: "limit() restricts number of documents."
  },
  {
    question: "Which command skips records?",
    options: ["skip()", "offset()", "jump()", "pass()"],
    answer: "skip()",
    explanation: "skip() skips documents."
  },
  {
    question: "Which keyword creates index?",
    options: ["createIndex()", "addIndex()", "makeIndex()", "index()"],
    answer: "createIndex()",
    explanation: "createIndex() creates index."
  },
  {
    question: "Which index is created by default?",
    options: ["_id", "email", "primary", "none"],
    answer: "_id",
    explanation: "MongoDB auto-creates _id index."
  },
  {
    question: "Which feature improves read speed?",
    options: ["Indexes", "Collections", "Documents", "Schemas"],
    answer: "Indexes",
    explanation: "Indexes improve query performance."
  },
  {
    question: "MongoDB is best suited for?",
    options: [
      "Fixed schema data",
      "Hierarchical data",
      "Unstructured / semi-structured data",
      "Financial transactions"
    ],
    answer: "Unstructured / semi-structured data",
    explanation: "MongoDB handles flexible data well."
  }
];



const Mongo_begin = () => {
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
            onClick={() => navigate("/mongo")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            🍃 MongoDB Fundamentals Quiz - Beginner level
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

export default Mongo_begin;
