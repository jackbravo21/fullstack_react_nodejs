const Sequelize = require("sequelize");
const database = require("../config/dbConfig");
const { DataTypes } = Sequelize;

const LogError = database.define("log_error",
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status_code:{
        type: DataTypes.TEXT,
    },
    message:{
        type: DataTypes.TEXT,
    },
    endpoint:{
        type: DataTypes.TEXT,
    },
    method:{
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        tableName: "log_error",  // Especificando o nome exato da tabela (pode ser posto no singular 'user'), se nao ele cria como plural automatico, como o mongo;
        timestamps: false    // Se você não deseja que o Sequelize adicione colunas como createdAt, updatedAt, etc.
    });

module.exports = LogError;