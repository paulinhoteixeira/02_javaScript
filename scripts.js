// aqui eu tenho um comentário em linha

/*aqui eu tenho um comentário de bloco

o código abaixo escreve alguma mensagem no devtools
*/
//console.log("Bem vindos!");

//let weight = 70.7

//console.log(typeof weight)

// let name = "Paulo"
// let age = 30
// let stars = 4.8
// isSubscribed = true

// console.log(`o ${name} tem ${age} anos e seu ranking é ${stars}`)
/*
let student = {
  name: "Paulo",
  age: 30,
  stars: 4.8,
  isSubscribed: true,
};

console.log(typeof student);

console.log(`o estudante ${student.name} tem ${student.age}`);
*/

let student = {
    name: "Paulo",
    age: 30,
    stars: 4.8,
    isSubscribed: true,
  };

let students = [];

students = [student]

console.log(students[0])

const john = {
    name: "John",
    age: 30,
    isSubscribed: true
}

students[1] = john
console.log(students)
