var box = document.getElementById('square')


function revealmessage() {
    document.getElementById('hiddenmessage').style.display = 'block'

}

function changesquare() {
    if (box.style.background == 'red') {
        box.style.background = 'green'
    } else {
        box.style.background = 'red'
    }
}