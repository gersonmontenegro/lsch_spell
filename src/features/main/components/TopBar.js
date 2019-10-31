import React from 'react';
import { View, Image, Text } from 'react-native';
import Assets from 'assets';
import Styles from '../../../styles';

const TopBar = () => {
    return (
        <View style={Styles.TobBarContainer}>
            <View style={Styles.TopStatusBar}>
                <Image style={Styles.HeartIconStyle} source={Assets.heart_full} />
                <Image style={Styles.HeartIconStyle} source={Assets.heart_full} />
                <Image style={Styles.HeartIconStyle} source={Assets.heart_full} />
            </View>
            <View style={Styles.TextScoreContainerStyle}>
                <Text style={Styles.TextScoreStyle}>99999</Text>
            </View>
        </View>
    );
};

export default TopBar;
