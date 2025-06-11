import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Danh sách công việc
  const [newTodo, setNewTodo] = useState(""); // Nội dung mới nhập

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]); // Thêm vào danh sách
      setNewTodo(""); // Xoá input
    }
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Nhập việc cần làm..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
