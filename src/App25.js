import React from "react"
import { useMemo, useState } from "react";
export default function App25() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(10);
  const f1 = () => {
    let i;
    for (i = 0; i < flag ** 2; i++) {}
    console.log("result function called");
    return i;
  };
    const result = useMemo(() => f1(), [flag]);
  // const result = f1();
  return (
    <div>
      <h1 className="bg-primary">useMemo</h1>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      <button onClick={() => setFlag(flag + 1)}>Flag:{flag}</button>
      <p>Result:{result}</p>
    </div>
  );
}
