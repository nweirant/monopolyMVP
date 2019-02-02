import React from 'react';
import axios from 'axios';
//https://api.iextrading.com/1.0/stock/aapl/quote
//https://api.iextrading.com/1.0/stock/aapl/chart/3m
export default class Visa extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Visa Inc.',
      stockPrice: 0,
      playersOnSpot: [],
      prices: [],
      day: 0
    }
    this.updatePrice = this.updatePrice.bind(this);
    this.getData= this.getData.bind(this);
    this.checkSpot = this.checkSpot.bind(this);
    this.buyStock = this.buyStock.bind(this);
    this.sellStock = this.sellStock.bind(this);


  }

  getData(data) {
    let updated = data.data.map(e => e.close);
    let day = 0;
    this.setState({
      prices : updated,
      stockPrice : updated[day]
    });
  }

  updatePrice() {
    let newDay = this.state.day += 1;
    if (newDay > this.state.prices.length) {
      newDay = 0;
    }
    this.setState({day: newDay}, () => {
      this.setState({stockPrice : this.state.prices[this.state.day]})
    })
  }

  buyStock() {
    var priceOfStock = this.state.stockPrice;
    var playerCapital = Number(this.props.p1.playerOneCapital);
    var numberOfStocks = this.props.p1.playerOneVisaCount;
    if (playerCapital > priceOfStock) {
      playerCapital = (playerCapital - priceOfStock).toFixed(2);
      numberOfStocks += 1;
      this.props.updatePlayer('Visa', numberOfStocks, playerCapital);
    }
    else {
      console.log('not enough funds');
      return;
    }
  }

  sellStock() {
    var priceOfStock = this.state.stockPrice;
    var playerCapital = Number(this.props.p1.playerOneCapital);
    var numberOfStocks = this.props.p1.playerOneVisaCount;
    if (numberOfStocks > 0) {
      console.log(typeof numberOfStocks);
      playerCapital = (playerCapital + priceOfStock).toFixed(2);
      numberOfStocks -= 1;
      this.props.updatePlayer('Visa', numberOfStocks, playerCapital);
    }
    else {
      console.log('You do not own any stocks in Visa');
    }

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
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.playerOnePosition !== this.props.playerOnePosition) {
      this.checkSpot();
    }
    if (prevProps.turn !== this.props.turn) {
      this.updatePrice();
    }
  }

  componentDidMount() {
    axios.get('https://api.iextrading.com/1.0/stock/v/chart/3m')
    .then(data => {
      this.getData(data);
    })

  }

  render() {
    let occupied = this.state.playersOnSpot.length ? 'occupiedTile' : '';
    return (
      <span className={occupied} value={this.state.name}>
        Visa, Stock Price:{(this.state.stockPrice).toFixed(2)}
        <div>
        {!occupied ? null :
          <div>
          <button type="button" onClick={this.buyStock}> BUY </button>
          <button type="button" onClick={this.sellStock}> SELL </button>
          </div>
        }
        </div>
      </span>
    )
  }
}
