import axios  from 'axios'
import './item.style.scss'
import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';




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
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: '#cfe8fc', height: 'auto' }}>
                        <span className='name'>{todoName}</span><br/>
                        <span className='description'>Description: {todoDescription.toUpperCase()}</span><br/>
                        <Button><EditIcon onClick={handleOnModify}/></Button>
                        <Button sx={{ margin: '20px' }} 
                            onClick={handleOnDelete} 
                            startIcon={<DeleteIcon />}>
                        </Button>
                    </Box>
                </Container>
                    
                </div>
                
            </div>
            
        </>
    )
}

export default AddItems


