
// Elements
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const blowBtn = document.getElementById('blowBtn');
const nextFromCandles = document.getElementById('nextFromCandles');
const cutBtn = document.getElementById('cutBtn');
const revealPicsBtn = document.getElementById('revealPicsBtn');
const candles = document.getElementById('candles');
const cake = document.getElementById('cake');
const bdaySong = document.getElementById('bdaySong');
const blowSound = document.getElementById('blowSound');
const cakeCutSound = document.getElementById('cakeCutSound');

// audio file names (place mp3s in same folder)
bdaySong.src = 'song.mp3';
blowSound.src = 'blow.mp3';
cakeCutSound.src = 'cake_cut.mp3';

function showPage(n){
  page1.classList.remove('page-visible');
  page2.classList.remove('page-visible');
  page3.classList.remove('page-visible');
  if(n===1) page1.classList.add('page-visible');
  if(n===2) page2.classList.add('page-visible');
  if(n===3) page3.classList.add('page-visible');
}

// Blow candles behavior (non-blocking)
blowBtn.addEventListener('click', ()=>{
  if (blowSound && blowSound.src && !blowSound.src.includes('undefined')) {
    blowSound.currentTime = 0;
    blowSound.play().catch(()=>{});
  }
  const nodeList = Array.from(candles.querySelectorAll('.candle'));
  nodeList.forEach((c, i)=>{
    setTimeout(()=> c.classList.add('out'), i*100);
  });
  blowBtn.disabled = true;
  blowBtn.textContent = 'Blown ✨';
  setTimeout(()=> nextFromCandles.style.display = 'inline-block', 800);
});

nextFromCandles.addEventListener('click', ()=> showPage(2));

// Cut cake behavior - animation independent of music length
cutBtn.addEventListener('click', async ()=>{
  cake.classList.add('sliced');
  if (cakeCutSound && cakeCutSound.src && !cakeCutSound.src.includes('undefined')) {
    cakeCutSound.currentTime = 0;
    cakeCutSound.play().catch(()=>{});
  }
  if (bdaySong && bdaySong.src && !bdaySong.src.includes('undefined')){
    try{
      await bdaySong.play();
    }catch(e){
      console.warn('Autoplay blocked or error', e);
    }
  }
  cutBtn.disabled = true;
  cutBtn.textContent = 'Cut ✂️';
  setTimeout(()=> cake.classList.remove('sliced'), 900);
  setTimeout(()=> revealPicsBtn.style.display = 'inline-block', 900);
});

revealPicsBtn.addEventListener('click', ()=> showPage(3));
showPage(1);
