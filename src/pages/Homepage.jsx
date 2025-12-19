import { useNavigate } from "react-router-dom";
import logo from "../assets/images/wcq_logo.png";
import ReviewSlider from "../components/ReviewSlider";


const Homepage = () => {
  const navigate = useNavigate();

  // ✅ read login status
  const isLoggedIn = localStorage.getItem("wcq_loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("wcq_loggedIn");
    localStorage.removeItem("wcq_currentUser");
    navigate("/login");
  };
   
  return (
    <>
      <header>
        <div className="flex justify-center p-4 md:p-5">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="WCQ Logo"
              className="w-14 h-14 md:w-16 md:h-16" />

            <span className="text-sm md:text-base tracking-wide text-slate-500 italic">
              Think Weird. Code Smart.
            </span>
          </div>
        </div>
      </header>


      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold">
              <span className="px-2 text-teal-300">Weird</span>
              {" "}
              <span className="px-2 text-rose-300">Coding Quiz</span>
            </h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#home" className="text-slate-200 hover:text-teal-400 transition">
              Home
            </a>
            <a href="#how-to" className="text-slate-200 hover:text-teal-400 transition">
              How-To
            </a>
            <a href="#quiz" className="text-slate-200 hover:text-rose-400 transition">
              Quiz-Mode
            </a>
            <a href="#review" className="text-slate-200 hover:text-rose-400 transition">
              Review
            </a>
            <a href="#contact" className="text-slate-200 hover:text-rose-400 transition">
              Contact-us
            </a>
          </div>

          <div className="flex items-center gap-10">
            {isLoggedIn ? (
              <button
                className="w-20 text-sm font-semibold text-rose-300 border border-rose-400/50 
                 rounded-lg hover:bg-rose-400 hover:text-slate-900 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  className="w-20 text-sm font-semibold text-teal-300 border border-teal-400/50 
                   rounded-lg hover:bg-teal-400 hover:text-slate-900 transition"
                  onClick={() => navigate("/login")}
                >
                  Sign-up
                </button>

                <button
                  className="w-20 text-sm font-semibold text-rose-300 border border-rose-400/50 
                   rounded-lg hover:bg-rose-400 hover:text-slate-900 transition"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>


        </div>
      </nav>

      <section id="home"
        className="min-h-[70vh] py-16 flex items-center justify-center bg-linear-to-br from-slate-700 via-slate-800 to-slate-900" >
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Think <span className="text-teal-400">Weird</span>,
              <br />
              Code <span className="text-rose-400">Smart</span> 🤯
            </h2>

            <p className="mt-4 text-slate-300 text-lg">
              WCQ is not a normal quiz.
              It tests your <span className="text-teal-300">logic</span>,
              your <span className="text-rose-300">coding traps</span>,
              and your ability to think differently.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-100 rounded-2xl shadow-xl px-14 py-12 max-w-xl w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                &nbsp; 🤔 Weird Question Preview
              </h3>

              <p className="text-slate-700 font-medium mb-8">
                &nbsp;&nbsp;What is the output of : <code className="font-semibold">typeof NaN ?</code>
              </p>

              <ul className="space-y-5 text-slate-700">
                <li className="p-5 rounded-xl hover:bg-slate-200 cursor-pointer transition ">
                  &nbsp;&nbsp;&nbsp;&nbsp; A) "NaN"
                </li>
                <li className="p-5 rounded-xl hover:bg-slate-200 cursor-pointer font-semibold text-teal-600 transition">
                  &nbsp;&nbsp;&nbsp;&nbsp; B) number ✅
                </li>
                <li className="p-5 rounded-xl hover:bg-slate-200 cursor-pointer transition">
                  &nbsp;&nbsp;&nbsp;&nbsp; C) undefined
                </li>
                <li className="p-5 rounded-xl hover:bg-slate-200 cursor-pointer transition">
                  &nbsp;&nbsp;&nbsp;&nbsp; D) object
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to"
        className="min-h-[70vh] py-16  bg-linear-to-br from-slate-700 via-slate-800 to-slate-900" >

        <div className="h-15 ">
          <h4 className=" text-3xl font-semibold text-teal-500 text-center mt-2">How it works</h4>
          <p className="text-center text-slate-300 mt-3 mb-10">
            Follow these 4 simple steps to challenge your coding brain 🧠
          </p>
        </div>

        <div className="h-90 w-full flex  justify-center items-center ">
          <div className="flex  justify-around items-center w-full text-center p-6 gap-5">

            <div id="step1" className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-70 w-60 rounded-xl shadow-lg  mt-10 hover:scale-105 transition flex gap-5 flex-col" >
              <div className="flex justify-center items-center h-23">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-rose-400 to-teal-400
                        flex items-center justify-center text-gray-720 font-bold text-xl
                        shadow-[0_0_20px_rgba(236,72,153,0.5)]  mb-6">1</div>
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                Choose Quiz Level
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pick Beginner, Intermediate, or Advanced level to start the quiz.
              </p>
            </div>

            <div id="step2" className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-70 w-65 rounded-xl shadow-lg  mt-10 hover:scale-105 transition flex gap-5 flex-col" >
              <div className="flex justify-center items-center h-23">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-rose-400 to-teal-400
                        flex items-center justify-center text-gray-720 font-bold text-xl
                        shadow-[0_0_20px_rgba(236,72,153,0.5)]  mb-6">2</div>
              </div>


              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                Read the Weird Question
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Each question tests quirks, logic traps, and output predictions.
              </p>
            </div>


            <div id="step3" className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-70 w-60 rounded-xl shadow-lg  mt-10 hover:scale-105 transition flex gap-5 flex-col" >
              <div className="flex justify-center items-center h-23">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-rose-400 to-teal-400
                        flex items-center justify-center text-gray-720 font-bold text-xl
                        shadow-[0_0_20px_rgba(236,72,153,0.5)]  mb-6">3</div>
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                Select Your Answer
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Choose the correct output — looks simple but is't 😄
              </p>
            </div>


            <div id="step4" className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-70 w-60 rounded-xl shadow-lg  mt-10 hover:scale-105 transition flex gap-5 flex-col" >
              <div className="flex justify-center items-center h-23 ">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-rose-400 to-teal-400
                        flex items-center justify-center text-gray-720 font-bold text-xl
                        shadow-[0_0_20px_rgba(236,72,153,0.5)]  mb-6">4</div>
              </div>

              <h3 className="text-xl font-semibold text-slate-100 ">
                Check Result & Learn
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mt-auto">
                View instant results with explanations to improve your skills.
              </p>
            </div>


          </div>
        </div>
      </section>

      <section id="quiz"
        className="h-100 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex  flex-col gap-8 "
      >
        {/* Heading */}
        <div className="flex flex-col gap-2 ">
          <h4 className="text-3xl font-semibold text-rose-300 text-center">
            Choose Your Quiz Category
          </h4>
          <p className="text-center text-slate-300">
            Select a technology and start the quiz instantly 🚀
          </p>
        </div>

        {/* BUTTON AREA (Green box equivalent) */}
        <div className="flex justify-center items-center ">
          <div className="w-full p-10 ">

            {/* Button Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => navigate("/shortcuts")}>
                Keyboard Shortcuts
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-teal-400 hover:text-teal-400
                           transition" onClick={() => navigate("/Html")}>
                HTML
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-rose-400 hover:text-rose-400
                           transition">
                CSS
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-teal-400 hover:text-teal-400
                           transition">
                Tailwind CSS
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-rose-400 hover:text-rose-400
                           transition">
                Bootstrap
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-yellow-400 hover:text-yellow-400
                           transition">
                JavaScript
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition">
                SQL
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition">
                JAVA
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition">
                Mongo db
              </button>

              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition">
                Express js
              </button>


              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition">
                React
              </button>


              <button className="py-6 text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition">
                Node js
              </button>

            </div>
          </div>
        </div>
      </section>

      <section id="review" className="h-100 bg-linear-to-br from-slate-700 via-slate-800 to-slate-900 flex  flex-col gap-8 ">
        <ReviewSlider />
      </section>

      <section id="review" className="h-100 bg-linear-to-br from-slate-700 via-slate-800 to-slate-900 flex  flex-col gap-8 ">
        <footer> <h3>Contact us </h3></footer>
      </section>

    </>
  );
};

export default Homepage;
