import React, { useState } from 'react';

const DragDropList = () => {
  const [items, setItems] = useState([
    "HTML", "CSS", "JavaScript", "React", "Node.js"
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // cần để cho phép drop
  };

  const handleDrop = (index) => {
    const updated = [...items];
    const draggedItem = updated[draggingItem];
    // Xóa phần tử cũ
    updated.splice(draggingItem, 1);
    // Thêm vào vị trí mới
    updated.splice(index, 0, draggedItem);
    setItems(updated);
    setDraggingItem(null); // reset
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: "8px",
              marginBottom: "4px",
              backgroundColor: "#eee",
              border: "1px solid #ccc",
              cursor: "move"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropList;
