let funcao = parseInt(prompt("Qual função você deseja fazer?\n1 - Ver o consumo mensal\n2 - Calcular a miliunidade"));

switch(funcao){
    case 1:
        ConsumoMensal();
        break;
    case 2:
        miliUnidade();
        break;
    default:
        console.log("Opção inválida!");
}