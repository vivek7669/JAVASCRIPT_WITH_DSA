const SubArray = (arr) => {
    let arraySum = 0;
    let subArrays = [];
    let subArraysSums = [];

    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }


    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let subArray = [];
            let subArraySum = 0;
            for (let k = i; k <= j; k++) {
                subArray.push(arr[k]);
                subArraySum += arr[k];
            }
            subArrays.push(subArray);
            subArraysSums.push(subArraySum);
        }
    }

    return { arraySum, subArrays, subArraysSums };
}

let Array = [1, 2, -3, 7];
let result = SubArray(Array);

console.log("Sum of Array:", result.arraySum);
console.log("SubArrays:", result.subArrays);
console.log("Sum of SubArrays:", result.subArraysSums);
