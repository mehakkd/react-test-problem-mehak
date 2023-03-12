import React from 'react';
import {useState} from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handler goes here
  //https://reactgo.com/react-change-button-text-onclick/
  function changeText() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    };
  }

  
  //what does render() meaN?
  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
      
        <button type= "button" onClick= {handleClick}>
          {active ? "click me" : "thanks"}
        </button>

      </div>
    );
  }
}
