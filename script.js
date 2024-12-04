document.getElementById("magicButton").addEventListener("click", function () {
    const revealSection = document.getElementById("revealSection");
    revealSection.classList.remove("hidden");
  
    // Adiciona um efeito de transição ao botão após o clique
    this.style.transition = "opacity 0.5s";
    this.style.opacity = 0;
    this.disabled = true; // Desativa o botão após o clique
  });
  