import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      meaningOfLife: 47
    }
  }
  handleClick = () => {
    this.setState({ meaningOfLife: this.state.meaningOfLife + 1 }, () => {
      console.log(this.state.meaningOfLife)
    })
    //console.log(this.state.meaningOfLife) //gọi ko thế này thì log ra nó chưa cập nhật,-> ko đồng bộ
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button onClick={this.handleClick}>Update state</button>
        </header>
      </div>
    );
  }

}

export default App;
