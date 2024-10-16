import React from "react";
import { useState } from "react";

export default function App5() {
  const [val, setVal] = useState(0);

  return (
    <div>
      <button onClick={() => setVal(val - 1)}>-</button>
      {val}
      <button onClick={() => setVal(val + 1)}>+</button>
    </div>
  );
}
