let allButton = document.querySelector("main .filter > .all");
let warsButton = document.querySelector("main .filter > .wars");
let allArticles = document.querySelector("main .news-column > .all-news");
let warsArticles = document.querySelector("main .news-column > .wars-news");


function changeToWars() {
  if (allButton.classList.contains("active")) {
    allButton.classList.remove("active");
    allButton.classList.add("inactive");
    warsButton.classList.remove("inactive");
    warsButton.classList.add("active");
    allArticles.style.display = "none";
    warsArticles.style.display = "block";
  };
};

function changeToAll() {
  if (warsButton.classList.contains("active")) {
    allButton.classList.add("active");
    allButton.classList.remove("inactive");
    warsButton.classList.add("inactive");
    warsButton.classList.remove("active");
    allArticles.style.display = "block";
    warsArticles.style.display = "none";
  };
};