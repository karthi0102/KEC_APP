import * as api from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAlert } from './alert'
export const getdeptAllCircular =() => async(dispatch) =>{
    try {
            let User = await AsyncStorage.getItem('KEC')
            User = JSON.parse(User)
            const deptData ={
                department:User?.result?.department,
                batch:User?.result?.batch,
                type:User?.result?.type
            }
            console.log("callled")
            console.log(deptData)
            const {data}=await  api.getAllDeptCirculars(deptData)
            console.log("deptcaller",data)
            dispatch({type:"FETCH_ALL_DEPT_CIRCULARS",payload:data})
    } catch (err) {
        dispatch(setAlert("Server Down"))
    }
}


