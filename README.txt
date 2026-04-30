Task 1
A. Changes:
    for (let i = 0; i < prices.length; i++) {
        //I change i=1 to i=0, because an array always starts with 0
        //i should always be < and not <= then max array length, so the loop doesn't go "further"
        total += prices[i];
        //typo in prices variable name (missed s)
    }
    return Number(total.toFixed(2));
    //we need a number as an outcome, not a string

B. Changes:
    function updateScores(name, points) {
    //I add if (!players.includes(name)) to check that the function doesn't add the same name every time it runs
    if (!players.includes(name)) {
        players.push(name);
    }

    //we always add {} to if statements based on syntax we learnt in class
    if (points > highScore) {
        highScore = points;
    }
    //we need the new variable for new points with higher value and not change the original one, so I create a new one. Put it and the name in different lines, so it's easy to read.
    let newPoints = points + 10;
    return name + " now has " + newPoints;
}