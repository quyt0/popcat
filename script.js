$(document).ready(function() {
    var pop_count = 0;
    var pressed = false;
    pop_count = parseInt(document.cookie.toString().replaceAll("pop_count=", ""));
    if (isNaN(pop_count)) {
        pop_count = 0;
    }
    document.getElementsByClassName('counter')[0].innerText = pop_count;

    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        $(document).on('touchstart', function() {
            down_key();
        });

        $(document).on('touchend', function() {
            up_key();
        });
    } else {
        document.onkeydown = function() {
            down_key();
        }
        ;

        document.onkeyup = function() {
            up_key();
        }
        ;

        $(document).mousedown(function() {
            down_key();
        });

        $(document).mouseup(function() {
            up_key();
        });
    }

    function down_key() {
        if (pressed == false) {
            var audio = new Audio('sound.mp3');
            audio.play();
            pop_count += 1;
            document.cookie = 'pop_count=' + pop_count;
            document.getElementsByClassName('counter')[0].innerText = pop_count;
            document.getElementById('img-main').style = "background-image: url(img/popcat-open.png);"
            pressed = true;
        }
        ;
    }
    ;
    function up_key() {
        document.getElementById('img-main').style = "background-image: url(img/popcat-default.png);"
        pressed = false;
    }
    ;

});
