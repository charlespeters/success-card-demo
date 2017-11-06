import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card type='ribbon' title='Personal Information' />
        <Card type='checkmark' title='Personal Information' />
        <Card type='centered' title='Personal Information' />
      </div>
    );
  }
}

export default App;
