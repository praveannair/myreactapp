import React from "react";
import { useState, useContext, createContext } from "react";
import Child4 from "./Child4";
import Child5 from "./Child5";
export const c = createContext();
export default function Main() {
  const [count, setCount] = useState(0);
  function handle() {
    setCount(5);
  }
  return (
    <c.Provider value={{ count,setCount }}>
      {count}
      <button onClick={handle}>Submit</button>
      <hr></hr>
      <Child4 />
      <hr></hr>
      <Child5 />
    </c.Provider>
  );
}
