import { Component } from 'react';
import './App.scss';

class Turboman extends Component{
  render() {
    return (
      <div class="section-flex">
        <h1 class='text-white text-center text-5xl'>TurboMan V1.0 Snapshot 3!</h1>
        <br />
        <p class='text-white text-xl'>Put any bugs in the chat below, thanks!</p>
        <br />
        <iframe style={{ 'height': '80vh', }} src='../V1.0S3/index.html' class='w-11/12 m-auto'></iframe>
        <br />
        <iframe style={{ 'height': '80vh', }} src='https://deadsimplechat.com/kM-pjLD77' class='w-11/12 m-auto rounded-lg'></iframe>
        <br />
      </div>
    )
  }
}

export default Turboman;