import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center bg-slate-700">
      <div className="p-10 rounded-2xl text-center w-360px shadow-2xl animate-float bg-teal-300">
        <h1 className="text-3xl font-bold mb-3">Weird Coding Quiz 🤯</h1>
        <p className="text-sm text-[#272727] mb-8">
          Think you know coding? Let's test your brain in a weird way!
        </p>

        <button
          onClick={() => navigate("/home")}
          className="text-white border-none py-3 px-7 text-base rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(238,9,121,0.6)] bg-rose-400"
        >
          Get Started
        </button>

        <p className="text-sm text-[#272727] mb-8 mt-5">(it's free!!)</p>
      </div>
    </div>
  );
};

export default Welcome;
