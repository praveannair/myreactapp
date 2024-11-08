import React from "react";
import { useRef } from "react";
export default function App21() {
  const head = useRef(null);
  const f1 = () => {
    head.current.style.backgroundColor = "yellow";
  };
  return (
    <div>
      <h1 ref={head}>Hello World</h1>
      <button onClick={f1}>Click</button>
    </div>
  );
}
