import { View, Text,StyleSheet, FlatList,SectionList, ActivityIndicator,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CustomButton from '../../components/CustomButton'
import CircularCard from '../../components/CircularCard'
import { getAllCircular } from '../../actions/circular'
import { setToggle } from '../../actions/toggle'
import SideBar from '../../components/SideBar'
import Icon  from 'react-native-vector-icons/Entypo'
import image from '../../../assets/images/logo.png'

const Item = ({ data,navigation }) => {
  return(
  <View style={styles.item}>
    <CircularCard item={data} navigation={navigation} />
  </View>
)
  }

const DeptCircular = ({navigation}) => {
  const [dis,setDis]=useState(false)
  const [today,isToday]=useState(true)
  const [yesterday,isYesterday]=useState(false)
  const [earlier,isEarlier]=useState(false)
  const dispatch=useDispatch()
  const Circulars = useSelector((state) =>(state.deptReducer))
  const [todayCircular,setTodayCircular] = useState()
  const [yesterdayCircular,setYesterdayCircular] = useState()
  const [ earlierCircular,setEarlierCircular] = useState()
  const [monthWiseCircular,setMonthWiseCircular]=useState()

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

  const handleToggle = (data)=>{
      dispatch(setToggle(data))
  }
  
  return (
    <View style={styles.container}>
      <SideBar navigation={navigation} />
       <View style={styles.header}>
          <View style={styles.profile}>
                <Image source={image} style={styles.logo} />
            <Text style={styles.brand}>Kec Circular</Text>
        </View>
        <View>
            <TouchableOpacity onPress={()=>handleToggle(true)} ><Icon name="menu" size={32} color={"#112D4E"} /></TouchableOpacity>
        </View>
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
    logo:{
      height:60,
      objectFit:'cover',
      width:60,
      margin:10,
    },
    brand:{
      color:"#112D4E",
      fontSize:32,
      fontWeight:'bold'
    },
    ctitle:{
      fontSize: 32,
      backgroundColor: "#fff"
    },
    header:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      padding:10,
      gap:10
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

export default DeptCircular