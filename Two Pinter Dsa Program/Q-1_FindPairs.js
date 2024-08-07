//Find Pairs with Sum Less Than Target
const FindPairSum = (arr, target) => {
    arr.sort((a, b) => a - b)//sort array first
    let left = 0;
    let right = arr.length - 1;
    let sum = []; // Initialize an empty array to store pairs

    while (left < right) {
        if (arr[left] + arr[right] < target) {
            // If the sum of the pair is less than the target
            for (let i = right; i > left; i--) {
                // Collect all pairs with arr[left] and elements between arr[left+1] and arr[right]
                sum.push([arr[left], arr[i]]);
            }
            left++; // Move the left pointer to the right
        } else {
            right--; // Move the right pointer to the left
        }
    }

    return sum;
}

let numbers = [1, 2, 3, 4, 5];
let target = 6;
console.log(FindPairSum(numbers, target));
let numbers2 = [1, 3, 5, 7];
let target2 = 10
console.log(FindPairSum(numbers2, target2));

