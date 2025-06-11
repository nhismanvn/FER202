
import React, { useState } from 'react';

const ToggleText = () => {
  const [visible, setVisible] = useState(false); // Trạng thái: ẩn ban đầu

  const handleToggle = () => {
    setVisible(!visible); // Đảo trạng thái
  };

  return (
    <div>
      <h2>Toggle Text</h2>
      <button onClick={handleToggle}>
        {visible ? 'Ẩn nội dung' : 'Hiện nội dung'}
      </button>
      {visible && <p>Hello Cô Và Cả Lớp</p>}
    </div>
  );
};

export default ToggleText;
