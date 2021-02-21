import React from 'react';
import { Text, View,Image,StatusBarm,Button,handlePress} from 'react-native';


const HomeScreen = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop:10
      }}>

<Image style={{width:100,height:100}}

source={require('./img/yog1.jpg')} />
      <Text style={{borderLeftColor:'blue',marginRight:300,fontFamily: 'AbrilFatface-Regular'}}> 
      {"\n"}{"\n"}STATESTIC </Text>
      <Text style={{marginRight:310}}> Full Body </Text>
    

<View style={{paddingTop:270,}}>
      <Button style={{width:100,height:100}}
        //  onPress = {handlePress}
         title = "Red button!"
         color = "red"
      />
</View>


        
    </View>
  )
}
export default HomeScreen;