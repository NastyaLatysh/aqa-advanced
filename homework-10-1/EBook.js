import { Book } from "./Book.js";

export class EBook extends Book {

    constructor(name, author, year, format) {
        super(name, author, year);
        this.format = format;
    }

    printInfo() {
        for (let [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`);
        }
    }

    static bookConvert (book, format){
        return new EBook(book.name, book.author, book.year, format);

    }
}
