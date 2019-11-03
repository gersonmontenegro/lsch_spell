import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { Image, Text } from 'react-native';
import useInterval from 'use-interval';
import Assets from 'assets';
import Styles from '../../../styles';
import useFetch from '../../../providers/hooks';

const urlDemoData = 'https://raw.githubusercontent.com/gersonmontenegro/lsch_spell/master/src/providers/demoText.txt';

const HandsSpell = (props) => {
    let [ count, setCount ] = useState(0);
    let [ currentLetter , setCurrentLetter ] = useState('');
    useInterval(() => {
        const { word } = props;
        setCount(count + 1);
        setCurrentLetter(Assets[word[count].toLowerCase()]);
        if (count >= word.length - 1) {
            setCount(0);
        }
    }, 1000);
    return (
        <Image style={Styles.HandImageStyle} source={currentLetter} />
    );
};

export default HandsSpell;
