window.addEventListener('keydown', function(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!sound) return;// Stop the function from running
    sound.currentTime = 0; // Rewind to the start
    sound.play();
    key.classList.add('playing')
})

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));