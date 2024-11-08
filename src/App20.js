import React from "react";
import App4 from "./App4";
import App3 from "./App3";
import { useState } from "react";
export default function App20() {
    const [flag, setFlag] = useState(false);
  return (
    <>
      <h1>Header</h1>
      <button onClick={() => setFlag(false)}>App3</button>
      <button onClick={() => setFlag(true)}>App4</button>
      {flag ? <App3 /> : <App4 />}

      <h3>Footer</h3>
    </>
  );
}
