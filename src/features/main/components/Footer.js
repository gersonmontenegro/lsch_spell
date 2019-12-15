import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import selectCurrentWord from 'reducers/selectors';
import Styles from '../../../styles';

const Footer = () => {
    const currentWord = useSelector(selectCurrentWord);
    return (
        <View style={Styles.FooterContainerStyle}>
            <Text style={Styles.FooterMainTextStyle}>{currentWord}</Text>
        </View>
    );
};

export default Footer;
