import { Person } from './Person';
import { Book } from './Book';
import { Library } from './Library';

export class Librarian extends Person {
    constructor(name: string, id: number, public libraryId: number) {
        super(name, id);
    }
    addBook(book: Book, library: Library): void {
        library.addBook(book)
        console.log(`Librarian ${this.name} added "${book.title}" to the library`);
    }

    removeBook(book: Book, library: Library): void {
        library.removeBook(book);
        console.log(`Librarian ${this.name} removed "${book.title}" from the library`);
    }

    getDetails(): string {
        return `${super.getDetails()}, Library ID: ${this.libraryId}`;
    }
}