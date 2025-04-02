const http = require('http')
const url = require('url')
const {soma} = require('./teste')

const PORT = 8000

//criar servidor
const server = http.createServer((req, res) =>{
    const urlCapturada = url.parse(req.url, true)
    const {query} = urlCapturada
    let resultado = soma(Number(query.a), Number(query.b))
    res.end(`o valor final é ${resultado}`)
  if(pathname == '/soma'){
    resultado = soma(Number(query.a), Number(query.b))
  } else if (pathname == '/subtracao'){
    resultado = subtracao(Number(query.a), Number(query.b))
  } else if (pathname == '/divisao'){
    resultado = divisao (Number(query.a), Number(query.b))
  } else if (pathname == '/multiplicacao'){
    resultado = multiplicacao(Number(query.a), Number(query.b))
  } else {
    res.statusCode = 404
    mensagem = 'pagina não encontrada'
  }
  res.end(mensagem)

})

server.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})

