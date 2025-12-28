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
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-700px max-w-full">

        {/* Heading */}
        <div className="h-15 flex justify-center items-center">
          <h2 className="text-3xl font-extrabold text-center text-teal-400 mb-6">
            Sign In
          </h2>
        </div>

        {/* Form Card */}
        <div className="flex justify-center items-center flex-col gap-3">
          <div className="bg-slate-200 h-35 w-100 rounded-2xl flex justify-center flex-col">
            <div className="h-full w-full px-4 py-3 rounded-lg flex items-center justify-center">

              <form
                onSubmit={handleLogin}
                className="w-full max-w-sm h-full flex justify-around flex-col"
              >

                {/* Email */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium w-28 text-right">
                    Your Email :
                  </span>
                  <input
                    type="email"
                    placeholder="abc123@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium w-28 text-right">
                    Password :
                  </span>
                  <input
                    type="password"
                    placeholder="*******"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

              </form>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onClick={handleLogin}
            className="wcq-rose-btn w-30 rounded-md font-medium text-black bg-rose-500"
          >
            Sign In
          </button>
        </div>

        {/* Footer */}
        <div className="h-15 flex justify-center items-center">
          <p className="text-center text-slate-400 mt-4 text-sm">
            New to WCQ ?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-teal-400 cursor-pointer"
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
