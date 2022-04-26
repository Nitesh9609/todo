
import React from "react";
import InputForm from "./components/input-component/input.component";


class App extends React.Component {
  constructor(){
      super()
      this.state = {
       
      }
  }
  
  
  
  
    render(){
    return (
      <>
        <h1>ToDo List </h1>
        <InputForm/>
        
      </>
    );
  }

}

export default App;
