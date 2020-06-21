let ball = document.getElementById("ball");
let bar = document.getElementById("bar");
let barX = 0;
let ballX = 0;
let ballY = 0;
let xal = 0;
let dx = 4;
let dy = 4;
let suret = 1;

let interval = setInterval(ballMove, 40);

addEventListener("keypress", function (event) {

    let key = event.key;
    if (key == "a" || key == "A") {
        if (barX > 0) {
            barX -= 10;
        }
    }

    if (key == "d" || key == "D") {
        if (barX < 700) {
            barX += 10;
        }
    }

    barMove();
});
document.getElementById("game").addEventListener("mousemove", function (e) {
    if (e.offsetX < 700) {
        barX = e.offsetX;
        bar.style.left = e.offsetX + "px";
    }
});

function ballMove() {
    if (ballX < 0 || ballX > 750) {
        dx *= -1;
    }
    if (ballY < 0 || ballY >= 550) {
        dy *= -1;
    }

    if (ballY >= 550) {
        if (ballX > (barX - 25) && ballX < (barX + 100)) {
            xal++;
            document.getElementById("xal1").innerHTML = +xal;
            if (xal >= 1) {
                suret++;
            }

        } else {
            clearInterval(interval);
            document.getElementById("uduzdun").innerHTML = "Uduzdun!Yenidən başla..."
            document.getElementById("xal1").innerHTML = +xal;
        }

    }


    ballX += dx * suret;
    ballY += dy * suret;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
}

function barMove() {
    bar.style.left = barX + "px";
}