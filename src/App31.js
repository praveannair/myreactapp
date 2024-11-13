import React from "react";
import { useState } from "react";
export default function App31() {
  const [isChecked, setIsChecked] = useState(false);
  const [name,SetName] = useState("")

//   function handleChange(event) {
//     setIsChecked(event.target.checked);
//   }

  return (
    <div>
        <p><input type="text" placeholder="Enter Name" onChange={(e)=>SetName(e.target.value)}></input></p>
      <p>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e)=>setIsChecked(e.target.checked)}></input>Certified
      </p>
      <button>Submit</button>
      <hr></hr>
    </div>
  );
}
