//multiplication of integer until 10
let number = 1
for (let i = 0; i <= 10; i++) {
    console.log("9 x " + i);
    
}

do { 
    console.log(number * 9);
    number++
} 
while (number <= 10);

//palindrome verify 
let call = "morning"
console.log(call.split("").reverse().join("") === call ? "is a palindrome": "is not palindrome");

if (call.split("").reverse().join("") === call){
    console.log(`is a palindrome`);
} else {
    console.log(`is not palindrome`);
    
}

let palindrome: boolean = true
for (let i = 0; i < call.length; i++) {
    console.log(call[1]);
    console.log(call[call.length-1-i]);
    palindrome = false
    break;    
}
console.log(palindrome);


//cm to km
let distance = 1000000
console.log(distance / 1000000 + " km");

//number to currency
let money = 1000
console.log("Rp. " + money.toLocaleString("id-ID")+ ",00");

//remove letters
let words= "Hello World".replace("ell","")
console.log(words);

//capitalize letters
const message = "hello world"
let stringSplit: string[] = message.split(" ")
console.log(stringSplit);

for (let i = 0; i < stringSplit.length; i++) {
    stringSplit[i] = stringSplit[i][0].toUpperCase() + stringSplit[i].slice(1);
    
}
console.log(stringSplit.join(" "));


//swap capitalize XXX
let object:string = "tHE qUIck bRoWn fOX"
let newObject = ""
for (let i = 0; i < object.length; i++) {
    if (object[i] == object[i].toUpperCase()) {
        newObject += object[i].toLowerCase()
    }else if (object[i] == object[i].toLowerCase()){
         newObject += object[i].toUpperCase()
    }
}
console.log(newObject);


//comapre number
let number1 = 42
let number2 = 27
if (number1 > number2) {
    console.log(number1 + " " + "is bigger number");
    
} else {
    console.log(number2 + " " + "is bigger number");
    
}

//sort numbers XXX
let num1 = 42
let num2 = 27
let num3 = 18
if (num1 > num2 && num1 > num3) {
   if (num2 > num3) {
    console.log(num1, num2, num3);
   } else {
    console.log(num1, num3, num2);
   }
    console.log(num1, num3, num2);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2, num1, num3);
    
}

//data type
let data1 = "qwerty"
if (typeof data1 === "string") {
    console.log(1);
} else if(typeof data1 === "number"){
    console.log(2);
} else {
    console.log(3);
}


//replace
let sentence = "an apple a day keeps a doctor away"
if (sentence.includes("a")) {
    console.log(sentence.replaceAll("a","*"));
    
}
