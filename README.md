# react-native-touchablewithdebounce
Prevent the OnPress function to hit the function only once on multiple Touch/Press

## Carousel component for react-native

### Installation
```bash
npm install react-native-touchablewithdebounce
```


### Usage example

Assuming you have `npm install -g react-native-cli`, first generate an app:

    npm install react-native-touchablewithdebounce --save

Example `example.js`:

```javascript
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

```
