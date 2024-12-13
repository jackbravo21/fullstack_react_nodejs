require('dotenv').config();
const express           = require("express");
const app               = express();
const port              = 9000;
const cors              = require("cors");
const multer            = require('multer');
const path              = require('path');
const cookieParser      = require('cookie-parser');

//instancia das rotas
const testeRoute        = require("./routes/teste");
const usersRoute        = require("./routes/userRoute");
const productsRoute     = require("./routes/productRoute");
// Middleware de tratamento de erros, deve ser registrado por ultimo sempre;
const errorHandler      = require('./middlewares/erroHandler');

//cors sempre antes das rotas;
const corsOptions = {
    origin: 'http://localhost:3000',  //ou "*" para permitir qualquer origem (não recomendado em produção), aqui esta permitindo o ip do front;
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],  //Authorization eh para caso eu uso bearToken;
    credentials: true,                 // Permite envio de cookies;
};
app.use(cors(corsOptions));

//Middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Tornar o diretório 'images' público, basta digitar "http://localhost:9000/uploads/1731513908510.png";
app.use('/images', express.static(path.join(__dirname, 'images')));
//app.use(cors());
app.use(errorHandler);      //errorHandler sempre como ultima rota;

//agora associo as duas instancias no APP;
app.use('/teste', testeRoute);                  //quando acessar o teste ele vai para a rotas;
app.use('/users', usersRoute);                  //quando acessarem o link users, vai para o usersRoute;
app.use('/products', productsRoute);

//Conecting with DB:
(async() => {
    const conn = require("./config/dbConfig");

    try{
        const result = await conn.sync({alter: true});

        console.log("\x1b[35m", "Conectado ao banco de dados com sucesso!");
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
})();

app.listen(port, () => {
    console.log("\x1b[34m", `Servidor rodando na porta ${port}.`);
});
