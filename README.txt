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

C. Changes:
    //change const to let as we are changing this variable further in the code
let presentCount = 0;

function registerAttendance(students) {
    return students.map((student) => {
        if (!student.status) {
            //changed from defaultStatus to avoid all student objects having the same status, so one changing doesn't affect others
            student.status = { present: false };
        }

        //changed = to === cause we need to check IF it's true and not just claim so
        if ((student.status.present === true)) {
            presentCount++;
        }
        
        //added more statuses as students are not only present
        return student.name + " is " + (student.status.present ? "present" : "absent");
    });

Task 2.
1. I received 25 and 25 in the terminal.
2. Because both refer to the same object.
3. No, it's not copying, but refering to the object (so if you change one, eventually two will be changed).
4. As said above - to avoid changing both values by accident, when you need to change only one (a copy).
5. The changed code is in the task2.mjs

Task 3.
1. I got 12 in first.
2. I got 5 in second.
3. Because inside the function there is a copy of the variable, so if you change it, you change only the copy and not the original.
4. As both variables have the same name, so the one in the function kinda covering the variable outside.
5. The rewritten code is in task3.mjs file.

Task 4.
1. Instead of repeating some parts of the code I grouped them into objects like "actions" or "switchLimits".
2. I gave those groups of variables and functions clear understandable names.
3. Made the structure of the whole code more visually understandable by separating colours, duration and change of state.
4. Gave a clear number of how many times each colour should appear.
