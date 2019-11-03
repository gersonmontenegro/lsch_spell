import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Text } from 'react-native';
import useInterval from 'use-interval';
import Assets from 'assets';
import Styles from '../../../styles';
import useFetch from '../../../providers/hooks';
import { selectCurrentWord } from 'reducers/selectors';
import { setWord } from 'actions';

const urlDemoData = 'https://raw.githubusercontent.com/gersonmontenegro/lsch_spell/master/src/providers/demoText.txt';

const HandsSpell = (props) => {
    const dispatch = useDispatch();
    const currentWord = useSelector(selectCurrentWord);
    let [ index, setIndex ] = useState(0);
    let [ currentLetter , setCurrentLetter ] = useState('');
    const { word } = props;
    useInterval(() => {
        if (index === word.length) {
            setIndex(0);
            dispatch(setWord({letter: '', index}));
        } else {
            const letter = word[index].toLowerCase();
            setCurrentLetter(Assets[letter]);
            dispatch(setWord({letter: word[index].toLowerCase(), index}));
            setIndex(index + 1);
        }
    }, 1000);
    return (
        <Image style={Styles.HandImageStyle} source={currentLetter} />
    );
};

export default HandsSpell;
