import React from 'react'


const TodoList = (props)=>{
    
    return(
        <>
        <div className="todo_style">
          <i onClick={()=>{
              props.onSelect(props.id)
          }}>x</i>
          <li>{props.text}</li>
        </div>
        </>
      )
}

export default TodoList;