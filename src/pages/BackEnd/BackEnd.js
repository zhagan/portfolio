import React, { Component } from "react";
import Terminal from 'terminal-in-react';

// import { Link } from "react-router-dom";

class BackEnd extends Component {
  state = {

  };

  componentDidMount() {

  }

  showMsg = () => 'React.Js MongoDB Express.js Node.js /n Pure Data C++ Python'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: 'bold', fontSize: '1em' , whiteSpace: 'pre-line'}}
          commands={{
            skills: this.showMsg,
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            skills: 'displays Skills',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Zack Hagan Portfolio OS

               Please type a command'
        />
      </div>

    );
  }
}

export default BackEnd;
