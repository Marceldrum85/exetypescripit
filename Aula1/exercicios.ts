import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function verificarMaiorIdade() {
    console.log(" 8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.");

    let pessoa: {nome: string, idade: number} = {
        nome: "",
        idade: 0
    }

    console.log("Sua idade deve ser maior que 18");

    do {
        pessoa.idade = parseInt(prompt("Digite sua idade: "));
        pessoa.nome = prompt("Digite seu nome: ");

    } while (pessoa.idade < 18);
    console.log("Idade valida!");
    console.log("Objeto", pessoa);
    console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é valida`);
}

export function numerosPares() {
    console.log("Imprimir números pares de 1 a 10.");

    for (let contador: number = 0; contador <= 10; contador += 2) {
        console.log(contador);
    }
}

export function tabuada() {
    console.log("Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.");

    let num: number = parseInt (prompt("Tabuada do número: "))

    for (let tabuada = 1; tabuada < 11; tabuada++) {
        console.log(num + " x " + tabuada + " = " + tabuada * num);
    }
}

export function calcular() {
    console.log("Calcular a soma dos números de 1 a 100 utilizando a estrutura while.");

    let resultado: number = 0
    let contador: number = 1;

    while (contador <= 100) {
        resultado = resultado + contador;
        console.log(resultado);
        contador++
    }
}

export function contagemRegressiva() {
    console.log("Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.");

    let numero: number = parseInt(prompt("Digite um numero: "))

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

export function numerosImpares() {
    console.log("Faça um programa que imprima os números ímpares de 0 a 50.");

    for (let contador: number = 1; contador < 50; contador += 2) {
        console.log(contador);

    }

}

export function numeros() {
    console.log("Imprimir números de 1 a 10 utilizando o loop for");

    for (let contador: number = 1; contador <= 10; contador++) {
        console.log(contador);

    }
}

export function numeroDiferente() {
    console.log("Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.");

    let numero: number;

    do {
        numero = parseInt (prompt("Digite um número: "))

    } while (numero != 0);
}