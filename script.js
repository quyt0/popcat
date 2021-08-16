$(document).ready(function () {
var pop_count = 0;
var pressed = false;
pop_count = parseInt(document.cookie.toString().replaceAll("pop_count=", ""));
if (isNaN(pop_count)) {
    pop_count = 0;
}

document.onkeydown = function() {
    if (pressed == false) {
        var audio = new Audio('sound.mp3');
        audio.play();
        pop_count +=1;
        document.cookie = 'pop_count=' + pop_count;
        document.getElementsByClassName('counter')[0].innerText = pop_count;
        document.getElementById('img-main').style="background-image: url(https://popcat.click/img/op.353767c3.png);"
        pressed = true;
    }
};

document.onkeyup = function () {
    document.getElementById('img-main').style="background-image: url(https://popcat.click/img/p.1e9d00be.png);"
    pressed = false;
};

});