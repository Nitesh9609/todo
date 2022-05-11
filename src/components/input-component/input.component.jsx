import './input.style.scss'
import React ,{useState,useEffect} from 'react'
import AddItems from '../items/item.component'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';



const InputForm = ()=>{

    const [todo,setTodo] = useState([])
    const [input, setInput] = useState({ name: "", description: "" });

   const handleOnChange = (event) => {
            const {name,value} = event.target
            setInput((input) => {return {...input,[name]: value,}})
            
              

          }


          useEffect(() => {
            axios
              .get("http://localhost:8080/show-todo")
              .then((response) => setTodo(response.data));
          });


          


   const todos =() =>{
        window.location.reload(false);
        axios.post('http://localhost:8080/add-todo',{
                todoName: input.name,
                todoDescription:input.description,
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

                
              }




    return(
             <>
                 <div className="Input-Form">
                        
                <div>
                    <TextField 
                        name='name'
                        id="outlined-basic" 
                        label="Add ToDo" 
                        variant="outlined" 
                        onChange= {handleOnChange}>
                    </TextField> 
                </div>

                <div>
                    <TextField
                        name='description' 
                        id="outlined-basic" 
                        label="Add Description" 
                        variant="outlined" 
                        onChange= {handleOnChange}>
                    </TextField>
                </div>       
                     
        
                    <Button  className='Button' variant="contained" onClick = {todos} >Add</Button>
          
        
                </div>
        
                <div>
                        
                    {
                        todo.map((todos,index) =>{
                        return(<AddItems 
                        todos={todos}
                        id={todos._id} 
                        key={index}
                        
                        />)
                        })
                    }
                </div>
        
                        
        
            </>
    )
}


export default InputForm

