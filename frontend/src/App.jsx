import { useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/todos"


function App(){
  const [todos,setTodos]=useState([])

  fetch("http://localhost:3000/getTodos")
    .then(async function(res){
      const json=await res.json();
      setTodos(json.tasks)
      console.log(json.tasks)
    })
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App