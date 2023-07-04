import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterStore'
import { logger } from 'redux-logger'
import authReducer from './authStore'
import todoReducer from './todoListStore'
import shopReducer from './shopStore'

const store = configureStore({
    reducer : {
        counter : counterReducer,
        auth : authReducer,
        todo : todoReducer,
        shop : shopReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store