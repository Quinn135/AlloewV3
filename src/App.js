import { FaHome, FaGamepad, FaStoreAlt, FaGripVertical } from 'react-icons/fa';
import { GrTextAlignFull } from 'react-icons/gr';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Turboman from './turboman';
import Credits from './credits';
import AlloewSells from './alloewsells';
import Other from './other';
import './App.css';
import Home from './home';

function App() {
  return (
    <div className="App">
    <Router class="App text-center">
      <nav class="section-menu-bg md:sticky z-50">
        <div class="section-menu-btn">
          <NavLink id="home" to="/" className="menu-btn">
              <FaHome size="30" class="m-auto" /></NavLink>
            
          <NavLink id="turbo" to="/turboman" className="menu-btn">
              <FaGamepad size="30" class="m-auto" /></NavLink>
            
          <NavLink id="credit" to="/credits" className="menu-btn">
              <GrTextAlignFull size="30" class="m-auto" /></NavLink>
            
          <NavLink id="simpson" to="/alloewsells" className="menu-btn">
              <FaStoreAlt size="30" class="m-auto" /></NavLink>
            
          <NavLink id="other" to="/other" className="menu-btn">
              <FaGripVertical size="30" class="m-auto" /></NavLink>
            
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/turboman" element={<Turboman/>} />
          <Route path="/alloewsells" element={<AlloewSells />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </Router>
      <div class="section-b">
        <h1 class="text-xl">Contact Me : </h1>
        <a class="text-blue-600" target='_blank' rel='noopener noreferrer' href="mailto:quinn.flynn.coop@gmail.com">quinn.flynn.coop@gmail.com</a>
      </div>
      <script src={"./script.js"}></script>
      
    </div>
  );
};
export default App;
