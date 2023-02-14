function verifyNumber () {
  return (req, res, next) => {
    try {
      const values = req.params
      const allNumbers = Object.keys(values).filter(element => element !== 'op').every(item => !isNaN(Number(req.params[item])))
      allNumbers
        ? modificarReq(req, next)
        : res.send('Todos los parametros tiene que ser numeros')
    } catch (err) {
      res.send(err.message)
    }
  }
}

function modificarReq (req, next) {
  req.params = {
    op: req.params.op,
    numerador: Number(req.params.numero1),
    denominador: Number(req.params.numero2)
  }
  next()
}

module.exports = verifyNumber
