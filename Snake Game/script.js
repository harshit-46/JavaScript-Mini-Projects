// This project is under development.

let direction = {x: 0,y: 0};
const foodSound = new Audio('assets/food.mp3');
const gameOverSound = new Audio('assets/gameOver.mp3');
const moveSound = new Audio('assets/move.mp3');
const musicSound = new Audio('assets/music.mp3');
let snakeArr = [
    {x:13,y:15} 
];
food = {x:6,y:7};
let speed = 2;
let lastPaintTime = 0;

let main = (ctime) => {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
};

let gameEngine = () => {
    board.innerHTML = "";
    snakeArr.forEach((e,index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    board.appendChild(foodElement);
};



window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
    inputDir = {x:0,y:1};
    moveSound.play();
    switch(e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});