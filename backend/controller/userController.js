const { userLogin, userCheckInDb, userCreate, userEdit, verifyUserEditable, userDelete, getOneUser, getAllUser } = require("../service/userService");
const createError = require("../utils/createError");
const jwt = require('jsonwebtoken');

const checkLogin = async(req, res, next) => {    
  
    const { mail, password } = req.body;

    try {
        const user = await userLogin(mail, password);

        if (!user) {
            next(createError("Usuário não encontrado!", 404));
            return;            // Passa o erro para o middleware de erro
        } 

        const token = jwt.sign(
            { userId: user.id, email: user.email },     //Payload(dados que você quer armazenar no token);
            process.env.JWT_SECRET,                     //Chave secreta armazenada nas variáveis de ambiente;
            { expiresIn: '3h' }                         //O token expirará em 3 horas;
        );

        //cookie com o token;
        res.cookie('token', token, {
            httpOnly: true,             //Protege contra acesso via JavaScript;
            secure: false,               //False para desenvolvimento, Somente em HTTPS (ideal para produção);
            sameSite: 'strict',         //Protege contra CSRF;
            maxAge: 3 * 60 * 60 * 1000  //3 horas;
        });

        //return com token;
        console.log("BackEnd: ", user);
        res.status(200).json({
            message: "Sucesso no Login!",               //Mensagem do Json;
            //token: token,                               //Retorna o token gerado;
            id: user.id,
            mail: user.mail,
            fullname: user.fullname,
            administrator: user.administrator,
            createdAt: user.created_at,
            isLoggedIn: true,
        });

        /*
        Nota1: Eu poderia enviar desta outra maneira, mas la no front, teria que receber com "response.data.user" e iriam todos os dados;
        Nota2: Este seria usado, caso eu fosse usar o authMiddlewareToken.js;
        res.status(200).json({
            message: "Sucesso no Login!",               //Mensagem do Json;
            token: token,                               //Retorna o token gerado;
            user: user,
        });
        */
    }
    catch (error) {
        error.status = error.status || 500;     //Define status padrão caso não exista;
        next(error);
    }
};


const register = async(req, res, next) => {

    // Se o campo 'administrator' for undefined ou null, define como 'false'
    if (req.body.administrator == undefined || req.body.administrator == null) {
        req.body.administrator = false; // Usa booleano 'false';
    }

    const { fullname, mail, password, administrator } = req.body;

    try {
        const checkExistUser = await userCheckInDb(mail);        

        if(checkExistUser > 0) {
            console.log("BackEnd (encontrado): ", checkExistUser);
            error.status = error.status || "Usuário já cadastrado no sistema!"; 
        }
        else{
            try {
                const createUser = await userCreate(fullname, mail, password, administrator);

                if(!createUser) {
                    next(createError("Erro ao cadastrar usuário!", 404));
                    return; 
                }
                console.log("BackEnd: ", createUser);
                res.status(200).send(createUser);
            }
            catch(error){
                error.status = error.status || 500;              
            }
        }
    }
    catch(error){
        error.status = error.status || 500;
        next(error);
    }

/*
    console.log("Dados recebidos:", req.body);
    res.send("Resposta: " + JSON.stringify(req.body));      //Evita erro de concatenar objetos diretamente.
*/

};

const checkUserDB = async(req, res) => {

    const { fullname, mail, password, administrator } = req.body;

    try{
        const checkExistUser = await userCheckInDb(mail);        

        if(checkExistUser > 0) {
            console.log("BackEnd (encontrado): ", checkExistUser);
            res.json(checkExistUser); 
        }
        else{
            console.log("BackEnd (inexistente): ", checkExistUser);
            
            const createUser = await userCreate(fullname, mail, password, administrator);
            
            if(!createUser) {
                next(createError("Erro ao cadastrar usuário!", 404));
                return; 
            }
            console.log("BackEnd: ", createUser);
            res.status(200).send(createUser);
        }
    }
    catch(error){
        error.status = error.status || 500;
    }
};

