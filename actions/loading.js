import * as types from '../constants/types';

export function loading() {
    return {
        type: types.LOADING
    };
}

export function loaded() {
    return {
        type: types.LOADED
    };
}
