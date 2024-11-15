import React from "react";

export default function App1() {
  let fruits = ["apple", "mango", "orange","banana"];
  return (
    <>
    {/* <div className="c1">Hello</div> */}
    <p className="c2">Hello</p>
    <ul>
      {fruits.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
  );
}
