import React from "react";
import Home from "./Home";
export default function App() {
  const sqr = (n) => {
    return n * n;
  };

  return (
    <div>
      <Home
        marks={[34, 23, 67]}
        address={{ city: "Hyderabad", phone: 3434555 } }
        f1 = {sqr}
        value = {5}
      />
    </div>
  );
}
