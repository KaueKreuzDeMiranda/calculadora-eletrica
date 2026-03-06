let aparelho = prompt("Insira o seu aparelho: ");
let opcao = parseInt(prompt("Escolha a medida da potência do seu aparelho:\n1 - Watt\n2 - Quilowatt"));

if(opcao == 1){
    let valorWatt;
    let potenciaWatt = parseFloat(prompt("Insira a potência em Watt do seu aparelho: "));
    let tempoWatt = parseFloat(prompt("Insira o tempo de uso diário do seu aparelho: "));
    potenciaWatt = (((potenciaWatt * tempoWatt) / 1000) * 30);
    valorWatt = potenciaWatt * 0.9;
    console.log("Eletrodoméstico:" , aparelho , "\nkWh por mês:" , (potenciaWatt.toFixed(2)) , "\nValor mensal:" , (valorWatt.toFixed(2)) , "reais");
} else if(opcao == 2){
    let valorQuiloWatt;
    let potenciaQuiloWatt = parseFloat(prompt("Insira a potência em QuiloWatt do seu aparelho: "));
    let tempoQuiloWatt = parseFloat(prompt("Insira o tempo de uso diário do seu aparelho: "));
    potenciaQuiloWatt = ((potenciaQuiloWatt * tempoQuiloWatt) * 30);
    valorQuiloWatt = potenciaQuiloWatt * 0.9;
    console.log("Eletrodoméstico:" , aparelho , "\nkWh por mês:" , (potenciaQuiloWatt.toFixed(2)) , "\nValor mensal:" , (valorQuiloWatt.toFixed(2)) , "Reais");
} else{
    console.log("Opção inválida!");
}