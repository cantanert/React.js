
 This game project is a good beginner level training for state basics of react. This project is from my first works in react.
 I want to share beacuse it'll be a good example for beginning.

![q_p7pmj7h u yv54u s 75cpjrywys nv hs](https://user-images.githubusercontent.com/9365242/46426972-c1ee6900-c748-11e8-9af0-bdb8c273bd01.png)
This is apps start screen. In left, you shoul first click for generating random number to prediction and fill the input area
for prediction. When the focus out from area you can check your answer in right section.

![l8msnbfc7-a kej tpjms n_bxb b 5ppp-tj](https://user-images.githubusercontent.com/9365242/46427172-61136080-c749-11e8-954b-0671e5b97fec.png)
In here, there was a random number created and done a prediction already. There are some feedbacks about our prediction between
result. Our prediction is lower than number thats because right section say us this informations.

![k rn u hn4 t u dz6 n uuplcc uggzgjb](https://user-images.githubusercontent.com/9365242/46427477-3675d780-c74a-11e8-81d7-f36ae5b69e1e.png)
Like previus image, there are some infos about situation.

![bc 3yt umf 26en hp-t-cm-bzr q r8k cn](https://user-images.githubusercontent.com/9365242/46427526-586f5a00-c74a-11e8-9f9e-abde22e60b89.png)
And when the values of number and predictions are equal, the right section say us that we are won.

Basicly, code is like this:
### index.js
```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```
### app.js
```Javascript
 import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.randomNumber = this.randomNumber.bind(this);
        this.state = {
            number : null,
            pred: null,
            acc: '',
            root: ''
        }
        this.getPred=this.getPred.bind(this);
        this.randomNumber=this.randomNumber.bind(this);
        this.getRange=this.getRange.bind(this);
        this.getRoot= this.getRoot.bind(this);
    }
    randomNumber(){
        let tmp = Math.floor(Math.random() * 101);
        this.setState({number : tmp})
    }

    getPred(event){
        if(event.target.value.length){
            this.setState({pred: parseInt(event.target.value)});
        }else{
            this.setState({pred: null})
        }
    }
    getRoot(){
        let number = this.state.number;
        let pred = this.state.pred;
        if(number!= null && pred!=null && pred!=NaN){
            if(number>pred){
                this.setState({root: "Think Bigger!"})
            } else if( number< pred){
                this.setState({root: "Think Smaller!"})
            } else{
            this.setState({root: "Congratulations! You Won!"});
            }
        }else{
            this.setState({root: "Generate number and do predict!"})
        }

    }

    getRange(){
        let number = this.state.number;
        let pred = this.state.pred;
        let tmp = Math.abs(number-pred);
        if(pred!= null && number!=null){
            if(tmp==0 ){this.setState({acc: " "})}
            else if(tmp<10){this.setState({acc: "Boiling Hot!!!"})}
            else if(tmp>=10 && tmp<20){this.setState({acc: "Hot!"})}
            else if(tmp>=20 && tmp<40){this.setState({acc: "So-so. It's warm."})}
            else if(tmp>=40 && tmp<50){this.setState({acc: "Cold"})}
            else if(tmp>=50 ){this.setState({acc: "Freezing Cold..."})}

        }
        else{this.setState({acc: " "})}
    }
  render() {
    return (

      <div className="App">
          <div className="container">
              <div className="row ">
                  <div className="col-md-6 sectionL">
                      <div className="row">
                          <button className="btn-primary generateNumber" onClick={this.randomNumber}>Generate Random </button>
                          <p><b>Generated number : </b>{this.state.number} </p>
                      </div>
                      <label>Enter Predict : </label> <input type="number" onBlur={this.getPred}></input>
                      <p>Predicted Number: {this.state.pred}</p>
                  </div>
                  <div className="col-md-6 sectionR">
                      <button onClick={()=>{this.getRoot(); this.getRange()}}>CHECK </button>
                      <p>{this.state.acc}</p>
                      <h4>{this.state.root}</h4>
                  </div>
              </div>

          </div>
      </div>
    );
  }
}

export default App;

```

### app.css
```css
.sectionL{
  float: left;
  border: 1px solid black;
  padding-top: 10px;
  margin-top: 10px;
}

.sectionR{
  float: right;
  border: 1px solid black;
  padding-top: 10px;
  margin-top: 10px;
}

.generateNumber{
  height: max-content;
  margin: 0px 10px 0px 10px;
}
```
