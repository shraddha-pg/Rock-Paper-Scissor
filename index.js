const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("Scissor");
const values = ["Rock✊🏻", "Paper🖐🏻", "Scissor✌🏻"];
const pc = Math.floor(Math.random() * 3);
const user = document.getElementById("user");
const comp = document.getElementById('pc');
let userselection = "";
let pcselection = values[pc];
let result = document.getElementById('msg');


r.addEventListener("click", function () {
  userselection = r.textContent;
  user.textContent = `Your choice is: ${userselection}`;
  comp.textContent = `Pc's choice is: ${pcselection}`;
  result.textContent = win();
});

p.addEventListener("click", function () {
  userselection = p.textContent;
  user.textContent = `Your choice is: ${userselection}`;
  comp.textContent = `Pc's choice is: ${pcselection}`;
  result.textContent = win();
});

s.addEventListener("click", function () {
  userselection = s.textContent;
  user.textContent = `Your choice is: ${userselection}`;
  comp.textContent = `Pc's choice is: ${pcselection}`;
  result.textContent = win();
});


function win(){
 if(userselection === pcselection ){
 return "Oops! it's a tie😃";
}else if (userselection === "Rock✊🏻" && pcselection  === "Scissor✌🏻" || userselection === "Paper🖐🏻" && pcselection  === "Rock✊🏻" || userselection === "Scissor✌🏻" && pcselection  === "Paper🖐🏻" ) {
  return 'Hurrah ! You won🥳';
}else{
  return "Pc won the game😬";
}
}
