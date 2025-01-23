let age1: number = 20

if (age1 > 19) {
    console.log(`Sudah memiliki KTP`);
    
} else if (age1 <= 19 && age1 >= 17) {
    console.log(`Dapat membuat KTP`);
    
} else if (age1 < 17) {
    console.log(`Belum dapat membuat KTP`);
    
}


const value1: number = 34186

if (value1 % 2 === 0) {
    console.log(`${value1} is an even number`);
    
} else {
    console.log(`${value1} is an odd number`);
    
}

for (let n = 1; n <= 6; n++) {
    console.log(n * (n + 1) / 2);

}



const n: number = 6;
let sum: number = 0;
for (let i = 1; i <= n; i++) {
    sum += i
    console.log(i);

}
console.log(sum);

let factorial: number = n
for (let i = n - 1; i > 0; i--) {
    factorial *= i
    console.log(i);

}
console.log(factorial);

