import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import AuthLayout from '../AuthLayout'
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput'
import { useDispatch } from 'react-redux';
import { forget } from '../../actions/auth';

function ForgetPassword({navigation}) {
    const [email, setEmail] = useState('');
    const dispatch=useDispatch()
    const handleSubmit=()=>{
        dispatch(forget({email},navigation))
    }
   
    return (
     <AuthLayout>
        <View >
            <Text style={styles.header}>Reset Password</Text>
        </View>
       
        <View>
            <View style={styles.form}>
            <CustomInput placeholder="Enter Email ID"  value={email} setValue={setEmail} />
            </View>
            <View style={styles.buttonField}>
                <CustomButton text="Send Link" onPress={handleSubmit}  type="selected" />
            </View>
        </View>

        
     </AuthLayout>
  )
}

const styles=StyleSheet.create({
    header:{
        fontSize:17,
        fontWeight:'bold',
        color:'#112D4E',
        margin:10
    },
    form:{
        marginVertical:20
    },
    buttonField: {
        marginHorizontal:30,
        marginVertical:20
    },
})

export default ForgetPassword