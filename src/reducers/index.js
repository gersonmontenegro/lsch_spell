import { combineReducers } from 'redux';
import { SET_WORD, GET_WORD } from 'actions/types';

const initialData = {
    currentWord: '',
};

const setWord = (currentWord, letter, index) => {
    if (letter) {
        if (index === 0) {
            return letter;
        }
        return `${currentWord}${letter}`;
    }
    return '';
};

const wordReducer = (state = initialData, action) => {
    switch (action.type) {
        case SET_WORD: {
            return {
                ...state,
                currentWord: setWord(state.currentWord, action.payload.letter, action.payload.index),
            }
        }
        case GET_WORD: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({ wordReducer });
