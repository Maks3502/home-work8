// завдання 1
// const numbers = [9, 8, 11];
// numbers[1] = 10;
// console.log(numbers);


// завдання 2
const transport = ["машина", "трамвай", "автобус", ]
transport[3] = "мопед";
console.log(transport);
transport.push("мопед");


// завдання 3

// const numbers =  [56, 74, 85, 99]
// let price = 0 ;
// for(let i = 0; i < numbers.length; i++){
//   price = numbers[i] + price;
// }
// console.log(price);



// завдання 4
// const number = [1, 2, 3, 4, 5];
// for(let i = 0; i < number; i += 1){
//   console.log( number[i]);
// }
 
// завдання 5
const line = ["sjfjk", "ddd", "dkkoe", "aaa"];
for(let i = 0; i < line.length; i++){
  if(line[i].length > 5){
    console.log(line[i])
  }
  
}

// завдання 6
const bigNumber = [10, 22, 75, 89, 90, 999, 101, 506, 69, 54, 704];
let max = bigNumber[0];
for(let i = 0; i < bigNumber.length; i += 1){
  if(bigNumber[i] > max){
max = bigNumber[i];
  }
}
console.log(max);

// завдання 7 

const numbers = [1, 8, 75, 25, 50, 89, 65 , 87, 45, 62];
for(let i = 0; i < numbers.length; i += 1){
  if( numbers[i] % 2 === 0 ){
console.log(numbers[i])
  }
}
