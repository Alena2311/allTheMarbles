let highScore = 0;
let players = [];

function updateScores(name, points) {
    if (!players.includes(name)) {
        players.push(name);
    }

    if (points > highScore) {
        highScore = points;
    }
    let newPoints = points + 10;
    return name + " now has " + newPoints;
}
console.log(updateScores("Tony", 40));
console.log(updateScores("Tony", 50));
console.log(updateScores("Rony", 150));
console.log(players);
console.log(highScore);