
type Courses25Type = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}






let coursesArray25: Courses25Type[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let div3: HTMLDivElement = document.createElement(`div`);
div3.classList.add(`course`)
document.body.appendChild(div3);


for (const course of coursesArray25) {
    let h1: HTMLHeadElement = document.createElement(`h1`);
    h1.innerText = course.title;

    let div1: HTMLDivElement = document.createElement(`div`);
    div1.classList.add(`information`);

    let div2: HTMLDivElement = document.createElement(`div`);
    div2.classList.add(`modules`);


    div3.append(h1, div1, div2)


    let monthDuration: HTMLDivElement = document.createElement(`div`);
    monthDuration.innerText = `${course.monthDuration}`;

    let hourDuration: HTMLDivElement = document.createElement(`div`);
    hourDuration.innerText = `${course.hourDuration}`;

    div1.append(monthDuration, hourDuration);

    let ul: HTMLUListElement = document.createElement(`ul`);
    div2.appendChild(ul);


    for (const module of course.modules) {
        let li: HTMLLIElement = document.createElement(`li`);
        li.innerText = module;
        ul.appendChild(li);
    }


}