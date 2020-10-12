import React from 'react';
import { useState } from 'react';
import "./style.css"
import TodoList from "./TodoList"
function App(){
  const [change,setChange]=useState('')
  const [item, setItem]= useState([])

const handleChange = (e)=>{
  setChange(e.target.value)
}

const handleClick = ()=>{
 setItem((olditems)=>{
   return[...olditems,change]
 })
 setChange("")
}

const delClick =(id)=>{
 setItem((olditems)=>{
   return olditems.filter((arr,index)=>{
       return index !== id;
   })
 })
}



  return(
    <>
     <div className="main_div">
       <div className='center_div'>
         <br/>
         <h1>ToDo List</h1>
         <br/>
         <input type="text" placeholder="Add items" onChange={handleChange} value={change}/>
         <button onClick={handleClick}>+</button>
         <ol>
          { item.map((el, index)=>{
            return(

            <TodoList 
            text={el} 
            key={index} 
            id={index}
            onSelect = {delClick} />
            )
           })}


         </ol>
       </div>
     </div> 
    </>
  )
}


export default App;
