# Funções de Data

Este projeto consiste em uma página HTML simples que utiliza JavaScript para realizar operações com datas, incluindo comparação de datas, cálculo de intervalo e obtenção da data atual.

## Funcionalidades

### Comparar Datas

A função `compararDatas()` recebe duas datas fornecidas pelo usuário e compara-as, exibindo uma mensagem indicando qual das datas é maior, ou se são iguais.

### Calcular Intervalo

A função `calcularIntervalo()` recebe duas datas fornecidas pelo usuário e calcula o intervalo entre elas em dias. A função verifica se a primeira data é mais antiga que a segunda data antes de realizar o cálculo.

### Obter Data Atual

A função `obterDataAtual()` obtém a data atual do sistema e a exibe no formato "hora:minuto - dia/mês/ano".

## Utilização

1. Abra o arquivo `index.html` em um navegador da web.
2. Insira duas datas nos campos fornecidos.
3. Clique nos botões correspondentes para realizar as operações desejadas.

## Como Executar

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador da web.

## Exemplo de Uso

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funções de Data</title>
</head>
<body>
    <h1>Funções de Data</h1>

    <label for="date1">Informe a primeira data:</label>
    <input type="date" id="date1">

    <label for="date2">Informe a segunda data:</label>
    <input type="date" id="date2">

    <button onclick="compararDatas()">Comparar Datas</button>
    <button onclick="calcularIntervalo()">Calcular Intervalo</button>
    <button onclick="obterDataAtual()">Obter Data Atual</button>

    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
