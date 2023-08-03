import PromptSync from "prompt-sync";

import { verificarMayorIdade, numerosPares, tabuada, calcular, contagemRegressiva, numerosImpares, numeros, numeroDiferente } from "./exercicios";

const prompt = PromptSync();

//MENU para escolher qual exercicio o usuario escolher

let exercicio: number ;
let continuar:string;

do {

    exercicio = parseInt(prompt("Digite um numero que represente um exercicio de 1 a 10: "))

    switch (exercicio) {
        case 1:
            //Chamando função Hello World()
            helloWorld("Hello World!!")
            break;
        case 2:
            //objeto
            let aluno: {nome: string, idade:number, hardSkills: string[]} = {
                nome: "Sarina",
                idade: 19,
                hardSkills: ["Figma", "HTML", "CSS", "Web Responsive"]
            }
            //acessando objeto pela propiedade
            console.log(aluno.nome, aluno.idade, aluno.hardSkills);
            //exibindo objeto interno
            console.log("Objjeto aluno", aluno);
            break;
        case 3:
            verificarMayorIdade();
            break;
        case 4:
            numerosPares();
            break;
        case 5:
            tabuada();
            break;
        case 6:
            calcular();
            break;
        case 7:
            contagemRegressiva();
            break;
        case 8:
            numerosImpares();
            break;
        case 9:
            numeros();
            break;
        case 10:
            numeroDiferente();
            break;
        default:
            console.log("Digite o numero de 1 a 10");
            break;
    }

    continuar = prompt("Deseja continuar ver outros exercicios? Digite s para sim e digite n para não: ").toLocaleUpperCase() //ætoLocaleUpperCase transforma o texto em miniscula

} while (continuar === "S");

function helloWorld(frase:string) {
    console.log(frase);
}


