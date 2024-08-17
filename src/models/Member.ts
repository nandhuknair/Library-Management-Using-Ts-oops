import { Person } from "./Person";
import { Book } from "./Book";

export class Member extends Person {
    borrowedBooks:Book[] = [] ;

    borrowBook(book:Book): void {
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed "${book.title}"`);
    }
    returnBook(book:Book):void {
        const index = this.borrowedBooks.findIndex(b=> b.isbn === book.isbn)
        if(index !== -1){
            this.borrowedBooks.splice(index,1);
            console.log(`${this.name} returned "${book.title}"`);
        }
    }
    getDetails(): string {
        return `${super.getDetails()}, Borrowed Books: ${this.borrowedBooks.length}`;
    }
}