import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';

const Main = () => ( 
  <BrowserRouter >
    <Switch >
      <Route exact path = '/' component = {Home}/> 
      {/* <Route path = '/table' component = {TableCard}/> 
      <Route path = '/stats' component = {StatsCard}/>  */}
    </Switch> 
  </BrowserRouter>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
