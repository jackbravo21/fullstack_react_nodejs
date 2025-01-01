import axios from 'axios';

const BASE_URL = "http://localhost:9000/users/";

export const checkUserService = async(userData) => {
    const response = await axios.post(`${BASE_URL}check`, userData, {
        headers: { 'Content-Type': 'application/json' }
    });
    console.log("CheckUserService: ", response.data);
    return response.data;
};

export const createUserService = async(userData) => {
    const response = await axios.post(`${BASE_URL}create`, userData, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

export const loginUserService = async(loginData) => {
    const response = await axios.post(`${BASE_URL}login`, loginData, {
        withCredentials: true, // Garante que os cookies sejam enviados e aceitos.
    });
    return response;    //aqui eh soh o response, para caso queira pegar os heads tb;
};

export const userDeleteService = async(userID) => {
    const response = await axios.delete(`${BASE_URL}delete`, {
        data: { id: userID },
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    });
    return response.data;
};

export const getOneUserService = async(userID) => {
    const response = await axios.post(`${BASE_URL}one`, userID);
    return response.data;
};

export const userEditService = async(userData) => {
    const response = await axios.put(`${BASE_URL}edit`, userData, {
        withCredentials: true,
    });
    return response.data;
}

/*
export const userEditService = async(userData) => {
    const response = await axios.put(`${BASE_URL}edit`, userData);
    return response.data;
}
*/

export const allUsersService = async() => {
    const response = await axios.get(`${BASE_URL}all`);
    return response.data;
}

