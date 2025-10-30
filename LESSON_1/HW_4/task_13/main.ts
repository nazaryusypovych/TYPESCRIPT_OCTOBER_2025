

let exchange4 = (sumUAH: number,currencyValues: {currency: string, value: number}[],exchangeCurrency: string): number => {
    let chosenCurrency;
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }

    }
    if(chosenCurrency){
        return  sumUAH / chosenCurrency.value
    }
    return -1



}


console.log(exchange4(10000, [{currency: `USD`, value: 25}, {currency: `EUR`, value: 42}], `USD`));