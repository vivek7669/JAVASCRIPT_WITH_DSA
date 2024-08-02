const removeinDuplicatesorted = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    let index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[index]) {
            index++;
            arr[index] = arr[i];
        }
    }
    return index + 1;
}

let array = [1, 1, 2];

let result = removeinDuplicatesorted(array); 
console.log(result);  
console.log(array.slice(0, result));  
