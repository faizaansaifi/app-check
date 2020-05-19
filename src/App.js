import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  onClick = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value,
    })
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
              Enter : <input type='text' placeholder='Type something' onClick={this.onClick}/>
            <p>Your text: {this.state.text}</p>
          </header>
        </div>
    );
  }
}

export default App;
