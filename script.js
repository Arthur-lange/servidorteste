const express = require('express')
const {soma, subtracao, multiplicacao, divisao } = require('./teste')

const server = express()

const PORT = 8000

server.get ('/soma', (req,res) => {
  res.semd('aqui vai o resultado da minha conta')
})
server.get ('/subtracao', (req,res) => {
  res.semd('aqui vai o resultado da minha conta ')
})
server.get ('/multiplicacao', (req,res) => {
  res.semd('aqui vai o resultado da minha conta ')
})
server.get ('/multiplicacao', (req,res) => {
  res.semd('aqui vai o resultado da minha conta ')
})

server.listen(PORT, ()=> {
  console.log(`Servidor rodando na porta ${PORT}`)
})



// //criar servidor
// const server = http.createServer((req, res) =>{
//     const urlCapturada = url.parse(req.url, true)
//     const {query} = urlCapturada
//     let resultado = soma(Number(query.a), Number(query.b))
//     res.end(`o valor final é ${resultado}`)
//   if(pathname == '/soma'){
//     resultado = soma(Number(query.a), Number(query.b))
//   } else if (pathname == '/subtracao'){
//     resultado = subtracao(Number(query.a), Number(query.b))
//   } else if (pathname == '/divisao'){
//     resultado = divisao (Number(query.a), Number(query.b))
//   } else if (pathname == '/multiplicacao'){
//     resultado = multiplicacao(Number(query.a), Number(query.b))
//   } else {
//     res.statusCode = 404
//     mensagem = 'pagina não encontrada'
//   }
//   res.end(mensagem)

// })