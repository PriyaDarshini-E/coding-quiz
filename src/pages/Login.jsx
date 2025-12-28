import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

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

    localStorage.setItem("wcq_loggedIn", "true");
    localStorage.setItem("wcq_currentUser", JSON.stringify(validUser));

    alert(`Welcome ${validUser.name} 🎉`);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700 w-full max-w-lg">

        {/* Heading */}
        <div className="mb-6 flex justify-center items-center">
          <h2 className="text-3xl font-extrabold text-center text-teal-400">
            Sign In
          </h2>
        </div>

        {/* Form Card */}
        <div className="flex justify-center items-center flex-col gap-6">
          <div className="bg-slate-200 w-full rounded-2xl flex justify-center flex-col p-6 shadow-md">

            <form
              onSubmit={handleLogin}
              className="w-full h-full flex flex-col gap-4"
            >

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <span className="text-sm font-medium w-24 sm:text-right text-slate-700">
                  Your Email :
                </span>
                <input
                  className="flex-1 w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                  type="email"
                  placeholder="abc123@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <span className="text-sm font-medium w-24 sm:text-right text-slate-700">
                  Password :
                </span>
                <input
                  className="flex-1 w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                  type="password"
                  placeholder="*******"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

            </form>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full sm:w-40 py-2.5 rounded-lg font-bold text-slate-900 bg-rose-500 hover:bg-rose-400 transition shadow-lg transform active:scale-95"
          >
            Sign In
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-center items-center">
          <p className="text-center text-slate-400 text-sm">
            New to WCQ ?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-teal-400 cursor-pointer font-semibold hover:underline"
            >
              Register
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
