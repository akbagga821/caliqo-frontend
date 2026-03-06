/**
 * Quantum computing visual — single pixelated Bloch sphere with state vector
 */

const PIXEL = 2;
const ROTATION_SPEED = 0.014;
const PERSPECTIVE = 380;
const ORANGE_PALETTE = [
  '#2d1505', '#4a2208', '#6b300a', '#8b3d0c', '#c95410',
  '#e86a14', '#f08020', '#ff9944', '#ffb366', '#ffcc99',
];

function noise2D(seed, x, y) {
  const n = Math.sin(seed * 12.9898 + x * 78.233 + y * 45.164) * 43758.5453;
  return n - Math.floor(n);
}

function project(x, y, z, cx, cy) {
  const d = 1 + z / PERSPECTIVE;
  return { sx: cx + x / d, sy: cy + y / d, d };
}

// Rotate point around Y then X (for sphere rotation)
function rotate3D(x, y, z, rotY, rotX) {
  const cy = Math.cos(rotY), sy = Math.sin(rotY);
  const cx = Math.cos(rotX), sx = Math.sin(rotX);
  const x1 = x * cy - z * sy;
  const z1 = x * sy + z * cy;
  const y2 = y * cx - z1 * sx;
  const z2 = y * sx + z1 * cx;
  return { x: x1, y: y2, z: z2 };
}

// Sphere surface point (theta = longitude, phi = latitude from top)
function spherePoint(radius, theta, phi) {
  const t = Math.cos(phi);
  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.sin(phi) * Math.sin(theta),
    z: radius * t
  };
}

let canvas, ctx;
let width, height;
let time = 0;

function init() {
  canvas = document.getElementById('bg');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}

