const msg = document.getElementById("text");
const button = document.getElementById("btn");
const spin = ["Rock✊🏻", "Paper🖐🏻", "Scissor✌🏻"];

button.addEventListener("click", function(){
    let random = Math.floor(Math.random() * 3);
    let dec = spin[random];
    console.log(dec);
    msg.textContent = dec;
});
