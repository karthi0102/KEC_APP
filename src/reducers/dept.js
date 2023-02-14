const deptReducer = (state={data:null},action) =>{
    switch(action.type){
        case "FETCH_ALL_DEPT_CIRCULARS":
            return {...state,data:action.payload}
        default:
            return state
    }
}

export default deptReducer