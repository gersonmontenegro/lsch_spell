import React from 'react';
import { View, Image, Text } from 'react-native';
import Assets from 'assets';

const TopBar = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <Image style={{width: 30, height: 30}} source={Assets.heart_full} />
                <Image style={{width: 30, height: 30}} source={Assets.heart_full} />
                <Image style={{width: 30, height: 30}} source={Assets.heart_full} />
            </View>
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                <Text style={{fontFamily: Assets.ArcadeClassic, fontSize: 30}}>99999</Text>
            </View>
        </View>
    );
};

export default TopBar;
