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
    const text = button.previousElementSibling; 
    text.style.display = text.style.display === 'block' ? 'none' : 'block';
  });
});