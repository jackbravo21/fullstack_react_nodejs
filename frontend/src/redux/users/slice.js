import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    userData: {
        id: null,
        fullname: null,
        mail: null,
        password: null,
        administrator: null,
        createdAt: null,
    },
    tempData: {
        id: null,
        fullname: null,
        mail: null,
        password: null,
        administrator: null,
        createdAt: null,
    },
    userInfo: null,
    isLoggedIn: false,
    administrator: false,
    users: [],
    error: null,
    loading: false,
};

export const userSlice = createSlice({

    name: "user",
    initialState,

    reducers: {

    //=============================================================

    setErrorUser: (state, action) => {
        state.error = action.payload.error;
    },

    //=============================================================

    resetErrorUser: (state, action) => {
        state.error = null;
    },

    //=============================================================

    dataTempUser: (state, action) => {
        state.loading = true;
        state.tempData.id = action.payload.id;
        state.tempData.fullname = action.payload.fullname;
        state.tempData.mail = action.payload.mail;
        state.tempData.administrator = action.payload.administrator;
        state.tempData.createdAt = action.payload.createdAt;
        state.loading = false;
    },

    clearDataTempUser: (state, action) => {
        state.tempData.id = null;
        state.tempData.fullname = null;
        state.tempData.mail = null;
        state.tempData.password = null;
        state.tempData.administrator = null;
        state.tempData.createdAt = null;
    },

    //=============================================================    

    createUser: (state, action) => {
        state.loading = true;

        state.tempData.fullname = action.payload.fullname;
        state.tempData.mail = action.payload.mail;
        state.tempData.password = action.payload.password;
        state.tempData.administrator = action.payload.administrator;
    },

    createUserSuccess: (state, action) => {
        state.userData = action.payload;        
        state.loading = false;
    },

    createUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    },

    //=============================================================

    loginRequest: (state, action) => {
        state.loading = true;
        state.userData.mail = action.payload.mail;
        state.userData.password = action.payload.password;
    },

    loginSuccess: (state, action) => {
        state.userData = action.payload;
        state.administrator = action.payload.administrator;
        state.isLoggedIn = true;
        state.loading = false;
    },

    loginFailure: (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
        state.loading = false;
    },

    //=============================================================

    logoutRequest: (state) => {
        state.userData.id = null;
        state.userData.fullname = null;
        state.userData.mail = null;
        state.userData.password = null;
        state.userData.createdAt = null;
        state.userData.administrator = null;

        state.tempData.id = null;
        state.tempData.fullname = null;
        state.tempData.mail = null;
        state.tempData.password = null;
        state.tempData.createdAt = null;
        state.tempData.administrator = null;

        state.administrator = false;
        state.isLoggedIn = false;
        state.error = null;
    },

    //=============================================================

    getUser: (state, action) => {
        state.loading = true;
        state.tempData.id = action.payload.id;
    },

    getUserSuccess: (state, action) => {
        state.tempData.id = action.payload.id;
        state.tempData.fullname = action.payload.fullname;
        state.tempData.mail = action.payload.mail;
        state.tempData.password = action.payload.password;
        state.tempData.createdAt = action.payload.createdAt;
        state.tempData.administrator = action.payload.administrator;
        state.loading = false;
    },

    getUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    },

    //=============================================================

    editUser: (state, action) => {
        state.loading = true;
        state.tempData.id = action.payload.id;
        state.tempData.fullname = action.payload.fullname;
        state.tempData.mail = action.payload.mail;
        state.tempData.password = action.payload.password;
        state.tempData.administrator = action.payload.administrator;
        state.tempData.createdAt = action.payload.createdAt;
    },

    editUserSuccess: (state, action) => {
        state.loading = false;
    },

    editUserFailure: (state, action) => {
        state.tempData = action.payload;
        state.loading = false;
    },

    //=============================================================

    deleteUser: (state, action) => {
        state.loading = true;
        state.tempData.id = action.payload.id;
    },

    deleteUserSuccess: (state, action) => {
        state.tempData.id = null;
        state.tempData.fullname = null;
        state.tempData.mail = null;
        state.tempData.password = null;
        state.tempData.administrator = null;
        state.tempData.createdAt = null;
        state.error = null;
        state.loading = false;
    },

    deleteUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    },

    //=============================================================

    fetchUsers: (state, action) => {
        state.loading = true;
    },

    fetchUsersSuccess: (state, action) => {
        state.users = action.payload;
        state.loading = false;
        console.log("Saga: ", action.payload);
    },

    fetchUsersFailure: (state, action) => {     
        state.error = action.payload;
        state.loading = false;
    },

    //=============================================================

    }    
});

export const { setErrorUser, resetErrorUser, createUser, createUserSuccess, createUserFailure, loginRequest, loginSuccess, loginFailure, logoutRequest, deleteUser, deleteUserSuccess, deleteUserFailure, getUser, getUserSuccess, getUserFailure, clearDataTempUser, dataTempUser, editUser, editUserSuccess, editUserFailure, fetchUsers, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export default userSlice.reducer;



/*

- O userData tb pode ser modificado o objeto inteiro, mas deve ser escrito desta maneira:

        state.userData =
            {
            name: action.payload.name,
            lastname: action.payload.lastname,
            nickname: action.payload.nickname,
            gender: action.payload.gender,
            description: action.payload.description,
            tel: action.payload.tel,
            mail: action.payload.mail,
            password: action.payload.password,
            photo: action.payload.photo,
            }


- Se o payload vier de uma forma diferente e precisar manipular os dados, como mapear as chaves, preciso fazer assim:

    success: (state, action) => { 
        state.loading = true;
        state.users = action.payload.map(user => ({
            id: user.id,
            fullname: user.fullname,
            mail: user.mail,
            administrator: user.administrator,
            createdAt: user.created_at // Mapeando corretamente os campos
        }));
        state.loading = false;
    },

*/