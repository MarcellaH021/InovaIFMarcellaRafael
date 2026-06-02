const video = document.getElementById('video');
const whatsapp = document.querySelector('.whatsapp-float');

function bloquearNavegacao(e) {
  e.preventDefault();
}

function bloquearTeclas(e) {
  const teclasBloqueadas = [
    'ArrowUp',
    'ArrowDown',
    'PageUp',
    'PageDown',
    'Home',
    'End',
    ' ',
    'Spacebar'
  ];

  if (teclasBloqueadas.includes(e.key)) {
    e.preventDefault();
  }
}

function ativarBloqueio() {
  document.body.style.overflow = 'hidden';

  window.addEventListener('wheel', bloquearNavegacao, {
    passive: false
  });

  window.addEventListener('touchmove', bloquearNavegacao, {
    passive: false
  });

  window.addEventListener('keydown', bloquearTeclas);
}

function desativarBloqueio() {
  document.body.style.overflow = 'auto';

  window.removeEventListener('wheel', bloquearNavegacao);

  window.removeEventListener('touchmove', bloquearNavegacao);

  window.removeEventListener('keydown', bloquearTeclas);
}

if (video) {

  // Bloqueia navegação
  ativarBloqueio();

  // Play / Pause ao clicar
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Quando terminar o vídeo
  video.addEventListener('ended', () => {

    desativarBloqueio();
    // Vai para próxima seção
    const certificacoes = document.querySelector('.certificacoes');

    if (certificacoes) {
      certificacoes.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}


const buttons = document.querySelectorAll('.btnSM');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    const text = button.previousElementSibling;

    text.classList.toggle('show');

    if (text.classList.contains('show')) {
      button.textContent = 'Mostrar menos';
    } else {
      button.textContent = 'Saiba mais';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

  if (whatsapp) {
    setInterval(() => {
      whatsapp.classList.add("shake");

      setTimeout(() => {
        whatsapp.classList.remove("shake");
      }, 800);
    }, 3000);
  }
});