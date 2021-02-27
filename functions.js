/*
console.log("aula sobre functions")

const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

sum(2, 3)

let number3 = 54
let number10 = 46
sum(number3, number10)

console.log(`o úmero 1 é ${number3}`)
console.log(`o úmero 2 é ${number10}`)
console.log(`a soma é ${sum(number3, number10)}`)
console.log(total)

//function scope

let subject = "create video"

function createThink(subject){
    subject = "study"
    return subject
}

console.log(createThink(subject))
console.log(subject)


//function hoisting

sayMyname()

function sayMyname(){
    console.log("Paulo")
}


// arrow function

const sayMyname = (name) => {
    console.log(name)
}

sayMyname("Paulo")

*/

// callback function

function sayMyname(name) {
    console.log("antes de executar a função callback")

    name()

    console.log("depois de executar a callback")
}

sayMyname(
    () => {
        console.log("estou em uma callback")
    }
)
