function conversor(graus) {
  const possuiC = graus.toUpperCase().includes("C")
  const possuiF = graus.toLowerCase().includes("F")

  if(!possuiC && !possuiF) {
      throw new Error("Grau não identificado")
  }

  let formula = (farenheit) => (farenheit - 32) * 5/9
  let grauAtualizado = ""
  let tipoDoGrau = "C"

  return formula(grauAtualizado) + tipoDoGrau



}

try {
    conversor("40F")
    conversor("10G")
}catch(error){
    console.log(error.message)
}
