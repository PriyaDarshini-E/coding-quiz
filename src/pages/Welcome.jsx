import "../styles/welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="page bg-slate-700 ">
      <div className="card bg-teal-300 ">
        <h1 className="title">Weird Coding Quiz 🤯</h1>
        <p className="subtitle">
          Think you know coding? Let's test your brain in a weird way!
        </p>

        <button
          onClick={() => navigate("/home")}
          className="start-btn bg-rose-400"
        >
          Get Started
        </button>

        <p className="subtitle">(it's free!!)</p>
      </div>
    </div>
  );
};

export default Welcome;
