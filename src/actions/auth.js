import * as api from '../api'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { setCurrentUser } from './currentUser'
import { Alert } from 'react-native'
export const login = (authData,navigation) => async(dispatch) =>{
    
    try {
        console.log(authData)
        const {data} = await api.login(authData)
        console.log(data,"hello")
        dispatch({type:'SET_USER',payload:data})
        const result = await AsyncStorage.getItem('KEC')
        dispatch(setCurrentUser(JSON.parse(result)))
        navigation.replace('Circular')
        
    } catch (err) {
            console.log(err)
            Alert.alert(err.message)
    }
}


export const signup =(authData,navigation) =>async(dispatch) =>{
    try {
            const {data} = await api.signup(authData);
            dispatch({type:'SET_USER',payload:data})
            const result = await AsyncStorage.getItem('KEC')
            dispatch(setCurrentUser(JSON.parse(result)))
            navigation.replace('Circular')
    } catch (err) {
        Alert.alert(err.message)
    }
}

export const sendOtp = (otpData) => async(dispatch) =>{
    try {
        console.log(otpData)
        const {data}=await api.sendOtp(otpData)
        console.log(data,"in otp")
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
        const {data}=await api.deleteDeviceId(id)
        AsyncStorage.removeItem('KEC')
        dispatch(setCurrentUser(null))
        navigation.replace('Auth')
    } catch (error) {
        Alert.alert(error.message)
    }
}