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
                        onClick = {()=>this.additems}>
                        Add</button>
                </div>

                <div>
                     {
                        this.state.todo.map((todo) => {
                           return(<AddItems todo={todo}/>) 
                        })

                     }
                </div>

                

            </>
        )
    }
}

export default InputForm