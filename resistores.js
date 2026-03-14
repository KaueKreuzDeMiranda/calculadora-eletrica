function resistores(){
    let qntFaixas = parseInt(prompt("Quantas faixas possui seu resistor?\n1 - 4 faixas\n2 - 5 faixas"));
    let resistencia, faixa1, faixa2, faixa3, faixaMulti, faixaTolerancia;

    switch(qntFaixas){
        case 1:
            faixa1 = prompt("Qual é a cor da primeira faixa? ").toLowerCase();
            faixa2 = prompt("Qual é a cor da segunda faixa? ").toLowerCase();
            faixaMulti = prompt("Qual é a cor da faixa do multiplicador? ").toLowerCase();
            faixaTolerancia = prompt("Qual é a cor da faixa de tolerância? ").toLowerCase();

            if(faixa1 == "preto"){
                faixa1 = 0;
            }else if(faixa1 == "marrom"){
                faixa1 = 1;
            }else if(faixa1 == "vermelho"){
                faixa1 = 2;
            }else if(faixa1 == "laranja"){
                faixa1 = 3;
            }else if(faixa1 == "amarelo"){
                faixa1 = 4;
            }else if(faixa1 == "verde"){
                faixa1 = 5;
            }else if(faixa1 == "azul"){
                faixa1 = 6;
            }else if(faixa1 == "violeta"){
                faixa1 = 7;
            }else if(faixa1 == "cinza"){
                faixa1 = 8;
            }else if(faixa1 == "branco"){
                faixa1 = 9;
            }else{
                console.log("Cor inválida");
            }

            if(faixa2 == "preto"){
                faixa2 = 0;
            }else if(faixa2 == "marrom"){
                faixa2 = 1;
            }else if(faixa2 == "vermelho"){
                faixa2 = 2;
            }else if(faixa2 == "laranja"){
                faixa2 = 3;
            }else if(faixa2 == "amarelo"){
                faixa2 = 4;
            }else if(faixa2 == "verde"){
                faixa2 = 5;
            }else if(faixa2 == "azul"){
                faixa2 = 6;
            }else if(faixa2 == "violeta"){
                faixa2 = 7;
            }else if(faixa2 == "cinza"){
                faixa2 = 8;
            }else if(faixa2 == "branco"){
                faixa2 = 9;
            }else{
                alert("Cor inválida");
            }

            if(faixaMulti == "preto"){
                faixaMulti = 1;
            }else if(faixaMulti == "marrom"){
                faixaMulti = 10;
            }else if(faixaMulti == "vermelho"){
                faixaMulti = 100;
            }else if(faixaMulti == "laranja"){
                faixaMulti = 1000;
            }else if(faixaMulti == "amarelo"){
                faixaMulti = 10000;
            }else if(faixaMulti == "verde"){
                faixaMulti = 100000;
            }else if(faixaMulti == "azul"){
                faixaMulti = 1000000;
            }else if(faixaMulti == "violeta"){
                faixaMulti = 10000000;
            }else if(faixaMulti == "cinza"){
                faixaMulti = 100000000;
            }else if(faixaMulti == "branco"){
                faixaMulti = 1000000000;
            }else if(faixaMulti == "ouro"){
                faixaMulti = 0.1;
            }else if(faixaMulti == "prata"){
                faixaMulti = 0.01;
            } else{
                alert("Cor inválida");
            }

            if(faixaTolerancia == "marrom"){
                faixaTolerancia = 1;
            }else if(faixaTolerancia == "vermelho"){
                faixaTolerancia = 2;
            }else if(faixaTolerancia == "ouro"){
                faixaTolerancia = 5;
            }else if(faixaTolerancia == "prata"){
                faixaTolerancia = 10;
            }else if(faixaTolerancia == "branco"){
                faixaTolerancia = 20;
            }

            resistencia = ((faixa1 * 10) + faixa2) * faixaMulti;

            console.log("A resistência do seu resistor é de:" , resistencia , "ohms\nE a tolerância é de:" , faixaTolerancia + "%");
            break;
        case 2:
            faixa1 = prompt("Qual é a cor da primeira faixa? ").toLowerCase();
            faixa2 = prompt("Qual é a cor da segunda faixa? ").toLowerCase();
            faixa3 = prompt("Qual é a cor da terceira faixa? ").toLowerCase();
            faixaMulti = prompt("Qual é a cor da faixa do multiplicador? ").toLowerCase();
            faixaTolerancia = prompt("Qual é a cor da faixa de tolerância? ").toLowerCase();

            if(faixa1 == "preto"){
                faixa1 = 0;
            }else if(faixa1 == "marrom"){
                faixa1 = 1;
            }else if(faixa1 == "vermelho"){
                faixa1 = 2;
            }else if(faixa1 == "laranja"){
                faixa1 = 3;
            }else if(faixa1 == "amarelo"){
                faixa1 = 4;
            }else if(faixa1 == "verde"){
                faixa1 = 5;
            }else if(faixa1 == "azul"){
                faixa1 = 6;
            }else if(faixa1 == "violeta"){
                faixa1 = 7;
            }else if(faixa1 == "cinza"){
                faixa1 = 8;
            }else if(faixa1 == "branco"){
                faixa1 = 9;
            }else{
                alert("Cor inválida");
            }

            if(faixa2 == "preto"){
                faixa2 = 0;
            }else if(faixa2 == "marrom"){
                faixa2 = 1;
            }else if(faixa2 == "vermelho"){
                faixa2 = 2;
            }else if(faixa2 == "laranja"){
                faixa2 = 3;
            }else if(faixa2 == "amarelo"){
                faixa2 = 4;
            }else if(faixa2 == "verde"){
                faixa2 = 5;
            }else if(faixa2 == "azul"){
                faixa2 = 6;
            }else if(faixa2 == "violeta"){
                faixa2 = 7;
            }else if(faixa2 == "cinza"){
                faixa2 = 8;
            }else if(faixa2 == "branco"){
                faixa2 = 9;
            }else{
                alert("Cor inválida");
            }

            if(faixa3 == "preto"){
                faixa3 = 0;
            }else if(faixa3 == "marrom"){
                faixa3 = 1;
            }else if(faixa3 == "vermelho"){
                faixa3 = 2;
            }else if(faixa3 == "laranja"){
                faixa3 = 3;
            }else if(faixa3 == "amarelo"){
                faixa3 = 4;
            }else if(faixa3 == "verde"){
                faixa3 = 5;
            }else if(faixa3 == "azul"){
                faixa3 = 6;
            }else if(faixa3 == "violeta"){
                faixa3 = 7;
            }else if(faixa3 == "cinza"){
                faixa3 = 8;
            }else if(faixa3 == "branco"){
                faixa3 = 9;
            }else{
                alert("Cor inválida");
            }

            if(faixaMulti == "preto"){
                faixaMulti = 1;
            }else if(faixaMulti == "marrom"){
                faixaMulti = 10;
            }else if(faixaMulti == "vermelho"){
                faixaMulti = 100;
            }else if(faixaMulti == "laranja"){
                faixaMulti = 1000;
            }else if(faixaMulti == "amarelo"){
                faixaMulti = 10000;
            }else if(faixaMulti == "verde"){
                faixaMulti = 100000;
            }else if(faixaMulti == "azul"){
                faixaMulti = 1000000;
            }else if(faixaMulti == "violeta"){
                faixaMulti = 10000000;
            }else if(faixaMulti == "cinza"){
                faixaMulti = 100000000;
            }else if(faixaMulti == "branco"){
                faixaMulti = 1000000000;
            }else if(faixaMulti == "ouro"){
                faixaMulti = 0.1;
            }else if(faixaMulti == "prata"){
                faixaMulti = 0.01;
            } else{
                alert("Cor inválida");
            }

            if(faixaTolerancia == "marrom"){
                faixaTolerancia = 1;
            }else if(faixaTolerancia == "vermelho"){
                faixaTolerancia = 2;
            }else if(faixaTolerancia == "ouro"){
                faixaTolerancia = 5;
            }else if(faixaTolerancia == "prata"){
                faixaTolerancia = 10;
            }else if(faixaTolerancia == "branco"){
                faixaTolerancia = 20;
            }

            resistencia = ((((faixa1 * 100) + (faixa2 * 10)) + faixa3) * faixaMulti);

            console.log("A resistência do seu resistor é de:" , resistencia , "ohms\nE a tolerância é de:" , faixaTolerancia + "%");
            break;
        default:
            alert("Opção inválida!");
        
    }
}