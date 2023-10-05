import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Raymond");

  // || == truth value , && == falsh value

  return <h2>{text || name ? "Raymond" : "Error"}</h2>;
};
export default ShortCircuitOverview;
