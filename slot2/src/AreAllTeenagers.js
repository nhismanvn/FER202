import { people } from "./data";

function AreAllTeenagers() {
  const allTeenagers = people.every((person) => person.age >= 13 && person.age <= 19);
  return (
    <div>
      <p>All are teenagers: {allTeenagers ? "Yes" : "No"}</p>
    </div>
  );
}

export default AreAllTeenagers;