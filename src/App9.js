import { useState, createContext } from "react";
import Child from "./Child";
import Child2 from "./Child2";
export const UserContext = createContext();
export default function App9() {
  const [product, setProduct] = useState([
    { name: "Product1", price: 53 },
    { name: "Product2", price: 58 },
    { name: "Product3", price: 67 },
  ]);

  const [cart, setCart] = useState([]);

  const val = { cart };

  const addProduct = (item) => {
    // const product = { name: "Product4", price: 98, qty: 1 };
    // const product = { name: "Product4", price: 98, qty: 1 };
    item.qty = 1
    setCart((cart) => [...cart, item]);
  };

  return (
    <>
   
      <UserContext.Provider value={val}>
        <h2>Products</h2>
        <hr></hr>
        {product.map((value, index) => (
          <div key={index}>
            {value.name}-{value.price}-<button onClick={()=>addProduct(value)}>Add</button>
          </div>
        ))}
        
        <Child />
        <hr></hr>
      </UserContext.Provider>
    </>
  );
}
