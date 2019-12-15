import { createSelector } from 'reselect';

const currentWord = (state) => state.wordReducer.currentWord;

export default createSelector(
    currentWord,
    (currentWord) => currentWord,
);
