import { people } from "./data";

function GroupedPeople() {
  const grouped = people.reduce((acc, person) => {
    acc[person.occupation] = acc[person.occupation] || [];
    acc[person.occupation].push(person);
    return acc;
  }, {});
  return (
    <div>
      {Object.keys(grouped).map((occupation) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {grouped[occupation].map((person, index) => (
              <li key={index}>
                {person.name} - {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedPeople;