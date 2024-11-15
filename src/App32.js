import React from "react";
import { useState } from "react";
export default function App32() {
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
      <option value="0">--Select--</option>
        <option value="1">Java</option>
        <option>SQL</option>
        <option>SringBoot</option>
      </select>
      <hr></hr>
      You have seleted {selectedOption}
    </div>
  );
}
