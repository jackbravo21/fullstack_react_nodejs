const Sequelize = require("sequelize");
const database = require("../config/dbConfig");
const { DataTypes } = Sequelize;

const Users = database.define("users",
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fullname:{
        type: DataTypes.STRING,
    },
    mail:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    administrator:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        tableName: "users",  // Especificando o nome exato da tabela (pode ser posto no singular 'user'), se nao ele cria como plural automatico, como o mongo;
        timestamps: false    // Se você não deseja que o Sequelize adicione colunas como createdAt, updatedAt, etc.
    });

module.exports = Users;