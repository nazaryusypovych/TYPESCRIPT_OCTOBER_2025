let arr4 = [11,22,33,44];


let swap4 = (arr: number[],index1: number,index2: number) =>{
    let temp = arr[index1]; // temp = 11
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

swap4(arr4,0,1);
console.log(arr4);