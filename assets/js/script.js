let elements = document.querySelectorAll(".dark");
function changeTheme(event) {
  for (i = 0; i < elements.length; i++) {
    if (event.target.checked) {
      elements[i].classList.replace("light--theme", "dark--theme");
    } else {
      elements[i].classList.replace("dark--theme", "light--theme");
    }
  }
}
