type Person = {
    name: string,
    age: number,    
}

const person: Person = {
    name: "john",
    age: 20
}
console.log(person.name);

type Product = {
    name: string,
    price: number,
    discount: number
}

const product1: Product = {
    name: "produk A",
    price: 10000,
    discount: 0
}

if (product1.price >= 100000) {
        product1.discount = product1.price * 10 /100;
        product1.price = product1.price - product1.discount;
    } else if (product1.price < 100000) {
        product1.discount = product1.price * 7 /100;
        product1.price = product1.price - product1.discount;
    }
    console.log(product1);


    const personList: Person[] = [{
        name: "johnny",
        age: 14
    },
    {
        name: "asep",
        age: 18
    },
    {
        name: "linda",
        age: 17
    },
    {
        name: "lia",
        age: 12
    },
    {
        name: "kevin",
        age: 20
    }]

function replaceName(arr: Person[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 15 )
            arr[i].name = "budi";
       
    }
}
replaceName(personList);
console.log(personList);
