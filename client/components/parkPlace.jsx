import React from 'react';

export default class ParkPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersOnSpot: [],
      buyPrice: 200,
      owner: 'na',
      hitPrice: 50,
      rent: 10
    }
    this.checkSpot = this.checkSpot.bind(this);
    this.buyApartment = this.buyApartment.bind(this);
    this.sellApartment = this.sellApartment.bind(this);

  }

  checkSpot() {
    if (this.props.playerOnePosition === this.props.index) {
      this.setState({
        playersOnSpot: this.props.playerOne
      },
      () => {
        if (this.state.playersOnSpot !== this.state.owner) {
          let capital = Number(this.props.p1.playerOneCapital);
          capital = (capital - this.state.hitPrice).toFixed(2);
          this.props.updatePlayer(null, null, capital);
        }
      })
    }
    else {
      this.setState({
        playersOnSpot: []
      })
    }
  }

  buyApartment() {
    let capital = Number(this.props.p1.playerOneCapital);
    if (this.state.owner === 'na') {
      if (capital >= this.state.buyPrice) {
          capital = (capital - this.state.buyPrice).toFixed(2);
          this.setState({
            owner: this.state.playersOnSpot,
          }, () => {
            this.props.updatePlayer(null,null,capital);
          })
      }
    }
  }

  sellApartment() {
    let capital = Number(this.props.p1.playerOneCapital);
    if (this.state.owner === this.props.p1.playerOne) {
          capital = (capital + (this.state.buyPrice * 0.5)).toFixed(2);
          this.setState({
            owner: 'na',
          }, () => {
            this.props.updatePlayer(null,null,capital);
          })

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
        {!occupied ? null :
          <div>
          <button type="button" onClick={this.buyApartment}> BUY </button>
          <button type="button" onClick={this.sellApartment}> SELL </button>

          </div>
        }
        </div>
      </span>
    )
  }
}
