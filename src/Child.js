import {UserContext} from "./App9"
import { useContext } from "react";
export default function Child() {
  const {cart} = useContext(UserContext);
  
 
  return (
    <>
      <h2>My Cart</h2>
      {cart.map((value,index)=> (
            <div>{value.name}-{value.price}-<button>-</button>{value.qty}<button>+</button>-<button>Delete</button></div>
        ))}

      {/* <button onClick={()=>setName("Cathy")}>Submit</button> */}
    </>
  );
}
