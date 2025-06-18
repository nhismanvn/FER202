import React from "react";

function Question({ question, onAnswer, selectedAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => {
        let style = {
          padding: "10px",
          margin: "8px",
          width: "200px",
          borderRadius: "5px",
          cursor: "pointer",
        };

        if (selectedAnswer) {
          if (option === question.answer) {
            style.backgroundColor = "#4CAF50"; // xanh lá: đúng
            style.color = "white";
          } else if (option === selectedAnswer) {
            style.backgroundColor = "#f44336"; // đỏ: sai
            style.color = "white";
          } else {
            style.backgroundColor = "#ccc";
          }
        }

        return (
          <div key={index}>
            <button
              style={style}
              onClick={() => !selectedAnswer && onAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Question;
