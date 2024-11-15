import React from "react";
import Home from "./Home";
// import  style from "./App.css"
import "./App.css"
export default function App() {
  const sqr = (n) => {
    return n * n;
  };

  return (
    <div>
      {/* <h1 className={style.c1}>Hello World</h1> */}
      <h1 className="c1">Hello World</h1>
      <Home
        marks={[34, 23, 67]}
        address={{ city: "Hyderabad", phone: 3434555 } }
        f1 = {sqr}
        value = {5}
      />
    </div>
  );
}
