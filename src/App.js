//This is the example of the Normal React Component which reRender itself no matter what...


// import React from "react";


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1
//     }
//   }

//   render() {
//     console.log("Check-Rerendering");
//     return (
//       <div>
//         <h1>Normal Component {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count})}>Update Count</button>
//       </div>
//     )
//   }
// }

// export default App;

//This is the example of the pure component which reRender on the condtion that it check the previous state of the component if they are same it will not rerender and if not it will rerender

// import React,{PureComponent}from "react";


// class App extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       count: 1
//     }
//   }

//   render() {
//     console.warn("Check-Rerendering");
//     return (
//       <div>
//         <h1>Normal Component {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count})}>Update Count</button>
//       </div>
//     )
//   }
// }

// export default App;

// App.js

// App.js

// App.js
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import RandomImage from './Components/RandomImage';

function App() {


  return (
   <RandomImage/>
  );
}

export default App;

