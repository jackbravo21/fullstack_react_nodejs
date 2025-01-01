import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    productData: {
        id: null,
        name: null,
        way: null,
        photo: null,
        price: null,
        description: null,
        type: null,
        createdAt: null,
    },
    productInfo: null,
    products: [],
    error: null,
    loading: false,
};

export const userSlice = createSlice({

    name: "product",
    initialState,
    
    reducers: {

    //=============================================================

      setErrorProduct: (state, action) => {
         state.error = action.payload.error;
      },

    //=============================================================

      resetErrorProduct: (state, action) => {
         state.error = null;
      },

      dataTempProduct: (state, action) => {
         state.productData.id = action.payload.id;
         state.productData.name = action.payload.name;
         state.productData.way = action.payload.way;
         state.productData.photo = action.payload.photo;
         state.productData.price = action.payload.price;
         state.productData.description = action.payload.description;
         state.productData.type = action.payload.type;
         state.productData.createdAt = action.payload.createdAt;
      },

    //=============================================================

      clearDataProduct: (state, action) => {
         state.productData.id = null;
         state.productData.name = null;
         state.productData.way = null;
         state.productData.photo = null;
         state.productData.price = null;
         state.productData.description = null;
         state.productData.type = null;
         state.productData.createdAt = null;
      },

    //=============================================================

     createProduct: (state, action) => {
        state.loading = true;
     },

     /*
      //Caso houvesse muito a necessidade de extrair os dados para usar no slice, seria feito assim;

      createProduct: (state, action) => {
         const formData = action.payload;

         state.loading = true;
         state.productData.name = formData.get("name");
         state.productData.price = formData.get("price");
         state.productData.description = formData.get("description");
         state.productData.type = formData.get("type");
         state.productData.photo = null; // Inicializar como null até backend responder
      },
     */

     createProductSuccess: (state, action) => {
        state.productData.id = action.payload.id;
        state.productData.name = action.payload.name;
        state.productData.way = action.payload.way;
        state.productData.photo = action.payload.photo; // Atribuir o campo retornado pelo backend
        state.productData.price = action.payload.price;
        state.productData.description = action.payload.description;
        state.productData.type = action.payload.type;
        state.productData.createdAt = action.payload.createAt;
        state.loading = false;
     },

     createProductFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
     },


    //=============================================================

     editProduct: (state, action) => {
        state.loading = true;

        state.productData.id = action.payload.id;
        state.productData.name = action.payload.name;
        state.productData.way = action.payload.way;
        state.productData.price = action.payload.price;
        state.productData.type = action.payload.type;
        state.productData.description = action.payload.description;
        state.productData.createdAt = action.payload.created_at;
     },

     editProductData: (state, action) => {
      state.loading = true;
   },

     editProductSuccess: (state, action) => {
         state.productData.id = null;
         state.productData.name = null;
         state.productData.way = null;
         state.productData.photo = null;
         state.productData.price = null;
         state.productData.description = null;
         state.productData.type = null;
         state.productData.createdAt = null;
         state.loading = false;
     },

     editProductFailure: (state, action) => {
        state.error = action.payload;
        state.loading = action.payload;
     },

    //=============================================================

     deleteProduct: (state, action) => {
        state.loading = true;
        state.productData.id = action.payload.id;
     },

     deleteProductSuccess: (state, action) => {
         state.productData.id = null;
         state.productData.name = null;
         state.productData.way = null;
         state.productData.photo = null;
         state.productData.price = null;
         state.productData.description = null;
         state.productData.type = null;
         state.productData.createdAt = null;
         state.loading = false;
     },

     deleteProductFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
     },
    
    //=============================================================
    
    getProduct: (state, action) => {
        state.loading = true;
        state.productData.id = action.payload.id;
    },

    getProductSuccess: (state, action) => {
        state.productData.id = action.payload.id;
        state.productData.name = action.payload.name;
        state.productData.way = action.payload.way;
        state.productData.photo = action.payload.photo;
        state.productData.price = action.payload.price;
        state.productData.description = action.payload.description;
        state.productData.type = action.payload.type;
        state.productData.createdAt = action.payload.createdAt;
        
        state.loading = false;
    },

    getProductFailure: (state, action) => {
       state.error = action.payload;       
       state.loading = false;
    },

    //=============================================================

    fetchProducts: (state, action) => {
        state.loading = true;
        state.productData.type = action.payload.type;
    },

    fetchProductsSuccess: (state, action) => {
        state.products = action.payload;        //Atualiza os produtos com o dados recebidos;
        state.loading = false;
    },

    fetchProductsFailure: (state, action) => {
        state.error = action.payload;           //Armazena o erro caso haja;
        state.loading = false;
    },

    //=============================================================

    

    }
});

export const { setErrorProduct, resetErrorProduct, dataTempProduct, clearDataProduct, createProduct, editProductData, createProductSuccess, createProductFailure, editProduct, editProductSuccess, editProductFailure, deleteProduct, deleteProductSuccess, deleteProductFailure, getProduct, getProductSuccess, getProductFailure, fetchProducts, fetchProductsSuccess, fetchProductsFailure } = userSlice.actions;
export default userSlice.reducer;

