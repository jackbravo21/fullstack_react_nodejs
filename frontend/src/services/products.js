import axios from 'axios';

const BASE_URL = "http://localhost:9000/products/";

export const createProductService = async(productData) => {
    const response = await axios.post(`${BASE_URL}create`, productData, {
        headers: {'Content-Type': 'multipart/form-data',},
        withCredentials: true,      //Isso garante que os cookies sejam enviados
    });
    return response.data;
};

export const productEditService = async(productData) => {
    const response = await axios.put(`${BASE_URL}edit`, productData, {
        withCredentials: true,
    });
    return response.data;
};

export const productDataEditService = async(productData) => {
    const response = await axios.put(`${BASE_URL}editdata`, productData, {
        headers: {'Content-Type': 'multipart/form-data',},
        withCredentials: true, 
    });
    return response.data;
};

export const deleteProductService = async(productID) => {
    const response = await axios.delete(`${BASE_URL}delete`, {
        data: { id: productID },
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true, 
    });
    return response.data;
};

export const getOneProductService = async(productID) => {
    const response = await axios.get(`${BASE_URL}one`, productID);
    return response.data;
};

export const allProductServiceGet = async(productType) => {
    //Desestruturando 'type' de productType diretamente, eh o mesmo que productType.type;
    const type = productType.type;
    const response = await axios.get(`${BASE_URL}all/${type}`);
    return response.data;
};

export const allProductServicePost = async(productType) => {
    const response = await axios.post(`${BASE_URL}all`, {
        type: productType.type
    });
    return response.data;
};


    /*
    await axios.put('http://localhost:9000/products/edit', {
        test: 'data',
    }).then((response) => {
        console.log('Funcionou productEditService:', response.data);
        console.log("Funcionou");
    }).catch((error) => {
        console.error('Erro productEditService:', error.response?.status, error.message);
        console.log(error.response?.status, error.message);
        console.log("Nao funcionou!");
    });
    */