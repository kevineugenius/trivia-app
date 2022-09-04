import React from "react";
import Header from "../Header/Header";

function Results(props) {
  const {questions, scores, restart} = props;

  function score() {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === 1) total++;
    }
    return "You scored " + total;
  }

  function displayList() {
    const items = scores.map((score, index) => 
      <li key={index.toString()}>
        {score > 0 ? "+" : (score < 0 ? "-" : " ")} 
        {questions[index].question}</li>
    )
    return <ul>{items}</ul>
  }

  return (
    <div>
      <Header text={score()} />
      <div>
        {displayList()}
      </div>
      <button onClick={restart}>play again</button>
    </div>
  );
}

export default Results;
