import { View, Text,StyleSheet,Image,Animated, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../../assets/images/logo.png'
import { useDispatch,useSelector } from 'react-redux'
import { getAllCircular } from '../../actions/circular'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setCurrentUser } from '../../actions/currentUser'
import { getdeptAllCircular } from '../../actions/dept'
// const Progess = ({step,steps,height}) =>{
//     const [width,setWidth]=useState(0)
//     const animatedValue = React.useRef(new Animated.Value(-1000)).current;
//     const reactive = React.useRef(new Animated.Value(-1000)).current
//     React.useEffect(()=>{
//         Animated.timing(animatedValue,{
//             toValue:reactive,
//             duration:300,
//             useNativeDriver:true
//         }).start()
//     },[]);
//     React.useEffect(()=>{
//        reactive.setValue(-width+ (width * step) /steps)    
//     },[step,width])
//         return(
//             <View  
//             onLayout={(e => {
//                             const newWidth = e.nativeEvent.layout.width
//                             setWidth(newWidth)
//                         })}style={{
//                 height,
//                 backgroundColor:"#DBE2EF",
//                 borderRadius:height,
//                 overflow:"hidden"
//             }}>
//                         <Animated.View
                        
//                         style={{
//                             height,
//                            width:'100%',
//                             borderRadius:height,
//                             backgroundColor:"#3F72AF",
//                             position:"absolute",
//                             top:0,
//                             left:0,
//                             transform:[{
//                                 translateX:animatedValue
//                             }]
//                         }} />
//             </View>
//         )
// }
// AsyncStorage.removeItem('KEC')

const Home = ({navigation}) => {
    const dispatch=useDispatch()
    const [index,stepIndex]=useState(0)
    const User = useSelector((state) => (state.currentUserReducer))
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         if(index<10){
    //             stepIndex((index+1)%(10+1))
    //         }
    //         if(index==10){
    //             if(User!=null)
    //                 navigation.navigate('Circular')
    //             else
    //                 navigation.navigate('Auth')

    //         }
    //     },150)
    //     return ()=>{
    //         clearInterval(interval)
    
    //     }
    // },[index])
    

    const setToken =async()=>{
        const data=await AsyncStorage.getItem('KEC')
        if(data){
                dispatch(setCurrentUser(JSON.parse(data)))
                dispatch(getAllCircular())
                dispatch(getdeptAllCircular())
                navigation.replace('Circular')
        }else{
                 navigation.replace('Auth')
        }


    }




    
useEffect(()=>{
    setToken()
})


   
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
                <Image source={logo} style={styles.image}/>
      </View>
      {/* <View style={styles.progress}>
             <Progess step={index} steps={10} height={16} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
    },
    image:{
        justifyContent:'center',
        alignItems:"center",
    },
    progress:{
        padding:40
    }
})

export default Home

