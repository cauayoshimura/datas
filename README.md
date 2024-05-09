# Funções de Data

Este é um projeto simples que implementa algumas funções em JavaScript para lidar com operações de data, como comparar datas, calcular intervalo entre datas e obter a data atual.

## Funcionalidades Implementadas

### 1. Comparar Datas

A função `compararDatas()` recebe duas datas informadas pelo usuário e compara-as para determinar qual é a maior. Se a primeira data for maior que a segunda, a função exibirá a mensagem "A primeira data é maior." Se a segunda data for maior que a primeira, exibirá "A segunda data é maior." Se as datas forem iguais, a mensagem será "As datas são iguais."

### 2. Calcular Intervalo entre Datas

A função `calcularIntervalo()` recebe duas datas informadas pelo usuário e calcula o intervalo em dias entre elas. A função primeiro verifica se a primeira data é mais antiga que a segunda data. Se for, calcula a diferença em milissegundos entre as datas e converte essa diferença em dias. O resultado é então exibido na página HTML.

### 3. Obter Data Atual

A função `obterDataAtual()` retorna a data e hora atuais no formato "hora:minuto - dia/mês/ano". Esta função utiliza o objeto `Date` do JavaScript para obter a data atual, e então formata essa data conforme o padrão desejado.

## Como Utilizar

1. Abra o arquivo `index.html` em seu navegador.
2. Informe duas datas nos campos fornecidos.
3. Clique nos botões correspondentes para executar as operações desejadas:
    - "Comparar Datas" irá mostrar qual das duas datas é maior.
    - "Calcular Intervalo" irá calcular quantos dias há entre as duas datas.
    - "Obter Data Atual" irá exibir a data e hora atuais no formato especificado.

Certifique-se de ter o JavaScript habilitado em seu navegador para que as funções funcionem corretamente.
