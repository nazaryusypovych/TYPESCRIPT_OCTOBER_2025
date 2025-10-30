function getLi(text: string): void {
    document.write(`<lu>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</lu>`);
}

getLi(`Vova`);