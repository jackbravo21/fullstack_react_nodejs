const tableUsers = require("../model/userModel");
const getCurrentDateTime = require("../utils/dateUtils");
const createError = require('../utils/createError');
const { securePassword, comparePassword } = require('../middlewares/bcrypt');
const { Op } = require('sequelize');
const allDate = getCurrentDateTime();


async function userLogin(userMail, userPassword){
    try{
        const selectUser = await tableUsers.findOne({
            where: {mail: userMail},
        });            
        
        if(!selectUser){
            console.log("Usuário não encontrado! Verifique seu email!");
            //throw new Error("Usuário não encontrado no DB...");
            throw await createError("Usuário não encontrado! Verifique seu email! Erro: ", 404);
        }

        const passwordDB = selectUser.password;
        const checkPassword = await comparePassword(userPassword, passwordDB);

        if(!checkPassword){
            throw await createError("Senha incorreta! Erro: ", 404);
        }

        //Removo o campo da senha para retornar ao front seguro;
        delete selectUser.password;

        console.log("BackEnd: ", selectUser);
        return selectUser;
    } 
    catch(error){
        throw error;
    }    
};

async function userCheckInDb(userMail){
    try{
        const selectUser = await tableUsers.findAndCountAll({
            where: {
                mail: userMail,
            },
            attributes: { exclude: ['password'] } // Remove o campo senha
        });            
        
        console.log("Registro no DB:", selectUser);

        const {count} = selectUser;

        if(count > 0){
            console.log("Usuário já existe no sistema!");
            return count;
        }
        else{
            console.log("Usuário não existe no sistema!");
            console.log("Count do userCheckInDb:", count);
            return count;
        }
    } 
    
    catch(error){
        throw error;
    }    
};

async function verifyUserEditable(id, userMail){
    try{
        const selectUser = await tableUsers.findAndCountAll({
            where: {
                mail: userMail,
                id: { [Op.ne]: id } // Exclui o próprio usuário da verificação, todos os que possuem esse email, diferente desse ID;
            },
            attributes: { exclude: ['password'] } // Remove o campo senha
        });            
        
        console.log("Registro no DB:", selectUser.count);
        const count = selectUser.count;

        if(count > 0){
            console.log("Email já registrado no sistema!");
            return count;
        }
        else{
            console.log("Email OK para registrar no sistema!");
            return count;
        }
    } 
    catch(error){
        console.error("Erro ao verificar usuário:", error);
        throw error; // Propaga o erro para o chamador
    }    
};

async function userCreate(userFullname, userMail, userPassword, userAdministrator){
    try{
        //Criptografa a senha do usuário;
        const hashPassword = await securePassword(userPassword); 
        console.log("Hash: ", hashPassword);

        const createUser = await tableUsers.create({
            fullname: userFullname,
            mail: userMail,
            password: hashPassword,
            administrator: userAdministrator,
            created_at: allDate,
        });

        if(!createUser){
            console.log("Erro ao criar usuário no DB...");
            throw createError("Erro ao criar usuário no DB...");
        }

        console.log("BackEnd: Usuário criado com sucesso", createUser);
        return createUser;
    }
    catch(error){
        if(error.message.includes("Erro ao criar usuário no DB...")) {
            throw createError("Erro ao salvar no banco de dados!");
        }
        throw createError("Erro ao criptografar a senha ou salvar o usuário!");
    }
};

async function userEdit(userID, userFullname, userMail, userPassword, userAdministrator){
    try{
        //Criptografa a senha do usuário;
        const hashPassword = await securePassword(userPassword); 
        console.log("Hash: ", hashPassword);

        const editUser = await tableUsers.findByPk(userID);

        if(!editUser){
            console.log("Usuário não encontrado no DB para edição...");
            return("Usuário não encontrado no DB para edição...");
        }

        editUser.fullname   = userFullname;
        editUser.mail       = userMail;
        editUser.password   = hashPassword;
        editUser.administrator  = userAdministrator;

        const saveUser      = await editUser.save();

        console.log("Usuário editado com sucesso!");
        return saveUser;
    }
    catch(error){
        throw createError("Erro ao criptografar a senha ou salvar o usuário!");
    }
};


async function userDelete(userID) {
    try {
        const userToDelete = await tableUsers.findByPk(userID);

        if (!userToDelete) {
            console.error("Usuário não encontrado no DB...");
            return false; // Retorna false se o usuário não foi encontrado
        }

        const actionDelete = await userToDelete.destroy();

        if (!actionDelete) {
            console.error("Erro ao deletar usuário no DB...");
            return false; // Retorna false se houve falha ao deletar
        }
        console.log("Usuário deletado com sucesso!");
        return true; // Retorna true se a exclusão foi bem-sucedida
    } catch (error) {
        console.error("Erro ao tentar deletar o usuário:", error);
        return false; // Retorna false se ocorreu um erro durante o processo
    }
}


async function getOneUser(userID){
    try {
        const getUser = await tableUsers.findOne({
            where: { id: userID },                  //Busca pelo ID
            attributes: { exclude: ['password'] }   //Exclui o campo senha
        });

        if(!getUser){
            throw await createError("Usuário não encontrado no DB...");
        }

        return getUser;
    }
    
    catch(error){
        throw await createError("Erro ao buscar um usuário. Não encontrado!");
    }
}

async function getAllUser(){
    try {
        const selectAll = await tableUsers.findAll({
            attributes: { exclude: ['password'] }       // Exclui a coluna de senha
        });

        if(!selectAll){
            throw await createError("Erro ao buscar usuários do DB...");
        }

        return selectAll;
    }
    
    catch(error){
        throw error;
    } 
}


module.exports = { userLogin, userCheckInDb, verifyUserEditable, userCreate, userEdit, userDelete, getOneUser, getAllUser };