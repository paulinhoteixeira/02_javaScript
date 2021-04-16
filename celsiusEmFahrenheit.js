function conversor(graus) {
  const possuiC = graus.toUpperCase().includes("C");
  const possuiF = graus.toUpperCase().includes("F");

  if (!possuiC && !possuiF) {
    throw new Error("Grau não identificado");
  }

  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
  let grauAtualizado = Number(graus.toUpperCase().replace("F", ""));
  let tipoDoGrau = "C";

  if(possuiC){
    formula = (celsius) => celsius * 9/5 + 32;
    grauAtualizado = Number(graus.toUpperCase().replace("C", ""));
    tipoDoGrau = "F";

  }

  return formula(grauAtualizado) + tipoDoGrau;
}

try {
  console.log(conversor("50F"));
  console.log(conversor("10C"));
  conversor("10G");
} catch (error) {
  console.log(error.message);
}
