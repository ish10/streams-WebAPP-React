import { combineReducers } from 'redux';
import authReducer from './authReducer';
import selectedReducer from './selectedReducer';
import streamReducer from './streamReducer'
import { reducer as formReducer } from 'redux-form';
export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
    select : selectedReducer
});