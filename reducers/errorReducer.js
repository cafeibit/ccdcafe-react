import initialState from '../constants/initialState';
import * as types from '../constants/types';

/**
 * The user reducer is responsible
 * @method error
 * @module ccdcafe/reducers
 * @param  {object} [state=initialState.user] object
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export default function error(state = initialState.error, action) {
    switch (action.type) {
        case types.GET_ERRORS:
            return action.error;
        default:
            return state;
    }
}
