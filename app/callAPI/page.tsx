"use client"
import { type ChangeEventHandler, useEffect, useState } from "react"

interface Todo {
  id: number
  title: string
  completed: boolean
}

const IndexPage = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data: Todo[] = await res.json()

      setTodos(data.slice(0, 10))
    }

    fetchTodos()
  }, [])

  const handleTodoFormChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value)
  }

  const addTodo = () => {
    if (!todo.trim()) return

    const newTodo: Todo = {
      id: todos.length + 1,
      title: todo,
      completed: false,
    }

    setTodos([newTodo, ...todos])
    setTodo("")
  }

  return (
    <>
      <input type="text" onChange={handleTodoFormChanged} value={todo} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : ""}
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndexPage