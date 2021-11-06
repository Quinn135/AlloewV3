import { Component } from 'react';
import './App.css';

class Home extends Component{
  render() {
    return (
      <div className="Home section-flex">
        <h1 class='text-5xl text-white m-3'>Welcome to Alloew!</h1>
        <br />
        <h4 class='text-lg text-white'>A website where me and my friends make things for fun!</h4>
        <img alt="Alloew logo" src='../alloew.png' class='m-auto w-1/3' />
      </div>
    )
  }
}

export default Home;