const moveZero = (arr) => {
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[zero] = arr[i];
            zero++;
        }
    }

    for (let i = zero; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;  
}

const arr = [0, 1, 0, 3, 12];

console.log(moveZero(arr));