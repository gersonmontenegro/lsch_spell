import React from 'react';
import { View, Image } from 'react-native';
import Assets from 'assets';
import Styles from '../../../styles';

const Hands = () => {
    return (
        <View style={Styles.HandsContainerStyle}>
            <Image style={Styles.HandImageStyle} source={Assets.a} />
        </View>
    );
};

export default Hands;
