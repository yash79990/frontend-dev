// 1

console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
    console.log(status);
}

// 2

function announce() { console.log("Game started"); }
function startGame() { console.log(status); }

var score = 50;
let status = "ready";

console.log(score);
announce();
startGame();


// 3

const announce = () => console.log("Game started");
const startGame = () => console.log(status);

var score = 50;
let status = "ready";

console.log(score);
announce();
startGame();
