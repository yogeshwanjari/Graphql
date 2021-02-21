import React from 'react';
import { Text, View,StatusBar} from 'react-native';

const InfoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Text>Hello, world!</Text>
      
      
     
      
      
     

















    </View>
  )
}
export default InfoScreen;