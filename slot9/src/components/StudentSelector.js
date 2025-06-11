// src/components/StudentSelector.js
import { useState } from "react";

const StudentSelector = () => {
  const [students] = useState([
    { id: 1, name: "Học viên A" },
    { id: 2, name: "Học viên B" },
    { id: 3, name: "Học viên C" },
  ]);

  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    if (e.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((item) => item !== id));
    }
  };

  return (
    <div>
      <h3>Chọn sinh viên:</h3>
      {students.map((s) => (
        <div key={s.id}>
          <input
            type="checkbox"
            value={s.id}
            onChange={handleChange}
            checked={selected.includes(s.id)}
          />
          {s.name}
        </div>
      ))}

      {selected.length > 0 && (
        <p>
          Đã chọn:{" "}
          {selected.map((id) => students.find((s) => s.id === id).name).join(", ")}
        </p>
      )}
    </div>
  );
};

export default StudentSelector;
