import {useEffect, useState} from "react";
import axios from "axios"

export default function App(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/todos")
    .then((response) =>{
      console.log(response.data)
      setTodos(response.data.todos)
    })
  },[])

  return(
    <div>
      <h1>Todos from API</h1>

      {todos.map((todo) => (
        <p key={todo.id}>{todo.todo}</p>
      ))}
    </div>
  )
}
