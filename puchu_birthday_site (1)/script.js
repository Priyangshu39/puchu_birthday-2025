
const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('bgAudio');
let playing = false;
playBtn.addEventListener('click', ()=>{
  if(!audio.src){
    alert('No song file found. To enable audio, put a file named "song.mp3" in the same folder as index.html.');
    return;
  }
  if(!playing){
    audio.play();
    playBtn.textContent = '🔇 Pause birthday song';
    playing = true;
  } else {
    audio.pause();
    playBtn.textContent = '🔊 Play birthday song';
    playing = false;
  }
});
