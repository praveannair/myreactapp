import React from "react";

export default function App2() {
  const greet = () => {
    alert("Hello World");
  };

  const greet1 = (name) => {
    alert(name);
  };

  return (
    <div>
      <button onClick={greet}>Submit</button>
      <button onClick={()=>greet1('John')}>Submit</button>
    </div>
  );
}
