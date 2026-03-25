function leiDeOhm (){
    let opcaoLeiOhm = parseInt(prompt("O que deseja calcular?\n1 - Tensão\n2 - Corrente\n3 - Resistência"));
    let u, i, r;

    switch(opcaoLeiOhm){
        case 1:
            i = parseFloat(prompt("Insira a corrente: "));
            r = parseFloat(prompt("Insira a resistência: "));

            u = i * r;

            console.log("A tensão é: " , u);
            break;
        case 2:
            u = parseFloat(prompt("Insira a tensão: "));
            r = parseFloat(prompt("Insira a resistência: "));

            i = u / r;

            console.log("A corrente é: " , i);
            break;
        case 3:
            u = parseFloat(prompt("Insira a tensão: "));
            i = parseFloat(prompt("Insira a corrente: "));

            r = u / i;

            console.log("A resistência é: " , r);
            break;
        default:
            console.log("Opção inválida!");
    }
}