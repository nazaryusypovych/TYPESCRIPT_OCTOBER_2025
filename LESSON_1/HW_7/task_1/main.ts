// class Course7Type1{
//
//     title: string;
//     monthDuration: number;
//
//     constructor(title: string, monthDuration: number){
//         this.title = title;
//         this.monthDuration = monthDuration
//     }
//
// }
//
// class Course7Type2 extends Course7Type1{
//     id: number;
//
//     constructor(title: string, monthDuration: number, id: number){
//         super(title, monthDuration);
//         this.id = id;
//     }
// }




interface Course7Type1{
    title: string;
    monthDuration: number;
}

interface Course7Type2 extends Course7Type1{
    id: number;
}


let coursesAndDurationArray7: Course7Type1[] = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
];


let mapCourses = coursesAndDurationArray7.map<Course7Type2>((value: Course7Type1, index: number) => {
    return {id: index+1, title: value.title, monthDuration: value.monthDuration};
})

console.log(mapCourses);