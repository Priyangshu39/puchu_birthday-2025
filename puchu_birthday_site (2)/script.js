
// Page controls and interactions
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

const blowBtn = document.getElementById('blowBtn');
const nextFromCandles = document.getElementById('nextFromCandles');
const cutBtn = document.getElementById('cutBtn');
const revealPicsBtn = document.getElementById('revealPicsBtn');

const candles = document.getElementById('candles');
const bdaySong = document.getElementById('bdaySong');
const blowSound = document.getElementById('blowSound');
const cakeCutSound = document.getElementById('cakeCutSound');

bdaySong.src = 'song.mp3';
blowSound.src = 'blow.mp3';
cakeCutSound.src = 'cake_cut.mp3';

// Helper to change visible page
function showPage(n){
  page1.classList.remove('page-visible');
  page2.classList.remove('page-visible');
  page3.classList.remove('page-visible');
  if(n===1) page1.classList.add('page-visible');
  if(n===2) page2.classList.add('page-visible');
  if(n===3) page3.classList.add('page-visible');
}

// Blow candles behavior
blowBtn.addEventListener('click', ()=>{
  if (blowSound && blowSound.src && !blowSound.src.includes('undefined')) {
    blowSound.currentTime = 0;
    blowSound.play().catch(()=>{});
  }
  const nodeList = candles.querySelectorAll('.candle');
  nodeList.forEach((c, i)=>{
    setTimeout(()=> c.classList.add('out'), i*120);
  });
  blowBtn.disabled = true;
  blowBtn.textContent = 'Blown ✨';
  setTimeout(()=>{
    nextFromCandles.style.display = 'inline-block';
  }, 1000 + nodeList.length*120);
});

// Next from candles to cake
nextFromCandles.addEventListener('click', ()=>{
  showPage(2);
});

// Cut the cake — play song and show reveal button
cutBtn.addEventListener('click', ()=>{
  const cake = document.getElementById('cake');
  cake.classList.add('cutting');
  if (cakeCutSound && cakeCutSound.src && !cakeCutSound.src.includes('undefined')) {
    cakeCutSound.currentTime = 0;
    cakeCutSound.play().catch(()=>{});
  }
  if (bdaySong && bdaySong.src && !bdaySong.src.includes('undefined')){
    bdaySong.currentTime = 0;
    bdaySong.play().catch(()=>{});
  }
  cutBtn.disabled = true;
  cutBtn.textContent = 'Cut ✂️';
  setTimeout(()=>{
    revealPicsBtn.style.display = 'inline-block';
  }, 1200);
});

revealPicsBtn.addEventListener('click', ()=>{
  showPage(3);
});
// Start on page 1
showPage(1);
