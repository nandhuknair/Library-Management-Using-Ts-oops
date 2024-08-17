export class Book {
    constructor(public title: string, public author: string, public isbn: string) { }
    getDetails(): string {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}