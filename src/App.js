import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import BackEnd from "./pages/BackEnd";
import Splash from './pages/Splash';
import NoMatch from './pages/NoMatch';
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <Router>
        <div id="sketch-holder">1

        <div className="container-fluid" >
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/splash" component={Splash} />
            <Route exact path="/backend" component={BackEnd} />
            <Route component={NoMatch} />
          </Switch>
          </div>

        </div>
      </Router>
    );
  }
}
export default App;
