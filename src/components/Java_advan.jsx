import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is the Java Memory Model (JMM)?",
    options: [
      "Heap structure",
      "Rules for memory visibility and ordering",
      "Garbage collection algorithm",
      "JVM architecture"
    ],
    answer: "Rules for memory visibility and ordering",
    explanation: "JMM defines how threads interact through memory."
  },
  {
    question: "Which memory area stores class metadata?",
    options: ["Heap", "Stack", "Metaspace", "PC Register"],
    answer: "Metaspace",
    explanation: "Metaspace stores class-level metadata."
  },
  {
    question: "What replaced PermGen in Java 8?",
    options: ["Heap", "Stack", "Metaspace", "Code Cache"],
    answer: "Metaspace",
    explanation: "PermGen was removed in Java 8."
  },
  {
    question: "Which memory area is thread-specific?",
    options: ["Heap", "Metaspace", "Stack", "Method Area"],
    answer: "Stack",
    explanation: "Each thread has its own stack."
  },
  {
    question: "What causes OutOfMemoryError: Metaspace?",
    options: [
      "Infinite recursion",
      "Too many loaded classes",
      "Large objects",
      "Thread leak"
    ],
    answer: "Too many loaded classes",
    explanation: "Metaspace fills due to excessive class loading."
  },
  {
    question: "What is a stop-the-world event?",
    options: [
      "Thread deadlock",
      "JVM shutdown",
      "GC pause",
      "Exception handling"
    ],
    answer: "GC pause",
    explanation: "All application threads pause during GC."
  },
  {
    question: "Which GC is designed for low latency?",
    options: ["Serial GC", "Parallel GC", "G1 GC", "CMS"],
    answer: "G1 GC",
    explanation: "G1 balances throughput and pause times."
  },
  {
    question: "Which GC was removed after Java 14?",
    options: ["G1", "CMS", "Parallel", "ZGC"],
    answer: "CMS",
    explanation: "CMS was deprecated and removed."
  },
  {
    question: "What does volatile keyword ensure?",
    options: [
      "Atomicity",
      "Thread creation",
      "Memory visibility",
      "Synchronization"
    ],
    answer: "Memory visibility",
    explanation: "volatile ensures changes are visible across threads."
  },
  {
    question: "Does volatile guarantee atomicity?",
    options: ["Yes", "No", "Only for objects", "Only for long"],
    answer: "No",
    explanation: "volatile does not ensure atomicity."
  },
  {
    question: "What is happens-before relationship?",
    options: [
      "Execution order",
      "Memory visibility guarantee",
      "Thread priority",
      "Lock ordering"
    ],
    answer: "Memory visibility guarantee",
    explanation: "Ensures writes are visible to other threads."
  },
  {
    question: "Which keyword provides mutual exclusion?",
    options: ["volatile", "atomic", "synchronized", "final"],
    answer: "synchronized",
    explanation: "synchronized enforces exclusive access."
  },
  {
    question: "Which class provides lock without blocking?",
    options: [
      "ReentrantLock",
      "Semaphore",
      "AtomicInteger",
      "CountDownLatch"
    ],
    answer: "AtomicInteger",
    explanation: "Uses CAS for non-blocking operations."
  },
  {
    question: "What is CAS?",
    options: [
      "Copy And Save",
      "Compare And Swap",
      "Check And Sync",
      "Compute And Store"
    ],
    answer: "Compare And Swap",
    explanation: "CAS is used in lock-free algorithms."
  },
  {
    question: "Which package contains atomic classes?",
    options: [
      "java.util",
      "java.lang",
      "java.util.concurrent.atomic",
      "java.concurrent"
    ],
    answer: "java.util.concurrent.atomic",
    explanation: "Atomic classes are in this package."
  },
  {
    question: "What is ReentrantLock advantage over synchronized?",
    options: [
      "Faster always",
      "Manual lock control",
      "Less memory",
      "No deadlock"
    ],
    answer: "Manual lock control",
    explanation: "ReentrantLock offers tryLock, fairness, etc."
  },
  {
    question: "What is thread starvation?",
    options: [
      "Thread ends",
      "Thread never gets CPU",
      "Thread sleeps",
      "Thread waits"
    ],
    answer: "Thread never gets CPU",
    explanation: "Occurs due to poor scheduling."
  },
  {
    question: "What is livelock?",
    options: [
      "Threads blocked",
      "Threads running but not progressing",
      "Infinite recursion",
      "Dead thread"
    ],
    answer: "Threads running but not progressing",
    explanation: "Threads keep responding but make no progress."
  },
  {
    question: "Which Executor creates threads as needed?",
    options: [
      "FixedThreadPool",
      "SingleThreadExecutor",
      "CachedThreadPool",
      "ScheduledThreadPool"
    ],
    answer: "CachedThreadPool",
    explanation: "Creates new threads when required."
  },
  {
    question: "Which Executor limits thread count?",
    options: [
      "CachedThreadPool",
      "FixedThreadPool",
      "ForkJoinPool",
      "WorkStealingPool"
    ],
    answer: "FixedThreadPool",
    explanation: "Uses fixed number of threads."
  },
  {
    question: "What is ForkJoinPool best suited for?",
    options: [
      "IO tasks",
      "Sequential tasks",
      "Divide-and-conquer tasks",
      "Database tasks"
    ],
    answer: "Divide-and-conquer tasks",
    explanation: "ForkJoinPool uses work-stealing."
  },
  {
    question: "Which interface supports returning result from thread?",
    options: ["Runnable", "Thread", "Callable", "Executor"],
    answer: "Callable",
    explanation: "Callable returns a value."
  },
  {
    question: "What does Future.get() do?",
    options: [
      "Starts thread",
      "Returns result and blocks",
      "Cancels task",
      "Checks status"
    ],
    answer: "Returns result and blocks",
    explanation: "Blocks until computation completes."
  },
  {
    question: "What is CompletableFuture?",
    options: [
      "Blocking future",
      "Async computation pipeline",
      "Thread class",
      "Executor service"
    ],
    answer: "Async computation pipeline",
    explanation: "Supports async, non-blocking composition."
  },
  {
    question: "Which method combines two CompletableFutures?",
    options: ["thenApply()", "thenCompose()", "thenCombine()", "join()"],
    answer: "thenCombine()",
    explanation: "Combines results of two futures."
  },
  {
    question: "What is backpressure?",
    options: [
      "Thread blocking",
      "Flow control in async systems",
      "Deadlock prevention",
      "GC optimization"
    ],
    answer: "Flow control in async systems",
    explanation: "Prevents overwhelming consumers."
  },
  {
    question: "Which Java API supports reactive streams?",
    options: [
      "java.io",
      "java.util.concurrent.Flow",
      "java.stream",
      "java.net"
    ],
    answer: "java.util.concurrent.Flow",
    explanation: "Flow API supports reactive streams."
  },
  {
    question: "What is Stream API main benefit?",
    options: [
      "Faster loops",
      "Declarative data processing",
      "Thread safety",
      "Memory optimization"
    ],
    answer: "Declarative data processing",
    explanation: "Streams focus on what, not how."
  },
  {
    question: "Are Java streams reusable?",
    options: ["Yes", "No", "Only parallel", "Only sequential"],
    answer: "No",
    explanation: "Streams are single-use."
  },
  {
    question: "Difference between map() and flatMap()?",
    options: [
      "Same",
      "flatMap flattens nested streams",
      "map flattens",
      "flatMap filters"
    ],
    answer: "flatMap flattens nested streams",
    explanation: "flatMap avoids nested streams."
  },
  {
    question: "Which operation triggers stream execution?",
    options: ["map", "filter", "peek", "collect"],
    answer: "collect",
    explanation: "Terminal operations trigger execution."
  },
  {
    question: "What is short-circuiting in streams?",
    options: [
      "Stop JVM",
      "Early termination",
      "Parallel execution",
      "Lazy loading"
    ],
    answer: "Early termination",
    explanation: "Operations like findFirst stop early."
  },
  {
    question: "Which design pattern ensures single instance?",
    options: [
      "Factory",
      "Prototype",
      "Singleton",
      "Builder"
    ],
    answer: "Singleton",
    explanation: "Ensures only one instance exists."
  },
  {
    question: "Which Singleton implementation is thread-safe?",
    options: [
      "Lazy",
      "Eager",
      "Double-checked locking",
      "All of these"
    ],
    answer: "All of these",
    explanation: "All can be thread-safe if implemented correctly."
  },
  {
    question: "What is immutability?",
    options: [
      "No object creation",
      "Object state cannot change",
      "Final methods",
      "Static fields"
    ],
    answer: "Object state cannot change",
    explanation: "Immutable objects are thread-safe."
  },
  {
    question: "Why String is immutable?",
    options: [
      "Performance",
      "Security",
      "Caching",
      "All of these"
    ],
    answer: "All of these",
    explanation: "Immutability provides multiple benefits."
  },
  {
    question: "What is defensive copying?",
    options: [
      "Deep copy",
      "Protect internal state",
      "Clone object",
      "Serialization"
    ],
    answer: "Protect internal state",
    explanation: "Used in immutable classes."
  },
  {
    question: "What is reflection?",
    options: [
      "Compile-time inspection",
      "Runtime class inspection",
      "JVM optimization",
      "Garbage collection"
    ],
    answer: "Runtime class inspection",
    explanation: "Reflection inspects classes at runtime."
  },
  {
    question: "Main drawback of reflection?",
    options: [
      "Memory usage",
      "Security risk",
      "Performance overhead",
      "Complex syntax"
    ],
    answer: "Performance overhead",
    explanation: "Reflection bypasses normal optimizations."
  },
  {
    question: "What is classloader hierarchy?",
    options: [
      "Bootstrap → Platform → Application",
      "Application → Bootstrap → Platform",
      "Platform → Bootstrap → Application",
      "Single loader"
    ],
    answer: "Bootstrap → Platform → Application",
    explanation: "Class loading follows delegation model."
  },
  {
    question: "What is custom classloader used for?",
    options: [
      "GC",
      "Security",
      "Dynamic class loading",
      "Thread management"
    ],
    answer: "Dynamic class loading",
    explanation: "Used in plugins, app servers."
  },
  {
    question: "What is bytecode?",
    options: [
      "Machine code",
      "OS code",
      "JVM instruction set",
      "Source code"
    ],
    answer: "JVM instruction set",
    explanation: "Bytecode is executed by JVM."
  },
  {
    question: "What is JIT compiler?",
    options: [
      "Ahead-of-time compiler",
      "Runtime optimizer",
      "Interpreter",
      "Debugger"
    ],
    answer: "Runtime optimizer",
    explanation: "JIT compiles hot code paths."
  },
  {
    question: "What is escape analysis?",
    options: [
      "Thread escape detection",
      "Memory optimization technique",
      "GC algorithm",
      "Locking mechanism"
    ],
    answer: "Memory optimization technique",
    explanation: "Optimizes object allocation and locking."
  },
  {
    question: "What is the biggest Java performance killer?",
    options: [
      "GC",
      "Synchronized blocks",
      "Memory leaks",
      "Unbounded object creation"
    ],
    answer: "Unbounded object creation",
    explanation: "Creates GC pressure and latency."
  }
];



const Java_advan = () => {
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
            onClick={() => navigate("/java")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             ☕ Java Fundamentals Quiz - Advance level
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
                onClick={() => navigate("/java")}
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

export default Java_advan;
