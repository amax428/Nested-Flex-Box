import React, { Component } from 'react';
import View from './components/view';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <View />
      </div>
    );
  }
}

export default App;
