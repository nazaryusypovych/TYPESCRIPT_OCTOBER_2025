let array: string[] = [`Main`,`Products`,`About us`,`Contacts`];

let ul: HTMLUListElement = document.createElement(`ul`);
document.body.appendChild(ul);

for (const element of array) {
    let li: HTMLLIElement = document.createElement(`li`);
    li.innerText = element;
    ul.appendChild(li);
}