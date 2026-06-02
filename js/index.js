const video = document.getElementById('video');


video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

const buttons = document.querySelectorAll('.btnSM');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const text = button.previousElementSibling; // pega o <p> antes do botão
    text.classList.toggle('show'); // ativa/desativa a animação
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const whatsapp = document.querySelector(".whatsapp-float");

    setInterval(() => {
        whatsapp.classList.add("shake");

        setTimeout(() => {
            whatsapp.classList.remove("shake");
        }, 800);
    }, 10000);
});