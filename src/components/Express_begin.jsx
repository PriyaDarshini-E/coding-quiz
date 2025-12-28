import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is Express.js?",
    options: [
      "Frontend framework",
      "Node.js framework",
      "Database",
      "Programming language"
    ],
    answer: "Node.js framework",
    explanation: "Express is a minimal web framework built on Node.js."
  },
  {
    question: "Express.js is used for?",
    options: [
      "Styling UI",
      "Building APIs and web servers",
      "Database management",
      "Mobile apps"
    ],
    answer: "Building APIs and web servers",
    explanation: "Express simplifies backend development."
  },
  {
    question: "Which command installs Express?",
    options: [
      "npm install node",
      "npm install express",
      "npm install server",
      "npm install backend"
    ],
    answer: "npm install express",
    explanation: "Express is installed via npm."
  },
  {
    question: "Which function creates an Express app?",
    options: ["express()", "createApp()", "new Express()", "app()"],
    answer: "express()",
    explanation: "express() initializes the application."
  },
  {
    question: "Which method starts the server?",
    options: ["app.run()", "app.start()", "app.listen()", "server.listen()"],
    answer: "app.listen()",
    explanation: "app.listen() starts the HTTP server."
  },
  {
    question: "Which port is commonly used for Express?",
    options: ["3000", "80", "21", "443"],
    answer: "3000",
    explanation: "Port 3000 is commonly used in development."
  },
  {
    question: "Which object represents request?",
    options: ["res", "req", "request", "http"],
    answer: "req",
    explanation: "req contains request data."
  },
  {
    question: "Which object represents response?",
    options: ["req", "res", "response", "send"],
    answer: "res",
    explanation: "res sends data back to client."
  },
  {
    question: "Which method sends response?",
    options: ["res.write()", "res.send()", "res.end()", "res.push()"],
    answer: "res.send()",
    explanation: "res.send() sends response body."
  },
  {
    question: "Which method sends JSON response?",
    options: ["res.send()", "res.json()", "res.data()", "res.object()"],
    answer: "res.json()",
    explanation: "res.json() sends JSON data."
  },
  {
    question: "Which HTTP method is used to fetch data?",
    options: ["POST", "GET", "PUT", "DELETE"],
    answer: "GET",
    explanation: "GET retrieves data."
  },
  {
    question: "Which HTTP method is used to send data?",
    options: ["GET", "POST", "FETCH", "READ"],
    answer: "POST",
    explanation: "POST sends data to server."
  },
  {
    question: "Which HTTP method updates data?",
    options: ["PUT", "GET", "FETCH", "HEAD"],
    answer: "PUT",
    explanation: "PUT updates existing data."
  },
  {
    question: "Which HTTP method removes data?",
    options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
    answer: "DELETE",
    explanation: "DELETE removes resources."
  },
  {
    question: "Which Express method handles GET request?",
    options: ["app.get()", "app.post()", "app.fetch()", "app.read()"],
    answer: "app.get()",
    explanation: "app.get() handles GET routes."
  },
  {
    question: "Which Express method handles POST request?",
    options: ["app.send()", "app.post()", "app.write()", "app.push()"],
    answer: "app.post()",
    explanation: "app.post() handles POST routes."
  },
  {
    question: "What is routing in Express?",
    options: [
      "Database connection",
      "Handling HTTP requests",
      "Middleware execution",
      "Error handling"
    ],
    answer: "Handling HTTP requests",
    explanation: "Routing defines how app responds to requests."
  },
  {
    question: "What is middleware?",
    options: [
      "Database",
      "Function between request and response",
      "Frontend code",
      "Server"
    ],
    answer: "Function between request and response",
    explanation: "Middleware processes req/res."
  },
  {
    question: "Which function registers middleware?",
    options: ["app.use()", "app.run()", "app.add()", "app.load()"],
    answer: "app.use()",
    explanation: "app.use() registers middleware."
  },
  {
    question: "Which middleware parses JSON?",
    options: [
      "express.json()",
      "bodyParser()",
      "jsonParser()",
      "parseJSON()"
    ],
    answer: "express.json()",
    explanation: "Parses JSON request bodies."
  },
  {
    question: "Which middleware parses URL-encoded data?",
    options: [
      "express.urlencoded()",
      "express.json()",
      "urlParser()",
      "bodyParser()"
    ],
    answer: "express.urlencoded()",
    explanation: "Parses form data."
  },
  {
    question: "Which HTTP status code means success?",
    options: ["200", "404", "500", "401"],
    answer: "200",
    explanation: "200 indicates successful request."
  },
  {
    question: "Which status code means resource not found?",
    options: ["200", "401", "403", "404"],
    answer: "404",
    explanation: "404 means not found."
  },
  {
    question: "Which status code means server error?",
    options: ["400", "401", "500", "302"],
    answer: "500",
    explanation: "500 indicates server error."
  },
  {
    question: "What does res.status() do?",
    options: [
      "Ends request",
      "Sets HTTP status",
      "Sends JSON",
      "Redirects"
    ],
    answer: "Sets HTTP status",
    explanation: "Used to set status code."
  },
  {
    question: "Which method redirects client?",
    options: ["res.send()", "res.redirect()", "res.forward()", "res.route()"],
    answer: "res.redirect()",
    explanation: "Redirects to another URL."
  },
  {
    question: "What is nodemon?",
    options: [
      "Framework",
      "Database",
      "Auto-restart tool",
      "Package manager"
    ],
    answer: "Auto-restart tool",
    explanation: "Nodemon restarts server on changes."
  },
  {
    question: "Which command runs app with nodemon?",
    options: ["node app.js", "nodemon app.js", "npm start", "run node"],
    answer: "nodemon app.js",
    explanation: "Nodemon watches file changes."
  },
  {
    question: "Which folder stores routes usually?",
    options: ["views", "routes", "models", "public"],
    answer: "routes",
    explanation: "routes folder holds route files."
  },
  {
    question: "Which object holds route parameters?",
    options: ["req.body", "req.params", "req.query", "req.headers"],
    answer: "req.params",
    explanation: "Route parameters stored in req.params."
  },
  {
    question: "Which object holds query string?",
    options: ["req.params", "req.query", "req.body", "req.url"],
    answer: "req.query",
    explanation: "Query strings stored in req.query."
  },
  {
    question: "Which object holds POST data?",
    options: ["req.body", "req.params", "req.query", "req.headers"],
    answer: "req.body",
    explanation: "Body contains POST data."
  },
  {
    question: "Which Express feature handles static files?",
    options: ["express.static()", "app.public()", "staticFiles()", "serve()"],
    answer: "express.static()",
    explanation: "Serves static assets."
  },
  {
    question: "Which folder commonly holds static files?",
    options: ["routes", "views", "public", "controllers"],
    answer: "public",
    explanation: "public folder stores static assets."
  },
  {
    question: "Which template engine works with Express?",
    options: ["EJS", "Pug", "Handlebars", "All of these"],
    answer: "All of these",
    explanation: "Express supports multiple view engines."
  },
  {
    question: "Which method sets view engine?",
    options: ["app.set()", "app.engine()", "app.use()", "app.view()"],
    answer: "app.set()",
    explanation: "Used to configure app settings."
  },
  {
    question: "Which file is app entry point?",
    options: ["index.js", "server.js", "app.js", "Any of these"],
    answer: "Any of these",
    explanation: "Depends on project setup."
  },
  {
    question: "What does next() do?",
    options: [
      "Ends request",
      "Calls next middleware",
      "Restarts server",
      "Returns response"
    ],
    answer: "Calls next middleware",
    explanation: "next() passes control."
  },
  {
    question: "Which middleware handles errors?",
    options: [
      "Normal middleware",
      "Error-handling middleware",
      "Route middleware",
      "Static middleware"
    ],
    answer: "Error-handling middleware",
    explanation: "Has (err, req, res, next)."
  },
  {
    question: "Which order does middleware execute?",
    options: [
      "Random",
      "Alphabetical",
      "Defined order",
      "Last first"
    ],
    answer: "Defined order",
    explanation: "Middleware runs top to bottom."
  },
  {
    question: "Express is ___ framework.",
    options: ["Opinionated", "Unopinionated", "Strict", "Monolithic"],
    answer: "Unopinionated",
    explanation: "Gives flexibility in design."
  },
  {
    question: "Which Express feature improves modularity?",
    options: ["Router", "Middleware", "JSON", "Static files"],
    answer: "Router",
    explanation: "Router groups routes."
  },
  {
    question: "Which object creates router?",
    options: ["express.router()", "Router()", "express.Router()", "new Router()"],
    answer: "express.Router()",
    explanation: "Used to create modular routes."
  },
  {
    question: "Which HTTP header defines content type?",
    options: ["Accept", "Content-Type", "Authorization", "Host"],
    answer: "Content-Type",
    explanation: "Specifies data format."
  },
  {
    question: "Express is built on top of?",
    options: ["HTTP", "Node.js", "TCP", "Browser"],
    answer: "Node.js",
    explanation: "Express runs on Node.js runtime."
  }
];


const Express_begin = () => {
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
            onClick={() => navigate("/express")}
          >
            BACK
          </button>
          
          <header className="text-lg md:text-xl font-extrabold text-white tracking-wide">
           🚀 Express.js Fundamentals Quiz - Beginner level
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

export default Express_begin;
