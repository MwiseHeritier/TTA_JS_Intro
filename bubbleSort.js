// Array Bubble Sort
function  bubbleSort(array){
    let len = array.length;
    for (let i = 0; i < len; i++){
        for (let j =0; j < len; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}

let array = [5, 3, 8, 4, 2, 1, 9, 7,6];
console.log('Original Array ' + array);
console.log('Sorted Array ' + bubbleSort(array));