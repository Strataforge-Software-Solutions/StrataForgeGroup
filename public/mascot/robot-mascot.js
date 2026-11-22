(() => {
  'use strict';
  const root = document.createElement('div');
  root.className = 'chibi'; root.dataset.pose = 'idle';
  const bubble = document.createElement('div');
  bubble.className = 'chibi-bubble';
  bubble.setAttribute('role', 'status'); bubble.setAttribute('aria-live', 'polite');
  const character = document.createElement('button');
  character.className = 'chibi-character'; character.type = 'button';
  character.setAttribute('aria-label', 'Forgey the robot. Click to greet, or drag to move.');
  root.append(bubble, character); document.body.append(root);
  function loadSprite() {
    const sprite = new Image();
    sprite.decoding = 'async';
    sprite.fetchPriority = 'low';
    sprite.onload = () => root.classList.add('is-ready');
    sprite.src = '/mascot/robot-poses.webp';
  }
  function scheduleSprite() {
    if ('requestIdleCallback' in window) requestIdleCallback(loadSprite, { timeout: 1500 });
    else setTimeout(loadSprite, 250);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleSprite, { once: true });
  } else {
    scheduleSprite();
  }
  let x = 0, y = 0, lockedUntil = 0, nap = false, drag = null;
  let lastActivity = Date.now(), bubbleTimer, poseTimer, arrivalTimer, gazeFrame;
  let mascotSize = innerWidth <= 600 ? 140 : 170;
  const size = () => mascotSize;
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(n, Math.max(lo, hi)));
  const pose = (name, mood) => {
    root.dataset.pose = name;
    window.dispatchEvent(new CustomEvent('robotmood', { detail: mood || name }));
  };
  function position(px, py) {
    x = clamp(px, 5, innerWidth - size() - 5);
    y = clamp(py, 90, innerHeight - size() - 8);
    root.style.left = x + 'px'; root.style.top = y + 'px';
  }
  function say(message, duration = 3500) {
    clearTimeout(bubbleTimer); bubble.textContent = message;
    bubble.classList.add('visible');
    bubbleTimer = setTimeout(() => bubble.classList.remove('visible'), duration);
  }
  function wake() { nap = false; lastActivity = Date.now(); }
  function releaseLock() { clearTimeout(poseTimer); lockedUntil = 0; }
  function hearts() {
    for (let i = 0; i < 4; i++) {
      const heart = document.createElement('span');
      heart.className = 'chibi-heart'; heart.textContent = '♥'; heart.setAttribute('aria-hidden', 'true');
      heart.style.setProperty('--dx', (i * 24 - 36) + 'px');
      heart.style.setProperty('--r', (i * 12 - 18) + 'deg');
      root.append(heart); setTimeout(() => heart.remove(), 1100);
    }
  }
  function greet(message = 'Oh! Hi, human. ♡') {
    wake(); releaseLock(); lockedUntil = Date.now() + 2300;
    pose('happy', 'happy'); say(message); hearts();
    poseTimer = setTimeout(() => { if (!drag && !nap) pose('idle', 'curious'); }, 2300);
  }
  function sleep() {
    if (drag) return;
    releaseLock(); nap = true;
    pose('sleepy', 'sleepy'); say('Just resting my circuits… zzz', 4500);
  }
  function reset() {
    wake(); releaseLock(); root.classList.remove('arriving'); clearTimeout(arrivalTimer);
    position(innerWidth - size() - 18, innerHeight - size() - 18);
    pose('idle', 'curious'); say('This spot feels like home.');
  }
  function moveTo(cx, cy) {
    if (drag) return;
    wake(); releaseLock(); lockedUntil = Date.now() + 800;
    pose(cx < x ? 'left' : 'right', 'coming over'); root.classList.add('arriving');
    position(cx - size() / 2, cy - size() / 2); clearTimeout(arrivalTimer);
    arrivalTimer = setTimeout(() => { root.classList.remove('arriving'); greet('You called? Here I am!'); }, 700);
  }
  character.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    wake(); releaseLock(); clearTimeout(arrivalTimer); root.classList.remove('arriving');
    drag = { id: e.pointerId, startX: e.clientX, startY: e.clientY, x, y, moved: false };
    character.setPointerCapture(e.pointerId);
  });
  character.addEventListener('pointermove', e => {
    if (!drag || drag.id !== e.pointerId) return;
    const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    if (!drag.moved) { drag.moved = true; root.classList.add('dragging'); pose('grabbed', 'wheee!'); say('Wheee! Where are we going?', 60000); }
    root.style.setProperty('--tilt', clamp(dx / 15, -9, 9) + 'deg'); position(drag.x + dx, drag.y + dy);
  });
  function endDrag(e, cancelled = false) {
    if (!drag || drag.id !== e.pointerId) return;
    const moved = drag.moved; drag = null; root.classList.remove('dragging');
    if (character.hasPointerCapture(e.pointerId)) character.releasePointerCapture(e.pointerId);
    if (cancelled) { wake(); pose('idle', 'curious'); bubble.classList.remove('visible'); }
    else greet(moved ? 'Perfect landing. Do it again?' : undefined);
  }
  character.addEventListener('pointerup', e => endDrag(e));
  character.addEventListener('pointercancel', e => endDrag(e, true));
  character.addEventListener('lostpointercapture', e => { if (drag) endDrag(e, true); });
  character.addEventListener('click', e => { if (e.detail === 0) greet(); });
  window.addEventListener('pointermove', e => {
    lastActivity = Date.now();
    if (drag || Date.now() < lockedUntil || nap) return;
    cancelAnimationFrame(gazeFrame);
    gazeFrame = requestAnimationFrame(() => {
      const dx = e.clientX - (x + size() / 2);
      pose(Math.abs(dx) < 60 ? 'idle' : dx < 0 ? 'left' : 'right', 'curious');
    });
  }, { passive: true });
  const idleTimer = setInterval(() => { if (!drag && !nap && Date.now() - lastActivity > 15000) sleep(); }, 1000);
  window.addEventListener('resize', () => {
    mascotSize = innerWidth <= 600 ? 140 : 170;
    position(x, y);
  });
  window.addEventListener('pagehide', () => clearInterval(idleTimer), { once: true });
  window.robotMascot = { greet, sleep, reset, moveTo };
  position(innerWidth - size() - 18, innerHeight - size() - 18);
  lockedUntil = Date.now() + 2000; say('Psst… try picking me up!');
})();
