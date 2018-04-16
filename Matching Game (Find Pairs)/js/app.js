// Create an array for all cards 

var f = [{
        b: 1,
        a: "img/antelope.png"
    }, {
        b: 2,
        a: "img/bird-heron.png"
    }, {
        b: 3,
        a: "img/blur-chili.png"
    }, {
        b: 4,
        a: "img/fox.png"
    }, {
        b: 5,
        a: "img/frog.png"
    }, {
        b: 6,
        a: "img/hedgehog.png"
    }, {
        b: 7,
        a: "img/owl.png"
    }, {
        b: 8,
        a: "img/raccoon.png"
    }, {
        b: 9,
        a: "img/antelope.png"
    }, {
        b: 10,
        a: "img/bird-heron.png"
    }, {
        b: 11,
        a: "img/blur-chili.png"
    }, {
        b: 12,
        a: "img/fox.png"
    }, {
        b: 13,
        a: "img/frog.png"
    }, {
        b: 14,
        a: "img/hedgehog.png"
    }, {
        b: 15,
        a: "img/owl.png"
    }, {
        b: 16,
        a: "img/raccoon.png"
    }],
    g = document.querySelectorAll(".back_img"),
    h;

    // Declare a function and assign its value for the Moves Counting and for the StarRating

function k() {
    l();
    for (var a = document.querySelectorAll(".fa-star"), c = 0; 3 > c; c++) a[c].style.color = "#fbca39";
    a = document.querySelectorAll(".starRating .fa-star");
    for (c = 0; 3 > c; c++) a[c].style.color = "#fbca39";
    document.querySelector(".winner_panel").classList.remove("active");
    document.querySelector(".moves_count").innerText = "Moves: 0";
    clickCounter = 0;
    m();
    clearInterval(h);
    n();
    p()
}

// A randomly chosen function between two sets

function q() {
    return Math.random() - .5
}

// Add and remove all images to the page 

function m() {
    l();
    f.sort(q);
    for (var a = 0; a < f.length; a++) g[a].setAttribute("src", f[a].a);
    r()
}

function l() {
    for (var a = 0; a < f.length; a++) g[a].setAttribute("src", ""), g[a].className = "back_img"
}

// Time tracker

function n() {
    var a = document.querySelector(".time_tracker"),
        c = Date.now();
    clearInterval(h);
    h = setInterval(function () {
        var b = Math.floor((Date.now() - c) / 1E3);
        a.innerText = (10 > Math.floor(b / 60) ? "0" + Math.floor(b / 60) : Math.floor(b / 60)) + " : " + (10 > b % 60 ? "0" + b % 60 : b % 60)
    }, 500)
}

// Restart the game

function p() {
    document.querySelector("#restart").addEventListener("click", k)
}

// Game process - variants for matched images and incorrect

function t(a) {
    var c = document.querySelectorAll(".selected"),
        b = "match";
    a || (b = "incorrect");
    c.forEach(function (a) {
        return a.className = b
    });
    u()
}

function u() {
    var a = document.querySelectorAll(".incorrect");
    setTimeout(function () {
        return a.forEach(function (a) {
            return a.className = "back_img"
        })
    }, 1E3)
}

// Total scores, rating. EventListeners for the game.

function r() {
    for (var a = document.querySelectorAll(".back_img"), c = [], b = {
            c: 0
        }; b.c < a.length; b = {
            c: b.c
        }, b.c++) a[b.c].addEventListener("click", function (b) {
        return function () {
            if ("back_img" === a[b.c].className) {
                a[b.c].className = "selected";
                c.push(a[b.c]);
                if (2 === c.length) {
                    c[0].src === c[1].src ? t(!0) : t(!1);
                    c = [];
                    clickCounter += 1;
                    var d = document.querySelectorAll(".stars .fa-star"),
                        e = document.querySelectorAll(".starRating .fa-star");
                    switch (clickCounter) {
                        case 16:
                            d[0].style.color = "#fbca39";
                            d[1].style.color = "#fbca39";
                            d[2].style.color =
                                "#211a03";
                            e[0].style.color = "#fbca39";
                            e[1].style.color = "#fbca39";
                            e[2].style.color = "#e2dcc9";
                            break;
                        case 32:
                            d[0].style.color = "#fbca39", d[1].style.color = "#211a03", d[2].style.color = "#211a03", e[0].style.color = "#fbca39", e[1].style.color = "#e2dcc9", e[2].style.color = "#e2dcc9"
                    }
                    document.querySelector(".moves_count").innerText = "Moves: " + clickCounter;
                    document.querySelector(".final_moves").innerText = "Moves: " + clickCounter
                }
                document.querySelectorAll(".match").length === document.querySelectorAll(".front img").length &&
                    (document.querySelector(".winner_panel").classList.add("active"), clearInterval(h), document.querySelector(".totalTime").innerText = "Time " + document.querySelector(".time_tracker").innerText, document.querySelector(".play_again").addEventListener("click", k))
            }
        }
    }(b))
}
m();
n();
p();
document.querySelector(".moves_count").innerText = "Moves: 0";
clickCounter = 0;