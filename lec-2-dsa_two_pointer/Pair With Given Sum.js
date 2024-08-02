const sumofPair = (arr, target) => {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == target) {

                return [arr[i], arr[j]];
            }
        }
    }
    return [-1, -1];
}

let arr = [1, 2, 3, 4, 5]
let target = 9;

result = sumofPair(arr, target);
console.log(`The pair is ${result[0]} + ${result[1]} = ${target}`);