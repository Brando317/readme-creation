import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text:  "book",
  hasLoaded: false }
  this.handleInput = this.handleInput.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }

 
  handleInput(event) {
    this.setState({text: event.target.value});
  }
handleClick()
  {
    this.setState({ hasLoaded: !this.state.hasLoaded})
  }
  componentDidMount() {
    this.setState({hasLoaded: true});
  }
  
  
  render() {
    if (this.state.hasLoaded) {
return (
      
      <div>
        <input type="text" id="text" name="EditBox" onChange={this.handleInput}/>
        <button onClick={this.handleClick}> unload </button>


<h1>Welcome to React!</h1>
        <hr />
      </div>
    );
}
else {
  return (<div> 
    <h1> loading </h1>
    <button onClick={this.handleClick}> load </button>
  </div>)
}
  }
}





export default App;
