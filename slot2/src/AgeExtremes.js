import { people } from "./data";

function AgeExtremes() {
  const oldest = [...people].sort((a, b) => b.age - a.age)[0];
  const youngest = [...people].sort((a, b) => a.age - b.age)[0];
  return (
    <div>
      <p>Oldest: {oldest.name} ({oldest.age})</p>
      <p>Youngest: {youngest.name} ({youngest.age})</p>
    </div>
  );
}

export default AgeExtremes;