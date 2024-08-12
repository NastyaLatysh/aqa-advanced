import { Book } from "./Book.js";
import { EBook } from "./EBook.js";


// task 1:
let book1 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 1955);
let book2 = new Book("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 1997);
let book3 = new Book("Sherlock Holmes", "Sir Arthur Ignatius Conan Doyle", 1887);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// task 2: 
let ebook1 = new EBook("The Lord of the Rings", "J. R. R. Tolkien", 1955, 'pdf');
ebook1.printInfo();

// task 3:
try {
    let book4 = new Book("The Hobbit, or There and Back Again", "J. R. R. Tolkien", 1937);
    book4.setAuthor('');
} catch (e) {
    console.log('Error: ', e.message);
}

// task 4 and 5:

    let books = [
        new Book("The Lord of the Rings", "J. R. R. Tolkien", 1955),
        new Book("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 1997),
        new Book("Sherlock Holmes", "Sir Arthur Ignatius Conan Doyle", 1887),
        new Book("The Hobbit, or There and Back Again", "J. R. R. Tolkien", 1937),
        new EBook("The Lord of the Rings", "J. R. R. Tolkien", 1955, 'pdf'),
        new EBook("Sherlock Holmes", "Sir Arthur Ignatius Conan Doyle", 1887, 'pdf'),
        new EBook("The Hobbit, or There and Back Again", "J. R. R. Tolkien", 1937, 'pdf'),
        new EBook("Alice's Adventures in Wonderland", "Lewis Carroll", 1865, 'pdf'),

    ]

    books[0].printInfo();

    let oldestBook = Book.oldestBook(books)
    
    console.log('Найстаріша книга: ' + oldestBook.name + '. Author: ' + oldestBook.author + '. Year: ' + oldestBook.year);


    console.log(EBook.bookConvert(books[0], 'pdf'));
