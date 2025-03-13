import { use, useState } from "react";
import ParticleBackground from "../ParticleBackground";
import zod from "zod";
import { LoginInput } from "../InputValidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const showErrorToast = (msg = "Fill All the Details") => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showSuccessToast = () => {
    toast.success("Login Successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleLoginRes = (res) => {
    if (res.data.status == "Success") {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("uid", res.data.uid);
      localStorage.setItem("role", res.data.role);
      showSuccessToast();
      if (res.data.role == "STUDENT") {
        navigate("/student");
      } else if (res.data.role == "PROFESSOR") {
        navigate("/professor");
      }
    } else {
      showErrorToast("Check Your Password or Email");
    }
  };

  const handleLogin = () => {
    const data = { email: username, password };
    const { success } = LoginInput.safeParse(data);

    if (!success) {
      showErrorToast();
    } else {
      const res = axios
        .post(import.meta.env.VITE_BACKEND_URL + "/user/login", data)
        .then(handleLoginRes);
    }
  };
  return (
    <>
      <div className="relative w-full h-screen  bg-linear-to-bl from-violet-500 to-fuchsia-500">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-1">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Login</h2>
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Email"
            />
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <button
              onClick={handleLogin}
              className="p-3 bg-purple-500 text-white rounded-md font-bold"
            >
              Login
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
