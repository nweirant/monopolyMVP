import React from 'react';
import ReactDom from 'react-dom';
import Apple from './components/apple.jsx';
import Start from './components/start.jsx';
import ParkPlace from './components/parkPlace.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOnePosition: 0,
      playerOne: 'TJ'
    }
    this.movePlayer = this.movePlayer.bind(this);
  }

  movePlayer() {
    let newSpot = this.state.playerOnePosition += 1;
    this.setState({
      playerOnePosition: newSpot
    });
  }



  render() {
    return (
      <div>
          <div id="board">
          <Start index={0} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} />
          <Apple index={1} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} />
          <ParkPlace index={2} playerOnePosition={this.state.playerOnePosition} playerOne={this.state.playerOne} />
        </div>

        <div id="ui">
        <button type="button" onClick={this.movePlayer}>MOVE PLAYER ONE</button>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
