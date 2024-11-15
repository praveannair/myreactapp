import React, { useState } from "react";

export default function App30() {
  const [name, setName] = useState();


  const handleFunction = (event) => {
    // event.preventDefault();
    console.log(name);
  };
  return (
    <div>

      <form>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <button>Go</button>
        <input type="reset" />
      </form>
    </div>
  );
}
