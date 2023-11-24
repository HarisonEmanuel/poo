class Veiculo{
    constructor(marca,modelo,ano){ 
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
   
}
var marca = prompt("marca do carro")
var modelo = prompt("modelo docarro")
var ano = prompt("ano do carro")
const veiculo1= new Veiculo(marca,modelo,ano);
alert(veiculo1.marca + "\n"+veiculo1.modelo+"\n" + veiculo1.ano);