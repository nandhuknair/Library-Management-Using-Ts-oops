import { Library } from './models/Library';
import { Librarian } from './models/Librarian';
import { Member } from './models/Member';
import { Book } from './models/Book';

const library = new Library()

const librarian = new Librarian('Nandhu', 1, 999);
const librarian2 = new Librarian('jack', 2, 991239);


const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '123456789');
const book2 = new Book('1984', 'George Orwell', '987654321');
const book3 = new Book ('Atomic Habit','James Clear','13412341234')

librarian.addBook(book1, library)
librarian.addBook(book2, library)

librarian2.addBook(book3,library)

const member = new Member('John Doe', 27);

member.borrowBook(book1);

console.log(member.getDetails())

console.log(librarian.getDetails())

console.log('======== Member start to return the book =========')

member.returnBook(book1);
console.log(member.getDetails())