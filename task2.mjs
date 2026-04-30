const user = { name: "Sara", score: 10 };
const backup = { ...user };

backup.score = 25;

console.log(user.score);
console.log(backup.score);