import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const { name, email, password } = formData;

    // 🔴 Validation: any field empty
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill the input");
      return;
    }

    const users = JSON.parse(localStorage.getItem("wcq_users")) || [];

    users.push({ name, email, password });
    localStorage.setItem("wcq_users", JSON.stringify(users));

    alert("Thanks for registering 🎉\nLet's move to Sign In");
    navigate("/login");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700 w-full max-w-lg">

        <div className="mb-6 flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-rose-400">
            Register
          </h2>
        </div>

        <div className="flex justify-center items-center flex-col gap-6" >
          <div className="bg-slate-200 w-full rounded-2xl flex justify-center flex-col p-6 shadow-md">

            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col gap-4"
            >

              {/* Name */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <span className="text-sm font-medium w-24 sm:text-right text-slate-700">
                  Your Name :
                </span>
                <input
                  className="flex-1 w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <span className="text-sm font-medium w-24 sm:text-right text-slate-700">
                  Your Email :
                </span>
                <input
                  className="flex-1 w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                  type="email"
                  name="email"
                  placeholder="abc123@gmail.com"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <span className="text-sm font-medium w-24 sm:text-right text-slate-700">
                  Password :
                </span>
                <input
                  className="flex-1 w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                  type="password"
                  name="password"
                  placeholder="*******"
                  onChange={handleChange}
                  required
                />
              </div>
              <h4 className="text-xs text-center sm:text-right text-gray-500 mt-1">
                (5 chars + 1 special)
              </h4>
            </form>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full sm:w-40 py-2.5 rounded-lg font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition shadow-lg transform active:scale-95"
          >
            Register now
          </button>
        </div>

        <div className="mt-6 flex justify-center items-center ">
          <p className="text-center text-slate-400 text-sm">
            Already registered?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-rose-400 cursor-pointer font-semibold hover:underline">
              Sign-up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

