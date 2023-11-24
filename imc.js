function imc(peso,altura){
    return (peso/(altura*altura));

}
let peso = parseFloat(prompt("digite o peso"));
let altura = parseFloat(prompt("digite a altura"));
alert(imc(peso,altura));