// Função para comparar duas datas e retornar a maior delas
function compararDatas() {
    const data1 = new Date(document.getElementById('date1').value);
    const data2 = new Date(document.getElementById('date2').value);

    let resultado;
    if (data1 > data2) {
        resultado = "A primeira data é maior.";
    } else if (data1 < data2) {
        resultado = "A segunda data é maior.";
    } else {
        resultado = "As datas são iguais.";
    }

    document.getElementById('resultado').innerText = resultado;
}

// Função para calcular o intervalo entre duas datas
function calcularIntervalo() {
    const data1 = new Date(document.getElementById('date1').value);
    const data2 = new Date(document.getElementById('date2').value);

    // Verifica se a primeira data é mais antiga que a segunda data
    if (data1.getTime() < data2.getTime()) {
        const diferenca = data2.getTime() - data1.getTime();
        const diferencaDias = Math.floor(diferenca / (1000 * 3600 * 24));

        document.getElementById('resultado').innerText = `O intervalo entre as datas é de ${diferencaDias} dias.`;
    } else {
        document.getElementById('resultado').innerText = "A primeira data deve ser mais antiga que a segunda data.";
    }
}

// Função para obter a data atual no formato especificado
function obterDataAtual() {
    const dataAtual = new Date();
    const dataFormatada = `${dataAtual.getHours()}:${dataAtual.getMinutes()} - ${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`;

    document.getElementById('resultado').innerText = `Data atual: ${dataFormatada}`;
}