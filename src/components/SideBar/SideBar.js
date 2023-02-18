import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CustomButton from '../CustomButton'
import Icon from 'react-native-vector-icons/Entypo'
import { deleteDeviceId } from '../../actions/auth'
import SideBarLinks from '../SideBarLinks'
import { setToggle } from '../../actions/toggle'
import { setAlert } from '../../actions/alert'

const SideBar = ({navigation}) => {
  const dispatch=useDispatch()
  const toggle = useSelector((state)=>(state.toggleReducer))
  const user = useSelector((state)=>(state.currentUserReducer))
  const handleLogout =async()=>{
    handleToggle()
    const id=user?.result?._id
    dispatch(setAlert("Logging Out"))
    dispatch(deleteDeviceId({id},navigation))
  }
  const handleToggle = ()=>{
    dispatch(setToggle(false))
  }
 
  return (
    <>
    {toggle.toggle===true &&
    <View style={styles.container}>
    <View style={styles.topContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.userProfile}>
            <Image source={{uri:`https://results.kongu.edu/Photos/${user?.result?.rollno}.jpg`}} style={styles.profile} />
            <Text style={styles.userName}>{user?.result?.name}</Text>
          </View>
          <View style={styles.crossBar} >
            <TouchableOpacity onPress={handleToggle}>
              <Icon name="cross" size={32} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
        <SideBarLinks navigation={navigation} handleToggle={handleToggle}/>
        </View>
      </View>
      <View style={styles.logout}>
          <CustomButton  type='logout' onPress={handleLogout} text="Logout" />
      </View>

    </View>
}
    </>
  )
}

const styles=StyleSheet.create({
    container:{
        width:"80%",
        height:"100%",
        zIndex:99,
        backgroundColor:"white",
        padding:10,
        position:"absolute",
        display:'flex',
        justifyContent:"space-between",
        alignItems:"flex-start",
    },
    userName:{
      color:"black",
      fontSize:28,
      fontWeight:500,
    },
    logout:{
      borderTopColor:"black",
      borderTopWidth:3,
      width:"100%"
    },
    topContainer:{
      flexDirection:"column",
      justifyContent:"flex-start",
      alignContent:"flex-start"
    },
    profileContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      gap:20,
      width:"100%",
      
    },
    userProfile:{
      flexDirection:"row",
      gap:10,
      justifyContent:"center",
      alignItems:"center",
      padding:10,
    },
    profile:{
      height:50,
      width:50,
      borderRadius:20,
      objectFit:"contain"
    },
    crossBar:{
      justifyContent:"flex-end",
      alignSelf:"flex-start"
    }
})

export default SideBar