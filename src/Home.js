import React from "react";
import Pass from "./Pass";
import Fail from "./Fail";
export default function Home(props) {
  let count = props.marks.length;
  let city = props.address.city
  let result = props.f1(props.value)
    return (
    <>
      <h1>{count}</h1>
      <h2>{city}</h2>
      <h3>{result}</h3>
    </>
  );
}
