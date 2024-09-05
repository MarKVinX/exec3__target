// Dados de faturamento diário em JSON
const faturamentoDiario = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0},
    {"dia": 8, "valor": 42889.2258},
    // Continue com os valores para os outros dias do mês...
];

// Função para calcular o menor valor de faturamento, maior valor e dias acima da média
function calcularFaturamento(faturamentoDiario) {
    let menorFaturamento = Number.MAX_VALUE;
    let maiorFaturamento = Number.MIN_VALUE;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
    let diasAcimaDaMedia = 0;

    // Calcula o total de faturamento e encontra o menor e o maior valor, ignorando dias com valor 0
    faturamentoDiario.forEach((dia) => {
        if (dia.valor > 0) {
            somaFaturamento += dia.valor;
            diasComFaturamento++;

            if (dia.valor < menorFaturamento) {
                menorFaturamento = dia.valor;
            }

            if (dia.valor > maiorFaturamento) {
                maiorFaturamento = dia.valor;
            }
        }
    });

    // Calcula a média mensal de faturamento
    const mediaMensal = somaFaturamento / diasComFaturamento;

    // Conta o número de dias com faturamento superior à média mensal
    faturamentoDiario.forEach((dia) => {
        if (dia.valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    });

    // Retorna os resultados
    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Chama a função e obtém os resultados
const resultados = calcularFaturamento(faturamentoDiario);

// Exibe os resultados
console.log(`Menor valor de faturamento: ${resultados.menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${resultados.maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média mensal: ${resultados.diasAcimaDaMedia}`);