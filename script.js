function showScreen(name) {
  const screens = document.querySelectorAll(".screen");

  for (const screen of screens) {
    screen.classList.remove("active");
  }

  document.getElementById(name).classList.add("active");
}
