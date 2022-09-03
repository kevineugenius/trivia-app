import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing/Landing";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Results/Results";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
