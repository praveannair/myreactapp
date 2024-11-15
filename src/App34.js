import React from "react";
import App2 from './App2'
import Main from './Main'
import App from './App'
import App1 from './App1'
export default function App34(props) {
  let component;
  switch (props.view) {
    case "home":
      component = <App2 />;
      break;
    case "main":
      component = <Main />;
      break;
    case "app":
      component = <App />;
      break;
    default:
        component = <App1 />;
  }
  return <div>{component}</div>;
}
