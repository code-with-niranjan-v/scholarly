import axios from "axios";
import ParticleBackground from "./ParticleBackground";
import { useState } from "react";
import GLOBE from "vanta/src/vanta.globe.js";
import { useEffect } from "react";
function SignUp() {
  const [name, setName] = useState("");
  const [depart, setDepart] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [password, setPassword] = useState("");

  useEffect(() => {
    GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    });
  }, []);
  const handleRegister = () => {
    const user = {
      name,
      email,
      id: rollNo,
      role: role.toUpperCase(),
      department: depart.toLocaleUpperCase(),
      password,
    };
    axios.post(import.meta.env.VITE_BACKEND_URL + "/user/signup", user);
  };
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="absolute inset-0 w-full min-h-screen " id="vanta"></div>
        <div className="flex justify-center items-center min-h-screen ">
          <div className="z-10 bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-2">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">
              Register
            </h2>
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              placeholder="Role"
            />
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              value={depart}
              onChange={(e) => {
                setDepart(e.target.value);
              }}
              placeholder="Department"
            />
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              value={rollNo}
              onChange={(e) => {
                setRollNo(e.target.value);
              }}
              placeholder="Roll No"
            />
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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
              onClick={handleRegister}
              className="p-3 bg-purple-500 text-white rounded-md font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
