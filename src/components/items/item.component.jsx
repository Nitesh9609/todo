import axios  from 'axios'
import './item.style.scss'
import React from 'react'


const AddItems = ({todos:{todoName,todoDescription},id}) =>{


    

const handleOnDelete= () => {
        axios.delete(`http://localhost:8080/delete-todo/${id}`)
        .then((response) => console.log(response))
    }

const handleOnModify = () =>{
    
    var updateToDoName = prompt("update ToDo_Name");
    var updateToDoDescription = prompt("update ToDo_Description")
    axios.put(`http://localhost:8080/modify-todo/${id}`,{
        todoName: updateToDoName,
        todoDescription: updateToDoDescription
    })

}
    
    return(
        <>
            <div className="add-items">
                <div className='checkbox'>
                    
                    <span>{todoName}</span>
                    <span>{todoDescription}</span>
                    <button onClick={handleOnModify}>modify</button>
                    <button onClick={handleOnDelete}>Delete</button>
                </div>
                
            </div>
            
        </>
    )
}

export default AddItems


