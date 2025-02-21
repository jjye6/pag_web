const themeToggle = document.getElementById("modo_oscuro");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.getElementById('imagen_link').addEventListener('click', function() {
    const textoACopiar = 'jjy00110@gmail.com';

    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = textoACopiar;
    document.body.appendChild(elementoTemporal);

    elementoTemporal.select();
    document.execCommand('copy');

    document.body.removeChild(elementoTemporal);

    document.getElementById('mensaje').textContent = 'Texto copiado al portapapeles';
});
