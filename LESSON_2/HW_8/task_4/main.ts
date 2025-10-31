
type Course24Type = {
    title: string, monthDuration: number
}



let coursesAndDurationArray24: Course24Type[] = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}

];






let div2: HTMLDivElement = document.createElement(`div`);





document.body.appendChild(div2);

for (const coursesAndDurationArrayElement of coursesAndDurationArray24) {
    let div: HTMLDivElement = document.createElement(`div`);
    div.classList.add(`item`);
    div2.appendChild(div);

    let h1: HTMLHeadElement = document.createElement(`h1`);
    h1.innerText = coursesAndDurationArrayElement.title;
    h1.classList.add(`heading`);

    let p: HTMLParagraphElement = document.createElement(`p`);
    p.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
    p.classList.add(`description`);

    div.append(h1, p);
}