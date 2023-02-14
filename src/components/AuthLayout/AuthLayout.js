import React from 'react'
import {Text, View, Image, ScrollView,StyleSheet} from 'react-native'
import logo from '../../../assets/images/logo.png'

function AuthLayout(props) {
  return (
    <ScrollView style={styles.root}>
        <View style={styles.imgWrapper}>
        <Image source={logo} style={styles.img} />
        </View>
        <View style={styles.card}>
            {props.children}
        </View>
    </ScrollView>  
)
}

const styles = StyleSheet.create({
    root: {
      textAlign: 'center',
      padding: '10%',
      marginVertical:10,
    },
    imgWrapper: {
      alignItems: 'center',
      padding:20
    },
    img:{
        height:100,
        width:100,
    },
    card:{
      backgroundColor:'#DBE2EF',
      padding:20,
      paddingBottom:20,
      borderRadius:20,
      marginBottom:80
    },
});

export default AuthLayout