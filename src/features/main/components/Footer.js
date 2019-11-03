import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import Assets from 'assets';
import Styles from '../../../styles';
import { getWord } from 'actions';
import { selectCurrentWord } from 'reducers/selectors';

const Footer = () => {
    const currentWord = useSelector(selectCurrentWord);
    return (
        <View style={Styles.FooterContainerStyle}>
            <Text style={Styles.FooterMainTextStyle}>{currentWord}</Text>
        </View>
    );
};

export default Footer;
