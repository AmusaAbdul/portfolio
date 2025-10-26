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





