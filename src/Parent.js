import React from "react";
import Sub from "./Sub";
export default function Parent() {
  const title = process.env.REACT_APP_TITLE;
  
  return (
    <>
      <h1>{title}</h1>
      <div>Parent</div>
      <Sub>
        <h1>Hello World</h1>
      </Sub>
    </>
  );
}
