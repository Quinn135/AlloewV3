import { Component } from 'react';
import './App.scss';

class Other extends Component{
  render() {
    return (
      <div className="Other section-flex">
          <a href="https://discord.com/api/oauth2/authorize?client_id=887830738391662592&amp;permissions=0&amp;scope=bot" class='btn-tertiary z-0' target='_blank' rel='noopener noreferrer'>Invite Donkey Bot to your server! (Click me)</a>
          <br /><br />
          <h1 class='text-2xl text-white text-center'>Calculator</h1>
          <a style={{ 'color': '#0070ff', }} target='_blank' href='https://CalculatorHTML.quinnthecoder.repl.co'>Calculator</a>
          <iframe style={{ 'height': '30rem', 'width': '25rem', }} src='https://CalculatorHTML.quinnthecoder.repl.co' class='rounded-lg m-auto'></iframe>
      </div>
    )
  }
}

export default Other;