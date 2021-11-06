import { Component } from 'react';
import './App.css';

class Credits extends Component{
  render() {
    return (
      <div className="Credits section-flex">
          <h1 class='text-5xl text-white m-3'>Credits : </h1>
          <br /><h4 class='text-lg text-white'>Quinn : Developer</h4>
          <br /><h4 class='text-lg text-white'>Flynn : Artist</h4>
          <br /><h4 class='text-lg text-white'>Jacob : Map Designer and Simpson Creator</h4>
          <br /><h4 class='text-lg text-white'>Mychael, Richard, Quinn, Flynn, Jacob : Game Tester</h4>
      </div>
    )
  }
}

export default Credits;