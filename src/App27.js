import React from "react";

export default function App27() {
  function handleEvent(event) {
    alert("Hello World");
  }

    return <button onClick={handleEvent}>Click Me</button>;
      // return <button onDoubleClick={handleEvent}>Double Click Me</button>;
      // return <div onMouseEnter={handleEvent}>Hover over me</div>;
      // return <div onMouseLeave={handleEvent}>Hover and leave</div>;
      // return <div onMouseMove={handleEvent}>Move your mouse here</div>;
      // return <div onMouseDown={handleEvent}>Press mouse button here</div>;
      // return <div onMouseUp={handleEvent}>Release mouse button here</div>;
    //   return <div onMouseOver={handleEvent}>Mouse over me</div>;
    //   return <div onMouseOut={handleEvent}>Mouse out from here</div>;
      // return <div onContextMenu={handleEvent}>Right-click on me</div>;
  };

