import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [color, setColor] = useState('white'); // màu nền mặc định

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Color Switcher</h2>
      <select value={color} onChange={handleChange}>
        <option value="white">Chọn màu</option>
        <option value="red">Đỏ</option>
        <option value="green">Xanh lá</option>
        <option value="blue">Xanh dương</option>
        <option value="yellow">Vàng</option>
      </select>

      <div
        style={{
          backgroundColor: color,
          width: '300px',
          height: '100px',
          marginTop: '10px',
          border: '1px solid #ccc',
        }}
      >
        <p style={{ padding: '10px' }}>Màu nền hiện tại: {color}</p>
      </div>
    </div>
  );
};

export default ColorSwitcher;
