//root-reducer serve para chamar todos os reducers da nossa aplicacao;

//importo o combineReducers e o userReducer que foi criado no slice;
import { combineReducers } from 'redux';
import userReducer from './users/slice';
import productsReducer from './products/slice';

//aqui eh o user do Slice;
export default combineReducers({
  user: userReducer,
  products: productsReducer,
    
  /*
  //Aqui eu poderia ter importado outro slice, de um carrinho por exemplo:
  cart: cartSlice,
  */
})