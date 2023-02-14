const circularReducer = (state={data:null},action) =>{
    switch(action.type){
        case "FETCH_ALL_CIRCULARS":
            return {...state,data:action.payload}
       
        default:
            return state
    }
}

export default circularReducer