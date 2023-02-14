import * as api from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const getdeptAllCircular =() => async(dispatch) =>{
    try {

              let User = await AsyncStorage.getItem('KEC')
            User = JSON.parse(User)
            const deptData ={
                department:User?.result?.department,
                batch:User?.result?.batch,
                type:User?.result?.type
            }
            const {data}=await  api.getAllDeptCirculars(deptData)
            
            dispatch({type:"FETCH_ALL_DEPT_CIRCULARS",payload:data})
            
    } catch (err) {
        console.log(err.message)
    }
}


