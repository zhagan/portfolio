import React, { Component } from "react";
import Shapes from 'react-shapes';
import { LinkContainer } from 'react-router-bootstrap';


// import { Link } from "react-router-dom";

class Splash extends Component {
  state = {

  };

  componentDidMount() {

  }


  render() {
    var circleRadius = 145;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zack Hagan</h1>
          <h1 className="App-title"> Developer - Telecom Engineer - Musician</h1>

        </header>
        <div id="container">
          <div id="frontendCircle">
            <Shapes.Circle r={circleRadius}  fill={{color:'#383276'}} stroke={{color:'#000000'}} strokeWidth={0} />
            <LinkContainer to="/frontend">
            <a href="#">
            <h2> FrontEnd </h2>
            </a>
            </LinkContainer>
          </div>
          <div id="backendCircle">
            <Shapes.Circle r={circleRadius} fill={{color:'#6F256F'}} stroke={{color:'#000000'}} strokeWidth={0} />
            <LinkContainer to="/backend">
            <a href="#">
            <h2> BackEnd </h2>
            </a>
            </LinkContainer>
          </div>
        </div>
          <div id="container2">
            <div id="musicCircle">
              <Shapes.Circle r={circleRadius} fill={{color:'#91A437'}} stroke={{color:'#000000'}} strokeWidth={0} />
              <LinkContainer to="/music">
              <a href="#">
              <h2> Music </h2>
              </a>
              </LinkContainer>
            </div>
            <div id="voipCircle">
              <Shapes.Circle r={circleRadius} fill={{color:'#AA9139'}} stroke={{color:'#000000'}} strokeWidth={0} />
              <LinkContainer to="/voip">
              <a href="#">
              <h2> VoIP </h2>
              </a>
              </LinkContainer>
            </div>
          </div>
      </div>
    );
  }
}

export default Splash;
