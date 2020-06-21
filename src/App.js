import React,{Component} from 'react';
import './App.css';

import {quotes} from './quote.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      cita: "Flotan todos flotan",
      author: "Pennywise"
    }
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote(){
    let tamaño = quotes.length -1
    var index = Math.round(Math.random() * tamaño)
    this.setState({
        cita: quotes[index].quote,
        author: quotes[index].author
    })
  }
  
  render(){
 
    return(
      <div className="quote-box">
          <blockquote className="text">
             {this.state.cita}
             <p className="author">- {this.state.author}</p>
          </blockquote>
          <button  type="submit" onClick={this.handleNewQuote} >New Quote </button>
        </div>
    )
  }

}

export default App;
