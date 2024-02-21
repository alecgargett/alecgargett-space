// CREATE applySavedTheme function
function applySavedTheme() {
    // RETRIEVE stored theme from localStorage
    var savedTheme = localStorage.getItem('theme');
    // CREATE document body variable
    var body = document.body;
    // APPLY saved theme IF it exists
    if (savedTheme === 'darkmode') {
        body.classList.add('darkmode');
        body.classList.remove('lightmode');
    } else if (savedTheme === 'lightmode') {
        body.classList.add('lightmode');
        body.classList.remove('darkmode');
    }
}

// CALL applySavedTheme ON page load
document.addEventListener('DOMContentLoaded', applySavedTheme);