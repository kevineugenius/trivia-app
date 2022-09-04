import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Landing() {
  return (
    <div>
      <Header text="Landing" />
      <div>
        <Link to="quiz">click here</Link>
      </div>
    </div>
  );
}

export default Landing;
