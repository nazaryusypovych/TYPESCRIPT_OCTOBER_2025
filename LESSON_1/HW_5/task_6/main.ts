let nums: number[] = [11,21,3];


let sortNums = (array: number[],direction: string): number[] =>{
    if (direction === `ascending`){
        array.sort((a, b) => a-b);

    }else if (direction === `descending`){
        array.sort((a, b) => b-a);
    }

    return array
}



sortNums(nums,`ascending`);
console.log(nums);

sortNums(nums,`descending`);
console.log(nums);