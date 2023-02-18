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
            dispatch(setLoading(true))
            const {data} = await api.signup(authData);
            dispatch({type:'SET_USER',payload:data})
            const result = await AsyncStorage.getItem('KEC')
            dispatch(setCurrentUser(JSON.parse(result)))
            dispatch(setLoading(false))
            dispatch(setAlert("New User Created"))
            navigation.replace('Success')
    } catch (err) {
       dispatch(setLoading(false))
       dispatch(setAlert("User not Created"))
    }
}

export const sendOtp = (otpData) => async(dispatch) =>{
    try {
        dispatch(setLoading(true))
        await api.sendOtp(otpData)
        dispatch(setLoading(false))
        dispatch(setAlert("Sent Otp to your Email"))
    } catch (error) {
        dispatch(setLoading(false))
        dispatch(setAlert("Otp not Sent"))
    }
}

export const forget = (email,navigation)=> async(dispatch)=>{
    try{
       dispatch(setLoading(true))
        await api.ForgetPassword(email)
       dispatch(setAlert('Link send to your email'))
        dispatch(setLoading(false))
        navigation.replace('Auth')
    }catch(err){
        dispatch(setLoading(false))
        dispatch(setAlert("Try after some time"))
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
    dispatch(setLoading(false))
       dispatch(setAlert("Logout Error"))
    }
}