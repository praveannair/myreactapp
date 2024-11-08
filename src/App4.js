import React from "react";
import {useState} from 'react'
export default function App4() {
   const [num,setNum] = useState(0)
   const [result,setResult] = useState()
   

//    const f1 = () => {
//     setResult(num*num)
//    }

//    const handleSubmit = () => {
    
//    }

  return (
    <div>
      <p>
        <input type="text" onChange={(e)=>setNum(e.target.value)}></input>
      </p>
      <button onClick={()=>setResult(num*num)}>Submit</button>
      <hr></hr>
     {/* {result} */}
     {num}
    </div>
  );
}
