function conversao(){
    const unidadeBase = prompt("Insira a grandeza de base: ");
    const de = prompt("Insira o prefixo de partida: ").toLowerCase();
    const para = prompt("Insira o prefixo de resultado: ").toLowerCase();
    const valor = parseFloat(prompt(`Digite o valor de ${unidadeBase} que deseja converter:`));

    const prefixos = {
        'giga':  1e9,
        'mega':  1e6,
        'quilo': 1e3,
        'hecto': 1e2,
        'deca':  1e1,
        'base': 1,
        'deci':  1e-1,
        'centi': 1e-2,
        'mili':  1e-3,
        'micro': 1e-6,
        'nano':  1e-9
    };

    if (!prefixos[de] || !prefixos[para]) {
        console.log("Erro: Um dos prefixos digitados não é válido.");
    } else if (isNaN(valor)) {
        console.log("Erro: O valor digitado não é um número válido.");
    } else {
        const resultado = (valor * prefixos[de]) / prefixos[para];

        const nomePrefixoDe = de === 'base' ? '' : de;
        const nomePrefixoPara = para === 'base' ? '' : para;

        const origemCompleta = nomePrefixoDe + unidadeBase;
        const destinoCompleto = nomePrefixoPara + unidadeBase;

        console.log(`${valor} ${origemCompleta} equivale a ${resultado} ${destinoCompleto}`);
    }
}