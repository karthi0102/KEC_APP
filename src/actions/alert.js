import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType="none", timeout = 5000) => dispatch => {
  try{
  const id = uuidv4();
 
  dispatch({
    type:"SET_ALERT",
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), timeout);
}catch(Err){
  console.log(Err)
}
};

