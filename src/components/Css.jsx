import React from "react";
import { useNavigate } from "react-router-dom";

const Css = () => {
  const navigate = useNavigate();

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
          CSS Quiz
        </header>
      </div>

      {/* CONTENT */}
      <div className="flex items-center gap-5 flex-col py-6">
        <button className="w-50 h-30 bg-amber-300 text-slate-900 font-bold 
            rounded-xl shadow-md hover:bg-amber-400 hover:shadow-lg transition">
          Beginner
        </button>

        <button className="w-50 h-30 bg-slate-300 text-slate-900 font-bold 
              rounded-xl shadow-md hover:bg-slate-400 hover:shadow-lg transition">
          Intermediate
        </button>

        <button className="w-50 h-30 bg-rose-300 text-slate-900 font-bold 
                rounded-xl shadow-md hover:bg-rose-400 hover:shadow-lg transition">
          Advance
        </button>

      </div>

    </div>
  );
};

export default Css;
