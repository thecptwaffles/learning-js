var box = document.getElementById('square')

function changesquare() {
    if (box.style.background == 'red') {
        box.style.background = 'green'
    } else {
        box.style.background = 'red'
    }
}