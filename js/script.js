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
var newText = "<li>Tengo una profunda pasión por la informática y la tecnología.</li><li>Mi objetivo es crear soluciones innovadoras que optimicen la eficiencia y la seguridad.</li><li>Valoro la integridad, la colaboración y la mejora continua.<li>Creo en el poder de la tecnología para facilitar la comunicación y el acceso a la información.</li><li>Estoy comprometido con el aprendizaje constante y la adaptación a los cambios tecnológicos.</li><li>Mi meta es ofrecer servicios de alta calidad y contribuir al crecimiento de cualquier organización.</li>";

changeTextButton.addEventListener("click", function() {
  texto1.innerHTML = newText;
  texto2.innerHTML = "";
  changeTextButton.style.display = "none";
  restoreTextButton.style.display = "inline-block";
});
restoreTextButton.addEventListener("click", function() {
  texto1.innerHTML = originalTexts[0];
  texto2.innerHTML = originalTexts[1];
  changeTextButton.style.display = "inline-block";
  restoreTextButton.style.display = "none";
});

