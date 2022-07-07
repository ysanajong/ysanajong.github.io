// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.getElementById('theme-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  darkModeToggle.checked = true
}
const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
  document.getElementById('theme-toggle').checked = false
}
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
       event.matches ? localStorage.setItem('darkMode', 'enabled') : localStorage.setItem('darkMode', 'disabled');
      });

window.matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', (event) => {
        event.matches ? disableDarkMode() : enableDarkMode();
      });
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
// When button is checked
darkModeToggle.addEventListener('change', () => {
  darkModeToggle.checked ? enableDarkMode() : disableDarkMode();
});
