const initialState = {
    toggle:false
}
export const toggleReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "SETTOGGLE":
            return {...state,toggle:action.payload}
        default:
            return {...state}
    }
}
export default toggleReducer;