import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Line() {
    return (
        <View style={{
            backgroundColor:'#FFF',
            height:1,
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf:'stretch',
        }} 
        />
    )
}
