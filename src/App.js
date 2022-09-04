import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing/Landing";
import QuizWrapper from "./components/QuizWrapper/QuizWrapper";
import Results from "./components/Results/Results";

/*
In some ways the router working this way is cleaner but as
I worked through the app, it really feels like it probably isn't ideal.
It will help keep several files short and sweet, but it makes passing
state from the quiz to the results page quite ugly and it also makes
the app not behave like a SPA.  With more time, I would rearrange the whole
thing and do away with the router and build it out as a SPA.
*/
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<QuizWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
