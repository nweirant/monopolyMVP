import React from 'react';
import ReactDom from 'react-dom';
import Apple from './components/apple.jsx';
import Start from './components/start.jsx';
import ParkPlace from './components/parkPlace.jsx';
import PlayerOne from './components/playerOne.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOnePosition: 0,
      playerOne: 'TJ',
      playerOneAppleCount: 0,
      playerOneCapital: 1000,
      playerOneNetWorth: 0,
      turn: 0
    }
    this.movePlayer = this.movePlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  movePlayer() {
    let updateTurn = this.state.turn+= 1;
    let newSpot = this.state.playerOnePosition += 1;
    if (newSpot > 2) {
      newSpot = 0;
    }


    this.setState({
      playerOnePosition: newSpot,
      turn: updateTurn
    });
  }
  updatePlayer(stock = null, capital = null) {
    if (stock === null) {
      this.setState({
        playerOneCapital : capital
      })
    }
    else {
      this.setState({
        playerOneAppleCount: stock,
        playerOneCapital: capital
      })
    }

  }

  render() {
    return (
      <div>
          <div id="board">
          <Start index={0} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} />
          <Apple index={1} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} turn={this.state.turn} />
          <ParkPlace index={2} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer}/>
        </div>

        <div id="ui">
        <button type="button" onClick={this.movePlayer}>MOVE PLAYER ONE</button>
        </div>
        <footer>
          <PlayerOne playerOneDetails={this.state}/>
        </footer>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
