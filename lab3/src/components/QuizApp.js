import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  {
    question: "React là gì?",
    options: ["Framework", "Library", "Ngôn ngữ lập trình", "IDE"],
    answer: "Library",
  },
  {
    question: "Hook nào dùng để quản lý state?",
    options: ["useFetch", "useState", "useCSS", "useMap"],
    answer: "useState",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    setTimeout(() => {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 800); // Cho hiệu ứng highlight
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      {showResult ? (
        <Result
          score={score}
          total={questions.length}
          onRestart={restartQuiz}
        />
      ) : (
        <div>
          <p>
            Câu {currentQuestion + 1} / {questions.length}
          </p>
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
          />
        </div>
      )}
    </div>
  );
}

export default QuizApp;
