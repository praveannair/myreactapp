import {UserContext} from "./App9"
import { useContext } from "react";
export default function Child() {
  const {name,setName,email,setEmail,cart,setCart} = useContext(UserContext);
  
 
  return (
    <>
      <h2>Hello {name}-{email} from Child component</h2>
      {cart.map((value,index)=> (
            <div>{value.name}-{value.price}</div>
        ))}
      <button onClick={()=>setName("Cathy")}>Submit</button>
    </>
  );
}
