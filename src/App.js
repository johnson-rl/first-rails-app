// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
// class Hello extends Component {
//     render(){
//       return (
//         <div>
//           <h1>Hello {this.props.name}</h1>
//           <p>You are {this.props.age} years old</p>
//         </div>
//       )
//     }
// }
// export default Hello

import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js'

class Post extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.title}</h1>
        <h3>written by {this.props.author}</h3>
        <p>{this.props.body}</p>
        <hr></hr>
        <p>Comments:</p>
        <ul>
          <li><Comment body={this.props.comments[0]} /></li>
        </ul>
      </div>
    )
  }
}

export default Post;
