import { View, TouchableOpacity, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const SideBarLinks = ({navigation,handleToggle}) => {
  const route = useRoute();
  const {name}=route
  const links = [
    {
      name:"All Circulars",
      link:"Circular"
    },
    {
      name:"Dept Circular",
      link:"Dept"
    },
    // {
    //   name:"Developers",
    //   link:"Developers"
    // }
  ]
  const handleNavigate = (link)=>{
    handleToggle();
    navigation.replace(`${link}`)
  }
  return (
    <View style={styles.container}>
      {links.map((li,idx)=>(
        <TouchableOpacity key={idx} style={styles.linkContainer} onPress={()=>handleNavigate(li.link)}>
          <Text style={name==li.link? styles.linkCurrent :styles.linkName}>{li.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:10,
    marginTop:30
  },
  linkContainer:{
    marginVertical:10,
    marginHorizontal:6,
  },
  linkName:{
    fontSize:22,
    fontWeight:"bold",
    color:"#112D4E",
  },
  linkCurrent:{
      fontSize:22,
      fontWeight:"bold",
      color:"red"
  }

})
export default SideBarLinks