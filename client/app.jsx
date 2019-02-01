import React from 'react';
import ReactDom from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        in REact
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
