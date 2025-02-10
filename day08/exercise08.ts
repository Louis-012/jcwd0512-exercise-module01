

class Product {
    name;
    price;

    constructor(productName: string, productPrice: number) {
       this.name = productName;
       this.price = productPrice;
    }
    
}

let dbProdut: Product[] = [
    new Product ("apple", 5000),
    new Product ("lemon", 1000),
    new Product ("semangka", 15000)
]

interface CartItem {
    product: Product & {quantity: number}
    total: number;
}

class Transaction {
    private cart: CartItem[];

    constructor () {
        this.cart = [];
    }
    addToCart(product: Product, quantity: number = 1): void{
        this.cart.push({
            product: {...product, quantity},
            total: quantity * product.price
        });
        
    }
    totalPayment(){
        return this.cart.reduce((sum, item) => sum + item.total, 0);
    }
    checout(): string {
        let print = this.cart
            .map(function(item, idx) {
                return `${
                    idx + 1
                }, ${item.product.name}, ${item.product.price.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                })}, Quantity: ${item.product.quantity}, ${item.total.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                    })}`;

            })
            .join("\n");
        print += `\nTotal payment: ${this.totalPayment().toLocaleString("id", {
            style: "currency",
            currency: "IDR",
            })}`;
        this.cart = []
        return print
    }
}


///////////////////////////////////


class Student {
    name: string;
    email: string;
    age: string;
    score: number;
    
    constructor(studentName: string, studentEmail: string, studentAge: string, studentScore: number){
        this.name = studentName;
        this.email = studentEmail;
        this.age = studentAge;
        this.score = studentScore;
    }
}

let dbStudent: Student[] = [
    new Student("Edo", "edo@mail.com", "2005-04-25", 35),
    new Student("Andrew", "and@mail.com", "2006-11-12", 65),
    new Student("Zafran", "zaf@mail.com", "2010-02-01", 95),
    new Student("Bude", "budi@mail.com", "2003-11-11", 55)
]
console.log(dbStudent);


//////////////////////////////


class Employee {
    name: string;
    hour: number;

    constructor(employeeName: string, hourWork: number){
        this.name = employeeName;
        this.hour = hourWork
    }
}

class FullTimeEmployee extends Employee {
    salary(){
        if (this.hour <= 5) {
            return `Salary per hour for ${this.name} is 100000, total salary is ${this.hour * 100000}`
        } else {
            return `Salary per hour for ${this.name} is 75000, total salary is ${this.hour * 75000}`
        }
    }
}

class PartTimeEmployee extends Employee {
    salary(){
        if (this.hour <= 5) {
            return `Salary per hour for ${this.name} is 50000, total salary is ${this.hour * 50000}`
        } else {
            return `Salary per hour for ${this.name} is 30000, total salary is ${this.hour * 30000}`
        }
    }
}

let dbEmployee: Employee[] = [
    new FullTimeEmployee("John", 5),
    new FullTimeEmployee("Sinta", 7),
    new PartTimeEmployee("Jaka", 8),
    new PartTimeEmployee("Nia", 5)
]

console.log(dbEmployee[1]);

////////////////////////

interface Iitem{
    health: number;
    power: number;
}

interface IPlayer {
    name: string;
    health: number;
    power: number;
    damage(power: number): void;
    useItem(item: Iitem): void;
    showStatus(): string
}

interface IshootingGame {
    player1: IPlayer;
    player2: IPlayer;
    getRandomItem(): Iitem
    start(): string
}

class Player implements IPlayer {
    name: string;
    health: number;
    power: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100
        this.power = 10
    }
    damage(power: number) {
        this.health -= power
    }
    useItem(item: Iitem) {
        this.health += item.health
        this.power += item.power
    }
    showStatus() {
        return `Player ${this.name} (Health: ${this.health}, Power: ${this.power})`
    }
}

class ShootingGame implements IshootingGame {
    player1: IPlayer;
    player2: IPlayer;

    constructor (player1: IPlayer, player2: IPlayer) {
        this.player1 = player1;
        this.player2 = player2;
    }
    getRandomItem() {
        const boost: number[] = [0, 10]
        return {
            health: boost[Math.round(Math.random())],
            power: boost[Math.round(Math.random())]
        };
    }
    start() {
        while (true) {
            console.log(this.player1.showStatus());
            this.player1.useItem(this.getRandomItem());

            this.player2.damage(this.player1.power);
            console.log(this.player1.showStatus());

            if (this.player2.health <= 0) {
                return `${this.player1.name} Win`
            }
            console.log(this.player2.showStatus());
            this.player2.useItem(this.getRandomItem());

            this.player1.damage(this.player2.power);
            console.log(this.player2.showStatus());

            if (this.player1.health <= 0) {
                return `${this.player2.name} Win`   
            }
        }
    }
}

const newShootingGame = new ShootingGame(
    new Player("Budi"),
    new Player("Joji"),
);
console.log(newShootingGame.start());


