
const decorations = document.querySelector('.decorations');

setInterval(() => {
  const emoji = ['🌸', '💗', '💖', '🌷'][Math.floor(Math.random() * 4)];
  const el = document.createElement('div');
  el.textContent = emoji;
  el.style.position = 'fixed';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = '-2em';
  el.style.fontSize = '24px';
  el.style.animation = 'fall 5s linear';
  decorations.appendChild(el);
  setTimeout(() => el.remove(), 5000);
}, 800);

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
