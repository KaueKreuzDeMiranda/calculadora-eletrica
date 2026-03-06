function miliUnidade(){
    let unidade = parseInt(prompt("Qual unidade você deseja converter?\n1 - Volt\n2 - Watt\n3 - Ampère\n4 - Ohm"));
    let valor = parseFloat(prompt("Insira o valor a ser convertido: "));

    switch(unidade){
        case 1:
            valor *= 1000;
            console.log("O resulta é de:" , valor , "Milivolt");
            break;
        case 2:
            valor *= 1000;
            console.log("O resulta é de:" , valor , "Miliwatt");
            break;
        case 3:
            valor *= 1000;
            console.log("O resulta é de:" , valor , "Miliampère");
            break;
        case 4:
            valor *= 1000;
            console.log("O resulta é de:" , valor , "Miliohm");
            break;
    }
}