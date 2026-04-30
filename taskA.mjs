function calcTotal(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return Number(total.toFixed(2));
}

//test
const items = [1,2,3]
console.log(calcTotal(items))