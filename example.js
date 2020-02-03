import React from 'react';
import { Text, View } from 'react-native';
import TouchableWithDebounce from './touchableWithDebounce';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {

    const onIconPress = () => {
        console.log('Icon is pressed');
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Demo of double click avoiding touchableOpacity</Text>
            <TouchableWithDebounce onPress={onIconPress}>
                <MaterialCommunityIcons size={30} name={'hand'} />
            </TouchableWithDebounce>
        </View>
    );
}
