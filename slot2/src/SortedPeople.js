import { people } from "./data";

function SortedPeople() {
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation === b.occupation) {
      return a.age - b.age;
    }
    return a.occupation.localeCompare(b.occupation);
  });
  return (
    <div>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;