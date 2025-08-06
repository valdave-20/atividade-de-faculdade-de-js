function media(){
var nota1 = Number(document.getElementById('num1').value);
var nota2 = Number(document.getElementById('num2').value);

var soma = (nota1 + nota2) / 2;

if (soma < 70) {
    document.getElementById('resultado').innerHTML = `voce esta reprovado! sua nota e ${soma}:`;
} else {
    document.getElementById('resultado').innerHTML = `voce foi aprovado! sua nota e ${soma}:`;
}
}