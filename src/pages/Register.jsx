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
    navigate("/Login");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-700px max-w-full">

        <div className=" h-15 flex justify-center items-center">
          <h2 className="text-3xl font-extrabold text-center text-rose-400 mb-6">
            Register
          </h2>
        </div>

        <div className="flex justify-center items-center flex-col gap-3 " >
          <div className="bg-slate-200 h-50  w-120 rounded-2xl flex justify-center flex-col">
            <div className=" h-40 w-full px-4 py-3 rounded-lg 
                flex items-center justify-center">

              <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm h-full 
               flex flex-col justify-between"
              >

                {/* Name */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium w-28 text-right">
                    Your Name :
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium w-28 text-right">
                    Your Email :
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="abc123@gmail.com"
                    onChange={handleChange}
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
                    name="password"
                    placeholder="*******"
                    onChange={handleChange}
                    required
                  />
                </div>
                 <h4 className="text-xs flex justify-center text-gray-600 mr-9 whitespace-nowrap">
                   (5 chars + 1 special)
                  </h4>
              </form>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="wcq-rose-btn w-30 rounded-md font-medium text-black bg-teal-500"
          >
            Register now
          </button>
        </div>

        <div className="h-15 flex justify-center items-center ">
          <p className="text-center text-slate-400 mt-4 text-sm">
            Already registered?{" "}
            <span
              onClick={() => navigate("/Login")}
              className="text-rose-400 cursor-pointer">
              Sign-up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

