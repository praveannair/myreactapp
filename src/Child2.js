import {UserContext} from "./App9"
import { useContext } from "react";
export default function Child() {
  const {name,setName,email,setEmail} = useContext(UserContext);
  return (
    <>
      <h2>Hello {name}-{email} from Child2 component</h2>
      <button onClick={()=>setName("Mike")}>Submit</button>
    </>
  );
}
