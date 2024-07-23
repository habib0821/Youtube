let randomNo = 0;
let timer = 30;
let score = 0;

function makeBubble() {
    let clutter = "";
    for (let i = 0; i <= 69; i++) {
        randomNo = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNo}</div>`;
    }
    document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer() {
    timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
        }
        else {
            clearInterval(timerInt);
            document.querySelector(".pbottom").innerHTML = `<h1>Game over</h1>`;
        }
        document.querySelector(".timerVal").textContent = timer;
    }, 1000)
}

function getNewHit() {
    randomNo = Math.floor(Math.random() * 10);
    document.querySelector(".hitVal").textContent = randomNo;
}

function increaseScore() {
    document.querySelector(".scoreVal").textContent = score;
}

document.querySelector(".pbottom").addEventListener("click", function (details) {
    let clickedNum = details.target.textContent;
    if (clickedNum == randomNo) {
        score += 10;
        makeBubble();
        getNewHit();
        increaseScore();
    }
})

makeBubble();
// runTimer();
getNewHit();
increaseScore();



















// let randomNo = 0;
// let timer = 30;
// let score = 0;

// function makeBubble() {

//     let clutter = "";

//     for (let i = 0; i <= 69; i++) {
//         randomNo = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${randomNo}</div>`;
//     }

//     document.querySelector(".pbottom").innerHTML = clutter;
// }

// function runTimer() {
//     let timerInt = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//         }
//         else {
//             clearInterval(timerInt);
//             document.querySelector(".pbottom").innerHTML = `<h1>Game over</h1>`;
//         }
//         document.querySelector(".timerVal").textContent = timer;
//     }, 1000);
// };

// function getNewHit() {
//     randomNo = Math.floor(Math.random() * 10);
//     document.querySelector(".hitVal").innerHTML = randomNo;
// }

// function increaseScore() {
//     document.querySelector(".scoreVal").textContent = score;
// }
// document.querySelector(".pbottom").addEventListener("click", function (details) {
//     let clickedNum = Number(details.target.textContent);
//     if (clickedNum == randomNo) {
//         score += 10;
//         increaseScore();
//         makeBubble();
//         getNewHit();
//     }
// })

// makeBubble();
// runTimer();
// getNewHit();