import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import DOMPurify from "dompurify";

function Quiz(props) {
  const [number, setNumber] = useState(0);
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const questions = props.questions;
  const updateQuiz = props.updateQuiz;

  useEffect(() => {
    if (number === 10) {
      updateQuiz(scores);
    } else if (scores[number] !== 0) {
      setNumber(number + 1);
    }
    // todo: ESLint wants all of these here but at least updateQuiz isn't necessary. Perhaps a refactor can fix
  }, [number, scores, updateQuiz]);
  
  function advance(answeredCorrectly) {
    const scoreArray = [...scores];
    scoreArray[number] = answeredCorrectly ? 1 : -1;
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
