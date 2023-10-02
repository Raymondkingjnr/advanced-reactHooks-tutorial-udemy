import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "reading books",
  });

  const displayPerson = () => {
    setPerson({ name: "john", age: 21, hobby: "playing football" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoy : {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show {person.name}
      </button>
    </>
  );
};

export default UseStateObject;
