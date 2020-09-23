import React from 'react';
import { Text, View,Image } from 'react-native';

const title = 'Hey'
const HelloWorldApp = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('./Images/react.png')}
      />
      <Text style={{color: '#fff'}}>{title}</Text>
    </View>
  );
}
export default HelloWorldApp;