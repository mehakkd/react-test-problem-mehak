import React from 'react';
import {useState} from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
      
        <button type= "button" id= "changing-button" onClick= {this.handleClick}>
          {this.state.active ? "click me" : "thanks"}
        </button>

      </div>
    );
  }
}
