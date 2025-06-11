// src/components/UserProfile.js
import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("traltb@fe.edu.vn");
  const [age, setAge] = useState(39);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên"
      />
      <p>My name is {name}</p>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        placeholder="Nhập tuổi"
      />
      <p>My age is {age}</p>
    </div>
  );
};

export default UserProfile;
