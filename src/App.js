import React, { Component } from 'react';
import PlayerCard from './PlayerCard.jsx';
import './App.css';
import Winner from './Winner.js';

// dataland

class App extends Component {
  constructor(props) {
    super(props);
    this.symbols = ['rock', 'paper', 'scissors'];
    this.state = {
      colorRed: 'red', 
      colorBlue: 'blue',
      playerRed: this.symbols[2],
      playerBlue: this.symbols[1],
    };
  }

// react jsfunctionality land

decideWinner = () => {
  if (this.state.playerRed === this.state.playerBlue) {
    return "It's a Draw!!!"
  }

  if ((this.state.playerRed === 'rock' && this.state.playerBlue === 'scissors') || 
  (this.state.playerRed === 'paper' && this.state.playerBlue === 'rock') ||
  (this.state.playerRed === 'scissors' && this.state.playerBlue ==='paper')) {
    return "Red Player Wins!!!"
  }
  else {
    return "Blue Player Wins!!!"
  }
}

runGame = () => {
  let counter = 0;

  const myInterval = setInterval(() => {
    counter++;
  this.setState({
playerRed: this.symbols[Math.floor(Math.random() * 3)],
playerBlue: this.symbols[Math.floor(Math.random() * 3)],
winner: null
} );

if (counter > 40) {
  clearInterval(myInterval);
    this.setState({
      winner: this.decideWinner(),
    })
}
  }, 100);
};

// html land
  render() {
    return (
      <div className="App">
        <PlayerCard color={this.state.colorRed} symbol={this.state.playerRed} />
        <PlayerCard color={this.state.colorBlue} symbol={this.state.playerBlue} />
        <Winner winner={this.state.winner} />
        <button onClick={this.runGame}>Run Game</button>
      </div>
    );
  }
}

export default App;
