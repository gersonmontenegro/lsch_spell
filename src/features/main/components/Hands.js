import React, { useState } from 'react';
import { View } from 'react-native';
import useInterval from 'use-interval';
import Styles from '../../../styles';
import HandsSpell from './HandsSpell';

const Hands = () => {
    const [word, setWord] = useState('MATHEW');
    const [letter, setLetter] = useState('');
    const [index, setIndex] = useState(0);
    const [time, setTime] = useState(1000);
    useInterval(() => {
        if (index === word.length) {
            setTime(0);
        } else {
            setLetter(word[index].toLowerCase());
            setIndex(index + 1);
        }
    }, time);
    return (
        <View style={Styles.HandsContainerStyle}>
            <HandsSpell letter={letter} />
        </View>
    );
};

export default Hands;
