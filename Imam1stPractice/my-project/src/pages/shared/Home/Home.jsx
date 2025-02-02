import React, { useEffect, useState } from "react";

const Home = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2 className="text-center mb-3"> User :{user.length}</h2>
      {users.map((user) => (
        <About user={user} />
      ))}
    </>
  );
};

export default Home;
