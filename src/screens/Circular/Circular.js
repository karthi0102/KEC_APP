import { View, Text,StyleSheet, FlatList,SectionList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CustomButton from '../../components/CustomButton'
import CircularCard from '../../components/CircularCard'
import { getAllCircular } from '../../actions/circular'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { deleteDeviceId } from '../../actions/auth'
const Item = ({ data,navigation }) => {
  return(
  <View style={styles.item}>
    <CircularCard item={data} navigation={navigation} />
  </View>
)
  }


const Circular = ({navigation}) => {
  const [dis,setDis]=useState(false)
  const [today,isToday]=useState(true)
  const [yesterday,isYesterday]=useState(false)
  const [earlier,isEarlier]=useState(false)
  const dispatch=useDispatch()
  const Circulars = useSelector((state) =>(state.circularReducer))
  const [todayCircular,setTodayCircular] = useState()
  const [yesterdayCircular,setYesterdayCircular] = useState()
  const [ earlierCircular,setEarlierCircular] = useState()
  const [monthWiseCircular,setMonthWiseCircular]=useState()
  const User = useSelector((state)=>(state.currentUserReducer))
  const setToday = () =>{
    isToday(true)
    isYesterday(false)
    isEarlier(false)
  }

  const setYesterday = () =>{
    isToday(false)
    isYesterday(true)
    isEarlier(false)
  }
  const setEarlier = () =>{
    isToday(false)
    isYesterday(false)
    isEarlier(true)
  }
  const handleLogout =async()=>{
    const id=User?.result?._id
    console.log(id)
    dispatch(deleteDeviceId({id},navigation))
  }

  const handleNavigate = ()=>{
    navigation.replace('Dept')
  }

  useEffect(()=>{
      if(Circulars.data!=null){
        const data = Circulars.data
        setTodayCircular(data.todayCircular)
        setYesterdayCircular(data.yesterdayCircular)
        setEarlierCircular(data.allCircular)
        const month = data.monthwise
        let fullData=[];
        for(let i of month){
          
          if(i.data.length){
            fullData.push(i)
          }
        }
        setMonthWiseCircular(fullData)
        setDis(true)
      }
  },[Circulars])
 

  useEffect(()=>{
    dispatch(getAllCircular())
  },[dispatch])
  
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <View style={styles.profile}>
              <Icon name="account-circle" color="#3F72AF" size={30}/>
              <Text style={styles.title}>{User?.result?.name}</Text>
        </View>
        <View>
              <CustomButton type='logout' onPress={handleLogout} text='Logout'  />
        </View>
        </View>
        <View style={styles.navigateButton}>
              <CustomButton type='logout' onPress={handleNavigate} text='View Dept Circulars'  />
        </View>
        <View style={styles.buttons}>
          <CustomButton text='Today'  onPress={setToday}   type={today ?'selected':'normal'} />
          <CustomButton text='Yesterday' onPress={setYesterday} type={yesterday ?'selected':'normal'} />
          <CustomButton text='Earlier' onPress={setEarlier}  type={earlier ? 'selected':'normal'} />
        </View>
        <View>
          {!dis && <ActivityIndicator /> }
          {today && 
            <FlatList
             data={todayCircular}
              keyExtractor={item => item._id} 
              renderItem={({item}) => <CircularCard item={item} navigation={navigation} />} 
            />
            
           }
        
             {yesterday &&        
                <FlatList 
                  data={yesterdayCircular}
                   keyExtractor={item => item._id}
                    renderItem={({item}) => <CircularCard item={item} navigation={navigation} />}
                    />
             } 
                  
             {/* {earlier &&           
             <FlatList 
              data={earlierCircular} 
              keyExtractor={item => item._id} 
              renderItem={({item}) => <CircularCard item={item} navigation={navigation} />} 
               /> } */}
               {earlier && 
                <SectionList
                            sections={monthWiseCircular}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => <Item data={item} navigation={navigation} />}
                            renderSectionHeader={({ section: { title} }) => (
                                <Text style={styles.Sectiontitle}>{title }</Text>
                         )}
    />}
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    ctitle:{
      fontSize: 32,
      backgroundColor: "#fff"
    },
    header:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      margin:10
    },  
    buttons:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:14,
    },
    navigateButton:{
        margin:5,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
      // marginHorizontal:30,
      // marginVertical:20,
      fontSize:24,
      fontWeight:'500',
      color:"#112D4E",
      marginLeft:5,
      textTransform:'capitalize'
    },
    Sectiontitle:{
      margin:10,
      fontSize:28,
      color:"#112D4E",
      fontWeight:'bold'
    },
    profile:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:"center",

    
    }
})
export default Circular