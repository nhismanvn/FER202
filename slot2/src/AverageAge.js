import { people } from "./data";

function AverageAge() {
  const grouped = people.reduce((acc, person) => {
    acc[person.occupation] = acc[person.occupation] || [];
    acc[person.occupation].push(person.age);
    return acc;
  }, {});
  const averages = Object.keys(grouped).map((occupation) => ({
    occupation,
    avg: grouped[occupation].reduce((a, b) => a + b, 0) / grouped[occupation].length,
  }));
  return (
    <div>
      {averages.map((item, index) => (
        <p key={index}>
          Average age for {item.occupation}: {item.avg.toFixed(2)}
        </p>
      ))}
    </div>
  );
}

export default AverageAge;