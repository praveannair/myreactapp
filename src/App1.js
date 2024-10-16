import React from "react";

export default function App1() {
  let fruits = ["apple", "mango", "orange"];
  return (
    <ul>
      {fruits.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
