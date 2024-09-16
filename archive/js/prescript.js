// prescript.js

function applySavedTheme() {
    var savedTheme = localStorage.getItem('theme');
    var body = document.body;
    if (savedTheme === 'darkmode') {
        body.classList.add('darkmode');
        body.classList.remove('lightmode');
    } else if (savedTheme === 'lightmode') {
        body.classList.add('lightmode');
        body.classList.remove('darkmode');
    }
}

document.addEventListener('DOMContentLoaded', applySavedTheme);