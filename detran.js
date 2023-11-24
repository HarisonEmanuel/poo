class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

}
class Moto extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano); {
            this.potencia = potencia;
        }
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano); {
            this.potencia = potencia;
        }
    }
}
const veiculo1 = new Veiculo(marca, modelo, ano);
alert(veiculo1.marca + "\n" + veiculo1.modelo + "\n" + veiculo1.ano + "\n" + veiculo1.potencia);
let opcao = prompt("garagem  simao\n1. Cadastar moto\n2. Cadastrar carros");
switch (opcao) {
    case '1':
        var marca = prompt("marca");
        var modelo = prompt("modelo");
        var ano = prompt("ano");
        var potencia = prompt("potencia");
        const carro1 = new Carro(marca, modelo, ano, potencia);
        alert(`${carro1.marca}\n ${carro1.modelo}\n ${carro1.ano} \n ${carro1.potencia}`);
        break
    case '2':
        var marca = prompt("marca");
        var modelo = prompt("modelo");
        var ano = prompt("ano");
        var potencia = prompt("potencia");
        const moto1 = new Moto(marca, modelo, ano, potencia);
        alert(`${moto1.marca}\n ${moto1.modelo}${moto1.ano}\n${moto1.potencia}`);
        break;
    default: alert("opção invalida");
}