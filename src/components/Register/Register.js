import { View, StyleSheet, Alert} from 'react-native'
import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomDropdown from '../CustomDropdown';
import { sendOtp } from '../../actions/auth';
import OneSignal from 'react-native-onesignal';

const Register = ({navigation}) => {
  const [deviceId,setDeviceID]=useState('')
      const getDeviceId =async()=>{
    let device= await OneSignal.getDeviceState()   
    setDeviceID(device.userId)
}

    useEffect(()=>{
      getDeviceId()
    },[])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollno, setRollNo] = useState('');
    const [department, setDepartment] = useState('');
    const [batch, setStudentBatch] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dis,setDis]=useState(false)
    const dispatch=useDispatch()
     
    const dept = [
      "Civil Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
      "Automobile Engineering",
      "Chemical Engineering",
      "Food Technology",
      "Electrical and Electronics Engineering",
      "Electronics and Instrumentation Engineering",
      "Electronics and Communication Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Computer Science and Design",
      "Artificial Intelligence (AIML & AIDS)",
      "Management Studies",
      "Computer Application",
      "Computer Technology - UG",
      "Computer Technology - PG",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English"
    ];
    const type=['Student','Faculty']
  
    var increment;
    var year=new Date().getFullYear()
    const batchYear=[]
    for(increment=-4;increment<=4;increment++){
        batchYear.push(year-increment);
    }
     
  useEffect(()=>{
      let email_pattern=/^([a-z]+)\.([0-9]{2})([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
      if(email_pattern.test(email)){
        setDis(true)
      }else{
        setDis(false)
      }
  },[email])
    const preHandleSubmit = ()=>{
      if(!name.length){
        Alert.alert('Enter Your Name')
        return
      }
      if(dis){
        let email_pattern=/^([a-z]+)\.([0-9]{2})([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        let result1=email_pattern.test(email)
        if(!result1 &&!email.endsWith('kongu.edu') ){
          Alert.alert('Email Invalid')
          return
        }
          let roll_no_pattern = /^([0-9]{2})([A-Z]{3,4})([0-9]{3,4})$/
          let rollResult = roll_no_pattern.test(rollno)
          if(!rollResult){
            Alert.alert('Roll Number Incorrect')
            return
          }
          if(!batch){
          Alert.alert('Please Select Your batch')
          return
        }
      }
      else{
        let femail_pattern=/^([a-z]+)\.([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
         let result1=femail_pattern.test(email)
        if(!result1 &&!email.endsWith('kongu.edu') ){
          Alert.alert('Email Invalid')
          return
        }
      }
     
      if(!department){
        Alert.alert('Please select your department')
        return
      }
    
      if(password.length < 6){
        Alert.alert('Password length must be greater than 6')
        return
      }
      if(password!=confirmPassword){
        Alert.alert('Password doesn\'t match ')
        return
      }
      sendToVerifyOtp()
    }
      
    
    const sendToVerifyOtp = () =>{
      var otp = Math.floor(1000 + Math.random() * 9000);
      console.log(otp)
      let type
      if(dis){
        type='Student'
      }else{
        type='Faculty'
      }
      dispatch(sendOtp({otp,email}))
      
      navigation.navigate("VerifyOtp",{name,email,rollno,department,batch,password,otp,deviceId,type})
    }

   
  return (  
    <View>
      
    <View style={styles.SignUpInputField}>
      <CustomInput placeholder="Name" value={name} setValue={setName} />
      <CustomInput placeholder="Email ID" value={email} setValue={setEmail} />
      {dis && <CustomInput placeholder="Roll Number" value={rollno} setValue={setRollNo} />}
      <CustomDropdown name="Department" list={dept} setItem={setDepartment} />
     {dis && <CustomDropdown name="Batch" list={batchYear} setItem={setStudentBatch} />}
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
      <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry />
      
    </View>
    <View style={styles.buttonField}>
      <CustomButton text="Send OTP" onPress={preHandleSubmit}   type="selected" />
    </View>
   
  </View>
  )
}

const styles = StyleSheet.create({
    SignUpInputField: {
     marginBottom:30
    },
    buttonField: {
      marginHorizontal:30
     },
  }
);

export default Register