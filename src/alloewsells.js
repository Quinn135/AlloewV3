import React, { Component } from 'react';
import './App.css';

class StoreItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h5>Illustrator : {this.props.author}</h5>
        <img style={{ 'height': '70vh', }} alt={this.props.title} class='m-auto rounded-lg' src={this.props.imgSrc} />
        <br />
        <a class='pure-button' href={this.props.imgSrc} download>
          Download
        </a>
        <hr />
        <br />
      </div>
    )
  }
}
class AlloewSells extends Component{
  render() {
    return (
      <div className="section-flex">
        <div class='text-white rounded'>
          <span style={{'font-family': 'Impact, Charcoal, sans-serif', 'font-size': '72px',}}>Alloew Sells</span>
          <p class="text-center">
          If you don't buy this then your a SIMP son. (because simpson.. get it?)</p>
          <br />
          <StoreItem author="Jacob" title="Colorless Homer" imgSrc="..\SimpsonSells\Colorless Homer.png"/>
          <StoreItem author="Jacob" title="Homer is fine" imgSrc="..\SimpsonSells\Homer is Fine.png"/>
          <StoreItem author="Jacob" title="Colored Homer" imgSrc="..\SimpsonSells\Colored Homer.png"/>
          <StoreItem author="Jacob" title="Retro Homer" imgSrc="..\SimpsonSells\Retro Homer.png"/>
          <StoreItem author="Jacob" title="homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer" imgSrc="..\SimpsonSells\homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png"/>
          <StoreItem author="Jacob" title="Ched Bimpson VS Homer Simpson" imgSrc="..\SimpsonSells\Ched Bimpson VS Homer Simpson.gif"/>
          <StoreItem author="Quinn" title="Fred Simmer" imgSrc="..\SimpsonSells\Fred Simmer.png"/>
        </div>
      </div>
    )
  }
}

export default AlloewSells;
