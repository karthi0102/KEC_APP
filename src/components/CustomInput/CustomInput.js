import { View, Text, TextInput, StyleSheet, Image, useWindowDimensions} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  const {height} = useWindowDimensions();
  const [secureText, setSecureText] = useState(secureTextEntry);
  const onEyeBtn=()=>{
    setSecureText(!secureText)
  }
  return (
    <View style={styles.container}>
      {secureTextEntry ? 
      <View style={styles.pass}>
      <TextInput placeholder={placeholder} value={value} onChangeText={setValue} style={styles.input} secureTextEntry={secureText}/>
      <Text onPress={onEyeBtn} style={styles.eye}><Icon name={secureText ? "visibility":"visibility-off"} color="#555" size={25} /></Text>
      </View> :
      <TextInput placeholder={placeholder} value={value} onChangeText={setValue} style={styles.input} secureTextEntry={secureText}/>
       }
    </View> 
  )
}

const styles = StyleSheet.create({
    container:{
      borderColor:'#3F4C83',
      borderBottomWidth:1,
      borderRadius:5,
      marginVertical:5
    },
    input:{
      paddingStart:12,
      paddingEnd:5,
      fontWeight:'700'
    },
    pass:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    eye:{
      marginEnd:10
    }
})

export default CustomInput