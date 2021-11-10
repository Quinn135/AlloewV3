import { Component } from 'react';
import './App.css';
class Turboman extends Component{

  render() {
  function TB(src, name){
    document.getElementById("Turboman").src = src;
    document.getElementById("TBName").innerHTML = "Turboman " + name + "!";
  }
    return (
      <div class="section-flex">
        
        <h1 id="TBName" class='text-white text-center text-5xl'>Turboman B1.1.1!</h1>
        <br />
        <p class='text-white text-xl'>Put any bugs in the chat below, thanks!</p>
        <br />
        <a href="#">
          <details class="btn-tertiary-no-hover">
          <summary>Versions</summary>
          <div class="block">
            <button onClick={() => TB("../V1.0S4", "V1.0 Snapshot 4")} class="btn-second flex-1">V1.0 Snapshot 4</button>
            <button onClick={() => TB("../V1.0S3", "V1.0 Snapshot 3")} class="btn-second flex-1">V1.0 Snapshot 3</button>
            <button onClick={() => TB("../V1.0S2", "V1.0 Snapshot 2")} class="btn-second flex-1">V1.0 Snapshot 2</button>
            <button onClick={() => TB("../V1.0S1", "V1.0 Snapshot 1")} class="btn-second flex-1">V1.0 Snapshot 1</button>
            <button onClick={() => TB("../B1.1.1", "B1.1.1")} class="btn-first flex-1">B1.1.1</button>
            <button onClick={() => TB("../B1.1", "B1.1")} class="btn-tertiary flex-1">B1.1</button>
            <button onClick={() => TB("../B1.0", "B1.0")} class="btn-tertiary flex-1">B1.0</button>
            <button onClick={() => TB("../A3.3.1", "A3.3.1")} class="btn-tertiary flex-1">A3.3.1</button>
            <button onClick={() => TB("../A3.3", "A3.3")} class="btn-tertiary flex-1">A3.3</button>
            <button onClick={() => TB("../A3.2.1", "A3.2.1")} class="btn-tertiary flex-1">A3.2.1</button>
            <button onClick={() => TB("../A3.2", "A3.2")} class="btn-tertiary flex-1">A3.2</button>
            <button onClick={() => TB("../A3.1", "A3.1")} class="btn-tertiary flex-1">A3.1</button>
            <button onClick={() => TB("../A2.0", "A2.0")} class="btn-tertiary flex-1">A2.0</button>
            <button onClick={() => TB("../A1.0", "A1.0")} class="btn-tertiary flex-1">A1.0</button>
          </div>
          </details>
        </a>
        <iframe id="Turboman" title="Turboman" style={{ 'height': '80vh', }} src="B1.1.1" class='w-11/12 m-auto'></iframe>
        
        <br />
        <iframe title="Chat" style={{ 'height': '80vh', }} src='https://deadsimplechat.com/kM-pjLD77' class='w-11/12 m-auto rounded-lg'></iframe>
        <br />
      </div>
    )
  }
}

export default Turboman;