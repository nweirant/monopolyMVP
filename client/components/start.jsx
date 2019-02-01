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
    const index = 0;
    if (this.props.playerOnePosition === index) {
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
    return(
      <span id="start">
          Start
      </span>
    )
  }

}
