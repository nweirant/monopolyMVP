import React from 'react'

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersOnSpot: []
    }
    this.checkSpot = this.checkSpot.bind(this);
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

  componentDidMount() {
    this.checkSpot();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.playerOnePosition !== this.props.playerOnePosition) {
      this.checkSpot();
    }
  }

  render() {
    let occupied = this.state.playersOnSpot.length ? 'occupiedTile' : '';
    return(
      <span id="start" className={occupied}>
          Start
      </span>
    )
  }

}
