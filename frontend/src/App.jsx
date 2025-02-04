import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  
  const [todos,setTodos] = useState([])
  fetch("http://localhost:3000/todos")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      setTodos(data.allTodos)
    })

  return (
    <div>
       <CreateTodo/>  
       <Todos todos={todos} />
    </div>
  )
}

export default App
