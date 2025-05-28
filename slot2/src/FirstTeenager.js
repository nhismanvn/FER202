import { people } from "./data";

function FirstTeenager() {
  const firstTeen = people.find((person) => person.age >= 13 && person.age <= 19);
  return (
    <div>
      <p>First teenager: {firstTeen ? firstTeen.name : "None"}</p>
    </div>
  );
}

export default FirstTeenager;