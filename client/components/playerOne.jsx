import React from 'react';

export default class PlayerOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      netWorth: 0
    }
  }



  render() {
    return (
      <div id="playerOneDetails">
        <span> Capital: {this.props.playerOneDetails.playerOneCapital} </span> <br/>
        <span> Apple Shares: {this.props.playerOneDetails.playerOneAppleCount} </span> <br/>
        <span> Visa Shares: {this.props.playerOneDetails.playerOneVisaCount} </span>

      </div>
    )
  }

}
