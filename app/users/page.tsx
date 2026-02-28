"use client"
import { useEffect, useState } from "react"

const Todo = () => {
  const [todos, setTodos] = useState<any[]>([])
  const url = "https://jsonplaceholder.typicode.com/todos"

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setTodos(data)
    }
    fetchTodo()
  }, [])

  return (
    <ul>
      {todos.slice(0, 10).map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

const User = () => {
  const [users, setUsers] = useState<any[]>([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setUsers(data)
    }
    fetchUser()
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

const Page = () => {
  return (
    <>
      <h2>Todos</h2>
      <Todo />
      <h2>Users</h2>
      <User />
    </>
  )
}

export default Page