import React from 'react'

const TodoItem = ({todo,id, deleteTodo,editText,textEditing,setTodoEditing, todoEditing, setTextEditing}) => {
  return (
    <div key={id} className='todos'>

      {/* Input / Todo */}
      {id === todoEditing ? (
        <input className='edit-input' type="text" placeholder='Edit Todo' value={textEditing} onChange={(e) => setTextEditing(e.target.value)} />) : 
        (<p>{todo}</p>)
      }

      {/* Submit Button / Edit Button */}
      {id === todoEditing ? (
        <button className='submit' onClick={() => {
          editText(id)
        }}>Submit</button>
      ) : (<button className='edit' onClick={() => setTodoEditing(id)}>Edit</button>)}
      
      {/* Delete */}
      <button className='delete' onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default TodoItem
