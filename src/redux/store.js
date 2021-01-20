import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import '../services/contactsAPI';
import reducer from './redusers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phoneBook: reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
