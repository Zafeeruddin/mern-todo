import { useEffect, useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"
import { fetchData } from "./components/GetTodos"



function App(){
  const [todos,setTodos]=useState([])
useEffect(()=>{
    const getAllTodos=async ()=>{
    const tasks=await fetchData();
    console.log(tasks)
    setTodos(tasks)
    }
    getAllTodos();
  },[])
  return (
    <>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} updateTasks={setTodos}></Todos>
    </>
  )
}

export default App;