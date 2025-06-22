import { useState, useEffect, useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import './Quiz.css';

export const quizData = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system',
    ],
    correctAnswer: 'A JavaScript library for building user interfaces',
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript',
    ],
    correctAnswer: 'A syntax extension for JavaScript',
  },
];

const Quiz = () => {
  const { selectedAnswers, updateAnswer } = useContext(QuizContext);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const evaluation = quizData.map((q, idx) => {
      const selected = selectedAnswers[idx];
      if (!selected) return null;
      return selected === q.correctAnswer ? 'Correct' : 'Incorrect';
    });
    setResult(evaluation);
  }, [selectedAnswers]);

  return (
    <div className="quiz-container">
      <h2>Quiz Application with Hooks</h2>
      {quizData.map((q, idx) => (
        <div className="question-block" key={idx}>
          <div className="question-title">{q.question}</div>
          {q.answers.map((ans, i) => (
            <label
  key={i}
  className={`answer-option ${
    result[idx]
      ? ans === quizData[idx].correctAnswer
        ? 'correct-answer'
        : selectedAnswers[idx] === ans
        ? 'incorrect-answer'
        : ''
      : ''
  }`}
>
  <input
    type="radio"
    name={`question-${idx}`}
    value={ans}
    onChange={() => updateAnswer(idx, ans)}
    checked={selectedAnswers[idx] === ans}
  />
  {ans}
</label>

          ))}
          {result[idx] && (
            <div
              className={`feedback ${result[idx] === 'Correct' ? 'correct' : 'incorrect'}`}
            >
              {result[idx]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
