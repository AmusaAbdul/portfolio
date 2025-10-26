function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (!timeElement) return;

  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString(); 
}
updateTime();
setInterval(updateTime, 1000);


const darkModeBtn = document.getElementById('dark-mode-btn');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
}

document.querySelector('.twitter')?.addEventListener('click', () => {
  window.open('https://x.com/brunolinlcoln?s=21', '_blank', 'noopener,noreferrer');
});

document.querySelector('.snapchat')?.addEventListener('click', () => {
  window.open('https://www.snapchat.com/add/yourusername', '_blank', 'noopener,noreferrer');
});

document.querySelector('.instagram')?.addEventListener('click', () => {
  window.open('https://www.instagram.com/slime_bruno8?igsh=bzA0M2kxbG9lNHp2&utm_source=qr', '_blank', 'noopener,noreferrer');
});

document.querySelector('.facebook')?.addEventListener('click', () => {
  window.open('https://www.facebook.com/share/1CM8rFF9Gn/?mibextid=wwXIfr', '_blank', 'noopener,noreferrer');
});

document.querySelector('.tiktok')?.addEventListener('click', () => {
  window.open('https://www.tiktok.com/@abdullah08138?_t=ZS-90spT6CQflS&_r=1', '_blank', 'noopener,noreferrer');
});




