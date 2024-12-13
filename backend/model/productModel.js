const Sequelize = require("sequelize");
const database = require("../config/dbConfig");
const { DataTypes } = Sequelize;

const Products = database.define("products",
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    way:{
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },    
    description:{
        type: DataTypes.TEXT,
    },
    type:{
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        tableName: "products",  // Especificando o nome exato da tabela (pode ser posto no singular 'user'), se nao ele cria como plural automatico, como o mongo;
        timestamps: false    // Se você não deseja que o Sequelize adicione colunas como createdAt, updatedAt, etc.
    });

module.exports = Products;