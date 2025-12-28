import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sql = () => {
  const navigate = useNavigate();
  const [showPopupBegin, setShowPopupBegin] = useState(false);
  const [showPopupInter, setShowPopupInter] = useState(false);
  const [showPopupAdvan, setShowPopupAdvan] = useState(false);
  
  return (
    <div className="flex flex-col gap-10">

      {/* HEADER */}
      <div className="w-full h-16 bg-linear-to-r from-teal-600 to-cyan-500 
      flex items-center justify-center px-10 shadow-md relative">

        <button
          className="absolute left-10 w-32 h-10 border border-white/40 text-white
          rounded-lg text-sm font-semibold flex items-center justify-center
          hover:bg-white hover:text-teal-600 transition-all duration-300"
          onClick={() => navigate("/home")}
        >
          Home
        </button>

        <header className="text-lg md:text-xl font-extrabold text-white tracking-wide">
          🗄️ SQL Fundamentals Quiz
        </header>
      </div>

      {/* CONTENT */}
      <div className="flex items-center gap-5 flex-col py-6">
        <button
          className="w-50 h-30 bg-amber-300 text-slate-900 font-bold 
          rounded-xl shadow-md hover:bg-amber-400 hover:shadow-lg transition"
          onClick={() => setShowPopupBegin(true)}>
          Beginner
        </button>

        <button className="w-50 h-30 bg-slate-300 text-slate-900 font-bold 
        rounded-xl shadow-md hover:bg-slate-400 hover:shadow-lg transition"
        onClick={() => setShowPopupInter(true)}  >
          Intermediate
        </button>

        <button className="w-50 h-30 bg-rose-300 text-slate-900 font-bold 
        rounded-xl shadow-md hover:bg-rose-400 hover:shadow-lg transition" 
          onClick={() => setShowPopupAdvan(true)} >
          Advance
        </button>
      </div>

      {/* POPUP MODAL */}
      {showPopupBegin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl  w-150 h-70 shadow-xl animate-scale-in flex items-center gap-10 flex-col">

            <h2 className="text-xl font-extrabold text-teal-600 mb-4 text-center">
              📋 Quiz Instructions
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-1xl">
              <li>Total questions: <b>20</b></li>
              <li>Each question carries <b>1 point</b></li>
              <li>Time limit per question: <b>45 seconds</b></li>
              <li>No negative marking</li>
              <li>No skipping question ; you'll see why each answer is right or wrong.</li>
            </ul>

            <div className="flex justify-between mt-6 gap-30">
              <button
                className="w-30 h-8 rounded-lg border border-slate-400
                text-slate-600 hover:bg-slate-100 transition"
                onClick={() => setShowPopupBegin(false)}
              >
                Close
              </button>

              <button
                className="w-30 h-8 rounded-lg bg-teal-600 text-white
                font-semibold hover:bg-teal-700 transition"
                onClick={() => navigate("/sql_begin")}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}


         {showPopupInter && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl  w-150 h-70 shadow-xl animate-scale-in flex items-center gap-10 flex-col">

            <h2 className="text-xl font-extrabold text-teal-600 mb-4 text-center">
              📋 Quiz Instructions
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-1xl">
              <li>Total questions: <b>20</b></li>
              <li>Each question carries <b>1 point</b></li>
              <li>Time limit per question: <b>30 seconds</b></li>
              <li>No negative marking</li>
              <li>No skipping question ; you'll see why each answer is right or wrong.</li>
            </ul>

            <div className="flex justify-between mt-6 gap-30">
              <button
                className="w-30 h-8 rounded-lg border border-slate-400
                text-slate-600 hover:bg-slate-100 transition"
                onClick={() => setShowPopupInter(false)}
              >
                Close
              </button>

              <button
                className="w-30 h-8 rounded-lg bg-teal-600 text-white
                font-semibold hover:bg-teal-700 transition"
                onClick={() => navigate("/sql_inter")}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}  


        {showPopupAdvan && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl  w-150 h-70 shadow-xl animate-scale-in flex items-center gap-10 flex-col">

            <h2 className="text-xl font-extrabold text-teal-600 mb-4 text-center">
              📋 Quiz Instructions
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-1xl">
              <li>Total questions: <b>20</b></li>
              <li>Each question carries <b>1 point</b></li>
              <li>Time limit per question: <b>15 seconds</b></li>
              <li>No negative marking</li>
              <li>No skipping question ; you'll see why each answer is right or wrong.</li>
            </ul>

            <div className="flex justify-between mt-6 gap-30">
              <button
                className="w-30 h-8 rounded-lg border border-slate-400
                text-slate-600 hover:bg-slate-100 transition"
                onClick={() => setShowPopupAdvan(false)}
              >
                Close
              </button>

              <button
                className="w-30 h-8 rounded-lg bg-teal-600 text-white
                font-semibold hover:bg-teal-700 transition"
                onClick={() => navigate("/sql_advan")}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Sql;
