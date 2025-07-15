const toggle = document.getElementById('themeToggle');
const body = document.body;

// On load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  toggle.checked = true;
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
}

// Toggle switch
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
