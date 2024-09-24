// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('livros_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;