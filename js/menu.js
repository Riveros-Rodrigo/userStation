// Obtén el botón y el PopUp
var btn = document.getElementById('myButton');
var popup = document.getElementById('popup');

// Cuando el usuario hace clic en el botón, muestra el PopUp
btn.onclick = function() {
    popup.style.display = "block";
}

// Cuando el usuario hace clic en el botón de cerrar, oculta el PopUp
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera del PopUp, oculta el PopUp
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
