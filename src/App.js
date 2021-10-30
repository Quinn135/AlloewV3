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
    "<br /><h4 class='text-lg text-white'>Micheal, Richard, Quinn, Flynn, Jacob : Game Tester</h4>";
  
  var Other = "<a href='https://discord.com/api/oauth2/authorize?client_id=887830738391662592&amp;permissions=0&amp;scope=bot' class='btn-tertiary' target='_blank' rel='noopener noreferrer'>Invite Donkey Bot to your server! (Click me)</a>";
  
  var SimpsonSells = "<div class='w-full h-full bg-white rounded-lg'>" +
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
  
  var tb = "<h1 class='text-white text-center text-5xl'>TurboMan!</h1>" +
    "<label class='text-xl text-white'>**DOESNT WORK** Version : </label><select onClick='tbv' name='Versions' id='Versions'><option name='B111'>B1.1.1</option><option name='B11'>B1.1</option><option name='B10'>B1.0</option><option name='A331'>A3.3.1</option></select>" +
    "<br /><iframe id='tbv' class='h-screen' src='../B1.1.1/index.html'></iframe><br /> <B111 />";
  
  function iframe(id, content) {
    document.getElementById(id).innerHTML = content;
  };

  return (
    <main>
      <br />
      <div class="section">
        <button class="btn-primary"
          onClick={() => iframe('section', Home)}
        >Home</button>
        <button class="btn-primary"
          onClick={() => iframe('section', tb)}
        >TurboMan</button>
        <button class="btn-primary"
          onClick={() => iframe('section', Credits)}
        >Credits</button>
        <button class="btn-primary"
          onClick={() => iframe('section', SimpsonSells)}
        >Simpson sells</button>
        <button class="btn-primary"
          onClick={() => iframe('section', Other)}
        >Other Projects</button>
      </div>
      
      <br />
      
      <div id="section" class="section-flex">
        <h1 class='text-5xl text-white m-3'>
          Welcome to Alloew!
        </h1>
        <br />
        <h4 class='text-lg text-white'>
          A website where me and my friends make things for fun!</h4>
      </div>
      <script src={"./script.js"}></script>
    </main>
  );
}
export default App;
