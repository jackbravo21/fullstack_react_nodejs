//Vamos configurar o store.js com o middleware do Saga.
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Importação dos reducers
import userReducer from './users/slice';
import productsReducer from './products/slice';

// Importação dos sagas
import userSaga from './users/saga';
import productSaga from './products/saga';

const sagaMiddleware = createSagaMiddleware();

// Configuração do store
export const store = configureStore({
    reducer: {
        //adiciona os reducers;
        user: userReducer,
        product: productsReducer,
    },
    //Este trecho ignora a serializacao: ignoredActions: ['product/createProduct'],
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['product/createProduct', 'product/editProductData'],
                ignoredPaths: ['product.editProductData'],
    },
}).concat(sagaMiddleware),
});

// Executa os sagas
sagaMiddleware.run(userSaga);
sagaMiddleware.run(productSaga);

export default store;