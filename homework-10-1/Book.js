export class Book {

    constructor(name, author, year) {
      this.setName(name);
      this.setAuthor(author);
      this.setYear(year);
    }
  
    printInfo() {
      console.log(this);
    }

    static oldestBook(books) {

        books.sort((a, b) => a.year - b.year);

        return books[0];
    }

    validateType(key, value, type) {

        if (typeof value !== type) {
            throw new Error(key + ' should be ' + type);
        }
    }

    validateSize(key, value) {

        if (typeof value === 'string' && value.length >= 50) {
            throw new Error(key + ' must be no more than 50 characters!');
        } 

        if (typeof value === 'number' && String(value).length > 4) {
            throw new Error(key + ' must be no more than 4 characters!');
        }

    }

    validateIsEmpty(key, value) {

        if (value === null || value === undefined || value.length === 0) {
            throw new Error(key + ' should contain at least one character!');
        }
    }


    setName(name) {
        this.validateType('name', name, 'string');
        this.validateSize('name', name);
        this.validateIsEmpty('name', name);

        this.name = name;
    }

    setAuthor(author) {
        this.validateType('author', author, 'string');
        this.validateSize('author', author);
        this.validateIsEmpty('author', author);

        this.author = author;
    }

    setYear(year) {
        this.validateIsEmpty('year', year);
        this.validateType('year', year, 'number');
        this.validateSize('year', year);


        this.year = year;
    }


    getName() {
        return this.name;
    }

    getAuthor() {
        return this.author;
    }

    getYear() {
        return this.year;
    }
}
