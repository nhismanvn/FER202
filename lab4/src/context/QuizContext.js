import { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const updateAnswer = (index, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  return (
    <QuizContext.Provider value={{ selectedAnswers, updateAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};
