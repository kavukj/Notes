import './App.css';
import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from '../src/component/home';

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Switch>      
          <Route exact path="/" component={Home} />
        </Switch>
  
      </div>
    );
  }
  
}

export default App;
