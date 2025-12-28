import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is the main limitation of Express in CPU-intensive tasks?",
    options: [
      "No routing support",
      "Single-threaded event loop",
      "No async support",
      "Lack of middleware"
    ],
    answer: "Single-threaded event loop",
    explanation: "CPU-heavy tasks block the event loop."
  },
  {
    question: "Which Node.js module is used to scale Express across CPU cores?",
    options: ["worker_threads", "cluster", "os", "child_process"],
    answer: "cluster",
    explanation: "Cluster enables multi-process scaling."
  },
  {
    question: "What does clustering achieve?",
    options: [
      "Faster database queries",
      "Parallel request handling",
      "Memory sharing",
      "Lower latency networking"
    ],
    answer: "Parallel request handling",
    explanation: "Multiple processes handle requests."
  },
  {
    question: "Which load balancer is commonly used with Express?",
    options: ["Apache", "Nginx", "Tomcat", "IIS"],
    answer: "Nginx",
    explanation: "Nginx is widely used as a reverse proxy."
  },
  {
    question: "What is a reverse proxy?",
    options: [
      "Client proxy",
      "Server-side request forwarder",
      "Database proxy",
      "Cache layer"
    ],
    answer: "Server-side request forwarder",
    explanation: "Routes requests to backend servers."
  },
  {
    question: "Why should Express not handle static files in production?",
    options: [
      "Security risk",
      "Memory usage",
      "Lower performance",
      "Routing conflicts"
    ],
    answer: "Lower performance",
    explanation: "Nginx/CDN handles static files better."
  },
  {
    question: "What is middleware short-circuiting?",
    options: [
      "Skipping middleware chain",
      "Async execution",
      "Parallel middleware",
      "Error bubbling"
    ],
    answer: "Skipping middleware chain",
    explanation: "Response sent before reaching next middleware."
  },
  {
    question: "Which HTTP header improves API security against MIME sniffing?",
    options: [
      "X-Frame-Options",
      "X-Content-Type-Options",
      "Content-Security-Policy",
      "Strict-Transport-Security"
    ],
    answer: "X-Content-Type-Options",
    explanation: "Prevents MIME-type sniffing."
  },
  {
    question: "Which attack is prevented by Content-Security-Policy?",
    options: ["CSRF", "XSS", "SQL Injection", "DDOS"],
    answer: "XSS",
    explanation: "CSP restricts script execution."
  },
  {
    question: "What is HTTP request throttling?",
    options: [
      "Reducing payload size",
      "Limiting request rate",
      "Compressing responses",
      "Caching responses"
    ],
    answer: "Limiting request rate",
    explanation: "Prevents abuse and DDOS."
  },
  {
    question: "Which status code indicates too many requests?",
    options: ["400", "401", "403", "429"],
    answer: "429",
    explanation: "429 = Too Many Requests."
  },
  {
    question: "What does compression middleware do?",
    options: [
      "Encrypts data",
      "Minifies JSON",
      "Compresses responses",
      "Caches responses"
    ],
    answer: "Compresses responses",
    explanation: "Uses gzip or brotli."
  },
  {
    question: "Which middleware enables response compression?",
    options: ["helmet", "compression", "morgan", "cors"],
    answer: "compression",
    explanation: "Reduces response size."
  },
  {
    question: "What is ETag used for?",
    options: [
      "Authentication",
      "Caching validation",
      "Authorization",
      "Compression"
    ],
    answer: "Caching validation",
    explanation: "ETag helps clients cache responses."
  },
  {
    question: "Which HTTP header enables caching control?",
    options: ["Cache-Control", "Expires", "ETag", "All of these"],
    answer: "All of these",
    explanation: "All influence caching behavior."
  },
  {
    question: "What is idempotency important for?",
    options: [
      "Caching",
      "Retrying requests safely",
      "Authentication",
      "Authorization"
    ],
    answer: "Retrying requests safely",
    explanation: "Ensures same outcome on retries."
  },
  {
    question: "Which HTTP method must be idempotent?",
    options: ["POST", "PATCH", "PUT", "CONNECT"],
    answer: "PUT",
    explanation: "PUT should produce same result."
  },
  {
    question: "What is API gateway?",
    options: [
      "Database proxy",
      "Single entry point for APIs",
      "Load balancer",
      "Authentication server"
    ],
    answer: "Single entry point for APIs",
    explanation: "Manages routing, auth, rate limiting."
  },
  {
    question: "Which Express feature helps graceful shutdown?",
    options: [
      "process.exit()",
      "SIGTERM handling",
      "app.close()",
      "server.kill()"
    ],
    answer: "SIGTERM handling",
    explanation: "Allows finishing in-flight requests."
  },
  {
    question: "What is memory leak in Express apps usually caused by?",
    options: [
      "Unused variables",
      "Unclosed event listeners",
      "Too many routes",
      "Large responses"
    ],
    answer: "Unclosed event listeners",
    explanation: "Listeners keep references alive."
  },
  {
    question: "Which tool profiles Express performance?",
    options: ["PM2", "New Relic", "Nodemon", "Morgan"],
    answer: "New Relic",
    explanation: "Provides APM insights."
  },
  {
    question: "What is PM2 used for?",
    options: [
      "Routing",
      "Process management",
      "Database ORM",
      "Load balancing"
    ],
    answer: "Process management",
    explanation: "Keeps apps alive and clustered."
  },
  {
    question: "What does PM2 zero-downtime reload provide?",
    options: [
      "Faster boot",
      "No dropped requests",
      "Lower memory",
      "Better logging"
    ],
    answer: "No dropped requests",
    explanation: "Reloads without service interruption."
  },
  {
    question: "What is sticky session problem?",
    options: [
      "JWT expiration",
      "Session tied to one server",
      "Cache miss",
      "Token refresh"
    ],
    answer: "Session tied to one server",
    explanation: "Causes issues in load-balanced setups."
  },
  {
    question: "Best solution for distributed sessions?",
    options: ["MemoryStore", "FileStore", "Redis", "Cookies"],
    answer: "Redis",
    explanation: "Centralized session storage."
  },
  {
    question: "What is backpressure handling in Express?",
    options: [
      "Rate limiting",
      "Handling slow clients",
      "Stopping server",
      "Increasing timeout"
    ],
    answer: "Handling slow clients",
    explanation: "Prevents memory overload."
  },
  {
    question: "Which Node feature handles streaming efficiently?",
    options: ["Buffers", "Streams", "Promises", "Workers"],
    answer: "Streams",
    explanation: "Streams handle large data efficiently."
  },
  {
    question: "Why prefer streams for large file uploads?",
    options: [
      "Faster routing",
      "Lower memory usage",
      "Better security",
      "Simpler code"
    ],
    answer: "Lower memory usage",
    explanation: "Avoids loading entire file in memory."
  },
  {
    question: "What is HTTP keep-alive?",
    options: [
      "Persistent connection",
      "Retry mechanism",
      "Timeout handler",
      "Security header"
    ],
    answer: "Persistent connection",
    explanation: "Reuses TCP connections."
  },
  {
    question: "What causes event loop starvation?",
    options: [
      "Too many async calls",
      "Blocking synchronous code",
      "High network traffic",
      "Large responses"
    ],
    answer: "Blocking synchronous code",
    explanation: "Blocks async processing."
  },
  {
    question: "Which practice improves Express scalability most?",
    options: [
      "More middleware",
      "Stateless APIs",
      "Session storage",
      "Inline logic"
    ],
    answer: "Stateless APIs",
    explanation: "Easier horizontal scaling."
  },
  {
    question: "Which security principle applies to Express APIs?",
    options: [
      "Fail-open",
      "Least privilege",
      "Trust client",
      "Open access"
    ],
    answer: "Least privilege",
    explanation: "Grant minimal permissions."
  },
  {
    question: "What is API contract testing?",
    options: [
      "Unit testing",
      "Ensuring API response consistency",
      "Load testing",
      "Security testing"
    ],
    answer: "Ensuring API response consistency",
    explanation: "Prevents breaking clients."
  },
  {
    question: "Which format is preferred for API error responses?",
    options: ["Plain text", "HTML", "JSON", "XML"],
    answer: "JSON",
    explanation: "Consistent and machine-readable."
  },
  {
    question: "What is graceful error handling strategy?",
    options: [
      "Crash server",
      "Log and continue",
      "Return meaningful error response",
      "Ignore errors"
    ],
    answer: "Return meaningful error response",
    explanation: "Improves client reliability."
  },
  {
    question: "Why should stack traces not be sent to clients?",
    options: [
      "Large size",
      "Security risk",
      "Performance",
      "Readability"
    ],
    answer: "Security risk",
    explanation: "Leaks internal details."
  },
  {
    question: "Which environment should disable detailed errors?",
    options: ["Development", "Testing", "Staging", "Production"],
    answer: "Production",
    explanation: "Avoids information leakage."
  },
  {
    question: "What is the biggest Express production mistake?",
    options: [
      "Using middleware",
      "Running without process manager",
      "Too many routes",
      "Using async/await"
    ],
    answer: "Running without process manager",
    explanation: "App crashes without recovery."
  },
  {
    question: "Which logging strategy is best in production?",
    options: [
      "console.log",
      "File logging",
      "Structured logging",
      "No logging"
    ],
    answer: "Structured logging",
    explanation: "Enables better monitoring."
  },
  {
    question: "What is health-check endpoint used for?",
    options: [
      "Authentication",
      "Load balancer monitoring",
      "Caching",
      "Logging"
    ],
    answer: "Load balancer monitoring",
    explanation: "Checks service availability."
  },
  {
    question: "Common health-check route?",
    options: ["/status", "/health", "/ping", "All of these"],
    answer: "All of these",
    explanation: "Any simple endpoint works."
  },
  {
    question: "What is blue-green deployment?",
    options: [
      "Two databases",
      "Two production environments",
      "Backup strategy",
      "Load balancing"
    ],
    answer: "Two production environments",
    explanation: "Enables zero-downtime deploys."
  }
];


const Express_advan = () => {
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
            onClick={() => navigate("/express")}
          >
            BACK
          </button>
          
          <header className="text-lg md:text-xl font-extrabold text-white tracking-wide">
           🚀 Express.js Fundamentals Quiz - Advance level
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

export default Express_advan;
