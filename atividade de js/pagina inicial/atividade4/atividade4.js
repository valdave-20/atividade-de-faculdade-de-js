function somar(){
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);

    var imc = peso / (altura*altura);

    document.getElementById('seuresultado').innerHTML = `seu imc é ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        document.getElementById('resultado').innerHTML = `situação abaixo do peso`;
    } else if(imc > 18.5 && imc < 14.9) {
        document.getElementById('resultado').innerHTML = `situação Peso normal`;
    }else if(imc > 25 && imc < 29.9){
        document.getElementById('resultado').innerHTML = `situação Sobrepeso`;
    }else{
        document.getElementById('resultado').innerHTML = `situação Obesidade`;
    }
}