const checkUserToEdit = async(req, res, next) => {

    const id = req.body.id;
    const mail = req.body.mail;

    if(!id){
        console.log("Error: Envie o ID!");
        res.json({Error: "Envie o ID!" });
        }
    else if(!mail){
        console.log("Error: Envie o Email!");
        res.json({Error: "Envie o Email!" });
    }
    else{
        try{
            const checkExistUserToEdit = await verifyUserEditable(id, mail);

            if(!checkExistUserToEdit){
                next(createError("Erro ao buscar usuário!", 404));
                return; 
            }
            const {count} = checkExistUserToEdit;
            console.log("BackEnd: ", count);
            res.status(200).json(count);
        }
        catch(error){
            error.status = error.status || 500;
            next(error);
        }
    }
}

const editUser = async(req, res, next) => {

    // Se o campo 'administrator' for undefined ou null, define como 'false'
    if (req.body.administrator == undefined || req.body.administrator == null) {
        req.body.administrator = false; // Usa booleano 'false';
    }

    const { id, fullname, mail, password, administrator } = req.body;
    
    try{
        const checkExistUser = await verifyUserEditable(id, mail);        

        if(checkExistUser > 0) {
            console.log("BackEnd (encontrado): ", checkExistUser);
            res.json({Error: "Erro ao editar! O e-mail ja foi cadastrado!"}); 
        }
        else{
            console.log("BackEnd (inexistente): ", checkExistUser);
            
            const editUser = await userEdit(id, fullname, mail, password, administrator);
            
            if(!editUser) {
                next(createError("Erro ao cadastrar usuário!", 404));
                return; 
            }
            console.log("BackEnd: ", editUser);
            res.status(200).send(editUser);
        }
    }
    catch(error) {
        error.status = error.status || 500;
        next(error);
    }
};


const deleteUser = async(req, res, next) => {

    const {id} = req.body.id || req.params.id; 
    console.log("Vamos deletar o ID: ", id);

    try{
        const actionDelete = await userDelete(id);

        if(actionDelete){
            return res.status(200).json({ success: true, message: "Usuário deletado com sucesso!" });
        }else{
            return res.status(404).json({ success: false, message: "Usuário não encontrado ou erro ao deletar." });
        }
    }
    catch(error){
        return res.status(500).json({ success: false, message: "Erro no servidor.", error: error.message });
    }
};


const getOne = async(req, res, next) => {
    console.log("Request body", req.body);

    const id = req.body.id;

    try {
        const getUser = await getOneUser(id);

        if (!getUser) {
            next(createError("Erro ao encontrar usuário!", 404));
            return;
        }
        
    console.log(`O Usuário ${id} encontrado! ${getUser}`);
    res.status(200).send(getUser);
    } 

    catch(error){
        error.status = error.status || 500;
        next(error);
    }
};


const fetchAll = async(req, res, next) => {

        try {
            const getAll = await getAllUser();

            if (!getAll) {
                const error = new Error(`Erro ao encontrar os usuários. ${getUser}`);
                error.status = 404;
                next(error);
            }

        console.log(getAll);
        res.status(200).send(getAll);
        } 
        
        catch(error){
            error.status = error.status || 500;
            next(error);
        }
}


module.exports = { checkLogin, register, checkUserToEdit, checkUserDB, editUser, deleteUser, getOne, fetchAll };



    /*

    tipos de dados vindos:

    const id = req.body.id;
    const bodyID = req.body.id;
    const paramID = req.params.id;
    const queryID = req.body.id;
    const dataID = req.data;
    
    console.log("Vamos deletar o BodyID: ", bodyID);
    console.log("Vamos deletar o paramID: ", paramID);
    console.log("Vamos deletar o queryID: ", queryID);
    console.log("Vamos deletar o dataID: ", dataID);
    */





    /*
    //old Login, sem token:

    const checkLogin = async(req, res, next) => {    
  
    const { mail, password } = req.body;

    try {
        const user = await userLogin(mail, password);

        if (!user) {
            next(createError("Usuário não encontrado!", 404));
            return;            // Passa o erro para o middleware de erro
        } 
        console.log("BackEnd: ", user);
        res.status(200).json(user);
    }
    catch (error) {
        error.status = error.status || 500;     //Define status padrão caso não exista;
        next(error);
    }
};

    */