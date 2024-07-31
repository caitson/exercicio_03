function cobacoba(nome: string): void{
    console.log(nome,' terminou de fazer coba!')
}

function calculoDeDoisNumero(numero1: number, numero2: number): number{
    const resultado = numero1 + numero2;
    return resultado;
}

function quemFala(nome: string): string{
    return 'é o '+nome
}

class Aluno {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

let listDeNumeros = [1,2,3,4,5,6];
let listNomes: string[];
let listNotas: number[];
let listDeAnluno: Aluno[];

//cobacoba('Nixon');

const somaDeNumero = calculoDeDoisNumero(2,4);
const nomeDeFulanon = quemFala('Sunto')

//console.log(quemFala('Sunto'))
//console.log(nomeDeFulanon)

listDeNumeros.forEach(()=>{

})
console.log(listDeNumeros[1])