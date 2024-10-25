import { useState, createContext } from "react";
import Child from "./Child";
import Child2 from "./Child2";
export const UserContext = createContext();
export default function App9() {
  const [name, setName] = useState("John");
  const [cart, setCart] = useState([
    { name: "Product1", price: 53 },
    { name: "Product2", price: 58 },
  ]);
  const [email, setEmail] = useState("john@gmail.com");
  const val = { name, setName, email, setEmail,cart,setCart };

  return (
    <>
      <UserContext.Provider value={val}>
        <h2>
          Hello {name}-{email} from App9 component
        </h2>
        <button onClick={() => setName("Ria")}>Submit</button>
        <hr></hr>
        {cart.map((value,index)=> (
            <div>{value.name}-{value.price}-<button>Add</button></div>
        ))}
        <Child />
        <hr></hr>
        <Child2 />
      </UserContext.Provider>
    </>
  );
}
