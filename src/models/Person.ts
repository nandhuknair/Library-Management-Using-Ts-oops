export class Person {
    constructor(public name: string, public id: number) { }
    getDetails(): string {
        return `Name of the person is ${this.name} and the id is ${this.id}`
    }
}