import {UserContext} from "./App9"
import { useContext } from "react";
export default function Child() {
  const {name,setName,cart} = useContext(UserContext);
  return (
    <>
      <h2>Hello {name} from Child2 component</h2>
      {cart.map((value,index)=> (
            <div>{value.name}-{value.price}-{value.qty}</div>
        ))}
      {/* <button onClick={()=>setName("Mike")}>Submit</button> */}
    </>
  );
}
