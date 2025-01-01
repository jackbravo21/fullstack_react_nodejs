import { call, put, takeLatest } from 'redux-saga/effects';
import { createUserSuccess, createUserFailure, loginSuccess, loginFailure, deleteUserSuccess, deleteUserFailure, getUserSuccess, getUserFailure, editUserSuccess, editUserFailure, fetchUsersSuccess, fetchUsersFailure } from './slice';
import { checkUserService, createUserService, loginUserService, userDeleteService, getOneUserService, userEditService, allUsersService } from '../../services/users';
import { encryptData } from '../../utils/cryptojs';
import { createCookie } from '../../utils/cookieTools';

function* createUser(action){
    try{
        console.log("Verificando usuário no DB...");

        // Chama o service com os dados do usuário
        const userData = {
            fullname: action.payload.fullname,
            mail: action.payload.mail,
            password: action.payload.password,
            administrator: action.payload.administrator,
        };

        const response = yield call(createUserService, userData);
        // Dispara a ação de sucesso
        yield put(createUserSuccess(response));

        const responseAllUsers = yield call(allUsersService);
        yield put(fetchUsersSuccess(responseAllUsers.data || responseAllUsers));
    }

    catch(error){
        const errorMessage = "Usuário já cadastrado no Sistema!";
        yield put(createUserFailure(errorMessage));          // Passando o erro para a action;
        console.error("Erro ao criar usuário!", error);
    } 
}

//Funcao que chama API Rest de login;
function* loginUser(action) {
    try {
        console.log("Verificando no DB...");

        const userData = {
            mail: action.payload.mail,
            password: action.payload.password,
        };
        
        //Chama o service que faz a requisição à API;
        const response = yield call(loginUserService, userData);

        //Verifica o status e os dados;
        if(response.status === 200 && response.data){
            console.log("Usuário encontrado com sucesso!");
            console.log("Message: ", response.data.message);

            //Extraindo os dados do usuario logado;
            const responseData = {
                id: response.data.id,
                mail: response.data.mail,
                fullname: response.data.fullname,
                administrator: response.data.administrator,
                createdAt: response.data.createdAt,
                isLoggedIn: response.data.isLoggedIn,
            }

            //Armazena os dados localmente;
            localStorage.setItem("id", responseData.id);
            localStorage.setItem("mail", responseData.mail);
            localStorage.setItem("fullname", responseData.fullname);
            localStorage.setItem("administrator", responseData.administrator);
            localStorage.setItem("createdAt", responseData.createdAt);
            localStorage.setItem("isLoggedIn", responseData.isLoggedIn);
            console.log("Dados armazenados localmente com sucesso!");

            //Salvando no Redux;
            yield put(loginSuccess(response.data));
            //ou: yield put(loginSuccess(response.data.user));
        } 
        else{
            yield put(loginFailure("Usuário ou senha inválidos!"));
        }

    } catch (error) {
        yield put(loginFailure("Usuário ou senha incorreto!"));
        console.error("Erro ao realizar login: ", error);
    }
};

function* userDelete(action){
    try{
        console.log("Buscando usuário do DB para deletar...");

        const userData = {
            id: action.payload.id
        };

        const response = yield call(userDeleteService, userData);

        if(!response){
            deleteUserFailure("Erro ao deletar o usuário!");
            return;
        }

        yield put(deleteUserSuccess("Usuário deletado com sucesso!"));

        const responseAllUsers = yield call(allUsersService);
        yield put(fetchUsersSuccess(responseAllUsers.data || responseAllUsers));
    }
    catch(error){
        yield put(deleteUserFailure("Erro ao enviar os dados do usuário para deletar!"));
        console.error("Erro ao desativar usuário!", error);
    }
};

function* getOneUser(action){
    try {
        console.log("Buscando usuário no DB...");

        const userData = {
            id: action.payload.id,
        };
        const response = yield call(getOneUserService, userData);
        yield put(getUserSuccess(response.data));
    } 
    
    catch(error){
        yield put(getUserFailure(error.message));
        console.error("Erro ao desativar usuário!", error);
    }
};

