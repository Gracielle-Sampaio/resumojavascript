function equacao(num1, num2){
  return num1+num2;
}
let resultado = equacao(8,2);
console.log(`${resultado}`)

let idade = function(anoatual,ano2){
  return anoatual-ano2
}
let ano = idade(2025,2000)
console.log(`${ano}`)

let multiplicar = (n1, n2) =>{  
  return n1*n2
}
let res = multiplicar(2,6)
console.log(`${res}`)

let soma = (a,b) => a+b
let resoma = soma(5,5)
console.log(`${resoma}`)

function saudacao(nome, idade){
  console.log(`Olá, ${nome}, você tem ${idade} anos!`)
}
 saudacao("Graci", 24)

function calculararea(base,altura){
  return base*altura
}
let area = calculararea(5,3)
console.log(area)

var lista = ["pão","alho","tomate"]
console.log(lista[0])
console.log(lista[1])
console.log(lista[2])
console.log(lista[lista.length -2])

var numeros = [2,4,5,6,7,8,]
conta = (numeros[3]+numeros[2])
todos = (numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4] + numeros[5] )
console.log(`A soma de ${numeros[3]} e ${numeros[2]} dá ${conta}, \n A lista tem ${numeros.length} números! \n Os números são ${numeros} \n A soma de todos os números da lista é ${todos} `)

console.log(numeros[2] != numeros["2"])

var promessa ={ 
  var: "texto", 
  array:[4,5,6],
}
console.log(promessa["array"])

var compras =[]

compras.push("banana","pera","uva")

console.log(compras.length)

compras[5] = "manga"
console.log(compras[5])
console.log(Object.keys(compras))
console.log(compras.length)

compras.length =10;
console.log(Object.keys(compras))
console.log(compras.length)

compras.length = 2;
console.log(Object.keys(compras))
console.log(compras.length)

var regex = /d(b+)(d)/i;
var meuArray = regex.exec("cdb8dbsbz")
console.log(meuArray)

var msgArray = new Array();
msgArray[0] = "helho";
msgArray[99] = "world";

if(msgArray.length == 100) console.log("O length é 100");
console.log(Object.keys(msgArray))
console.log(msgArray)

var frutas =["jaca","mamão"]
console.log(frutas.length)

var primeiro = frutas[0]
console.log(primeiro)

var ultimo = frutas[frutas.length - 1]
console.log(ultimo)

frutas.forEach(function (item, indice, array){
               console.log(item,indice)
               });
var adcionar = frutas.push("caju")
console.log(frutas)


var ultimo = frutas.pop()
console.log(frutas)

var primeiro = frutas.shift()
console.log(frutas)

var adcionar = frutas.unshift("jabuticaba")
console.log(frutas)

frutas.push("pitaia")

var pos = frutas.indexOf("mamão")
console.log(pos)

var removedItem = frutas.splice(pos,1)
console.log(frutas)

var vegetais = ["Repolho", "nabo", "rabanete", "cenoura"]
console.log(vegetais)

var posicao = 1
    n=2

var itensRemovidos = vegetais.splice(posicao,n)
console.log(vegetais)

console.log(itensRemovidos)

var copiar = vegetais.slice()
console.log(copiar)

var impar = [1,3,5,7]
var map1 = impar.map((x) => x*2)

console.log(map1)

var palavras = ["boca", "ventilador", "caixa", "nariz", "abacaxi", "perna", "tornozelo"]

var result = palavras.filter((palavras) => palavras.length > 6)

console.log(result)

var pares = [2,4,6,8]

var valorinicial = 0;
var reduzirvalorinicial = pares.reduce(
  (acumular, valor) => acumular + valor, valorinicial,
)

console.log(reduzirvalorinicial)

var pessoa1 = {}
pessoa1["primeiroNome"] = "Andy";
pessoa1["segundoNome"] = "Ramos";

console.log(pessoa1.primeiroNome);

var pessoa2 = {
  primeironome:"graci",
  segundonome:"silva",
};

console.log(pessoa2["segundonome"]);

var objeto = {}
objeto["1"] = "value";
console.log(objeto[1])

var foo = { unico:1},
    bar= {unico:2},
    objeto = {}
objeto[foo] = "value"
console.log(objeto[bar])


function comida(){
  console.log(`Amo comer ${receitass}`)}

receitass ="Brigadeiro"

console.log(comida)

function saudação(nome){
  
 console.log(`ola ${nome}`)
  
}

function pergunta(callback){
  
  var name = prompt("qual seu nome?")
  callback(name)
}
//pergunta(saudação)

function somarnumeros(array){
  return array.reduce((total,num)=> total+num, 0)
}
  console.log(somarnumeros([2,2,2,2]))

const minhalista = [1,2,3,4,6,8,11]
const duplicados = minhalista.map(num => num*2)

console.log(duplicados)

const numpares = minhalista.filter(num => num%2 === 0)
console.log(numpares)

const carros = {
  marca:["Toyota", "fiat"],
  modelo: "Corolla",
  ano:2020,
  ligar:function(){
    console.log("Carro comprado")
  }
};
carros.ligar()

function processar(valor, callback){
  return callback(valor)
}
const procssresultado = processar(5, num => num*2)
console.log(procssresultado)

function inverterstring(str){
  return str.split("").reverse().join("")
}
console.log(inverterstring("amora"))

const maior = minhalista.reduce((max,num) => num > max ? num : max, minhalista[0]);
console.log(maior)

const pessoas = [{nome:"ana", idade: 25}, {nome:"Andy", idade:29}, {nome:"graci", idade:20}]
pessoas.sort((a,b) => a.idade - b.idade)
console.log(pessoas)

function contarletras(str){
  const contagem ={}
  for(let char of str){
      contagem[char]=(contagem[char]|| 0) +1}
      return contagem
}
console.log(contarletras("banana"))

const carrinho = []
function adcionaritem(nome,preco){
  carrinho.push({nome,preco})
}
function totalcarrinho(){
  return carrinho.reduce((total,item) => total +item.preco, 0)
}
adcionaritem("livro", 30)
adcionaritem("caneta",5)
console.log(totalcarrinho())

function removerduplicata(arr){
  return [...new Set(arr)]
}
console.log(removerduplicata([2,2,1,3,3,3]))


minhalista.forEach(num => console.log(num))

function ehPalindromo(palavra){
  const invertida = palavra.split("").reverse().join("")
  return palavra === invertida
}

console.log(ehPalindromo("casa"))

const exemplo =[];

function adcionartarefa(exemplos){
  exemplo.push(exemplos)
}
function removertarefa(indice){
  exemplo.splice(indice,1)
}
function listartarefas(){
  exemplo.forEach((exemplos,index) =>{
    console.log(`${index}: ${exemplo}`)
  })
}
adcionartarefa("Estudar javascript")
adcionartarefa("Lavar o cabelo")
listartarefas()
removertarefa(0)
listartarefas()

const pessoa = {  nome: "Maria",  saudacao: function() {    
  console.log(`Olá, meu nome é ${this.nome}`);  
}}
pessoa.saudacao()

const saudacaofora = pessoa.saudacao
saudacaofora()