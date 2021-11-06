import { vendor } from 'postcss';
import './App.css';

function App() {
  var Home =
    "<h1 class='text-5xl text-white m-3'>Welcome to Alloew!</h1>" +
    "<br /><h4 class='text-lg text-white'>A website where me and my friends make things for fun!</h4>" +
    "<img src='../alloew.png' class='m-auto w-1/3'>";
  
  var Credits = "<h1 class='text-5xl text-white m-3'>Credits : </h1>" +
    "<br /><h4 class='text-lg text-white'>Quinn : Developer</h4>" +
    "<br /><h4 class='text-lg text-white'>Flynn : Artist</h4>" +
    "<br /><h4 class='text-lg text-white'>Jacob : Map Designer</h4>" +
    "<br /><h4 class='text-lg text-white'>Mychael, Richard, Quinn, Flynn, Jacob : Game Tester</h4>";
  
  var Other = "<a href='https://discord.com/api/oauth2/authorize?client_id=887830738391662592&amp;permissions=0&amp;scope=bot' class='btn-tertiary z-0' target='_blank' rel='noopener noreferrer'>Invite Donkey Bot to your server! (Click me)</a>" +
    "<br /><br /><h1 class='text-2xl text-white text-center'>Calculator</h1><a style='color: #0070ff;' target='_blank' href='https://CalculatorHTML.quinnthecoder.repl.co'>Calculator</a><iframe style='height: 30rem; width: 25rem;' src='https://CalculatorHTML.quinnthecoder.repl.co' class='rounded-lg m-auto'></iframe>";
  
  var SimpsonSells = "<div class='text-black w-full h-full bg-white rounded'>" +
    "<p style='text-align: center;'>" +
    "<span style='font-family: Impact, Charcoal, sans-serif; font-size: 72px;'>" +
    "Simpson Sells</span>" +
    "</p><p style='text-align: center;'>" +
    "If you don't buy this then your a SIMP son.</p>" +
    "<p style='text-align: center;'><br />" +
    "<img class='m-auto' src='https://i.ibb.co/nrnrdW6/Simpson1-18.png' width='auto' height='720'></p>" +
    "<p style='text-align: center;'><br /></p>" +
    "<p style='text-align: center;'><br><a class='pure-button' href='#' download='https://i.ibb.co/nrnrdW6/Simpson1-18.png'>Download</a>" +
    "</p> <p style='text-align: center;'><br>" +
    "<img class='m-auto' src='https://i.ibb.co/pwxx6Nf/Simpson2-6.png' width='auto' height='720'></p>" +
    "<p style='text-align: center;'><br></p> <p style='text-align: center;'><br>" +
    "<a class='pure-button' href='#' download='https://i.ibb.co/pwxx6Nf/Simpson2-6.png'>Download</a></p>" +
    "<p style='text-align: center;'><br><style>img {border: 2px solid #555;}</style><img src='https://i.ibb.co/CJRvbVJ/Simpson3-8.png' width='auto' height='720' class='m-auto'></p>" +
    "<p style='text-align: center;'><br></p> <p style='text-align: center;'><br><a class='pure-button' href='#' download='https://i.ibb.co/CJRvbVJ/Simpson3-8.png' width='100' height='25'>Download</a></p>" +
    "<p style='text-align: center;'><br><style>img {border: 2px solid #555;}</style><img class='m-auto' src='https://i.ibb.co/5FWsvqW/Simpson4-5.png' width='auto' height='720'></p> <p style='text-align: center;'><br></p>" +
    "<p style='text-align: center;'><br><a class='pure-button' href='#' download='https://i.ibb.co/5FWsvqW/Simpson4-5.png';' width='100' height='25'>Download</button></p></div>";
  
  var tb = "<h1 class='text-white text-center text-5xl'>TurboMan V1.0 Snapshot 3!</h1><br /><p class='text-white text-xl'>Put any bugs in the chat below, thanks!</p><br />" +
    "<iframe style='height: 80vh;' src='../V1.0S3/index.html' class='w-11/12 m-auto'></iframe><br />" +
    "<iframe style='height: 80vh;' src='https://deadsimplechat.com/kM-pjLD77' class='w-11/12 m-auto rounded-lg'></iframe><br />";
  
  function iframe(id, content, idBtn) {
    document.getElementById(id).innerHTML = content;
    if (idBtn === "h") {
      document.getElementById(idBtn).classList = "menu-btn-selected";
      document.getElementById("tm").classList = "menu-btn";
      document.getElementById("c").classList = "menu-btn";
      document.getElementById("ss").classList = "menu-btn";
      document.getElementById("op").classList = "menu-btn";
    }
    if (idBtn === "tm") {
      document.getElementById("h").classList = "menu-btn";
      document.getElementById("tm").classList = "menu-btn-selected";
      document.getElementById("c").classList = "menu-btn";
      document.getElementById("ss").classList = "menu-btn";
      document.getElementById("op").classList = "menu-btn";
    }
    if (idBtn === "c") {
      document.getElementById("h").classList = "menu-btn";
      document.getElementById("tm").classList = "menu-btn";
      document.getElementById("c").classList = "menu-btn-selected";
      document.getElementById("ss").classList = "menu-btn";
      document.getElementById("op").classList = "menu-btn";
    }
    if (idBtn === "ss") {
      document.getElementById("h").classList = "menu-btn";
      document.getElementById("tm").classList = "menu-btn";
      document.getElementById("c").classList = "menu-btn";
      document.getElementById("ss").classList = "menu-btn-selected";
      document.getElementById("op").classList = "menu-btn";
    }
    if (idBtn === "op") {
      document.getElementById("h").classList = "menu-btn";
      document.getElementById("tm").classList = "menu-btn";
      document.getElementById("c").classList = "menu-btn";
      document.getElementById("ss").classList = "menu-btn";
      document.getElementById("op").classList = "menu-btn-selected";
    }
  };

  return (
    <main class="m-auto text-center">
      <div id="buttons" class="section-menu-bg md:sticky z-50">
        <div class="section-menu-btn">
        <button class="menu-btn-selected" id="h"
          onClick={() => iframe('section', Home, "h")}
        >Home</button>
        <button class="menu-btn" id="tm"
          onClick={() => iframe('section', tb, "tm")}
        >TurboMan</button>
        <button class="menu-btn" id="c"
          onClick={() => iframe('section', Credits, "c")}
        >Credits</button>
        <button class="menu-btn" id="ss"
          onClick={() => iframe('section', SimpsonSells, "ss")}
        >Simpson sells</button>
        <button class="menu-btn" id="op"
          onClick={() => iframe('section', Other, "op")}
        >Other Projects</button>
      </div></div>
      <div id="section" class="section-flex">
        <h1 class='text-5xl text-white m-3'>Welcome to Alloew!</h1>
        <br /><h4 class='text-lg text-white'>A website where me and my friends make things for fun!</h4>
        <img src='../alloew.png' class='m-auto w-1/3' />
      </div>
      <div>
      </div>
      <div class="section-b">
        <h1 class="text-xl">Contact Me : </h1>
        <a class="text-blue-600" target='_blank' rel='noopener noreferrer' href="mailto:quinn.flynn.coop@gmail.com">quinn.flynn.coop@gmail.com</a>
      </div>
      <script src={"./script.js"}></script>
    </main>
  );
}
export default App;
