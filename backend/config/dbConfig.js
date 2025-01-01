const Sequelize = require("sequelize");

/*
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql'
});
*/

const sequelize = new Sequelize("products", "root", "", {
    host: "localhost", dialect: "mysql"
});

sequelize   
    .authenticate()
    .then(() => {
        console.log("Conectado no DB com sucesso!");
    })
    .catch((error) => {
        console.log("Erro ao conectar no DB", error);
    });

// Sincroniza os modelos com a base de dados, mas sem truncar (sem usar force: true)
sequelize
  .sync({ alter: true })  // Vai alterar as tabelas se necessário, sem apagar dados
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao sincronizar as tabelas", error);
  });

//sequelize.close();

module.exports = sequelize;