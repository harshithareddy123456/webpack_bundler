import generatejoke from "./generatejoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughingimg = document.getElementById("laughImg");
laughingimg.src = laughing;
console.log(123);

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generatejoke);

generatejoke();
