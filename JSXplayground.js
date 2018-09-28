

var myDiv = <div className="big"> I AM A BIG DIV</div>
ReactDOM.render(myDiv,document.getElementById('app'));
// This className converted in html as a class named as big and it styled via a css code.



//STRING VARIABLE USING IN RENDER
const theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));



//Inject JavaScript into a JSX expression (ONCLICK EVENT)
function makeDoggy(e) {
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}
const kitty = (
	<img onClick={makeDoggy} 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);
ReactDOM.render(kitty, document.getElementById('app'));



// If Conditions
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}
const pics = {  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
                doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

if (coinToss()==='heads'){
  img = <img src={pics.kitty}/>
}else{
  img = <img src={pics.doggy}/>
}
ReactDOM.render(img,document.getElementById('app'));




//condition ? true : false OPERATORS
function coinToss () {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}
const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
const img = <img src={pics[coinToss()=='heads' ? 'kitty' : 'doggy']} />;
-----
____another example:___
<h1>
        {this.state.authorized ? 'Contact' : 'Enter the Password' }  
</h1>
&& CONDITIONS
const judgmental = Math.random() < 0.5;
const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
          <li> Sushi Burrito </li>
          <li> Rhubarb Pie </li>
          { !judgmental && <li> Nacho Cheez Straight Out The Jar </li>}
          <li> Broiled Grapefruit </li>
    </ul>
  </div>
);



// .map() CALL
const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map(person =><li>{person}</li>);
ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'));



// JSX = React.createElement();
// When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: 
// React.createElement(). Every JSX element is secretly a call to React.createElement().

// JSX expression:
const h1 = <h1>Hello world</h1>;

// can be rewritten without JSX, like this:
const h1 = React.createElement( "h1", null, "Hello, world");



// WORKFLOW
// 1- A JSX element renders.
// 2- The entire virtual DOM updates.
// 3- The virtual DOM "diffs," comparing its current self with its previous self.
// 4- Part of the real DOM updates.
// 5- The screen looks different than it used to.


