import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import AuthLayout from '../AuthLayout';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import {useDispatch,useSelector} from 'react-redux';
import {signup} from '../../actions/auth';
import OneSignal from 'react-native-onesignal';

function VerifyOTP({route, navigation}) {
  // const[deviceId,setID]=useState('')
  const {name, email, rollno, department, batch, password,otp,deviceId,type} =route.params;
  console.log(deviceId)

  const [OTP, setOTP] = useState('');
  const dispatch = useDispatch();
  const User = useSelector((state)=>(state.currentUserReducer))
  const handleOTPSubmit = () => {
    if(otp!=OTP){
      Alert.alert('OTP MISMATCH')
      return
    }
    dispatch(
      signup({name, email, rollno, department, batch, password,deviceId,type},navigation),
    );
    if(User?.result==null){
      navigation.navigate('Circular')
    }else{
      navigation.navigate('Auth')
    }
  };

  return (
    <AuthLayout>
      <View>
        <Text style={styles.header}>OTP Verification</Text>
      </View>
      <View>
        <View style={styles.form}>
          <CustomInput placeholder="Enter OTP" value={OTP} setValue={setOTP} />
        </View>
        <View style={styles.buttonField}>
          <CustomButton
            text="Verify OTP"
            onPress={handleOTPSubmit}
            type="selected"
          />
        </View>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#112D4E',
    margin: 10,
  },
  form: {
    marginVertical: 20,
  },
  buttonField: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
});

export default VerifyOTP;
