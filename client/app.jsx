import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Apple from './components/apple.jsx';
import Start from './components/start.jsx';
import ParkPlace from './components/parkPlace.jsx';
import PlayerOne from './components/playerOne.jsx';
import Visa from './components/visa.jsx';
import LeadersUI from './components/leadersUI.jsx';

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
      turn: 0,
      leaderboard: []
    }
    this.movePlayer = this.movePlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.updateLeaders = this.updateLeaders.bind(this);

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
      }, () => {
        this.updateLeaders();
      })
    }
    else if (stockName === 'Apple') {
      this.setState({
        playerOneAppleCount: stock,
        playerOneCapital: capital
      }, () => {
        this.updateLeaders();
      })
    }
    else if (stockName === 'Visa') {
      this.setState({
        playerOneVisaCount: stock,
        playerOneCapital: capital
      }, () => {
        this.updateLeaders();
      })
    }
  }

  updateLeaders() {
    axios.post('/leaders', {
      name: this.state.playerOne,
      capital: this.state.playerOneCapital
    }).then(data => {
      this.setState({leaderboard: data.data});
    })
  }


  componentDidMount() {
    let name = prompt('Enter Name');
    this.setState({
      playerOne: name
    }, () => {
      this.updateLeaders();
    });
  }

  render() {
    return (
      <div>
          <div id="board">
          <Start index={0} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} />
          <Apple index={1} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} turn={this.state.turn} />
          <ParkPlace index={2} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} />
          <Visa index={3} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} p1={this.state} updatePlayer={this.updatePlayer} turn={this.state.turn} />

        </div>

        <div id="ui">
        <button type="button" onClick={this.movePlayer}>MOVE PLAYER ONE</button>
        </div>
        <footer>
          <PlayerOne playerOneDetails={this.state}/> <br></br>
          <p> LEADERS </p>
          <LeadersUI leaders={this.state.leaderboard} />
        </footer>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
