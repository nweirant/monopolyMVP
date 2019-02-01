import React from 'react';
import ReactDom from 'react-dom';
import Apple from './components/apple.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Apple />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
