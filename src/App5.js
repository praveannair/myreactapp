import React from "react";
import { useState, useEffect } from "react";

export default function App5() {
  const [val, setVal] = useState(0);
  const [num, setNum] = useState(0);

  const calcTotal = () => {
    console.log("Total Order Value:5656");
  };

  const f1 = () => {
    console.log("Total Quantity:3");
  };

  useEffect(() => {
    // if (val < 0) {
    //   setVal(0);
    // }
    if (val > 5) {
      console.log("Hello");
      calcTotal();
    }
  }, [val]);

  useEffect(() => {
    console.log("Hello");
    f1();
  }, [num]);



  return (
    <div>
      <button onClick={() => val > 0 && setVal(val - 1)}>-</button>
      {val}
      <button onClick={() => setVal(val + 1)}>+</button>
      <hr></hr>
      <button onClick={() => setNum(num - 1)}>-</button>
      {num}
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}
