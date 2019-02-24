// errorReducer.js

import { GET_ERRORS } from '../constants/types';

const initialState = {};

export function createError (state = initialState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        default: 
            return state;
    }
}
