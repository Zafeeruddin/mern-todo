export function Todos({ todos, updateTasks }) {
    const handleTasks = async (id) => {
      try {
        // Send a PUT request to update the task's completion status
        await fetch("http://localhost:3000/updateTodos", {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'id': id // Pass the id in the headers
          },
          body: JSON.stringify({
            id: id
          }),
        });
  
        // Fetch the latest todos after updating the task
        const response = await fetch("http://localhost:3000/getTodos");
        const updatedTodos = await response.json();
  
        // Update the state in the parent component with the latest todos
        updateTasks(updatedTodos.tasks);
      } catch (error) {
        console.error("Error updating task:", error);
      }
    };
  
    return (
      <div>
        {todos.map(function (todo) {
          return (
            <div key={todo._id}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button onClick={() => handleTasks(todo._id)}>
                {todo.completed ? "Done" : "Mark as complete"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  