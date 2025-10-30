




let stingNumb: string | null = prompt(`Enter 1, 0, -3`);


if (stingNumb !== null){
    let numb = +stingNumb;

    if (numb !== 0){
        console.log(`Вірно`);
    }else {
        console.log(`Невірно`);
    }
}

