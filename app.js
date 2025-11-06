// app.js — main menu logic and bead-board renderer
(function(){
  // Level final codes (as given)
  const LEVEL_CODES = {1: '1030', 2: '0218', 3: '1218'};

  // We'll use a bead grid that fits a 16×16 pixel block. To make the math work cleanly
  // we slightly adjust the canvas height to 1088 so 1088/16 = 68 rows. (Assumption noted in README.)
  const CANVAS_WIDTH = 1920;
  const CANVAS_HEIGHT = 1088; // adjusted by +8px for 16px blocks
  const BLOCK = 16; // block size in device pixels

  const beadboard = document.getElementById('beadboard');
  beadboard.width = CANVAS_WIDTH;
  beadboard.height = CANVAS_HEIGHT;
  const ctx = beadboard.getContext('2d');

  // state in localStorage key 'splicing_state'
  const STORAGE_KEY = 'splicing_state_v1';
  let state = { unlockedLevels:[1], droppedKeys:[], style:'bw' };

  function loadState(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(raw) state = JSON.parse(raw);
    }catch(e){console.warn(e)}
  }
  function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

  function drawGrid(){
    // background
    ctx.fillStyle = (document.body.classList.contains('polyu-theme')? '#0f2a4a':'#ffffff');
    ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // subtle grid lines
    ctx.strokeStyle = 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 1;
    for(let x=0;x<=CANVAS_WIDTH;x+=BLOCK){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,CANVAS_HEIGHT); ctx.stroke(); }
    for(let y=0;y<=CANVAS_HEIGHT;y+=BLOCK){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(CANVAS_WIDTH,y); ctx.stroke(); }
  }

  function renderTextOnBeads(text){
    // Very small pixel font: 5x7 per char, scaled to BLOCK
    const FONT = {
      // only define uppercase A..Z used: P O L Y U
      'P':[0x7C,0x66,0x66,0x7C,0x60],
      'O':[0x3C,0x66,0x66,0x66,0x3C],
      'L':[0x60,0x60,0x60,0x60,0x7E],
      'Y':[0x66,0x66,0x3C,0x18,0x18],
      'U':[0x66,0x66,0x66,0x66,0x3C]
    };

    const chars = String(text || '').toUpperCase().split('');
    const charW = 5; const charH = 7; const spacing = 1;
    const totalW = chars.length * (charW + spacing);
    // grid coordinates to center
    const gridCols = CANVAS_WIDTH / BLOCK;
    const gridRows = CANVAS_HEIGHT / BLOCK;
    const startCol = Math.floor((gridCols - totalW)/2);
    const startRow = Math.floor((gridRows - charH)/2);

    ctx.fillStyle = (document.body.classList.contains('polyu-theme')? '#ffd84d' : '#111');
    chars.forEach((ch, i)=>{
      const pattern = FONT[ch];
      if(!pattern) return;
      for(let cx=0;cx<charW;cx++){
        const colBits = pattern[cx];
        for(let cy=0;cy<charH;cy++){
          const bit = (colBits >> cy) & 1;
          if(bit){
            const col = startCol + i*(charW+spacing) + cx;
            const row = startRow + cy;
            ctx.fillRect(col*BLOCK + 2, row*BLOCK + 2, BLOCK-4, BLOCK-4);
          }
        }
      }
    });
  }

  function render(){
    drawGrid();
    // If style key 'POLYU' applied, render the text
    if(state.style === 'POLYU') renderTextOnBeads('POLYU');
  }

  // UI wiring
  function updateLevelStatus(){
    document.querySelectorAll('.level').forEach(el=>{
      const level = Number(el.dataset.level);
      const st = el.querySelector('.status');
      if(state.unlockedLevels.includes(level)){
        st.textContent = 'Unlocked';
        st.style.color = '#1a9f56';
      } else {
        st.textContent = 'Locked';
        st.style.color = '#c33';
      }
    });
  }

  function initControls(){
    document.getElementById('applyNumeric').addEventListener('click', ()=>{
      const val = (document.getElementById('numericKey').value || '').trim();
      if(!val) return alert('请输入数字 key');
      // If numeric matches a dropped key (from a level), unlock the next level
      const idx = Object.values(LEVEL_CODES).indexOf(val);
      if(idx >= 0){
        const levelCode = Number(Object.keys(LEVEL_CODES)[idx]);
        // unlocking: if you entered code for level N, unlock level N+1 (if exists)
        const next = levelCode + 1;
        if(next <= 3 && !state.unlockedLevels.includes(next)){
          state.unlockedLevels.push(next);
          saveState();
          updateLevelStatus();
          render();
          alert('Unlocked level ' + next + '!');
        } else {
          alert('Code accepted but nothing to unlock (maybe last level).');
        }
      } else {
        alert('Code not recognized. Make sure you completed a level to get its code.');
      }
    });

    document.getElementById('applyStyle').addEventListener('click', ()=>{
      const val = (document.getElementById('styleKey').value || '').trim();
      if(!val) return;
      if(val.toUpperCase() === 'POLYU'){
        state.style = (state.style === 'POLYU')? 'bw' : 'POLYU';
        document.body.classList.toggle('polyu-theme', state.style === 'POLYU');
        saveState();
        render();
      } else {
        // key2 behavior: place that text on beadboard as an easter egg (not saved as a theme)
        state.style = 'bw';
        document.body.classList.remove('polyu-theme');
        render();
        renderTextOnBeads(val);
      }
    });

    document.querySelectorAll('.play').forEach(btn=>{
      btn.addEventListener('click', (ev)=>{
        const parent = ev.target.closest('.level');
        const lvl = Number(parent.dataset.level);
        if(!state.unlockedLevels.includes(lvl)){
          alert('This level is locked. You must complete the previous level and enter its code on the main page.');
          return;
        }
        const href = ev.target.dataset.href;
        window.location.href = href;
      });
    });
  }

  // init
  loadState();
  if(state.style === 'POLYU') document.body.classList.add('polyu-theme');
  initControls();
  updateLevelStatus();
  render();

  // expose a small API for level pages to report completion
  window.SpliceMain = {
    reportLevelComplete(level){
      const code = LEVEL_CODES[level];
      if(!code) return;
      if(!state.droppedKeys.includes(code)){
        state.droppedKeys.push(code);
        saveState();
      }
      alert('Level '+level+' complete! Dropped key: ' + code + '. Go back to the main page and enter it in the mainline numeric key field to unlock the next level.');
    }
  };

})();
