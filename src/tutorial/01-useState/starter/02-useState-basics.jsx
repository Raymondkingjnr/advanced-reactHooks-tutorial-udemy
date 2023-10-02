import { useState } from "react";

import { data } from "../../../data";

const UseStateBasics = () => {
  const [people, setPeople] = useState(data);

  const clearData = () => {
    setPeople([]);
  };

  const remove = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <section>
        {people.map((person) => {
          const { id, name } = person;

          return (
            <main key={id}>
              <h3>{name}</h3>
              <button className="btn" type="button" onClick={() => remove(id)}>
                delete person
              </button>
            </main>
          );
        })}
        <button
          type="button"
          className="btn"
          style={{ marginTop: "1.5rem" }}
          onClick={clearData}
        >
          clear
        </button>
      </section>
    </>
  );
};

export default UseStateBasics;
