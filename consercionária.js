class veiculo{
    constructor(marca,modelo,ano){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
}
let marca = prompt("marca");//Renolt
let modelo = prompt("modelo");//Duster
let ano = parseInt(prompt("ano"));//2016
const veiculo1 = new veiculo(marca,modelo,ano);
alert (veiculo1.marca + "\n" + veiculo1.modelo + "\n" + veiculo1.ano);