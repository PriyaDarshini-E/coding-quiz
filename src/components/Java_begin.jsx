import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== QUESTIONS ===== */
const allQuestions  = [
  {
    question: "What is Java?",
    options: [
      "A scripting language",
      "A programming language",
      "An operating system",
      "A database"
    ],
    answer: "A programming language",
    explanation: "Java is a high-level, object-oriented programming language."
  },
  {
    question: "Java was developed by which company?",
    options: [
      "Microsoft",
      "Sun Microsystems",
      "Oracle",
      "IBM"
    ],
    answer: "Sun Microsystems",
    explanation: "Java was originally developed by Sun Microsystems."
  },
  {
    question: "Java is ___ typed language.",
    options: [
      "Dynamically",
      "Weakly",
      "Statically",
      "Loosely"
    ],
    answer: "Statically",
    explanation: "Java checks types at compile time."
  },
  {
    question: "Which method is the entry point of Java program?",
    options: [
      "start()",
      "run()",
      "main()",
      "init()"
    ],
    answer: "main()",
    explanation: "Execution starts from main method."
  },
  {
    question: "Correct main method signature?",
    options: [
      "public static void main(String[] args)",
      "static void main()",
      "void main(String args)",
      "public main(String[] args)"
    ],
    answer: "public static void main(String[] args)",
    explanation: "This is the standard JVM-recognized signature."
  },
  {
    question: "Which keyword is used to define a class?",
    options: ["class", "define", "struct", "object"],
    answer: "class",
    explanation: "class keyword defines a blueprint."
  },
  {
    question: "Which keyword creates an object?",
    options: ["new", "create", "object", "make"],
    answer: "new",
    explanation: "new allocates memory for object."
  },
  {
    question: "Which concept allows code reuse?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer: "Inheritance",
    explanation: "Inheritance allows reusing parent class code."
  },
  {
    question: "Which keyword inherits a class?",
    options: ["implements", "inherits", "extends", "super"],
    answer: "extends",
    explanation: "extends is used for class inheritance."
  },
  {
    question: "Which keyword implements interface?",
    options: ["extends", "implements", "interface", "inherit"],
    answer: "implements",
    explanation: "implements is used with interfaces."
  },
  {
    question: "Which access modifier is most restrictive?",
    options: ["public", "protected", "default", "private"],
    answer: "private",
    explanation: "private members are accessible only within class."
  },
  {
    question: "Which access modifier allows access everywhere?",
    options: ["private", "default", "protected", "public"],
    answer: "public",
    explanation: "public members are accessible globally."
  },
  {
    question: "Which keyword prevents inheritance?",
    options: ["static", "private", "final", "const"],
    answer: "final",
    explanation: "final class cannot be extended."
  },
  {
    question: "Which keyword prevents method overriding?",
    options: ["static", "private", "final", "abstract"],
    answer: "final",
    explanation: "final methods cannot be overridden."
  },
  {
    question: "Which keyword creates constant?",
    options: ["final", "const", "static", "immutable"],
    answer: "final",
    explanation: "final variables cannot be reassigned."
  },
  {
    question: "Which data type stores decimal values?",
    options: ["int", "double", "char", "boolean"],
    answer: "double",
    explanation: "double stores floating-point values."
  },
  {
    question: "Which data type stores true/false?",
    options: ["int", "char", "boolean", "byte"],
    answer: "boolean",
    explanation: "boolean stores true or false."
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while",
    explanation: "do-while runs once before condition check."
  },
  {
    question: "Which keyword exits loop?",
    options: ["exit", "break", "stop", "return"],
    answer: "break",
    explanation: "break exits loop immediately."
  },
  {
    question: "Which keyword skips current iteration?",
    options: ["skip", "continue", "pass", "next"],
    answer: "continue",
    explanation: "continue jumps to next iteration."
  },
  {
    question: "Which operator compares values?",
    options: ["=", "==", "!=", "==="],
    answer: "==",
    explanation: "== compares primitive values."
  },
  {
    question: "Which operator assigns value?",
    options: ["=", "==", "!=", "<>"],
    answer: "=",
    explanation: "= assigns value."
  },
  {
    question: "Which package is imported by default?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    answer: "java.lang",
    explanation: "java.lang is automatically imported."
  },
  {
    question: "Which class is parent of all classes?",
    options: ["Main", "Base", "Object", "Class"],
    answer: "Object",
    explanation: "Object is root of Java class hierarchy."
  },
  {
    question: "Which method prints output?",
    options: ["print()", "console()", "System.out.println()", "echo()"],
    answer: "System.out.println()",
    explanation: "Prints output to console."
  },
  {
    question: "Which keyword is used for exception handling?",
    options: ["catch", "throw", "try", "All of these"],
    answer: "All of these",
    explanation: "All are part of exception handling."
  },
  {
    question: "Which block handles exception?",
    options: ["try", "throw", "catch", "finally"],
    answer: "catch",
    explanation: "catch handles exceptions."
  },
  {
    question: "Which block always executes?",
    options: ["try", "catch", "throw", "finally"],
    answer: "finally",
    explanation: "finally executes regardless of exception."
  },
  {
    question: "Which keyword throws exception explicitly?",
    options: ["catch", "throws", "throw", "exception"],
    answer: "throw",
    explanation: "throw explicitly throws exception."
  },
  {
    question: "Which keyword declares exception?",
    options: ["throw", "throws", "catch", "try"],
    answer: "throws",
    explanation: "throws declares exception in method signature."
  },
  {
    question: "Which array index starts from?",
    options: ["1", "-1", "0", "Depends"],
    answer: "0",
    explanation: "Java arrays are zero-indexed."
  },
  {
    question: "Which collection allows duplicates?",
    options: ["Set", "Map", "List", "None"],
    answer: "List",
    explanation: "List allows duplicate elements."
  },
  {
    question: "Which collection does not allow duplicates?",
    options: ["List", "ArrayList", "Set", "Queue"],
    answer: "Set",
    explanation: "Set stores unique values."
  },
  {
    question: "Which class implements List?",
    options: ["HashSet", "ArrayList", "HashMap", "TreeMap"],
    answer: "ArrayList",
    explanation: "ArrayList implements List."
  },
  {
    question: "Which class implements Map?",
    options: ["ArrayList", "LinkedList", "HashMap", "HashSet"],
    answer: "HashMap",
    explanation: "HashMap implements Map interface."
  },
  {
    question: "Which keyword refers current object?",
    options: ["this", "super", "self", "object"],
    answer: "this",
    explanation: "this refers to current object."
  },
  {
    question: "Which keyword refers parent object?",
    options: ["this", "parent", "base", "super"],
    answer: "super",
    explanation: "super refers to parent class."
  },
  {
    question: "Which concept hides internal details?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    answer: "Encapsulation",
    explanation: "Encapsulation hides data using access modifiers."
  },
  {
    question: "Which concept shows only essential features?",
    options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
    answer: "Abstraction",
    explanation: "Abstraction hides implementation details."
  },
  {
    question: "Which feature allows method overloading?",
    options: ["Inheritance", "Abstraction", "Polymorphism", "Encapsulation"],
    answer: "Polymorphism",
    explanation: "Same method name, different parameters."
  },
  {
    question: "Which file extension is Java source file?",
    options: [".class", ".java", ".jar", ".exe"],
    answer: ".java",
    explanation: "Source files use .java extension."
  },
  {
    question: "Which file is generated after compilation?",
    options: [".java", ".class", ".jar", ".exe"],
    answer: ".class",
    explanation: "Compiled bytecode is stored in .class file."
  },
  {
    question: "Java code runs on?",
    options: ["Compiler", "JVM", "Browser", "OS"],
    answer: "JVM",
    explanation: "JVM executes Java bytecode."
  },
  {
    question: "Why Java is platform independent?",
    options: [
      "Uses C++",
      "Uses JVM",
      "Uses interpreter",
      "Uses compiler only"
    ],
    answer: "Uses JVM",
    explanation: "Bytecode runs on any JVM."
  }
];



const Java_begin = () => {
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
            onClick={() => navigate("/java")}
          >
            BACK
          </button>

          <header className="text-lg font-extrabold text-white">
            ☕ Java Fundamentals Quiz - Beginner level
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

export default Java_begin;
