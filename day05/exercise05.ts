function findMinMax(arr:number[])
{
    let min: number = arr[0];
    let max: number = arr[0];
    let sum: number = 0;
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        } 
        sum += arr[i];
        
    }
    console.log(sum);
    
    let result = {
        small: min,
        big: max,
        avrg: sum / arr.length
    }
    return result;
}

let arr: number[] = [12, 5, 23, 18, 4, 45, 32];


let answer = findMinMax(arr);
console.log("Highest is: " + answer.big);
console.log("Lowest is: " + answer.small);
console.log("Average is: " + answer.avrg);



let sequence: any[] = ["apple", "banana", "cherry", "date"]
sequence.splice(3,0, "dan")
console.log(sequence.toString());


const numbers: number[] = [5,3,1,7,2,6]

function secondSmallest(seq) {
    seq.sort((a,b) => a - b);
    console.log(numbers);
    return seq[1];
}
console.log(secondSmallest(numbers));



let seq1 = [1, 2, 3]
let seq2 = [3, 2, 1]



let arrrangement: any[] = [1,2,3,4]

