import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [],
    selectedAnswers: {},
    showResult: false
  },
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    selectAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.selectedAnswers[questionIndex] = answer;
    },
    checkAnswers: (state) => {
      state.showResult = true;
    },
    resetQuiz: (state) => {
      state.selectedAnswers = {};
      state.showResult = false;
    }
  }
});

export const { addQuestion, selectAnswer, checkAnswers, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
