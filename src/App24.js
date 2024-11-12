import { useReducer } from "react";
import ReactDOM from "react-dom/client";
// import reducer from "./reducer";

function reducer(value, action) {
  switch (action.type) {
    case "increment":
      return value + 1;
    case "decrement":
      return value - 1;
    default:
      return value;
  }
}
export default function App24() {

  const [state, dispatch] = useReducer(reducer, 0);
  
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <>
      <input type="button" onClick={decrement} value="-"></input>
      {state}
      <input type="button" onClick={increment} value="+"></input>
    </>
  );
}
