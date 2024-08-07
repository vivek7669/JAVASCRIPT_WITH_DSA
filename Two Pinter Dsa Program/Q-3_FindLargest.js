//Find the Largest Number Less Than Target
const FindLargest = (arr, target) => {
    arr.sort((a, b) => a - b)//sort array first
   largest=-1
   for (let i = 0; i < arr.length; i++) {
   if(arr[i]<target){
    largest=arr[i]
   }
else{
    break
}
   }
   return largest
}

let numbers1 = [1, 2, 3, 4, 5];
let target1 = 4;
console.log(FindLargest(numbers1, target1));
let numbers2 = [1,3,5,7];
let target2 = 6;
console.log(FindLargest(numbers2, target2));











