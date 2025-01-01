import { call, put, takeLatest } from 'redux-saga/effects';
import { createProductSuccess, createProductFailure, editProductSuccess, editProductFailure, deleteProductSuccess, deleteProductFailure, getProductSuccess, getProductFailure, fetchProductsSuccess, fetchProductsFailure } from './slice';
import { createProductService, productEditService, productDataEditService, deleteProductService, getOneProductService, allProductServiceGet, allProductServicePost } from '../../services/products';

function* createProduct(action){

    try{
        console.log("Criando produto no DB...");
        
        //`action.payload` já é um FormData, enviado diretamente pelo componente;
        const formData = action.payload;

        /*
        const name = formData.get("name");
        const price = formData.get("price");
        const description = formData.get("description");
        const type = formData.get("type");

        console.log(formData.get("name"));
        console.log(formData.get("price"));
        console.log(formData.get("description"));
        console.log(formData.get("type"));

        const productData = { name, price, description, type };
        console.log("Product Data:", productData);
        */

        //Chamar o serviço com o `FormData` para envio multipart;
        const response = yield call(createProductService, formData);
        //Sucesso: disparar a action com os dados do produto retornados pelo backend;
        yield put(createProductSuccess(response));
    }
    catch(error){
        yield put(createProductFailure(error.message));
        console.error("Erro ao criar produto: ", error);    
    }
};

function* editOneProduct(action){
    try{
        console.log("Editando produto no DB...");

        const productData = {
            id: action.payload.id,
            name: action.payload.name,
            way: action.payload.way,
            price: action.payload.price,
            type: action.payload.type,
            description: action.payload.description,
        };

        const response = yield call(productEditService, productData);
        yield put(editProductSuccess(response.data));
    } 
    catch(error){
        yield put(editProductFailure(error.message));
        console.error("Erro ao editar produto: ", error);   
    }
};

function* editOneProductData(action){
    try{
        console.log("Editando produto no DB...");

        const formData = action.payload;
        const response = yield call(productDataEditService, formData);
        //yield put(editProductSuccess(response));
        yield put(editProductSuccess(response.data));
    } 
    catch(error){
        yield put(editProductFailure(error.message));
        console.error("Erro ao editar produto: ", error);   
    }
};

function* deleteOneProduct(action){
    try{
        console.log("Deletando produto no DB...");

        const productData = {
            id: action.payload.id,
        };
        const response = yield call(deleteProductService, productData);
        yield put(deleteProductSuccess(response.data));
    }
    catch(error){
        yield put(deleteProductFailure(error.message));
        console.error("Erro ao deletar produto: ", error);    
    }    
};

function* getOneProduct(action){
    try{
        console.log("Buscando um produto no DB...");
        
        const productData = {
            id: action.payload.id,
        };

        const response = yield put(getOneProductService, productData);
        yield put(getProductSuccess(response.data));
    }
    
    catch(error){
        yield put(getProductFailure(error.message));
        console.error("Erro ao buscar um produto: ", error);    
    }
};

function* getAllProducts(action){
    try{
        console.log("Buscando produtos no DB...");

        const productData = {
            type: action.payload.type,
        };

        console.log("getAllProducts: ", productData);

        const response = yield call(allProductServiceGet, productData);
        yield put(fetchProductsSuccess(response));
    }
    
    catch(error){
        yield put(fetchProductsFailure(error.message));
        console.error("Erro ao buscar vários produtos: ", error);    
    }   
};

//Observa a acao de login;
function* productSaga()
{
    yield takeLatest('product/createProduct', createProduct);
    yield takeLatest('product/editProduct', editOneProduct);
    yield takeLatest('product/editProductData', editOneProductData);
    yield takeLatest('product/deleteProduct', deleteOneProduct);
    yield takeLatest('product/getProduct', getOneProduct);
    yield takeLatest('product/fetchProducts', getAllProducts); 
}

export default productSaga;