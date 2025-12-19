import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔴 validation
    if (!email || !password) {
      alert("Please fill the input");
      return;
    }

    const users = JSON.parse(localStorage.getItem("wcq_users")) || [];
    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      alert("Invalid credentials ❌");
      return;
    }

    // ✅ save login state
    localStorage.setItem("wcq_loggedIn", "true");
    localStorage.setItem("wcq_currentUser", JSON.stringify(validUser));

    alert(`Welcome ${validUser.name} 🎉`);
    navigate("/home"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <h2 className="text-3xl font-extrabold text-center text-teal-400 mb-6">
          Sign-up
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="wcq-input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="wcq-input"
          />

          <button className="wcq-teal-btn">Sign-up</button>
        </form>

        <p className="text-center text-slate-400 mt-4 text-sm">
          New to WCQ?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-rose-400 cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
