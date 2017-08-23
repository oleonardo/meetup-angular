/* Javascript */
var title = 'Um título qualquer';
var array = ['Rick Grimes', 'Daryl Dixon', 'Carl Grimes', 'Michonne', 'Negan'];



/* ES 6 ou ES 2015 */
let pageTitle = 'Um título qualquer';
let arrayTWD: string[] = ['Rick Grimes', 'Daryl Dixon', 'Carl Grimes', 'Michonne', 'Negan'];

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let funcLog = (s: string) : void => console.log(s);

for (let character of arrayTWD) funcLog(character);

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function println(data: Person) { 
    console.log(data.firstName);
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}