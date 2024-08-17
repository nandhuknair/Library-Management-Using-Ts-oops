import { Book } from "./Book";

export class Library {
     books:Book[] = [] ; 
     addBook(book:Book):void {
        this.books.push(book)
     }
     removeBook(book: Book): void {
        this.books = this.books.filter(b => b.isbn !== book.isbn);
    }

    findBook(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }
}