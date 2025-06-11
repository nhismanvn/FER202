import React from 'react';
import Counter from './components/Counter';
import InputMirror from './components/InputMirror';
import ToggleText from './components/ToggleText';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';

function App() {
  return (
    <div>
      <h1>Exercise 12 - useState</h1>
      <Counter />
      <InputMirror />
      <ToggleText />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </div>
  );
}

export default App;
  