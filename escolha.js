let funcao = parseInt(prompt("Qual função você deseja fazer?\n1 - Ver o consumo mensal\n2 - Converter\n3 - calcular resistores\n4 - Lei de Ohm"));

switch (funcao) {
    case 1:
        ConsumoMensal();
        break;
    case 2:
        conversao();
        break;
    case 3:
        resistores();
        break;
    case 4:
        leiDeOhm();
        break;
    default:
        console.log("Opção inválida!");
}