/*
A propriedade process.argv pega os parâmetros do comando.
No comando node ./src/exemplo2.js Ana Maria Silva
A propriedade process.argv terá o seguinte array:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\codigo\\src\\dois.js',
  'Ana',
  'Maria',
  'Silva'
]
Observe que os parâmetros estão a partir da posição 2 do array
*/
if (process.argv.length > 2) {
  for(let i = 0; i < process.argv.length; i++){
    console.log(`Parâmetro recebido: ${process.argv[i]}`);
  }
} else {
  console.log("Nenhum parâmetro foi passado.");
}