import React, { useState, useEffect } from "react";
import spinner from "../../resources/images/Rolling-1s-200px.svg";
import Quiz from "../Quiz/Quiz";
import Results from "../Results/Results";

function QuizWrapper() {
  // Local State
  const [questions, setQuestions] = useState();
  const [loaded, setLoaded] = useState(false);
  const [inProgress, setInProgress] = useState(true);
  const [scores, setScores] = useState([]);

  // On load functions
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    const body = await response.json();
    setQuestions(body.results);
    setLoaded(true);
  }

  // Control functions
  const startOver = () => {
    console.log("starting over");
    setLoaded(false);
    setScores([]);
    setInProgress(true);
    getData();
  };

  const resultsUpdater = (score) => {
    console.log("it worked", score);
    setScores(score);
    // todo: potential timing bug
    setInProgress(false);
  };

  return (
    <div className="centered">
      {loaded ? (
        inProgress ? (
          <Quiz questions={questions} updateQuiz={resultsUpdater} />
        ) : (
          <Results scores={scores} questions={questions} restart={startOver} />
        )
      ) : (
        <img src={spinner} alt="loading..." />
      )}
    </div>
  );
}

export default QuizWrapper;
