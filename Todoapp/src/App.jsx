import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    //setTodos(todo) => isko likhne se sari purani todos value delete ho jayengi
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
    //id: Date.now() => ye unique id generate karega
    //...todo => ye spread operator hai jo todo ke andar jitne bhi properties hain unhe copy karega
    //setTodos((prev) => [todo, ...prev]) => isko likhne se purani todos value nahi jayegi
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
// => callback function hai jo pehle se hi todos ko update karega
    
  }
// delete todo me hum ek naya array  bana rahe h jo filter krke sare todo rakhega but jo humne delete kiya hai uske id match ho jaygi to nhi rakhega 

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))// unmatched todo id store karega
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>  prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))// ye item string me tha isliye json me convert kiya hai 

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))// set item me key aur values dena padta hai // stringify->json(array)to string 
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App