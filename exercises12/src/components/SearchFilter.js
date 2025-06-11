import React, { useState } from 'react';

const SearchFilter = () => {
  const [search, setSearch] = useState(""); // từ khóa tìm kiếm
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  // Lọc item theo từ khóa (không phân biệt hoa thường)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Nhập từ khóa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {filteredItems.length === 0 && <li>Không tìm thấy kết quả.</li>}
      </ul>
    </div>
  );
};

export default SearchFilter;
