import { View, Text,StyleSheet ,TouchableNativeFeedback, TouchableOpacity} from 'react-native'
import React from 'react'
import moment from "moment"
import Icon  from 'react-native-vector-icons/MaterialIcons'
const CircularCard = ({item,navigation}) => {

 

  const handleClick=()=>{
    
    navigation.navigate('CircularPreview',{item})

  }
  const date = item.postedOn

  let fomratedDate = moment(date).subtract(10, 'days').calendar()
  return (
    <TouchableOpacity onPress={handleClick}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.number} .{item.title}</Text>
        <View style={styles.bottom}>
          <Icon name="schedule" color="black" size={12} />
          <Text style={styles.date}> {fomratedDate}</Text>
        </View>
      </View>
        <Icon name="navigate-next" style={{marginLeft:20}} color="#3F72AF" size={40} />
        
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor:"#DBE2EF",
        margin:10,
        marginHorizontal:40,
        borderRadius:20,
        padding:10,
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"center",
        height:60,
    },

    content:{
      height:50,
      justifyContent:'center',
      padding:10
    },
    bottom:{
      marginVertical:8,
      flexDirection:'row',
      alignItems:"center"
    },
    title:{
      color:"#112D4E",
      fontSize:18,
      fontWeight:"bold",
    
    },
    date:{
      fontSize:12,
      color:"black",
      fontWeight:"800"
    }
})

export default CircularCard