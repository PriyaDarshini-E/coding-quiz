import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is Express Router used for?",
    options: [
      "Database connection",
      "Creating modular routes",
      "Handling middleware",
      "Managing sessions"
    ],
    answer: "Creating modular routes",
    explanation: "Router helps split routes into separate files."
  },
  {
    question: "Which method creates a router instance?",
    options: [
      "new Router()",
      "express.router()",
      "express.Router()",
      "app.router()"
    ],
    answer: "express.Router()",
    explanation: "Used to create modular route handlers."
  },
  {
    question: "What is route-level middleware?",
    options: [
      "Global middleware",
      "Middleware bound to specific routes",
      "Error middleware",
      "Third-party middleware"
    ],
    answer: "Middleware bound to specific routes",
    explanation: "Runs only for specific routes."
  },
  {
    question: "What happens if next() is not called?",
    options: [
      "Request continues",
      "Server crashes",
      "Request hangs",
      "Response auto-sends"
    ],
    answer: "Request hangs",
    explanation: "Flow stops without next() or response."
  },
  {
    question: "Which middleware handles CORS?",
    options: ["helmet", "cors", "morgan", "dotenv"],
    answer: "cors",
    explanation: "cors enables Cross-Origin Resource Sharing."
  },
  {
    question: "What does app.use('/api', router) do?",
    options: [
      "Creates API",
      "Mounts router at /api",
      "Secures routes",
      "Parses JSON"
    ],
    answer: "Mounts router at /api",
    explanation: "Prefixes all router routes with /api."
  },
  {
    question: "Which HTTP method is idempotent?",
    options: ["POST", "PATCH", "PUT", "CONNECT"],
    answer: "PUT",
    explanation: "Multiple PUT requests produce same result."
  },
  {
    question: "Which HTTP method is NOT idempotent?",
    options: ["GET", "DELETE", "PUT", "POST"],
    answer: "POST",
    explanation: "POST creates new resources."
  },
  {
    question: "What is REST?",
    options: [
      "Database standard",
      "Backend framework",
      "Architectural style",
      "Protocol"
    ],
    answer: "Architectural style",
    explanation: "REST defines API design principles."
  },
  {
    question: "Which status code indicates resource created?",
    options: ["200", "201", "204", "302"],
    answer: "201",
    explanation: "201 indicates successful creation."
  },
  {
    question: "Which status code indicates no content?",
    options: ["200", "201", "204", "400"],
    answer: "204",
    explanation: "204 means success without response body."
  },
  {
    question: "Which middleware logs HTTP requests?",
    options: ["helmet", "cors", "morgan", "dotenv"],
    answer: "morgan",
    explanation: "Morgan logs request details."
  },
  {
    question: "What does express.json() replace?",
    options: [
      "cookie-parser",
      "body-parser json",
      "morgan",
      "cors"
    ],
    answer: "body-parser json",
    explanation: "Express has built-in body parsing."
  },
  {
    question: "What is async error handling best practice?",
    options: [
      "try-catch only",
      "Promises only",
      "Async wrapper or next(err)",
      "Ignore errors"
    ],
    answer: "Async wrapper or next(err)",
    explanation: "Ensures errors reach error middleware."
  },
  {
    question: "What signature defines error middleware?",
    options: [
      "(req,res,next)",
      "(err,req,res,next)",
      "(err,res)",
      "(error)"
    ],
    answer: "(err,req,res,next)",
    explanation: "Four parameters define error middleware."
  },
  {
    question: "Which middleware secures HTTP headers?",
    options: ["cors", "helmet", "morgan", "csrf"],
    answer: "helmet",
    explanation: "Helmet sets secure HTTP headers."
  },
  {
    question: "What is rate limiting used for?",
    options: [
      "Improve speed",
      "Prevent brute force",
      "Caching",
      "Routing"
    ],
    answer: "Prevent brute force",
    explanation: "Limits number of requests per IP."
  },
  {
    question: "Which package handles rate limiting?",
    options: [
      "express-rate-limit",
      "helmet",
      "cors",
      "bcrypt"
    ],
    answer: "express-rate-limit",
    explanation: "Controls request frequency."
  },
  {
    question: "What is CSRF?",
    options: [
      "Authentication attack",
      "Cross-Site Request Forgery",
      "SQL injection",
      "XSS"
    ],
    answer: "Cross-Site Request Forgery",
    explanation: "Forces user to perform unwanted actions."
  },
  {
    question: "Which middleware helps prevent CSRF?",
    options: ["helmet", "csrf", "csurf", "cors"],
    answer: "csurf",
    explanation: "csurf protects against CSRF attacks."
  },
  {
    question: "What is cookie-parser used for?",
    options: [
      "Create cookies",
      "Read cookies",
      "Encrypt cookies",
      "Store sessions"
    ],
    answer: "Read cookies",
    explanation: "Parses cookies from request headers."
  },
  {
    question: "What is express-session used for?",
    options: [
      "JWT auth",
      "Session-based auth",
      "Token refresh",
      "Encryption"
    ],
    answer: "Session-based auth",
    explanation: "Stores session data server-side."
  },
  {
    question: "Where are sessions stored by default?",
    options: [
      "Database",
      "Redis",
      "Memory",
      "Browser"
    ],
    answer: "Memory",
    explanation: "Default MemoryStore (not for production)."
  },
  {
    question: "Why is MemoryStore not recommended?",
    options: [
      "Slow",
      "Insecure",
      "Memory leak risk",
      "Not scalable"
    ],
    answer: "Not scalable",
    explanation: "Sessions lost on restart."
  },
  {
    question: "What is JWT mainly used for?",
    options: [
      "Sessions",
      "Authentication",
      "Encryption",
      "Caching"
    ],
    answer: "Authentication",
    explanation: "JWT enables stateless authentication."
  },
  {
    question: "Where is JWT usually stored?",
    options: [
      "Database",
      "LocalStorage / Cookie",
      "Session",
      "Server memory"
    ],
    answer: "LocalStorage / Cookie",
    explanation: "Client stores token."
  },
  {
    question: "What is middleware chaining?",
    options: [
      "Multiple routers",
      "Multiple middleware execution",
      "Nested routes",
      "Async chaining"
    ],
    answer: "Multiple middleware execution",
    explanation: "Multiple middleware run sequentially."
  },
  {
    question: "Which Express feature supports MVC structure?",
    options: [
      "Router",
      "Controllers",
      "Views",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Express supports MVC pattern."
  },
  {
    question: "What is controller responsibility?",
    options: [
      "Routing",
      "Business logic",
      "Database only",
      "Rendering UI"
    ],
    answer: "Business logic",
    explanation: "Controllers handle request logic."
  },
  {
    question: "What does res.sendStatus(401) do?",
    options: [
      "Sends JSON",
      "Sets status only",
      "Sets status and message",
      "Redirects"
    ],
    answer: "Sets status and message",
    explanation: "Sends status code with text."
  },
  {
    question: "Which status code means unauthorized?",
    options: ["400", "401", "403", "404"],
    answer: "401",
    explanation: "Authentication required."
  },
  {
    question: "Difference between 401 and 403?",
    options: [
      "Same",
      "401 = unauthenticated, 403 = forbidden",
      "403 = not found",
      "401 = server error"
    ],
    answer: "401 = unauthenticated, 403 = forbidden",
    explanation: "Auth vs permission."
  },
  {
    question: "What is request validation?",
    options: [
      "Route protection",
      "Checking input data",
      "Authentication",
      "Authorization"
    ],
    answer: "Checking input data",
    explanation: "Prevents invalid data."
  },
  {
    question: "Which library validates request data?",
    options: [
      "express-validator",
      "helmet",
      "cors",
      "bcrypt"
    ],
    answer: "express-validator",
    explanation: "Validates request inputs."
  },
  {
    question: "What does bcrypt do?",
    options: [
      "Encrypt tokens",
      "Hash passwords",
      "Generate JWT",
      "Validate forms"
    ],
    answer: "Hash passwords",
    explanation: "bcrypt securely hashes passwords."
  },
  {
    question: "Why should passwords be hashed?",
    options: [
      "Speed",
      "Security",
      "Compression",
      "Validation"
    ],
    answer: "Security",
    explanation: "Prevents plain-text leaks."
  },
  {
    question: "What is salting?",
    options: [
      "Encrypting twice",
      "Adding random value to hash",
      "Storing password",
      "Token refresh"
    ],
    answer: "Adding random value to hash",
    explanation: "Prevents rainbow table attacks."
  },
  {
    question: "What does process.env store?",
    options: [
      "User input",
      "System variables",
      "Environment variables",
      "Request data"
    ],
    answer: "Environment variables",
    explanation: "Stores secrets and configs."
  },
  {
    question: "Which package loads .env files?",
    options: ["dotenv", "env", "config", "process"],
    answer: "dotenv",
    explanation: "Loads env variables into process.env."
  },
  {
    question: "Why should secrets not be hardcoded?",
    options: [
      "Performance",
      "Security",
      "Readability",
      "Versioning"
    ],
    answer: "Security",
    explanation: "Prevents credential leaks."
  },
  {
    question: "What is API versioning?",
    options: [
      "Changing API",
      "Multiple API releases",
      "Backward compatibility",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Helps manage API changes."
  },
  {
    question: "Common API versioning strategy?",
    options: [
      "Headers",
      "Query params",
      "URL versioning",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Multiple strategies exist."
  },
  {
    question: "Which Express feature handles async routes cleanly?",
    options: [
      "Callbacks",
      "Promises",
      "async/await",
      "Events"
    ],
    answer: "async/await",
    explanation: "Improves readability and error handling."
  },
  {
    question: "What is the biggest Express security risk?",
    options: [
      "SQL injection",
      "Unvalidated input",
      "Over-logging",
      "Large responses"
    ],
    answer: "Unvalidated input",
    explanation: "Leads to multiple attacks."
  },
  {
    question: "Express apps are typically ___?",
    options: [
      "Monolithic",
      "Stateful",
      "Stateless",
      "Coupled"
    ],
    answer: "Stateless",
    explanation: "REST APIs are stateless."
  }
];


const Express_inter = () => {
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
            onClick={() => navigate("/express")}
          >
            BACK
          </button>
          
          <header className="text-lg md:text-xl font-extrabold text-white tracking-wide">
           🚀 Express.js Fundamentals Quiz - Intermediate level
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
                ${selected
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
                onClick={() => navigate("/express")}
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

export default Express_inter;
