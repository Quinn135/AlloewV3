import './App.css';
import {Btnp, Btns, Btnt} from './btn.js';

const Nav = () => {
  return (
    <main>
      <div className="section">
        <button className="btn-primary">Home</button>
        <button className="btn-primary">TurboMan</button>
        <button className="btn-primary">Credits</button>
        <button className="btn-primary">Other Projects</button>
      </div>
    </main>
  )
}

export {
  Nav,
}