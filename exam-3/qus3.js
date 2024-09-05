const maximumProfit = (prices) => {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[i - 1];

        if (profit > 0) {
            totalProfit = totalProfit + profit;
        }
    }
    return totalProfit;
}

console.log(maximumProfit([7, 1, 5, 3, 6, 4]));
console.log(maximumProfit([1, 2, 3, 4, 5]));