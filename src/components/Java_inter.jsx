import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions = [
  {
    question: "What is method overloading?",
    options: [
      "Same method name with different parameters",
      "Same method name with same parameters",
      "Different method names",
      "Method overriding"
    ],
    answer: "Same method name with different parameters",
    explanation: "Overloading allows multiple methods with same name but different signatures."
  },
  {
    question: "What is method overriding?",
    options: [
      "Same method name with different parameters",
      "Same method in child class with same signature",
      "Private method redefinition",
      "Static method change"
    ],
    answer: "Same method in child class with same signature",
    explanation: "Overriding provides runtime polymorphism."
  },
  {
    question: "Which binding is used in method overriding?",
    options: ["Static", "Dynamic", "Compile-time", "Early"],
    answer: "Dynamic",
    explanation: "Overriding uses dynamic binding."
  },
  {
    question: "Which binding is used in method overloading?",
    options: ["Dynamic", "Runtime", "Static", "Late"],
    answer: "Static",
    explanation: "Overloading is resolved at compile time."
  },
  {
    question: "Can we override static methods?",
    options: ["Yes", "No", "Only private", "Only final"],
    answer: "No",
    explanation: "Static methods belong to class, not object."
  },
  {
    question: "What is constructor overloading?",
    options: [
      "Multiple constructors with same parameters",
      "Multiple constructors with different parameters",
      "Overriding constructor",
      "Private constructor"
    ],
    answer: "Multiple constructors with different parameters",
    explanation: "Allows different ways to create objects."
  },
  {
    question: "What happens if no constructor is defined?",
    options: [
      "Compilation error",
      "Runtime error",
      "Default constructor is created",
      "Object cannot be created"
    ],
    answer: "Default constructor is created",
    explanation: "Compiler provides a default constructor."
  },
  {
    question: "Which keyword is used to call constructor?",
    options: ["this", "super", "new", "call"],
    answer: "new",
    explanation: "new allocates memory and invokes constructor."
  },
  {
    question: "Which keyword calls parent constructor?",
    options: ["this()", "super()", "parent()", "base()"],
    answer: "super()",
    explanation: "super() invokes parent constructor."
  },
  {
    question: "What is an abstract class?",
    options: [
      "Class with no methods",
      "Class with only static methods",
      "Class with abstract and non-abstract methods",
      "Final class"
    ],
    answer: "Class with abstract and non-abstract methods",
    explanation: "Abstract class can have both."
  },
  {
    question: "Can abstract class be instantiated?",
    options: ["Yes", "No", "Only once", "Only with main"],
    answer: "No",
    explanation: "Abstract classes cannot be instantiated."
  },
  {
    question: "Which keyword defines abstract method?",
    options: ["virtual", "abstract", "override", "static"],
    answer: "abstract",
    explanation: "abstract keyword is used."
  },
  {
    question: "Can interface have method body? (Java 8+)",
    options: ["No", "Yes, default methods", "Only static", "Only private"],
    answer: "Yes, default methods",
    explanation: "Java 8 introduced default methods."
  },
  {
    question: "How many classes can a Java class extend?",
    options: ["0", "1", "2", "Multiple"],
    answer: "1",
    explanation: "Java does not support multiple inheritance of classes."
  },
  {
    question: "How many interfaces can a class implement?",
    options: ["1", "2", "Multiple", "None"],
    answer: "Multiple",
    explanation: "Java supports multiple interfaces."
  },
  {
    question: "What is marker interface?",
    options: [
      "Interface with methods",
      "Interface without methods",
      "Abstract interface",
      "Final interface"
    ],
    answer: "Interface without methods",
    explanation: "Used to mark classes (e.g., Serializable)."
  },
  {
    question: "Which package contains collections framework?",
    options: ["java.io", "java.lang", "java.util", "java.net"],
    answer: "java.util",
    explanation: "Collections are in java.util."
  },
  {
    question: "Difference between ArrayList and LinkedList?",
    options: [
      "ArrayList faster for insertion",
      "LinkedList faster for random access",
      "ArrayList faster for random access",
      "No difference"
    ],
    answer: "ArrayList faster for random access",
    explanation: "ArrayList supports index-based access."
  },
  {
    question: "Which collection is synchronized?",
    options: ["ArrayList", "HashMap", "Vector", "HashSet"],
    answer: "Vector",
    explanation: "Vector is synchronized by default."
  },
  {
    question: "Which Map allows null key?",
    options: ["Hashtable", "TreeMap", "HashMap", "ConcurrentHashMap"],
    answer: "HashMap",
    explanation: "HashMap allows one null key."
  },
  {
    question: "Which Map maintains insertion order?",
    options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
    answer: "LinkedHashMap",
    explanation: "LinkedHashMap preserves insertion order."
  },
  {
    question: "Which Map sorts keys?",
    options: ["HashMap", "LinkedHashMap", "TreeMap", "Hashtable"],
    answer: "TreeMap",
    explanation: "TreeMap sorts keys naturally."
  },
  {
    question: "What is fail-fast iterator?",
    options: [
      "Throws exception on modification",
      "Allows modification",
      "Runs faster",
      "Thread-safe"
    ],
    answer: "Throws exception on modification",
    explanation: "Fail-fast throws ConcurrentModificationException."
  },
  {
    question: "What is fail-safe iterator?",
    options: [
      "Throws exception",
      "Works on copy",
      "Stops execution",
      "Not thread-safe"
    ],
    answer: "Works on copy",
    explanation: "Fail-safe iterators don’t throw exception."
  },
  {
    question: "Which collection uses fail-safe iterator?",
    options: ["ArrayList", "HashMap", "CopyOnWriteArrayList", "Vector"],
    answer: "CopyOnWriteArrayList",
    explanation: "Uses snapshot copy."
  },
  {
    question: "Which exception is unchecked?",
    options: ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"],
    answer: "NullPointerException",
    explanation: "Unchecked exceptions extend RuntimeException."
  },
  {
    question: "Which exception must be handled?",
    options: ["RuntimeException", "NullPointerException", "IOException", "ArithmeticException"],
    answer: "IOException",
    explanation: "Checked exceptions must be handled."
  },
  {
    question: "What is try-with-resources?",
    options: [
      "Manual close",
      "Auto resource management",
      "Exception block",
      "File handling"
    ],
    answer: "Auto resource management",
    explanation: "Resources close automatically."
  },
  {
    question: "Which keyword is used to create thread?",
    options: ["run", "start", "Thread", "Runnable"],
    answer: "start",
    explanation: "start() begins new thread."
  },
  {
    question: "Which interface is used to create thread?",
    options: ["Thread", "Runnable", "Callable", "Executor"],
    answer: "Runnable",
    explanation: "Runnable defines run() method."
  },
  {
    question: "Difference between start() and run()?",
    options: [
      "Same",
      "start creates new thread",
      "run creates new thread",
      "run faster"
    ],
    answer: "start creates new thread",
    explanation: "run executes in current thread."
  },
  {
    question: "Which thread has highest priority?",
    options: ["1", "5", "10", "Depends"],
    answer: "10",
    explanation: "Thread priority ranges 1–10."
  },
  {
    question: "What is synchronization?",
    options: [
      "Multithreading",
      "Thread safety",
      "Deadlock",
      "Concurrency"
    ],
    answer: "Thread safety",
    explanation: "Synchronization prevents race conditions."
  },
  {
    question: "Which keyword is used for synchronization?",
    options: ["sync", "synchronized", "lock", "thread"],
    answer: "synchronized",
    explanation: "Ensures mutual exclusion."
  },
  {
    question: "What is deadlock?",
    options: [
      "Thread ends",
      "Infinite loop",
      "Threads waiting on each other",
      "Garbage collection"
    ],
    answer: "Threads waiting on each other",
    explanation: "Deadlock halts execution."
  },
  {
    question: "What is JVM?",
    options: [
      "Java Compiler",
      "Java Virtual Machine",
      "Java Variable Manager",
      "Java Vendor Model"
    ],
    answer: "Java Virtual Machine",
    explanation: "JVM executes bytecode."
  },
  {
    question: "What is JRE?",
    options: [
      "Java Runtime Environment",
      "Java Resource Engine",
      "Java Registry Environment",
      "Java Runtime Executor"
    ],
    answer: "Java Runtime Environment",
    explanation: "JRE provides runtime libraries."
  },
  {
    question: "What is JDK?",
    options: [
      "Java Debug Kit",
      "Java Development Kit",
      "Java Deployment Kit",
      "Java Design Kit"
    ],
    answer: "Java Development Kit",
    explanation: "JDK includes JRE + tools."
  },
  {
    question: "What is garbage collection?",
    options: [
      "Memory leak",
      "Deleting objects manually",
      "Automatic memory management",
      "Thread cleanup"
    ],
    answer: "Automatic memory management",
    explanation: "GC removes unused objects."
  },
  {
    question: "Which method requests GC?",
    options: ["gc()", "System.gc()", "free()", "delete()"],
    answer: "System.gc()",
    explanation: "Requests garbage collection."
  },
  {
    question: "Can GC be forced?",
    options: ["Yes", "No", "Sometimes", "Only in JVM"],
    answer: "No",
    explanation: "GC execution is not guaranteed."
  },
  {
    question: "Which keyword creates immutable class?",
    options: ["final", "static", "private", "const"],
    answer: "final",
    explanation: "final class cannot be extended."
  }
];



const Java_inter = () => {
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
            onClick={() => navigate("/java")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
             ☕ Java Fundamentals Quiz - Intermediate level
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

export default Java_inter;
