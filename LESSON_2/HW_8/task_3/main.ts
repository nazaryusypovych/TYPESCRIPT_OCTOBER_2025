type Course23Type = {
    title: string, monthDuration: number
}



let coursesAndDurationArray23: Course23Type[] = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}

];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {

    let div: HTMLDivElement = document.createElement(`div`);
    div.innerText = `${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}`

    document.body.appendChild(div);

}