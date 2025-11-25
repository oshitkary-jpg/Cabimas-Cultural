// JS
function playSound(id, card) {
  const audio = document.getElementById(id);
  const allAudios = document.querySelectorAll('audio');
  const allCards = document.querySelectorAll('.sound-card');

  allAudios.forEach(a => {
    if (a !== audio) a.pause();
  });

  allCards.forEach(c => c.classList.remove('playing'));

  if (audio.paused) {
    audio.play();
    card.classList.add('playing');
  } else {
    audio.pause();
    card.classList.remove('playing');
  }
}


