import './input.style.scss'
import React from 'react'
import AddItems from '../items/item.component'
class InputForm extends React.Component{
  constructor(){
      super()
      this.state = {
          todo: [],
          additems : ''
      }
  }  
    
  handleOnChange = (event) => {
    this.setState({additems:event.target.value})
  }

  todos =() =>{
      this.setState((state)=>{
          return{
              todo : [...state.todo,this.state.additems]
          }
      })
  }

  



  render() {
        return(
            <>
                <div className="Input-Form">
                    <input 
                    type='search'
                    placeholder="Add you work here"
                    onChange= {this.handleOnChange}
                    >
                    
                    </input>

                    <button
                        onClick = {this.todos}>
                        Add</button>
                </div>

                <div>
                     {
                        this.state.todo.map((todo,index) => {
                           return(<AddItems todo={todo} key={index} />) 
                        })

                     }
                </div>

                

            </>
        )
    }
}

export default InputForm