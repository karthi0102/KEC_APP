import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import logo from '../../../assets/images/logo.png'
const Logo = () => {
  return (
    <View style={styles.container}>
        <Image  source={logo} style={styles.image} />
    </View>
  )
}

const styles=StyleSheet.create({
        container:{
            height:5,
            width:5,
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        },
        image:{
            zIndex:-10,
            opacity:.7
        }
})

export default Logo