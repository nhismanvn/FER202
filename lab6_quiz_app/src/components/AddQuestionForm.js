import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../features/quizSlice';

function AddQuestionForm() {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionText || !correctAnswer || options.some(opt => opt.trim() === '')) return;

    dispatch(addQuestion({
      text: questionText,
      options,
      correctAnswer
    }));

    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Question</h3>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Enter question"
        required
      />
      {options.map((opt, i) => (
        <input
          key={i}
          type="text"
          value={opt}
          onChange={(e) => {
            const updated = [...options];
            updated[i] = e.target.value;
            setOptions(updated);
          }}
          placeholder={`Option ${i + 1}`}
          required
        />
      ))}
      <input
        type="text"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        placeholder="Correct answer"
        required
      />
      <button type="submit">Add Question</button>
    </form>
  );
}

export default AddQuestionForm;
