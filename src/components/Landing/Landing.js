import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Landing() {
  function getQuizStartElement() {
    return <Link to="quiz">BEGIN</Link>;
  }

  return (
    <div>
      <Header text="Welcome to the Trivia Challenge!" />
      <div className="content"></div>
      <Footer element={getQuizStartElement} />
    </div>
  );
}

export default Landing;
