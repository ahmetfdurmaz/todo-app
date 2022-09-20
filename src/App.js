import React, { useState } from "react";
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TodoItem from "./components/TodoItem";

function App() {

  const [todos,setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const[todoEditing,setTodoEditing] = useState(null)
  const[textEditing,setTextEditing] = useState('')

  // Add Todo Function
  const handleClick = () => {
    if(todoValue === ''){
      toast.error('Please enter a todo')
    } else if(todos.includes(todoValue)){
      toast.error('This todo already exists')
    } else if(todoValue.length < 3){
      toast.error('Todo must be at least 3 charachters long!')
    } else if(todoValue.length > 25){
      toast.error('Todo can not higher than 25 charachters!')
    } else{
      const newTodo = todoValue.trim()
      setTodos([...todos, newTodo])
      toast.success('Todo added!')
    }
  }

  // Text Edit Submit Function
  const editText = (id) => {
    const updatedTodos = [...todos].map((todo,index) => {
      if(textEditing === ''){
        toast.error('Enter a value')
      } else if(textEditing.length < 3){
        toast.error('Todo must be at least 3 charachters long!')
      } else if(index === id){
        todo = textEditing;
      } else{
        toast.success('Todo editted!')
      }
      return todo;
    })
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  // Delete Function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo,index) => index !== id))
    toast.error('Todo Deleted!')
  }

  return (
    <div className="App">
      <ToastContainer/>
      <form>
        <input className='todo' type="text"  placeholder="Enter a todo" onChange={(e) => setTodoValue(e.target.value)} value={todoValue}/>
        <button onClick={(e) => {
          e.preventDefault()
          handleClick()
          setTodoValue('')
        }}>Add Todo</button>
      </form>
      <div className="todo-container">
        {todos.map((todo,index) => (
          <TodoItem todo={todo} key={index} id={index} deleteTodo={deleteTodo} editText={editText} setTodoEditing={setTodoEditing} setTextEditing={setTextEditing} todoEditing={todoEditing}/>
        ))
        }
      </div>
    </div>
  );
}

export default App;
