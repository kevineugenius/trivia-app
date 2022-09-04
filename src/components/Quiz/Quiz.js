import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Quiz() {
  const [number, setNumber] = useState(5);

  useEffect(() => {
    setNumber((n) => n + 1);
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
      const body = await response.json();
      console.log(body);
    }
    
    getData();
  }, []);

  return (
    <div>
      <h2>This is where the quiz would be {number}</h2>
      <div>
        <Link to="/">go back</Link>
        <br />
        <Link to="/results">go forward</Link>
      </div>
    </div>
  );
}

export default Quiz;
