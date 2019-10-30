import React from 'react';
import { View, Image } from 'react-native';
import Assets from 'assets';

const Hands = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 250, height: 250}} source={Assets.a} />
        </View>
    );
};

export default Hands;
