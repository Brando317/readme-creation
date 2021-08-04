import React, { Component } from "react";
import { array } from "yargs";

class App extends Component {
  constructor(props) {
    super(props);
 this.sports = ["basketball", "baseball", "football", "wrestling"]
 this.score = 0;
  this.state = {
    score: this.score,
    word: this.randomChoice(this.sports)
  }
this.used = [];
this.randomChoice = this.randomChoice.bind(this)
this.handleClick= this.handleClick.bind(this)
}
randomChoice(list) {
  let i = Math.floor(Math.random() * (list.length-1));
  return list[i]
}
handleClick(e) {
  e.preventDefault()
let seen = (this.used.indexOf(this.state.word) >= 0)? true: false;
if(!seen) {
  this.used.push(this.state.word)
}
this.setState({word: this.randomChoice(this.sports)})
}



render() {
return (



<div>
<header> Score is {this.state.score} </header>
<p> 
  {this.state.word}
  </p>
<button onClick={this.handleClick} id="yes"> yes </button>
<button onClick={this.handleClick} id="no"> no </button>





</div>









)}

}