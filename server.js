const express = require('express')
const verifyNumber = require('./middleware')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const operador = {
  sum: ({ numerador, denominador }) => numerador + denominador,
  substack: ({ numerador, denominador }) => numerador + denominador,
  multiply: ({ numerador, denominador }) => numerador * denominador,
  division: ({ numerador, denominador }) => numerador / denominador
}

app.get('/:op/:numero1/:numero2',
  verifyNumber(),
  (req, res) => {
    try {
      const result = operador[req.params.op](req.params) ?? 0
      res.send(result.toString())
    } catch (error) {
      res.send('Operacion no válida')
    }
  }
)

app.listen(3000, () => console.log('listening http://localhost:3000'))
