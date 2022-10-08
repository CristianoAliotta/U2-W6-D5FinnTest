let elements = document.querySelectorAll(".dark");
let buttons = document.querySelectorAll(".btn-darkmode");
let darkLogo = "./assets/img/bee-hive.png";
let lightLogo = "./assets/img/bee-hive (1).png";
function changeTheme(event) {
  for (i = 0; i < elements.length; i++) {
    if (event.target.checked) {
      elements[i].classList.replace("light--theme", "dark--theme");
    } else {
      elements[i].classList.replace("dark--theme", "light--theme");
    }
  }
}
function changeButton(event) {
  for (i = 0; i < buttons.length; i++) {
    if (event.target.checked) {
      buttons[i].classList.replace("light--button", "dark--button");
    } else {
      buttons[i].classList.replace("dark--button", "light--button");
    }
  }
}
