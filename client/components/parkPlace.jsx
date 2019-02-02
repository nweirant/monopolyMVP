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
    this.checkSpot = this.checkSpot.bind(this);
    this.buyApartment = this.buyApartment.bind(this);
  }

  checkSpot() {
    if (this.props.playerOnePosition === this.props.index) {
      this.setState({
        playersOnSpot: this.props.playerOne
      })
    }
    else {
      this.setState({
        playersOnSpot: []
      })
    }
  }

  buyApartment() {
    let capital = this.props.p1.playerOneCapital;
    if (this.state.owner === 'na') {
      if (capital >= this.state.buyPrice) {
          capital = (capital - this.state.buyPrice).toFixed(2);
          this.setState({
            owner: this.state.playersOnSpot,
            hitPrice: this.state.buyPrice
          }, () => {
            this.props.updatePlayer(null,capital);
          })
      }
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.playerOnePosition !== this.props.playerOnePosition) {
      this.checkSpot();
    }
  }

  render() {
    let occupied = this.state.playersOnSpot.length ? 'occupiedTile' : '';
    return (
      <span className={occupied}>
        Park Place ${this.state.buyPrice}
        <div>
        {!occupied ? null : <button type="button" onClick={this.buyApartment}> BUY </button> }
        </div>
      </span>
    )
  }
}
