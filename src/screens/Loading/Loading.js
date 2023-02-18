import { View, Text,StyleSheet,Image,ActivityIndicator } from 'react-native'
import React from 'react'
import img from '../../../assets/images/logo.png'
import { useSelector } from 'react-redux'
const Loading = () => {
  const loading=useSelector((state)=>(state.loadingReducer))
  return (
    <>
    {loading.loading==true &&
    <View style={styles.container}>
      <View style={styles.card}>
            <Image source={img} style={styles.img} />
            
            <ActivityIndicator size="small" />
      </View>
    </View>
}
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,.4)",
    height:"100%",
    width:"100%",
    position:"absolute"
  },
  card:{
    width:"80%",
    height:"18%",
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    gap:20
  },
  img:{
    height:70,
    width:70,
  }
})

export default Loading