import React from 'react'
import { useContext } from 'react'
import { c } from './Main'
export default function Child4() {
    const {count,setCount} = useContext(c)
    function handle() {
        setCount(10);
    }
  return (
    <div>
        {count}
        <button onClick={handle}>Submit</button>
    </div>
  )
}
