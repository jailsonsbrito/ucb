-/*
console.log("Hello World");
console.log(typeof 13);
console.log(typeof 1.3);
console.log(typeof -5);
console.log(typeof "Jailson");
console.log(2%3);
console.log(parseInt("blabla"));
console.log("Isso é uma string");
console.log(`Calculadora: \n A soma de 2 + 2 é ${2+2}`);
console.log(3>10);
console.log(3 == "3");
console.log(3 === "3");
console.log('Jailson' != "Jailson");

//Strings
console.log("Jailson");
console.log('Jailson');
console.log(`Jailson`);

//Numbers

console.log(50);
console.log(-200);
console.log(3.35);
console.log(6+4);

//Boolean

console.log("Jailson" == "Jailson");
console.log(4>3);
console.log(20<20);
console.log(4!=4);
console.log(50>=10);

//AND, OR, NOT

console.log(3==3 && 3>3);
console.log(3==3 || 3>3);
console.log(!(3==3 && 3>3));
console.log(!true);
console.log(!3===3);

//NaN

console.log("Ana" - 3);

let idade = prompt("Sua idade?");
console.log(idade);
alert("Essa é a mensagem");


let maior = Math.max(1,3,5,9,80);
console.log(maior);


function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro('Charger', 'RT', 1970)

console.log(carro1);

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));


function saudacao(){
    console.log("Seja bem-vindo!");
}

function seuNome (nome){
    console.log(`Olá ${nome}.`);
}

setTimeout(saudacao, 2000);
seuNome ("Jailson");
*/
function saudacao(nome) {
    console.log(`Olá, ${nome}`);
}

function informarNome(callback) {
    let nome = prompt("Digite seu nome: ");
    callback(nome);
}

informarNome(saudacao);