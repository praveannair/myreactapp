import React from 'react'
import {c} from './Main'
import { useContext } from 'react'
export default function Child5() {
    const {count,setCount} = useContext(c)
    function handle() {
        setCount(15)
    }
  return (
    <div>{count}<button onClick={handle}>Submit</button></div>
  )
}
