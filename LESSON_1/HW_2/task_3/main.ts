let listOfItems: string[] = [`html`, `css`, `javascript`, `mysql`, `mongodb`, `react`, `angular`, `node.js`];


document.write(`<ul>`);
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);

}
document.write(`</ul>`);