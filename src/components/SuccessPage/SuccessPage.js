import { View, Image, useWindowDimensions, StyleSheet,Text } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../CustomButton';
const SuccessPage = ({navigation}) => {

  const handleNavigate =()=>{
    navigation.replace("Circular");
  }
  return (
    <View style={styles.root}>
      <View style={styles.container}>
          <Icon name='verified-user' color="#3F4C83" size={130} />
          <Text style={styles.content}>You have Registered Successfully!</Text>
    </View>
      <View style={styles.btn}>
        <CustomButton text="Get Started" type="selected" onPress={handleNavigate} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    container:{
      alignItems:"center"
    },
    content:{
      color:'#3F4C83',
      fontWeight:'800',
      marginTop:10,
      fontSize:26,
      textAlign:'center'
    },
    btn:{
      margin:"10%"
    }
});

export default SuccessPage