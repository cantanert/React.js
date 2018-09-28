

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	
 constructor(props){
  super(props);
  this.state = { title: 'Best App' };
 }
  render() {
    return (
      <h1>
	    {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));


// A component can do more than just read its own state. A component can also change its own state. A component 
// changes its state by calling the function this.setState().


// State changing
1- A user triggers an event (in this case a click event, triggered by clicking on a <button></button>).
2- The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).
3- When this listened-for event occurs, it calls an event handler function .
4- Inside of the body of the event handler, this.setState() is called .
5- The component's state is changed!



