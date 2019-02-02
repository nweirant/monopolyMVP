import React from 'react';
import ReactDom from 'react-dom';
import Apple from './components/apple.jsx';
import Start from './components/start.jsx';
import ParkPlace from './components/parkPlace.jsx';
import PlayerOne from './components/playerOne.jsx';
import Visa from './components/visa.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOnePosition: 0,
      playerOne: 'TJ',
      playerOneAppleCount: 0,
      playerOneVisaCount: 0,
      playerOneCapital: 1020,
      playerOneNetWorth: 0,
      turn: 0
    }
    this.movePlayer = this.movePlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  movePlayer() {
    let updateTurn = this.state.turn+= 1;
    let newSpot = this.state.playerOnePosition += 1;
    if (newSpot > 3) {
      newSpot = 0;
    }


    this.setState({
      playerOnePosition: newSpot,
      turn: updateTurn
    });
  }
  updatePlayer(stockName = null , stock = null, capital) {
    if (stockName === null) {
      this.setState({
        playerOneCapital : capital
      })
    }
    else if (stockName === 'Apple') {
      this.setState({
        playerOneAppleCount: stock,
        playerOneCapital: capital
      })
    }
    else if (stockName === 'Visa') {
      this.setState({
        playerOneVisaCount: stock,
        playerOneCapital: capital
      })
    }

  }

  render() {
    return (
      <div>
          <div id="board">
          <Start index={0} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} />
          <Apple index={1} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} turn={this.state.turn} />
          <ParkPlace index={2} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer}/>
          <Visa index={3} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} turn={this.state.turn} />

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
