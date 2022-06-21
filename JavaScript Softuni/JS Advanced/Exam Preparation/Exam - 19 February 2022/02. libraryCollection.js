
class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length < this.capacity) {
            this.books.push({ bookName: bookName, bookAuthor: bookAuthor, payed: false });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        } else {
            throw new Error('Not enough space in the collection.');
        }
    }

    payBook(bookName) {
        let isExists = false;
        let payed;
        for (const book of this.books) {
            if (book.bookName === bookName) {
                isExists = true;
                payed = book.payed;
                break;
            }
        }

        if (!isExists) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if (payed) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            for (const book of this.books) {
                if (book.bookName === bookName) {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`;
                }
            }
        }
    }

    removeBook(bookName) {
        let isExists = false;

        for (const book of this.books) {
            if (book.bookName === bookName) {
                isExists = true;
                if (!book.payed) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                }
                break;
            }
        }

        if (!isExists) {
            throw new Error("The book, you're looking for, is not found.");
        } else {
            for (let i = 0; i < this.books.length; i++) {
                const book = this.books[i];
                if (book.payed) {
                    this.books.splice(i, 1);
                    return `${bookName} remove from the collection.`;
                }
            }
        }
    }

    getStatistics(bookAuthor) {
        let isExists = false;
        for (const book of this.books) {
            if (book.bookAuthor === bookAuthor) {
                isExists = true;
                break;
            }
        }
        let output = '';
        if (bookAuthor === undefined) {
            output = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (const book of this.books) {
 
                let paid = '';
                if (book.payed) {
                    paid = 'Has Paid';
                } else {
                    paid = 'Not Paid';
                }
                output += `\n${book.bookName} == ${book.bookAuthor} - ${paid}.`;
            }

            return output;

        } else if (!isExists) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        } else {
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (let i = 0; i < this.books.length; i++) {
                const book = this.books[i];

                if (book.bookAuthor === bookAuthor) {
                    let paid = '';
                    if (book.payed) {
                        paid = 'Has Paid';
                    } else {
                        paid = 'Not Paid';
                    }
                    if (i === 0) {
                        output += `${book.bookName} == ${book.bookAuthor} - ${paid}.`;
                    } else {
                        output += `\n${book.bookName} == ${book.bookAuthor} - ${paid}.`;
                    }

                }

            }
            return output;
        }

    }

}

const library = new LibraryCollection(5)
library.addBook('Zon Quixote', 'Miguel de Cervantes');
library.payBook('Zon Quixote');
library.addBook('An Search of Lost Time', 'Marcel Proust');
library.addBook('Blysses', 'James Joyce');
console.log(library.getStatistics());







