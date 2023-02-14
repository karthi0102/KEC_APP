import React, { useEffect, useState } from 'react'
import {Text, View, Image, ScrollView,StyleSheet} from 'react-native'
import Login from '../../components/Login'
import CustomButton from "../../components/CustomButton"
import AuthLayout from '../../components/AuthLayout'
import Register from '../../components/Register/Register'
// import { useDispatch } from 'react-redux'
// import { getAllCircular } from '../../actions/circular'
const Auth = ({navigation}) => {
  const [login,setLogin]=useState(true)
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(getAllCircular())
  // })
  return (
        <AuthLayout>
        <View style={styles.btnWrapper}>
          <View  style={styles.btn}>
          <CustomButton text='Log In' onPress={()=>setLogin(true)}  type={login?'selected':'auth'}/>
          </View>
          <View style={styles.btn}>
          <CustomButton text='Sign Up' onPress={()=>setLogin(false)}  type={!login?'selected':'auth'}/>
          </View>
        </View>
        <View style={styles.form}>
        {login?
          <Login navigation={navigation} />:
          <Register navigation={navigation}/>
        }
        </View>
        
        </AuthLayout>
  )
}

const styles=StyleSheet.create({
  btnWrapper:{
    flexDirection:'row',
    backgroundColor:"#F9F7F7",
    borderRadius:20
  },
  form:{
    marginVertical:20,
  },
  btn:{
    flex:1
  }
})

export default Auth