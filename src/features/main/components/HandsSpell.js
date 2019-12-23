import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Assets from 'assets';
import Styles from '../../../styles';

const HandsSpell = ({ letter }) => {
    const letterAsset = Assets[letter.toLowerCase()];
    return (
        <Image style={Styles.HandImageStyle} source={letterAsset} />
    );
};


const propTypes = {
    letter: PropTypes.string.isRequired,
};

HandsSpell.propTypes = propTypes;

export default HandsSpell;
