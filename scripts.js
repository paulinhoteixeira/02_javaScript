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

/*
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
*/

/*

  Type conversion (typecasting) vs Type coersion
    
  * alteração de um tipo de dado para outro tipo

  */

  console.log(Number("9") + 5)


  // manipular strings e numeros 

  /*
  let string = "123"
  console.log(Number(string))

  let number = 321
  console.log(String(number))

  */
  
  //contar quantos caracteres tem uma plavra e quantos digitos tem um numero

  /*
  let word = "paralelepipedo"
  console.log(word.length)

  let number = 1234
  console.log(String(number).length)

  */

  //transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

  /*
  let number = 5465697.548798
  console.log(number.toFixed(2).replace(".",","))


  //transformar letras minusculas em maiusculas

  let word = "programar é muito bacana!"

  console.log(word.toLocaleUpperCase())

  let wordMaiusculas = "PROGRAMAR É MUITO BACANA!"

  console.log(word.toLocaleLowerCase())

  //verificar se o texto contem a palavra "palavra"

  let phrase = "como verificar se uma palavra está no texto"

  console.log(phrase.includes("palavra"))


  // separe um texto que contem espaços, em um novo array, onde cada palavra é uma posição do array. Depois disso, transforme o array em um texto e substitua os espaços por _

  let text = "manipular textos com JS"
  let myArray = text.split(" ")

  console.log(myArray)

  let textWithUnderscore = myArray.join("_")

  console.log(textWithUnderscore)

  //criar array com constructor

  let array = new Array("a", "b", "c")
  console.log(array)

  //contar elementos de um array

  console.log(["a", "b", "c", "d"].length)

  */
  // transformar uma cadeia de caracteres em elementos de um Array

  let word = "manipulação"
  console.log(Array.from(word))


  // manipulando arrays

  let techs = ["html", "css", "js"]

  //adicionar um item no fim do array

  techs.push("nodejs")

  //adicionar no começo

  techs.unshift("sql")

  //remover do fim do
  techs.pop()

  //remover do começo
  techs.shift()

  //pegar somente alguns elementos do array

  console.log(techs.slice(1,3))

  //remover um ou mais itns em qualquer posição

  //techs.splice(1,1)

  //encontrar a posição de um elemento no array

  /*
  let index = techs.indexOf("html")
  techs.splice(index,1)




  console.log(techs)

  

  //Operador Condicional ternario
  //exemplos

  let pao = false
  let queijo = true

  const niceBreakfast = pao || queijo ? "Café top!" : "café ruim!"

  console.log(niceBreakfast)


  let age = 17

  const canDrive = age >= 18 ? "can drive" : "can't drive"

  console.log(canDrive)

  

  //Condicionais

  //if..else 

  let temperature = 38
  let highTemperature = temperature >= 37.5
  let mediumTemperature = temperature <37.5 && temperature >= 37

  if(highTemperature) {
    console.log("Febre alta")
  }else if(mediumTemperature) {
    console.log("Febre moderada")
  }else {
    console.log("saudável")
  }

 

  //switch

  
  function calculate(number1, operator, number2) {
    let result

    switch(operator) {
      case "+":
        result = number1 + number2
        break
      case "-":
        result = number1 - number2
        break
      case "*":
        result = number1 * number2
        break
      case "/":
        result = number1 / number2
        break
      default:
        console.log("não implementado!")
    }

    return result
  }


  console.log(calculate(4, "+", 46))



//Estruturas de repetição

//For
//break - para a execução do loop
//continue - pula a execução do momento

for(let i = 0; i < 10; i++) {
  console.log(i)
}

//while
//utilizado quando nao sabemos o momento da parada
let i = 1655434
while(i < 10) {
  console.log(i)

  i /= 35
}


//for ..of

let name = "Paulo"
let names = ["João", "Mayk", "Pedro"]

for(let char of name){
  console.log(char)
}

for(let name of names){
  console.log(name)
}


*/
//for..in

let person = {
  name: "Paulo",
  age: 31,
  weight: 70
}

for(let property in person){
  console.log(property)
  console.log(person[property])

}