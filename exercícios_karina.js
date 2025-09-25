//Exercício 3
let numero1 = parseInt(prompt("Digite um numero inteiro: "))
let dobro = numero1 * 2

alert(`O dobro do seu numero é: ` + dobro)


//Exercício 4
let digite = parseFloat(prompt("Digite dois numeros"));
let digite2 = parseFloat(prompt(""));
let soma = digite + digite2;

alert("A soma dos nomeros deram: " + soma);


// Exercício 5
let number1 = parseInt(prompt("Digite um numero: "));
let quadrado = number1 * number1;

alert("Seu numero ao quadrado é: " + quadrado);


// Exercício 6
let nota1 = parseInt(prompt("Digite a primeira nota: "))
let nota2 = parseInt(prompt("Digite a segunda nota: "))
let nota3 = parseInt(prompt("Digite a terceira nota: "))

if((nota1, nota2, nota3 >= 0) && (nota1, nota2, nota3 <= 10)){
    let media = (nota1 + nota2 + nota3) / 3
    alert("A média das notas é de: " + media)
}

else{
    alert("Nota invalida, digite numeros entre 0 e 10")
}


// Exercício 7
let num1 = parseInt(prompt("Digite três números inteiros: "))
let num2 = parseInt(prompt(""))
let num3 = parseInt(prompt(""))

let soma1 = num1 + num2 + num3

alert("A soma dos três números é igual: " + soma1);


// Exercício 8
let base = parseInt(prompt("Qual é a base do triângulo?"));
let altura = parseInt(prompt("Qaul é a altura do triângulo?"));

let area = (base * altura) / 2;

alert("A área do seu triângulo é de: " + area);


// Exercício 9
let nome = String(prompt("Qual é o seu nome?"))
let anoAntigo = parseInt(prompt("Qual foi o ano que você nasceu?"))
let anoAtual = 2025

let idade = anoAtual - anoAntigo

alert("Nome:  " + nome + "\nIdade: " + idade);


// Exercício 10
let degrau = parseFloat(prompt("Digite a altura em em metros de cada degrau: "));
let altura1 = parseFloat(prompt("Digite a altura em em metros que deseja alcançar: "));
let quantidadeDegraus = Math.ceil(altura1 / degrau);

alert("Você precisará subir " + quantidadeDegraus + " degraus para completar a escada.");

