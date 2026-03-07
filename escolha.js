let funcao = parseInt(prompt("Qual função você deseja fazer?\n1 - Ver o consumo mensal\n2 - Converter"));

switch (funcao) {
    case 1:
        ConsumoMensal();
        break;
    case 2:
        conversao();
        break;
    default:
        console.log("Opção inválida!");
}