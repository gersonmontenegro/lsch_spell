import { createSelector } from 'reselect';

const currentWord = state => state.wordReducer.currentWord;

export const selectCurrentWord = createSelector(
    currentWord,
    currentWord => currentWord
);
