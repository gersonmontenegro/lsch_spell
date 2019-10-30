import React from 'react';
import {View, Text} from 'react-native';
import TopBar from '../components/TopBar';
import Hands from '../components/Hands';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <View style={{flex: 1}}>
            <TopBar />
            <Hands />
            <Footer />
        </View>
    );
};

export default Main;
