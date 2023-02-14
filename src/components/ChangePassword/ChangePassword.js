import React, {useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import AuthLayout from '../AuthLayout'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'

function ChangePassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <AuthLayout>
        <View >
            <Text style={styles.header}>Change Password</Text>
        </View>
        <View style={styles.form}>
        <CustomInput placeholder="New Password" value={newPassword} setValue={setNewPassword} secureTextEntry />
        <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry />
        </View>
            <View style={styles.buttonField}>
                <CustomButton text="Confirm"   type="selected" />
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

export default ChangePassword