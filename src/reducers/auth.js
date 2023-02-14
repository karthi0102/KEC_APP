import AsyncStorage  from '@react-native-async-storage/async-storage'
const authReducer = (state = {data : null},action) => {
    switch(action.type){
        case 'SET_USER':
            AsyncStorage.setItem('KEC',JSON.stringify({...action.payload}))
            return {...state,data:action?.payload}
        default:
            return state
    }
}

export default authReducer

