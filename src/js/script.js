const formCalculadora = document.getElementById('form-calculadora');
const valorInput = document.getElementById('valor');
const operacaoSelect = document.getElementById('operacao');
const quantidadeInput = document.getElementById('quantidade');
const resultadoDiv = document.getElementById('resultado');

formCalculadora.addEventListener('submit', (event) => {
    event.preventDefault();
    const valor = parseFloat(valorInput.value);
    const operacao = operacaoSelect.value;
    const quantidade = parseInt(quantidadeInput.value);
    let resultado;

    switch (operacao) {
        case 'multiplicar':
            resultado = valor * 0.01461;
            break;
        case 'volume':
            resultado = valor * 0.34;
            break;
    }

    resultado = (resultado / quantidade) / (quantidade - 1);
    let result = (resultado) *(quantidade -1);

    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Valor:  ${valor.toFixed(2)}</p>
        <p>Operação: ${operacao}</p>
        <p>Quantidade: ${quantidade}</p>
        <strong><p>Valor para cada um: R$ ${resultado.toFixed(2)}</p>
        <p>Total à pagar: R$ ${result.toFixed(2)}</p></strong>
    `;
});