let div: HTMLDivElement = document.createElement(`div`);
div.classList.add(`wrap`, `collapse`, `alpha`, `beta`);

div.innerText = `NAZAR`;

div.style.background = `red`;
div.style.color = `black`;
div.style.fontSize = `20px`;

document.body.appendChild(div);

let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);