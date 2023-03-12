import React from 'react';
import {useState} from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true};
    
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  //handler goes here
  //https://reactjs.org/docs/handling-events.html
  handleClick() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
      
        <button type= "button" onClick= {this.handleClick}>
          {this.state.active ? "click me" : "thanks"}
        </button>

      </div>
    );
  }
}
