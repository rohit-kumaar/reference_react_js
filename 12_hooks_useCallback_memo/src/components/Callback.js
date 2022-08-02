import React,{useState,useCallback} from 'react'
import Todos from './Todos';
export default function Callback() {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);
    const increment=()=>{
        setCount(count+1)
    }
    const addTodo=useCallback(()=>{
        setTodos((t)=> [...t,"New Todo"])
    },[todos])
  return (
    <div>
        <h2> Use Callback Hook Example</h2>
        <Todos todos={todos} addTodo={addTodo}/>
        <hr/>
        <div>
            Count :{count}
            <button onClick={increment}> +</button>
        </div>
    </div>
  )
}
