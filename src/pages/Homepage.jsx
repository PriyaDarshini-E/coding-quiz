import { useNavigate } from "react-router-dom";
import logo from "../assets/images/wcq_logo.png";
import ReviewSlider from "../components/ReviewSlider";


const Homepage = () => {

  const navigate = useNavigate();

  // ✅ read login status (BOOLEAN)
  const isLoggedIn = localStorage.getItem("wcq_loggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("wcq_loggedIn");
    localStorage.removeItem("wcq_currentUser");
    navigate("/login");
  };

  // ✅ quiz lock handler
  const handleQuizClick = (path) => {
    if (!isLoggedIn) {
      alert("Please login or register to start the quiz.");
      navigate("/login");
      return;
    }
    navigate(path);
  };

   
  return (
    <>
      <header>
        <div className="flex justify-center">
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


      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-700 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-2">

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold">
              <span className="px-1 text-teal-300">Weird</span>
              {" "}
              <span className="px-1 text-rose-300">Coding Quiz</span>
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
  className="min-h-[70vh] flex items-center justify-center 
  bg-linear-to-br from-slate-700 via-slate-800 to-slate-900"
>
  <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center px-6">

    {/* LEFT CONTENT */}
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

    {/* RIGHT PREVIEW CARD */}
    <div className="flex gap-0 ">
      <div className="bg-slate-100 rounded-2xl shadow-xl w-250 h-60">

        <h3 className="text-lg font-bold text-slate-800 mb-1">
          🤔 Weird Question Preview
        </h3>

        <p className="text-slate-700 font-medium ">
          What is the output of :{" "}
          <code className="font-semibold">typeof NaN ?</code>
        </p>

        <ul className=" text-slate-700">
          <li className="p-3 rounded-lg hover:bg-slate-200 cursor-pointer transition">
            A) "NaN"
          </li>
          <li className="p-3 rounded-lg hover:bg-slate-200 cursor-pointer 
          font-semibold text-teal-600 transition">
            B) number ✅
          </li>
          <li className="p-3 rounded-lg hover:bg-slate-200 cursor-pointer transition">
            C) undefined
          </li>
          <li className="p-3 rounded-lg hover:bg-slate-200 cursor-pointer transition">
            D) object
          </li>
        </ul>

      </div>
    </div>

  </div>
</section>


      <section id="how-to"
        className="min-h-[70vh]   bg-linear-to-br from-slate-700 via-slate-800 to-slate-900" >
          <h4 className=" text-3xl font-semibold text-teal-500 text-center">How it works</h4>
          <p className="text-center text-slate-300 mt-3 ">
            Follow these 4 simple steps to challenge your coding brain 🧠
          </p>
    

        <div className="h-90 w-full flex  justify-center items-center ">
          <div className="flex justify-around items-center w-full text-center">

            <div id="step1" className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-70 w-60 rounded-xl shadow-lg  mt-10 hover:scale-105 transition flex gap-5 flex-col" >
              <div className="flex justify-center items-center h-23">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-rose-400 to-teal-400
                        flex items-center justify-center text-gray-720 font-bold text-xl
                        shadow-[0_0_20px_rgba(236,72,153,0.5)] ">1</div>
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mb-2">
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
                        shadow-[0_0_20px_rgba(236,72,153,0.5)] ">2</div>
              </div>


              <h3 className="text-xl font-semibold text-slate-100 mb-2">
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
                        shadow-[0_0_20px_rgba(236,72,153,0.5)]">3</div>
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                Select Your Answer
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Choose the correct output — looks simple but is't 😄
              </p>
            </div>


            <div id="step4" className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-70 w-60 rounded-xl shadow-lg  mt-10 hover:scale-105 transition flex gap-5 flex-col" >
              <div className="flex justify-center items-center h-23">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-rose-400 to-teal-400
                        flex items-center justify-center text-gray-720 font-bold text-xl
                        shadow-[0_0_20px_rgba(236,72,153,0.5)]">3</div>
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  Check Result & Learn
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                View instant results with explanations to improve your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz"
       className="min-h-[70vh]   bg-linear-to-br from-slate-700 via-slate-800 to-slate-900" >

        <div className="flex flex-col gap-2 ">
          <h4 className="text-3xl font-semibold text-rose-300 text-center">
            Choose Your Quiz Category
          </h4>
          <p className="text-center text-slate-300">
            Select a technology and start the quiz instantly 🚀
          </p>
        </div>

        <div className="flex justify-center items-center ">
          <div className="w-full p-10 ">

            {/* Button Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => handleQuizClick("/shortcuts")}>
                Keyboard Shortcuts
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-teal-400 hover:text-teal-400
                           transition" onClick={() => handleQuizClick("/html")}>
                HTML
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-rose-400 hover:text-rose-400
                           transition" onClick={() => handleQuizClick("/Css")}>
                CSS
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-teal-400 hover:text-teal-400
                           transition" onClick={() => handleQuizClick("/tailwind")}>
                Tailwind CSS
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-rose-400 hover:text-rose-400
                           transition" onClick={() => handleQuizClick("/bootstrap")}>
                Bootstrap
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-yellow-400 hover:text-yellow-400
                           transition" onClick={() => handleQuizClick("/js")}>
                JavaScript
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => handleQuizClick("/sql")}>
                SQL
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => handleQuizClick("/java")}>
                JAVA
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => handleQuizClick("/mongo")}>
                Mongo db
              </button>

              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => handleQuizClick("/express")}>
                Express js
              </button>


              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => handleQuizClick("/react")}>
                React
              </button>


              <button className="text-lg font-semibold rounded-xl
                           text-slate-200 border border-slate-700
                           hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400
                           transition" onClick={() => handleQuizClick("/node")}>
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
