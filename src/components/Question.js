import React from "react";
import survey from "../data.json";

const Question = ({ setFinished }) => {

  const allQuestions = survey["questions"]
  const allOnlyQuestions = allQuestions.slice(0,-1)
  const handleFinished = () => {
    setFinished(true)
  }

  return (
    <>
      <form className="question-section" action="" onSubmit={handleFinished}>
        {allOnlyQuestions.map((question) => (
          <div key={question.id}>
            { question["answers"][survey["language"]].length === 0 ? 
              <div className="intro-text">{question["question"][survey["language"]]}</div>
            : 
              <div className="question-answer">
                <div className="question-text">{question["question"][survey["language"]]}</div>
                <div className="answer-section">
                  {question["answers"][survey["language"]].map((answerOption) => (
                    <p className="answer-list" key={question.id+answerOption}>
                      <input type="radio" id="q1" name={question["id"]}  value={answerOption}/>
                      <label htmlFor="q1" >{answerOption}</label>
                    </p>
                  ))}
                </div>
              </div>
            }
          </div>
        ))}
        <input className="submit-section" type="submit" value="Submit"/>
      </form>
      <br/>
    </>
  )
}

export default Question; 