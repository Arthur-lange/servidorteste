const http = require('http')
const {soma} = require('./teste')

const PORT = 8000

const server = http.createServer((req,res) => {
    let valores = req.url
    .replace('/','')
    .replace('?','')
    .split('&')
    let parametros = {}
  for (item in valores) {
    let chaveValor = valores[item].split ('=')
    parametros[chaveValor[0]] = Number(chaveValor[1])
  }
})
server.listen(PORT, () => {
console.log(`servidor soi inicializado na porta ${PORT}`)
})
