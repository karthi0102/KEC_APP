import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const Alert = () => {
    const alerts = useSelector((state)=>(state.alertReducer))
  return (
    <View style={styles.container}>
        {
            alerts.map((a)=>(
                <View style={styles.alert} key={a.id}>
                        <Text style={styles.text}>{a.msg}</Text>
                </View>
            ))
        }
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        position:"absolute",
        bottom:15,
        right:15,
        zIndex:99999
    },
    alert:{
       display:"flex",
       padding:12,
       backgroundColor:"#112D4E",
       margin:10,
       borderRadius:6
    },
    text:{
        color:"white",
        fontSize:18
}
})

export default Alert