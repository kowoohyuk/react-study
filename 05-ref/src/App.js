import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
// import RefSample from './RefSample';

class App extends Component {
  render() {
    return (
      <>
        <ScrollBox ref={ ref => this.scrollBox = ref }/>
        <button onClick={ () => this.scrollBox.scrollToBottom() }>
          맨 밑
        </button>
      </>
    );
  }
}

export default App;
