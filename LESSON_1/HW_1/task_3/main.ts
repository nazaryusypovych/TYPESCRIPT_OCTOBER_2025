type Author = {name: string, age: number};
type Book1 = {title: string, pageCount: number, genre: string, author: Author};




let book11: Book1 = {
    title: 'Чума',
    pageCount: 256,
    genre: 'роман',
    author: {
        name: 'Альбер Камю',
        age: 57
    }
};