// index.js

import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import  posts from './postReducer';
import  feedback from './feedbackReducer';
import { loading } from './loading';

/**
 * Root reducer for project
 * @module ccdcafe/reducers
 */
const indexReducer = combineReducers({
    errors: errorReducer,
    auth: authReducer,
    posts: posts,
    feedback: feedback,
    loading
});

export default indexReducer;