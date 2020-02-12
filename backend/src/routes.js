const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.status(200).json({ message: "Este Serviço esta Funcionando com Sucesso" })
})

module.exports = routes;