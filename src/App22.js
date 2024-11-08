import React, { useEffect } from "react";
import { useState, useRef } from "react";
export default function App22() {
  const [name, setName] = useState();
  const prevName = useRef();
  useEffect(()=>{
    prevName.current = name
  })
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      {/* {name} */}
      {prevName.current}
    </div>
  );
}
