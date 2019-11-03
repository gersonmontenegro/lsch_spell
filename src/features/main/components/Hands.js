import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import Styles from '../../../styles';
import HandsSpell from './HandsSpell';

const Hands = () => {
    return (
        <View style={Styles.HandsContainerStyle}>
            <HandsSpell word='Mathew' />
        </View>
    );
};

export default Hands;
