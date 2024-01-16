import { useState } from "react";
import { fetchData } from "./GetTodos";

const addTasks=async ()=>{
    const fetchAllTasks=await fetchData();
    return fetchAllTasks;
}

export function CreateTodo({setTodos}){


    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const handleAddTodo = async () => {
        try {
          await fetch("http://localhost:3000/addTodos", {
            method: "POST",
            headers: {
                title:title,
                description:description,
              "Content-Type": "application/json",
            },
          });
    
          // Update todos after adding a new task
          const updatedTodos = await addTasks();
          setTodos(updatedTodos);
    
          // Optionally, you can reset the input fields or perform other actions after adding the todo
          setTitle("");
          setDescription("");
        } catch (error) {
          console.error("Error adding todo:", error);
        }
      };
    return (
        <div>
            <input type="text" placeholder="Title" onChange={function(e){
                const value=e.target.value;
                setTitle(value)
            }}></input><br/>
            <input type="text" placeholder="Description" onChange={function(e){
                const value=e.target.value;
                setDescription(value)
            }}></input><br/>
            <button  onClick={handleAddTodo}>Add a Todo</button>
        </div>
    )
}