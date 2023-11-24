var op = prompt("1.desconto\n 2.lucro");
var produto = prompt("porcentagem (sem o simbolo)");
var porcentagem = prompt("digite o valor do produto");
switch (op){
    case '1':
alert (produto*(1-(porcentagem/100)));break;
case'2':
alert (produto*(1+(porcentagem/100)));break;
default:
    alert("opcao invalida");
}
