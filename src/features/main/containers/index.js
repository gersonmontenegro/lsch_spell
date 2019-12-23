import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TopBar from '../components/TopBar';
import Hands from '../components/Hands';
import Footer from '../components/Footer';
import Styles from '../../../styles';

const Main = () => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={Styles.MainContainer}
            scrollEnabled={false}
        >
            <View style={Styles.MainWrapper}>
                <TopBar />
                <Hands />
                <Footer />
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Main;
