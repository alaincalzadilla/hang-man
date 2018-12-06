import React, { Component } from 'react';
import Word from './Word.js';
import Keyboard from './Keyboard.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyClicked: ''
    }

    this.keyClicked = this.keyClicked.bind(this);
  }

  keyClicked(keyClicked) {
    this.setState({keyClicked})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Keyboard keyClicked={this.keyClicked}/>
        <Word
        number={5}
        keyClicked={this.state.keyClicked}
        />
      </div>
    );
  }
}

export default App;
