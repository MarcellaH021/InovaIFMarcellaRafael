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