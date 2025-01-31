
function fizzbuzz(n: number) {
    let result: string = ""
    for (let index :number = 1; index <= n; index++) {
    
        if (index % 3 === 0 && index % 5 === 0) {
            result += "FizzBuzz";
        } else if (index % 5 === 0) {
            result += "Buzz";
        } else if (index % 3 === 0) {
            result += "Fizz";
        } else {
            result += index;
        }
        result += " "
    }    
    return result;
}

console.log(fizzbuzz(15));



//(weight (Kg), height (m))
function BMI (weight: number, height: number) {
    const BMI: number = weight / (height * height)
    if (BMI < 18.5) {
        return "Less Weight"
    } else if (BMI >= 18.5 && BMI < 25) {
        return "Ideal"
    } else if (BMI >= 25 && BMI < 30) {
        return "Overweight"
    } else if (BMI >= 30 && BMI < 40) {
        return "Very Overweight"
    } else {
        return "Obesity"
    } 
}

console.log(BMI(65, 1.7));

let n: string = ""
function evenOnly(numbers: number[] = []) {
    for (let index: number = 0; index < numbers.length; index++) {
        const noOdd: number = numbers[index];
        if (noOdd % 2 === 1) {
            continue
        } else {
            n += noOdd
        }
        n += " "
    } 
    return n
}

let sequence: number[] = [5,3,4,2,6,1,8,7,9,12,15,14,17,19,16,20,1]
console.log(evenOnly(sequence));



let text = "Hello World";
const splitter = text.split(" ");
console.log(splitter);
