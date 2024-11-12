import React from "react";

export default function App29() {
  function handleContextMenu(event) {
    event.preventDefault(); // Prevents the default right-click menu from opening
    console.log("Right-click prevented");
  }

  return <div style={{backgroundColor:'yellow'}} onContextMenu={handleContextMenu}>Right-click on me</div>;
}