function draw() {
  time += ROTATION_SPEED;
  const w = width;
  const h = height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = Math.min(w, h) * 0.38;
  const centerZ = 50;

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, w, h);

  const radius = scale;
  const rotY = time * 0.5;
  const rotX = time * 0.35;

  const spherePoints = [];
  const steps = 32;
  for (let i = 0; i < steps; i++) {
    for (let j = 1; j < steps; j++) {
      const theta = (i / steps) * Math.PI * 2;
      const phi = (j / steps) * Math.PI;
      const p = spherePoint(radius, theta, phi);
      const r = rotate3D(p.x, p.y, p.z, rotY, rotX);
      spherePoints.push({
        wx: r.x, wy: r.y, wz: r.z + centerZ,
        radius
      });
    }
  }

  spherePoints.sort((a, b) => a.wz - b.wz);

  spherePoints.forEach(({ wx, wy, wz, radius }) => {
    const { sx, sy, d } = project(wx, wy, wz, cx, cy);
    const depthT = 0.4 + 0.5 * (wz - (centerZ - radius)) / (radius * 2);
    const paletteIndex = Math.min(ORANGE_PALETTE.length - 1, Math.floor((0.3 + 0.7 * depthT) * (ORANGE_PALETTE.length - 1)));
    ctx.fillStyle = ORANGE_PALETTE[paletteIndex];
    ctx.globalAlpha = 0.5 + 0.45 * depthT;
    const size = (PIXEL * 1.1) / Math.max(0.5, d);
    const px = Math.floor(sx / PIXEL) * PIXEL;
    const py = Math.floor(sy / PIXEL) * PIXEL;
    ctx.fillRect(px - size / 2, py - size / 2, size, size);
  });

  // Superposition hint: faint probability-cloud pixels
  const cloudRes = 14;
  for (let i = 0; i < 40; i++) {
    const u = (i * 0.317) % 1;
    const v = (i * 0.419) % 1;
    const bx = (u - 0.5) * w * 1.2;
    const by = (v - 0.5) * h * 1.2;
    const pulse = 0.12 + 0.08 * Math.sin(time * 1.5 + i);
    ctx.globalAlpha = pulse * (0.7 + 0.3 * noise2D(7, i, time));
    ctx.fillStyle = '#c95410';
    const gx = cx + bx;
    const gy = cy + by;
    ctx.fillRect(Math.floor(gx / PIXEL) * PIXEL - PIXEL / 2, Math.floor(gy / PIXEL) * PIXEL - PIXEL / 2, PIXEL, PIXEL);
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

init();

// Scroll-driven fade (wheel + touch for mobile)
(function () {
  let progress = 0;
  let holdBufferDown = 0;
  let holdBufferUp = 0;
  let lastScrollTop = 0;
  let touchStartY = 0;
  const hero = document.getElementById('hero');
  const about = document.getElementById('about');
  if (!hero || !about) return;
  const step = 0.06;
  const holdTicksDown = 28;
  const holdTicksUp = 22;
  const setFade = () => {
    hero.classList.toggle('fade-out', progress >= 0.5);
    about.classList.toggle('fade-in', progress >= 0.5);
  };
  function applyDelta(deltaY) {
    const atTop = about.scrollTop <= 0;
    if (atTop && deltaY < 0 && lastScrollTop > 10) holdBufferUp = holdTicksUp;
    lastScrollTop = about.scrollTop;

    if (progress < 0.5) {
      progress += deltaY > 0 ? step : -step;
      progress = Math.max(0, Math.min(1, progress));
      if (progress >= 0.5) {
        holdBufferDown = holdTicksDown;
        holdBufferUp = holdTicksUp;
      }
      setFade();
    } else if (progress >= 0.5 && atTop && deltaY < 0) {
      if (holdBufferUp > 0) {
        holdBufferUp--;
      } else {
        progress -= step;
        progress = Math.max(0, Math.min(1, progress));
        setFade();
      }
    } else if (progress >= 0.5 && atTop && deltaY > 0 && holdBufferDown > 0) {
      holdBufferDown--;
    } else if (progress >= 0.5 && deltaY > 0 && holdBufferDown > 0) {
      holdBufferDown--;
    }
    updateHeaderSolid();
  }
  window.addEventListener('wheel', (e) => {
    const atTop = about.scrollTop <= 0;
    const justArrivedAtTop = atTop && e.deltaY < 0 && lastScrollTop > 10;
    if (justArrivedAtTop) holdBufferUp = holdTicksUp;
    lastScrollTop = about.scrollTop;

    if (progress < 0.5) {
      e.preventDefault();
      progress += e.deltaY > 0 ? step : -step;
      progress = Math.max(0, Math.min(1, progress));
      if (progress >= 0.5) {
        holdBufferDown = holdTicksDown;
        holdBufferUp = holdTicksUp;
      }
      setFade();
    } else if (progress >= 0.5 && atTop && e.deltaY < 0) {
      e.preventDefault();
      if (holdBufferUp > 0) {
        holdBufferUp--;
      } else {
        progress -= step;
        progress = Math.max(0, Math.min(1, progress));
        setFade();
      }
    } else if (progress >= 0.5 && atTop && e.deltaY > 0) {
      if (holdBufferDown > 0) {
        e.preventDefault();
        holdBufferDown--;
      }
    } else if (progress >= 0.5 && e.deltaY > 0 && holdBufferDown > 0) {
      e.preventDefault();
      holdBufferDown--;
    }
    updateHeaderSolid();
  }, { passive: false });

  // Touch: so the “scroll to reveal” works on mobile (no wheel events)
  const touchStep = 0.015;
  const touchThreshold = 8;
  hero.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
  }, { passive: true });
  hero.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 1) return;
    const y = e.touches[0].clientY;
    const deltaY = touchStartY - y;
    if (Math.abs(deltaY) < touchThreshold) return;
    touchStartY = y;
    applyDelta(deltaY);
    if (progress < 0.5 || (about.scrollTop <= 0 && progress >= 0.5)) {
      e.preventDefault();
    }
  }, { passive: false });

  const header = document.querySelector('.header');
  function updateHeaderSolid() {
    if (!header || !about) return;
    if (progress >= 0.5 && about.scrollTop > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  if (header && about) {
    about.addEventListener('scroll', updateHeaderSolid);
  }
  setFade();
  updateHeaderSolid();
})();
