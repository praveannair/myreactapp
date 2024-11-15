import React from "react";
import { useState } from "react";
export default function App31() {
  const [isChecked, setIsChecked] = useState(false);
  const [name, SetName] = useState("John");
  

  //   function handleChange(event) {
  //     setIsChecked(event.target.checked);
  //   }

  return (
    <div>
      {Array.from({length:6}).map((v,i) => <label key={i}>*</label>)}
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => SetName(e.target.value)}
        ></input>
      </p>
      <p>
        <input
          type="radio"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        ></input>
        Certified
      </p>
      <button>Submit</button>
      <hr></hr>
      <h3>{name} is {isChecked ? "certified" : "not certified"}</h3>
    </div>
  );
}
