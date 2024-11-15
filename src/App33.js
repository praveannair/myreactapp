import React from "react";

export default function App33() {
  const handleKeyDown = (event) => {
    console.log(event.altKey, event.key);
  };
  let flag = true;
//   let e = <h1>Hello World</h1>;
  // let e = 10
  let e = "Good Morning"
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown}></input>
      <hr></hr>
      {/* {e} */}
      {/* {flag && e} */}

      {e || "Hello" }
    </div>
  );
}
