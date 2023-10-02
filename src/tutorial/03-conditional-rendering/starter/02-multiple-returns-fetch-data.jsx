import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setError(true);
        SetIsLoading(false);
        return;
      }
      const user = await resp.json();
      setUser(user);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    SetIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>there was an Error..</h2>;
  }

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />

      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
