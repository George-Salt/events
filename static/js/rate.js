let rates = document.querySelector("main .rate");
let tip = document.querySelector("main p.tip");
let hint = document.querySelector("main p.hint");
let thanksNote = document.querySelector("main p.thanks");

function rate() {
  rates.style.display = "none";
  tip.style.display = "none";
  hint.style.display = "none";
  thanksNote.style.display = "block";
};