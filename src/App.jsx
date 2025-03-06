import { useState } from "react";
import "./App.css";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div className="relative w-full h-screen">
      <ParticleBackground />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {/* Your login form here */}
        </div>
      </div>
    </div>
  );
}

export default App;
