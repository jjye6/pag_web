// MODO OSCURO
const themeToggle = document.getElementById("modo_oscuro");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// CAMBIO DE TEXTO
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");
var changeTextButton = document.getElementById("texto_cambiar");
var restoreTextButton = document.getElementById("texto_recuperar");
var originalTexts = [texto1.innerHTML,texto2.innerHTML,];
var newText = "<li>I have a deep passion for computer science and technology.</li><br><li>My objective is to create innovative solutions that optimize efficiency and safety.</li><br><li>I value integrity, collaboration, and continuous improvement.</li><br><li>I believe in the power of technology to facilitate communication and access to information.</li><br><li>I am committed to continuous learning and adapting to technological changes.</li><br><li>My final goal is to offer high-quality services and contribute to the growth of any organization.</li>";

changeTextButton.addEventListener("click", function() {
  texto1.innerHTML = newText;
  texto1.classList.add("fade-in");
  texto2.innerHTML = "";
  changeTextButton.style.display = "none";
  restoreTextButton.style.display = "inline-block";
});
restoreTextButton.addEventListener("click", function() {
  texto1.innerHTML = originalTexts[0];
  texto1.classList.remove("fade-in");
  texto2.innerHTML = originalTexts[1];
  changeTextButton.style.display = "inline-block";
  restoreTextButton.style.display = "none";
});

// ANIMACIÓN DE APARICIÓN 
window.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".aparecer");
  elementos.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
  });
});


