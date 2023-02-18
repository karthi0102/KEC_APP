import { View,TouchableOpacity, Text, StyleSheet } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { login } from '../../actions/auth';
import OneSignal from 'react-native-onesignal';
import { setAlert } from '../../actions/alert';
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
      const [deviceId,setDeviceID]=useState('')
      const getDeviceId =async()=>{
    let device= await OneSignal.getDeviceState()   
    setDeviceID(device.userId)
}

    useEffect(()=>{
      getDeviceId()
    },[])
    const handleSubmit = () =>{
      if(email.length==0){
        dispatch(setAlert("Email is required"))
        return;
      }
      if(password.length==0){
        dispatch(setAlert("Password is required"))
        return
      }
      if(!email.includes("@kongu.edu")){
        dispatch(setAlert("Invalid Email"))
        return
      }
      if(password.length<6){
        dispatch(setAlert("Password length must be greater than 6"))
        return;
      }
       
      dispatch(login({email,password,deviceId},navigation))
    }
    const handleForget = () =>{
      navigation.navigate('Forget')
    }   
  return (
    <View>
        <View>
            <CustomInput placeholder="Email ID" value={email} setValue={setEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />            
        </View>
        <TouchableOpacity style={styles.FPContainer}>
            <Text onPress={handleForget} style={styles.FP}>forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonField}>
          <CustomButton text="Log In" onPress={handleSubmit} type="selected" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonField: {
      marginHorizontal:'25%'
     },
    FPContainer:{
      alignItems:'flex-end',
      marginTop:10,
      marginBottom:30
    },
    FP:{
      color:'gray',
      fontWeight:'700'
    },
  });

export default Login