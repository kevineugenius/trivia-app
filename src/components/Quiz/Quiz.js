import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

function Quiz(props) {
  const DOMPurify = require("dompurify")(window);

  const [number, setNumber] = useState(0);
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const questions = props.questions;
  const updateQuiz = props.updateQuiz;

  async function advance(answeredCorrectly) {
    console.log("updating answer " + (number + 1));
    await updateScores(number, answeredCorrectly ? 1 : -1);
  }

  useEffect(() => {
    console.log("useeffect says ", scores, number);
    if (number === 10) {
      console.log("Updating quiz");
      updateQuiz(scores);
    } else if (scores[number] !== 0) {
      setNumber(number + 1);
    }
  }, [number, scores, updateQuiz]);

  async function updateScores(index, value) {
    const scoreArray = [...scores];
    scoreArray[index] = value;
    setScores(scoreArray);
  }

  return (
    <div>
      {number < 10 && (
        <>
          <Header className="header" text={props.questions[number].category} />
          <div className="content quizbox">
            <div
              className="centered"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.questions[number].question),
              }}
            ></div>
            <div className="centered">{number + 1} of 10</div>
            <div className="centered">
              <button
                onClick={() =>
                  advance(questions[number].correct_answer === "True")
                }
              >
                True
              </button>
              <button
                onClick={() =>
                  advance(questions[number].correct_answer === "False")
                }
              >
                False
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
