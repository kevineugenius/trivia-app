import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Results() {
  function score() {
    return "You scored ";
  }
  return (
    <div>
      <Header text={score()} />
      <div>
        <Link to="/quiz">go back</Link>
        <br />
        <Link to="/">go to start</Link>
      </div>
    </div>
  );
}

export default Results;
