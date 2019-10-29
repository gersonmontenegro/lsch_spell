import React from 'react';
import {View, Text} from 'react-native';
import TopBar from '../components/TopBar';

const Main = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{height: 30}}>
                <TopBar />
            </View>
            <View style={{flex: 3, backgroundColor: 'blue'}}>
                <Text>Hands...</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <Text>Footer...</Text>
            </View>
        </View>
    );
};

export default Main;
