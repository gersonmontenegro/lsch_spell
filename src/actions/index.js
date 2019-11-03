import { SET_WORD, GET_WORD } from './types';

export const setWord = (data) => ({
    type: SET_WORD,
    payload: data,
});

export const getWord = () => ({
    type: GET_WORD,
});
