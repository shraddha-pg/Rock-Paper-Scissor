const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("Scissor");
const values = ["Rock", "Paper", "Scissor"];
const user = document.getElementById("user");
const comp = document.getElementById("pc");
let userselection = "";
let pcselection = "";
let result = document.getElementById("msg");
let msg = "";

r.addEventListener("click", function(){
  userselection = r.textContent;
  game(userselection);
});

p.addEventListener("click", function(){
  userselection = p.textContent;
  game(userselection);
});

s.addEventListener("click", function(){
  userselection = s.textContent;
  game(userselection);
});

function game(userselection){
  let pc = Math.floor(Math.random() * 3);
  pcselection = values[pc];
  user.textContent = `Your choice is: ${userselection}`;
  comp.textContent = `Pc's choice is: ${pcselection}`;
  console.log(pcselection);
  console.log(userselection);
  if (userselection === pcselection) {
    msg = "Oops! it's a tie😃";
  } else if (
    (userselection === "Rock" && pcselection === "Scissor") ||
    (userselection === "Paper" && pcselection === "Rock") ||
    (userselection === "Scissor" && pcselection === "Paper")
  ) {
    msg = "Hurrah ! You won🥳";
  } else {
    msg = "Pc won the game😬";
  }
  result.textContent = msg;  
}
