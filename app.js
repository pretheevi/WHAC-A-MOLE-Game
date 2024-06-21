const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const clickToStart = document.querySelector('#click');
const clickToStop = document.querySelector('#Stop');

let result = 0;
let hitPosition;
let currentTime = 10;
let countDownTimerId;
let timerId = null;


function randomSquares(){
    squares.forEach(function(square){
        square.classList.remove('mole');
    })
    let randomSquare= squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;

        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquares, 800); 
    countDownTimerId = setInterval(countDown, 1000);  
}


function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! your final score is: '+ result);
    }
}

clickToStart.addEventListener('click',moveMole);










