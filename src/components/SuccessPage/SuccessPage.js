import { View, Image, useWindowDimensions, StyleSheet,Text } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


const SuccessPage = () => {

    const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
     <Icon
              name='verified-user'
              color="#3F4C83"
              size={130}
            />
     
      <Text style={styles.content}>You have Registered Successfully!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        justifyContent:'center',
        height:'95%'
    },
    content:{
      color:'#3F4C83',
      fontWeight:'800',
      marginTop:10,
      fontSize:26,
      textAlign:'center'
    }
});

export default SuccessPage