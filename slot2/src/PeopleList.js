import { people } from "./data";

function PeopleList() {
  return (
    <div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;