function* userEdit(action){
    try{
        console.log("Verificando usuário no DB...");

        const userData = {
            id: action.payload.id,
            fullname: action.payload.fullname,
            mail: action.payload.mail,
            administrator: action.payload.administrator,
            password: action.payload.password,
        }
        
        //Atualiza o usuário;
        const response = yield call(userEditService, userData);
        yield put(editUserSuccess(response.data));

        //Busca os usuários atualizados e retorna com os dados atuais (joinha);
        const responseAllUsers = yield call(allUsersService);
        console.log("allUsers: ", responseAllUsers.data || responseAllUsers);
        yield put(fetchUsersSuccess(responseAllUsers.data || responseAllUsers));
    }
    catch(error){
        yield put(editUserFailure(error.message));  //Passando o erro para a action;
        console.error("Erro ao editar usuário!", error);
    }
};

function* allUsers(){
    try{
        console.log("Buscando usuários no DB...");

        const response = yield call(allUsersService);
        console.log("allUsers: ", response);
        yield put(fetchUsersSuccess(response));
    }

    catch(error){
        yield put(fetchUsersFailure(error.message));
        console.error("Erro ao buscar usuários!", error);
    }
};

//Observa a acao de login;
function* userSaga()
{
    yield takeLatest('user/createUser', createUser);
    yield takeLatest('user/loginRequest', loginUser);
    yield takeLatest('user/deleteUser', userDelete);
    yield takeLatest('user/getUser', getOneUser);
    yield takeLatest('user/editUser', userEdit); 
    yield takeLatest('user/fetchUsers', allUsers); 
}

export default userSaga;



/*

        //old codigo, deixei aqui para testes;
            
            //Criptografando os dados (se precisar criptografar os cookies);
            const encryptDataID = encryptData(responseData.id);
            const encryptDataMail = encryptData(responseData.mail);
            const encryptDataFullname = encryptData(responseData.fullname);
            const encryptDataAdministrator = encryptData(responseData.administrator);
            const encryptDataCreatedAt = encryptData(responseData.createdAt);
            const isLoggedIn = encryptData(responseData.isLoggedIn);
            

            //Criando os cookies: (chave, valor);
            createCookie("userID", responseData.id);
            createCookie("userMail", responseData.mail);
            createCookie("userFullname", responseData.fullname);
            createCookie("userAdministrator", responseData.administrator);
            createCookie("userCreatedAt", responseData.createdAt);
            createCookie("isLoggedIn", responseData.isLoggedIn);
            console.log("Salvando Cookie!");


            //Criando os cookies (anotacoes velhas salva);
            
            document.cookie = `dataUserID=${encryptDataID}; path=/`;
            document.cookie = `dataUserMail=${encryptDataMail}; path=/`;
            document.cookie = `dataUserFullname=${encryptDataFullname}; path=/`;
            document.cookie = `dataUserAdministrator=${encryptDataAdministrator}; path=/`;
            document.cookie = `dataUserCreatedAt=${encryptDataCreatedAt}; path=/`;
            document.cookie = `isLoggedIn=${isLoggedIn}; path=/`;
            
            document.cookie = `dataUserID=${encryptDataID}; path=/`;
            document.cookie = `dataUserMail=${encryptDataMail}; path=/`;
            document.cookie = `dataUserFullname=${encryptDataFullname}; path=/`;
            document.cookie = `dataUserAdministrator=${encryptDataAdministrator}; path=/`;
            document.cookie = `dataUserCreatedAt=${encryptDataCreatedAt}; path=/`;
            document.cookie = `isLoggedIn=${isLoggedIn}; path=/`;

            




//Codigo para atualizar apenas a posicao do usuario editado, caso a lista de usuarios seja extremamente extensa;

editUserSuccess: (state, action) => {
    const updatedUser = action.payload; // Usuário atualizado vindo do backend
    const index = state.users.findIndex(user => user.id === updatedUser.id); // Localiza o índice do usuário

    if (index !== -1) {
        state.users[index] = updatedUser; // Atualiza o usuário específico no array
    }
    state.loading = false; // Finaliza o loading
},

*/