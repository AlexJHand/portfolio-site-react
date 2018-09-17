import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './layout/Header';

const Main = () => ( 
  <main >
    <Switch >
      {/* <Route exact path = '/' component = {MatchesCard}/> 
      <Route path = '/table' component = {TableCard}/> 
      <Route path = '/stats' component = {StatsCard}/>  */}
    </Switch> 
  </main>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
      </div>
    );
  }
}

export default App;
