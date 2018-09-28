
const fiftyFifty = Math.random() < 0.5;
class TonightsPlan extends React.Component{
    render(){
        if(fiftyFifty){
   			    return ( 
            <h1>Tonight Im going out WOOO </h1> 
            ); 
        }else{
    		    return ( 
            <h1>Tonight Im going to bed WOOO</h1> 
            );
        }	
    }
};
ReactDOM.render(<TonightsPlan/>,document.getElementById('app'));

// FUNCTION PASSING IN COMPONENT RENDER OPERATION

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick = {this.scream} >AAAAAH!</button>;
  }
}
ReactDOM.render(<Button/>,document.getElementById('app'));
