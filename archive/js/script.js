// script.js

function darkmode() {
        var body = document.body;
        body.classList.toggle('darkmode');
        if (body.classList.contains('darkmode')) {
        body.classList.remove('lightmode');
                localStorage.setItem('theme', 'darkmode');
    } else {
        body.classList.add('lightmode');
                localStorage.setItem('theme', 'lightmode');
    }
}