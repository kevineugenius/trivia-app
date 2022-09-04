import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spinner from "../../resources/images/Rolling-1s-200px.svg"

function Quiz() {
  const [questions, setQuestions] = useState();
  const [number, setNumber] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
      const body = await response.json();
      await setQuestions(body.results);
      setLoaded(true);
    }

    getData();
  }, []);

  return (
    <div>
      { loaded ?
        (<h2>{ questions[number].category }</h2>) :
        (<img src={spinner} alt="loading..." />)
      } 
      <div>
        <Link to="/">go back</Link>
        <br />
        <Link to="/results">go forward</Link>
      </div>
    </div>
  );
}

export default Quiz;
