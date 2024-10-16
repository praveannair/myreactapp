import React from "react";
import './App3.css'
export default function App3() {
  const myStyle = {
    color: "red",
    backgroundColor: "Blue",
    fontSize:50
  };

 return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>Hello World</h1>
      <h1 style={myStyle}>Hello world</h1>
      <h1 className="c1">Hello World</h1>
    </div>
  );
}
