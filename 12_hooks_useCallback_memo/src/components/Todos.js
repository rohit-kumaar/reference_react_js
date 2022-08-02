import React,{memo} from 'react'

 function Todos(props) {
    console.log("Child Render")
  return (
    <div>
        <h2> My Todos</h2>
        {
            props.todos.map((todo,index)=>{
                return <p key={index}> {todo} </p>
            })
        }
        <button onClick={props.addTodo}> Add Todo</button>
    </div>
  )
}
export default memo(Todos)