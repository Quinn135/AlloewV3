import { Component } from 'react';
import './App.scss';

class SimpsonSells extends Component{
  render() {
    return (
      <div className="section-flex">
        <div class='text-white w-full h-full rounded'>
          <span style={{'font-family': 'Impact, Charcoal, sans-serif', 'font-size': '72px',}}>
            Simpson Sells
          </span>
          <p class="text-center">
          If you don't buy this then your a <b>SIMP son</b>.</p>
          <br />
          <h3>Colorless homer</h3>
          <img class='m-auto rounded-lg' src='..\SimpsonSells\Colorless Homer.png' width='auto' height='720' />
          <br />
          <br />
          <a class='pure-button' href="..\SimpsonSells\Colorless Homer.png" download>
            Download
          </a>
          <hr /><br />
          <h3>Homer is fine</h3>
          <img class='m-auto rounded-lg' src='..\SimpsonSells\Homer is Fine.png' width='auto' height='720' />
          <br />
          <a class='pure-button' href="..\SimpsonSells\Homer is Fine.png" download>
            Download
          </a>
          <hr /><br />
          <h3>Colored homer</h3>
          <img class='m-auto rounded-lg' src='..\SimpsonSells\Colored Homer.png' width='auto' height='720' />
          <br /><br />
          <a class='pure-button' href="..\SimpsonSells\Colored Homer.png" download>
            Download
          </a>
          <hr /><br />
          <h3>Retro homer</h3>
          <img class='m-auto rounded-lg' src='..\SimpsonSells\Retro Homer.png' width='auto' height='720' />
          <br />
          <br />
          <a class='pure-button' href="..\SimpsonSells\Retro Homer.png" download>
            Download
          </a>
          <hr /><br />
          <h3>homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer</h3>
          <img class='m-auto rounded-lg' src='..\SimpsonSells\homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png' width='500' height='400' />
          <br />
          <br /><a class='pure-button' href="..\SimpsonSells\homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png" download>
            Download
          </a>
          <hr /><br />
        </div>
      </div>
    )
  }
}

export default SimpsonSells;