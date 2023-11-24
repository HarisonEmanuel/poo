// Definindo a classe pai (superclasse)
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerBarulho() {
      alert(`${this.nome} faz um barulho.`);
    }
  }
  
  // Definindo a classe filha (subclasse) que herda de Animal
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome); // Chama o construtor da classe pai
      this.raca = raca;
    }
  
    latir() {
      
        alert(`${this.nome} (${this.raca}) late: Woof! Woof!`);
    }
  }
  
  var nome = prompt("nome do cachorro")
  var raca = prompt ('raça cachorro')
  const cachorro1 =new Animal (nome,raca);
  alert(cachorro1.nome+"\n"+cachorro1.raca+"\n");