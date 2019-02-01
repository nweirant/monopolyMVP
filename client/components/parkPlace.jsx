import React from 'react';

export default class ParkPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersOnSpot: [],
      buyPrice: 200,
      owner: 'na',
      hitPrice: 0
    }
    
  }

  render() {
    return (
      <span className="apartment">
        Park Place ${this.state.buyPrice}
      </span>
    )
  }
}
