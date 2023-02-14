import { View, Text, StyleSheet, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[`container_${type}`]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    container_selected:{
        backgroundColor:'#112D4E',
        alignItems:'center',
        borderRadius:20,
        paddingVertical:12,
        paddingHorizontal:34,
    },
    text_selected:{
        color:'#DBE2EF',
       
        fontSize:18
    },
    container_normal:{
        backgroundColor:'#DBE2EF',
        alignItems:'center',
        borderRadius:20,
        paddingVertical:12,
        paddingHorizontal:34,
    },
    text_normal:{
        color:'#112D4E',
        fontSize:18,

    },
    container_auth:{
       backgroundColor:'#F9F7F7',
        alignItems:'center',
        borderRadius:20,
        paddingVertical:12,
        paddingHorizontal:34,
    },
     text_auth:{
        color:'#112D4E',
        fontSize:18

    },
    text_logout:{
        color:'#112D4E',
        fontSize:18,
        fontWeight:"600"
    },
    container_logout:{
    
      alignItems:'center',
      borderRadius:20,
      paddingVertical:12,
      paddingHorizontal:34,
    }
})

export default CustomButton