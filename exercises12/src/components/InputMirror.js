import React, { useState } from 'react';

const InputMirror = () => {
  const [text, setText] = useState(""); // Khởi tạo state 'text'

  return (
    <div>
      <h2>Input Mirror</h2>
      <input
        type="text"
        placeholder="Nhập gì đó..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Bạn vừa nhập: {text}</p>
    </div>
  );
};

export default InputMirror;
