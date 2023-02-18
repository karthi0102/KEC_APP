import * as api from '../api'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { setCurrentUser } from './currentUser'
import { Alert } from 'react-native'
import { setAlert } from './alert'
import { setLoading } from './loading'

export const login = (authData,navigation) => async(dispatch) =>{
    
    try {
         dispatch(setLoading(true))
        const {data} = await api.login(authData)
        dispatch({type:'SET_USER',payload:data})
        const result = await AsyncStorage.getItem('KEC')
        dispatch(setAlert("Login Successsfull"))
        dispatch(setCurrentUser(JSON.parse(result)))
        dispatch(setLoading(false))
        navigation.replace('Circular')
        
    } catch (err) {
            dispatch(setLoading(false))
            dispatch(setAlert("Invalid Credentials"))
    }
}


export const signup =(authData,navigation) =>async(dispatch) =>{
    try {
            const {data} = await api.signup(authData);
            dispatch({type:'SET_USER',payload:data})
            const result = await AsyncStorage.getItem('KEC')
            dispatch(setCurrentUser(JSON.parse(result)))
            navigation.replace('Success')
    } catch (err) {
        Alert.alert(err.message)
    }
}

export const sendOtp = (otpData) => async(dispatch) =>{
    try {
      
        const {data}=await api.sendOtp(otpData)
     
    } catch (error) {
        Alert.alert(error.message)
    }
}

export const forget = (email,navigation)=> async(dispatch)=>{
    try{
       
        const {data}=await api.ForgetPassword(email)
        Alert.alert('Link send to your email')
     
        navigation.replace('Auth')
    }catch(err){
        Alert.alert(err.message)
    }
}

export const deleteDeviceId = (id,navigation) => async(dispatch)=>{
    try {
        dispatch(setLoading(true))
        const {data}=await api.deleteDeviceId(id)
        AsyncStorage.removeItem('KEC')
        dispatch(setCurrentUser(null))
        dispatch(setAlert("Logout Successfull"))
        dispatch(setLoading(false))
        navigation.replace('Auth')
    } catch (error) {
        Alert.alert(error.message)
    }
}