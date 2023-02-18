const initialState = {
        loading:false
}
export const loadingReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "SETLOADING":
            return {...state,loading:action.payload}
        default:
            return {...state}
    }
}
export default loadingReducer;