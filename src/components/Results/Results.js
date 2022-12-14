import React from "react";
import "./Results.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DOMPurify from "dompurify";

function Results(props) {
  const { questions, scores, restart } = props;

  function score() {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === 1) total++;
    }
    return "You scored " + total + " / 10";
  }

  function displayList() {
    const items = scores.map((score, index) => (
      <li
        key={index.toString()}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            (score > 0 ? "+" : score < 0 ? "-" : " ") +
              " " +
              questions[index].question
          ),
        }}
      />
    ));
    return <ul>{items}</ul>;
  }

  function getQuizReStartElement() {
    return <button onClick={restart}>PLAY AGAIN?</button>;
  }

  return (
    <div>
      <Header text={score()} />
      <div>{displayList()}</div>
      <Footer element={getQuizReStartElement} />
    </div>
  );
}

export default Results;
