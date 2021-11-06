import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

class TurboManFrame extends Component{
  render() {
    return (
      <div>
        <h1 class='text-white text-center text-5xl'>TurboMan V1.0 Snapshot 4!</h1>
        <br />
        <p class='text-white text-xl'>Put any bugs in the chat below, thanks!</p>
        <br />
        <iframe title="Turboman" style={{ 'height': '80vh', }} src={this.props.turboSrc} class='w-11/12 m-auto'></iframe>
        <br />
        <iframe title="Chat" style={{ 'height': '80vh', }} src='https://deadsimplechat.com/kM-pjLD77' class='w-11/12 m-auto rounded-lg'></iframe>
        <br />
      </div>
    )
  }
}

class Turboman extends Component{
  render() {
    return (
      <div class="section-flex">
        <TurboManFrame turboSrc="../V1.0S4" />
      </div>
    )
  }
}

export default Turboman;