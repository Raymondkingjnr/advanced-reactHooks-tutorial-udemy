import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleclick = () => {
    setValue((curValue) => {
      const newState = curValue + 1;
      return newState;
    });
  };

  return (
    <div>
      <h1>{value}</h1>

      <button type="button" className="btn" onClick={handleclick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
