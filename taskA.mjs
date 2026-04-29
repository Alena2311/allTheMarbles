function calcTotal(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        //I change i=1 to i=0, because an array in a loop always starts with 0
        //i should always be < and not <= then max array length, so the loop doesn't go "further"
        total += prices[i];
        //typo in prices variable name (missed s)
    }
    return Number(total.toFixed(2));
    //we need a number as an outcome, not a string
}
