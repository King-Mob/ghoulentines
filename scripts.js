console.log("hahaha");

function openUp() {
  document.title = "Spooky Ghoulentine's Day!";
  document.getElementById("front").style.display = "none";
  document.getElementById("inside").style.display = "block";

  const body = document.getElementsByTagName("body")[0];
  body.classList.add("dark");

  const background = new Audio("background.mp3");
  background.loop = true;
  background.play();

  const howl = new Audio("howl.mp3");
  howl.play();
  setInterval(() => {
    howl.play();
  }, 17000);

  flashLightning();
}

function flashLightning() {
  const lightning = document.getElementById("lightning");
  const thunder = new Audio("lightning.mp3");

  lightning.style.opacity = 1;
  setTimeout(() => {
    lightning.style.opacity = 0;
  }, 100);

  thunder.play();

  const randomInterval = Math.round(Math.random() * 20) * 1000;

  setTimeout(flashLightning, randomInterval);
}
