import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Styles from '../../../styles';

const Footer = () => {
    const [userText, setUserText] = useState('');
    const onChangeText = (text) => setUserText(text);
    return (
        <View style={Styles.FooterContainerStyle}>
            <TextInput style={Styles.FooterMainTextStyle} value={userText} onChangeText={onChangeText} />
        </View>
    );
};

export default Footer;
