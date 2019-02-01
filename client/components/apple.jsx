import React from 'react';
import axios from 'axios';
//https://api.iextrading.com/1.0/stock/aapl/quote
//https://api.iextrading.com/1.0/stock/aapl/chart/3m
export default class Apple extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Apple Inc.',
      stockPrice: 0,
      playersOnSpot: [],
      prices: [],
      day: 0
    }
    this.updatePrice = this.updatePrice.bind(this);
    this.getData= this.getData.bind(this);

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

  componentDidMount() {
    axios.get('https://api.iextrading.com/1.0/stock/aapl/chart/3m')
    .then(data => {
      this.getData(data);
    })

  }

  render() {
  return (
    <div className="stockSpot" value={this.state.name}>
      Google Node
      <button type="button" onClick={this.updatePrice}> test </button>
    </div>
  )
  }
}

// export default Google;
