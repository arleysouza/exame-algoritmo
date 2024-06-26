// utiliza a função require do Node.js para importar um arquivo JSON
const foods = require("./foods.json");

// acessa a propriedade itens do objeto
console.log(`Quantidade de alimentos: ${foods.length}`);