import React from 'react';
import {View, Text} from 'react-native';
import TopBar from '../components/TopBar';
import Hands from '../components/Hands';
import Footer from '../components/Footer';
import Styles from '../../../styles';

const Main = () => {
    return (
        <View style={Styles.MainWrapper}>
            <TopBar />
            <Hands />
            <Footer />
        </View>
    );
};

export default Main;
