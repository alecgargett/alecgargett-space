// CREATE darkmode function
function darkmode() {
    // CREATE document body variable
    var body = document.body;
    // TOGGLE "darkmode" class: ADD IF absent, REMOVE IF present
    body.classList.toggle('darkmode');
    // TOGGLE "lightmode" class: REMOVE IF "darkmode" is present, ADD otherwise
    if (body.classList.contains('darkmode')) {
        body.classList.remove('lightmode');
        // STORE "darkmode" in localStorage
        localStorage.setItem('theme', 'darkmode');
    } else {
        body.classList.add('lightmode');
        // STORE "lightmode" in localStorage
        localStorage.setItem('theme', 'lightmode');
    }
}

// SELECT text element BY ID
var textElement = document.getElementById('yourTextElementId');

// CREATE changeBackground function
function changeBackground() {
    // SET document body background image to new image
    document.body.style.backgroundImage = "url('path/to/new/background.jpg')";
}

// CREATE resetBackground function
function resetBackground() {
    // RESET document body background image
    document.body.style.backgroundImage = "";
}

// ADD mouseenter event listener TO textElement
textElement.addEventListener('mouseenter', changeBackground);
// ADD mouseleave event listener TO textElement
textElement.addEventListener('mouseleave', resetBackground);
