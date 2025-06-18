import React from "react";

function Result({ score, total, onRestart }) {
  return (
    <div>
      <h2>🎉 Hoàn thành Quiz!</h2>
      <p>Điểm số: {score} / {total}</p>
      <p>
        {score === total
          ? "Xuất sắc!"
          : score >= total / 2
          ? "Tốt lắm!"
          : "Cố gắng lần sau nhé!"}
      </p>
      <button onClick={onRestart} style={{ marginTop: "20px", padding: "10px" }}>
        Làm lại Quiz
      </button>
    </div>
  );
}

export default Result;
