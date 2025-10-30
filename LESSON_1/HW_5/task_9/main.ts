let cardSuit: string[]= [ `spade`, `diamond`,`heart`, `clubs`];

let cardValue: string[] = [`6`, `7`, `8`, `9`, `10`, `ace`,`jack`,`queen`,`king`];

type CardType = {
    suit: string, value: string, color: string
}

let cards: CardType[] = [];


for (const value of cardValue) {
    for (const suit of cardSuit) {
        let color: string = ``;
        if (suit === `spade` || suit === `clubs`){
            color = `black`;
        } else {
            color = `red`
        }
        cards.push({
            value: value,
            suit: suit,
            color: color
        });
    }
}

console.log(cards);

//– знайти піковий туз
let clubsAce = cards.filter(card => card.suit === `clubs` && card.value ===`ace`);
console.log(clubsAce);

//– всі шістки
let allSix = cards.filter(card => card.value ===`6`);
console.log(allSix);

//– всі червоні карти
let allRed = cards.filter(card => card.color ===`red`);
console.log(allRed);

//- всі буби
let allClubs = cards.filter(card => card.suit ===`clubs`);
console.log(allClubs);

//– всі трефи від 9 та більше
let someSpade = cards.filter(card => card.suit ===`spade` && card.value !== `6` && card.value !== `7` && card.value !== `8`);
console.log(someSpade);









type AccumulatorType = {
    spades: CardType[], diamonds: CardType[], hearts: CardType[], clubs: CardType[]
}




let reduceCard = cards.reduce((accumulator: AccumulatorType, card: CardType) =>{
    if(card.suit === `spade`){
        accumulator.spades.push(card);
    }else if(card.suit === `diamond`){
        accumulator.diamonds.push(card);
    }else if(card.suit === `heart`){
        accumulator.hearts.push(card);
    }else if(card.suit === `clubs`){
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(reduceCard);