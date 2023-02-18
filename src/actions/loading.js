export const setLoading = (data)=>async(dispatch)=>{
    dispatch({type:"SETLOADING",payload:data})
}