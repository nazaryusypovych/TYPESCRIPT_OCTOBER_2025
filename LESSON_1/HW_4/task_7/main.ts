let getLis4 = (text: string, li: number): void => {
    document.write(`<lu>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</lu>`);
}

getLis4(`FOX`, 8);