function showScreen(name) {
  const screens = document.querySelectorAll(".screen");

  for (const screen of screens) {
    screen.classList.remove("active");
  }

  document.getElementById(name).classList.add("active");
}
const pdfInput = document.getElementById("pdfInput");
const fileName = document.getElementById("fileName");

pdfInput.addEventListener("change", function () {
  const file = pdfInput.files[0];

  if (file) {
    fileName.textContent = file.name;
  }
});
