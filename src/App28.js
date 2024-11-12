import React from 'react'

export default function App28() {
    function handleClick(event) {
        // console.log(event)
        // console.log(event.target.innerHTML)
        console.log('Clicked at:', event.clientX, event.clientY);
      }
      return <div onClick={handleClick}>Click Me</div>;

}
