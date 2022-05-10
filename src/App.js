
import React from "react";
import InputForm from "./components/input-component/input.component";
import './app.css'

class App extends React.Component {
  constructor(){
      super()
      this.state = {
       
      }
  }
  
  
  
  
    render(){
    return (
      <>
        <div className="app">
            <h1>ToDo List </h1>
            <InputForm/>
        </div>
        
        
      </>
    );
  }

}

export default App;
