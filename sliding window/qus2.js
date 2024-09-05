// 2. Maximum Product of Contiguous Subarray of Size k

const arr = [2, 5, 3, 1, 8, 9, 2]
let k = 2

let maxProduct = 1;
let currProduct = 1;

for (let i = 0; i < k; i++) {
    currProduct *= arr[i];
}
maxProduct = currProduct;

for (let i = k; i < arr.length; i++) {
    currProduct *= arr[i];
    currProduct /= arr[i - k];
    maxProduct = Math.max(maxProduct, currProduct);
}
console.log(maxProduct);