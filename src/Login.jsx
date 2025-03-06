import ParticleBackground from "./ParticleBackground";
function Login() {
  return (
    <>
      <div className="relative w-full h-screen">
        <ParticleBackground />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-1">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Login</h2>
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-3 mb-2 bg-purple-200 rounded-md"
              type="text"
              placeholder="Password"
            />
            <button className="p-3 bg-purple-500 text-white rounded-md font-bold">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
