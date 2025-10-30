
type Course5Type = {
    title: string, monthDuration: number
}




let coursesAndDurationArray5: Course5Type[] = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
];

//  — відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray5.sort((a, b) =>{
    return b.monthDuration - a.monthDuration
});
console.log(sortMonthDuration);


// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let filterCurse = coursesAndDurationArray5.filter(value => {
    return value.monthDuration > 5
});
console.log(filterCurse);


//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCurse = coursesAndDurationArray5.map((value, index) => {
    return {title: value.title, monthDuration: value.monthDuration, id: index+1}
});
console.log(mapCurse);