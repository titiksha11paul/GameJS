let userscore = 0;
let pcscore = 0;

//stone =>0
//scissor =>1
//paper =>2
let btnrule = document.getElementById('buttonrule');
let rulebox = document.getElementById('ruleb');
let exitrule = document.getElementById('exit');
let stoneus = document.getElementById('stone');
let scissorus = document.getElementById('scissor');
let paperus = document.getElementById('paper');
let options = document.getElementById('options');
let result = document.getElementById('result');
let userwon = document.getElementById('userwin');
let pcwon = document.getElementById('pcwin');
let resh1 = document.getElementById('whowon');
let resh2 = document.getElementById('h2res');
let btnagain = document.getElementById('playagain');
let labelpc = document.getElementById('pcs');
let labeluser = document.getElementById('uss');
let humanscr = document.getElementById('humanscr');
let aiscr = document.getElementById('aiscr');
let btnend = document.getElementById('buttonendgame');
let reset = document.getElementById('buttonresetgame');

btnend.addEventListener('click', () => {
  if (pcscore < userscore) {
    resett();
    window.location.href = 'wonpage.html';
  } else if (pcscore == userscore) {
    alert('TIE UP, play more and get ahead');
  } else {
    alert('YOU ARE LOSING, play more and get ahead');
  }
});
function resett() {
  localStorage.clear();
  userscore = 0;
  pcscore = 0;
  updateScore();
  reset.style.display = 'none';
}
function updateScore() {
  aiscr.innerText = pcscore;
  humanscr.innerText = userscore;

  localStorage.setItem('pc', Number(pcscore));
  localStorage.setItem('user', Number(userscore));
}

stoneus.addEventListener('click', () => {
  stonepicked();
  componentonclick();
  updateScore();
});

scissorus.addEventListener('click', () => {
  scissorpicked();
  componentonclick();
  updateScore();
});

paperus.addEventListener('click', () => {
  paperpicked();
  componentonclick();
  updateScore();
});

btnagain.addEventListener('click', () => {
  result.style.display = 'none';
  options.style.display = 'flex';
  labelpc.classList.remove('stone');
  labelpc.classList.remove('paper');
  labelpc.classList.remove('scissor');
  labeluser.classList.remove('stone');
  labeluser.classList.remove('paper');
  labeluser.classList.remove('scissor');
});

function componentonclick() {
  options.style.display = 'none';
  result.style.display = 'flex';
  if (pcscore || userscore) {
    reset.style.display = '';
  } else {
    reset.style.display = 'none';
  }
}

function userwins() {
  userscore += 1;
  userwon.style.display = 'flex';
  pcwon.style.display = 'none';
  btnagain.innerText = 'PLAY AGAIN';
  resh2.innerText = 'AGAINST PC';
  resh1.innerText = 'YOU WIN';
}
function pcwins() {
  pcscore += 1;
  userwon.style.display = 'none';
  pcwon.style.display = 'flex';
  btnagain.innerText = 'PLAY AGAIN';
  resh2.innerText = 'AGAINST PC';
  resh1.innerText = 'YOU LOST';
}
function tie() {
  userwon.style.display = 'none';
  pcwon.style.display = 'none';
  resh1.innerText = 'TIE UP';
  resh2.innerText = '';
  btnagain.innerText = 'REPLAY';
}
function RuleFunction() {
  if (rulebox.style.display === 'none') {
    rulebox.style.display = 'flex';
  } else {
    rulebox.style.display = 'none';
  }
}

exitrule.addEventListener('click', () => {
  rulebox.style.display = 'none';
});
// exitedrule.addEventListener('click', () => {
//   rulebox.style.display = 'none';
// });

function stonepicked() {
  labeluser.classList.add('stone');
  console.log('stone');
  pcpicked = randompicker();
  if (pcpicked === 0) {
    console.log('Tie');
    labelpc.classList.add('stone');
    tie();
  } else if (pcpicked === 1) {
    labelpc.classList.add('scissor');
    console.log('user wins');
    userwins();
  } else {
    console.log('pc wins');
    labelpc.classList.add('paper');
    pcwins();
  }
}
function scissorpicked() {
  labeluser.classList.add('scissor');
  console.log('scissor');
  pcpicked = randompicker();
  if (pcpicked === 0) {
    console.log('pc wins');
    labelpc.classList.add('stone');
    pcwins();
  } else if (pcpicked === 1) {
    console.log('tie');
    labelpc.classList.add('scissor');
    tie();
  } else {
    console.log('user wins');
    labelpc.classList.add('paper');
    userwins();
  }
}
function paperpicked() {
  labeluser.classList.add('paper');
  console.log('paper');
  pcpicked = randompicker();
  if (pcpicked === 0) {
    console.log('user wins');
    labelpc.classList.add('stone');
    userwins();
  } else if (pcpicked === 1) {
    console.log('pc wins');
    labelpc.classList.add('scissor');
    pcwins();
  } else {
    console.log('tie');
    labelpc.classList.add('paper');
    tie();
  }
}

function randompicker() {
  let ai = Math.floor(Math.random() * 3);
  if (ai === 1) {
    console.log('pc:scissor');
  } else if (ai === 0) {
    console.log('pc:stone');
  } else {
    console.log('pc:paper');
  }
  return ai;
}

reset.addEventListener('click', resett);

reset.style.display = 'none';

if (localStorage.getItem('pc')) {
  pcscore = Number(localStorage.getItem('pc'));
  aiscr.innerText = pcscore;
  reset.style.display = '';
}
if (localStorage.getItem('user')) {
  userscore = Number(localStorage.getItem('user'));
  humanscr.innerText = userscore;
  reset.style.display = '';
}
