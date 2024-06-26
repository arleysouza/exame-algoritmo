## Prova de Algoritmos e Lógica de Programação

No arquivo `src/foods.json` existe um array com 597 objetos JSON. Cada objeto jSON possui os dados de um alimento extraído da Tabela TACO (Tabela Brasileira de Composição de Alimentos).

A TACO contém informações precisas e detalhadas sobre a composição nutricional de uma ampla variedade de alimentos, incluindo frutas, vegetais, carnes, cereais, leguminosas, produtos industrializados, entre outros. Esses dados incluem valores de macronutrientes (proteínas, carboidratos, lipídios), micronutrientes (vitaminas e minerais), e outros componentes como fibras alimentares, colesterol e energia (calorias).

### Exemplos
__Exemplo 1__ - O arquivo `src/exemplo1.js` possui o código para listar a quantidade de elementos do array que está no arquivo `foods.json`.
```
// utiliza a função require do Node.js para importar um arquivo JSON
// A variável foods recebe o array que está no arquivo foods.json
const foods = require("./foods.json");
// acessa a propriedade items do array
console.log(`Quantidade de alimentos: ${foods.length}`);
```
Use o comando `npm run exemplo1`, visto que este comando executa o comando `node ./src/exemplo1.js` que está na propriedade `scripts` do `package.json`.

__Exemplo 2__ - O arquivo `src/exemplo2.js` possui o código para ler os parâmetros passados pela linha de comando.
A propriedade `process.argv` pega os parâmetros do comando. Como exemplo, no comando `node ./src/exemplo2.js Ana Maria Silva` a propriedade `process.argv` terá o seguinte array:
```
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\codigo\\src\\dois.js',
  'Ana',
  'Maria',
  'Silva'
]
```
Observe que os parâmetros estão a partir da posição __2__ do array.
```
if (process.argv.length > 2) {
  for(let i = 0; i < process.argv.length; i++){
    console.log(`Parâmetro recebido: ${process.argv[i]}`);
  }
} else {
  console.log("Nenhum parâmetro foi passado.");
}
```


### Exercícios
Cada exercício vale 2,5 pts.


__Exercício 1__ - Codifique no arquivo `src/um.js` um programa para listar a __descrição__ e a __categoria__ de cada alimento do array que está no arquivo __foods.json__.
Dicas:
- Percorrer o array acessando as propriedades _description_ e _category_. A __categoria__ está na propriedade _name_ no objeto que está na propriedade _category_;
- Use a estrutura de repetição _for_ para percorrer o array.


__Exercício 2__ - Codifique no arquivo `src/dois.js` um programa que recebe recebe alguns números por parâmetro e imprime no console o somatório desses números.

Resultado esperado para `npm run dois 3 2 5`:
```
Somatório: 10
```
Resultado esperado para `npm run dois 3 2`:
```
Somatório: 5
```
Resultado esperado para `npm run dois`:
```
Somatório: 0
```
Dicas:
- Percorrer o array acessando as propriedades _description_ e _category_. A __categoria__ está na propriedade _name_ no objeto que está na propriedade _category_;
- Use a estrutura de repetição _for_ para percorrer o array que está na propriedade `process.argv`;
- converta para inteirdo cada elemento do array que está na propriedade `process.argv`;
- Acumule em uma variável cada valor convertido para inteiro.


__Exercício 3__ - Codifique no arquivo `src/tres.js` um programa que calcula o somatório das calorias de todos os alimentos do array que está no arquivo __foods.json__.

Resultado esperado para `npm run tres`:
```
Somatório: 116606
```
Dicas:
- Use a estrutura de repetição _for_ para percorrer o array;
- Percorrer o array acessando a propriedade _value_ do JSON que está na propriedade _energy_ de cada elemento do array;
- Acumule numa variável o valor da propriedade _energy.value_.


__Exercício 4__ - Alterar o código do Exercício 1 para imprimir no console os registros em um intervalo fornecido pelo usuário na linha de comando.

Resultado esperado para `npm run quatro 5 10`. Irá listar os elementos do array que estão nas posições de 5 a 9.
```
5 - Abadejo, filé, congelado, grelhado
6 - Abadejo, filé, congelado.cozido
7 - Abiu, cru
8 - Abóbora, cabotian, cozida
9 - Abóbora, cabotian, crua
```
Resultado esperado para `npm run quatro`:
```
necessário fornecer o intervalo de início e fim
```
