let arr3 = [11,22,33,44];


function swap (arr: number[],index1: number,index2: number){
    let temp = arr[index1]; // temp = 11
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


swap(arr3,0,1);
console.log(arr3);