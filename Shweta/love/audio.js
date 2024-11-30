// Wait until the page is fully loaded
window.addEventListener('load', () => {
  const audio = document.getElementById('myAudio');
  audio.muted = false; // Remove muted if not needed
  audio.play().catch(error => {
    console.error('Autoplay blocked:', error);
  });
});
