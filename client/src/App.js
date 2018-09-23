import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';

const Main = () => ( 
  <BrowserRouter >
    <Switch >
      <Route exact path = '/' component = {Home}/> 
      <Route path='/projects' component={Projects}/> 
      {/* <Route path = '/stats' component = {StatsCard}/>  */}
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
