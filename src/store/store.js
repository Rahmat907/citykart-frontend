import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import AdminProductSlice from './admin-store/Product-slice/index.js'
import shopingProductSlice from './shop/product-slice/index.js'
import shopingCartSlice from './shop/cart-slice/index.js'
import shopingAddressSlice from './shop/Address-slice/index.js'
import shopingOrderSlice from './shop/Order-slice/index.js'

const store = configureStore({
    reducer :{
        auth: authReducer,
        adminProducts:   AdminProductSlice,
        shopProducts: shopingProductSlice,
        shopCart : shopingCartSlice,
        shopAddress : shopingAddressSlice,
        shopOrder : shopingOrderSlice
    },
});

export default store;