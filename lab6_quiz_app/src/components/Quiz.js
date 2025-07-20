import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, checkAnswers, resetQuiz } from '../features/quizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const { questions, selectedAnswers, showResult } = useSelector(state => state.quiz);

  const handleSelect = (questionIndex, option) => {
    if (!showResult) {
      dispatch(selectAnswer({ questionIndex, answer: option }));
    }
  };

  return (
    <div>
      <h3>Quiz</h3>
      {questions.length === 0 && <p>No questions added yet.</p>}
      {questions.map((question, qIdx) => (
        <div key={qIdx} className="question-container">
          <p className="question-text">{qIdx + 1}. {question.text}</p>
          {question.options.map((opt, i) => {
            const isSelected = selectedAnswers[qIdx] === opt;
            const isCorrect = showResult && opt === question.correctAnswer;
            const isIncorrect = showResult && isSelected && opt !== question.correctAnswer;

            return (
              <button
                key={i}
                onClick={() => handleSelect(qIdx, opt)}
                className={`option-button 
                  ${isSelected ? 'selected' : ''} 
                  ${isCorrect ? 'correct' : ''} 
                  ${isIncorrect ? 'incorrect' : ''}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      ))}
      {questions.length > 0 && (
        <div className="control-buttons">
          {!showResult ? (
            <button onClick={() => dispatch(checkAnswers())}>Check Answers</button>
          ) : (
            <button onClick={() => dispatch(resetQuiz())}>Reset Quiz</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
