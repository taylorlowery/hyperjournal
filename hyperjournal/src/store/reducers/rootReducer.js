import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;