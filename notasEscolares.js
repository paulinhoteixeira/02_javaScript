let notaNumerica = 80;
let notaFinal = ""

if (notaNumerica >= 90) {
  notaFinal = "A"
} else if (notaNumerica <= 89 && notaNumerica >= 80) {
    notaFinal = "B"
} else if (notaNumerica <= 79 && notaNumerica >= 70) {
    notaFinal = "C"
} else if (notaNumerica <= 69 && notaNumerica >= 60) {
    notaFinal = "D"
} else {
    notaFinal = "E"
}

console.log(notaFinal)