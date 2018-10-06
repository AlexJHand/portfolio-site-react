import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './pages/About';
import Email from './components/Email';
import Header from './layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';

const Main = () => ( 
  <BrowserRouter >
    <Switch >
      <Route exact path = '/' component = {Home}/> 
      <Route path='/projects' component={Projects}/> 
      <Route path='/about' component={About}/> 
    </Switch> 
  </BrowserRouter>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Email />
      </div>
    );
  }
}

export default App;
