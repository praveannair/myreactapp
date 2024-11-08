import { useState, useEffect } from "react";
export default function App13() {
  const [data, setdata] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
     fetch(url)
      .then((response) => response.json())
      .then((result) => setdata(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data &&
        data.map((elem) => (
          <div key={elem.id}>
            {elem.name}-{elem.email}
          </div>
        ))}
    </div>
  );
}
