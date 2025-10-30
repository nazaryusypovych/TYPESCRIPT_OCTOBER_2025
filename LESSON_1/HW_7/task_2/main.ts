let user77: {name: string, age: number} = {
    name: `azar`,
    age: 25
}

// let strUser = JSON.stringify(user);
// console.log(strUser);
//
// let deepCopyUser = JSON.parse(strUser);
// console.log(deepCopyUser);


function getDeepCopy(object: any) {
    if(object !== undefined || null || NaN){
        return JSON.parse(JSON.stringify(object));
    }
}

console.log(getDeepCopy(user77));