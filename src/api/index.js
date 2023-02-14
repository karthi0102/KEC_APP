import axios from "axios";
const API= axios.create({baseURL:"https://keccircular.onrender.com/"})
export const login =(authData)=>API.post('/user/login',authData)
export const signup=(authData)=>API.post('/user/signup',authData)
export const getAllCirculars = (data) => API.get(`/circular/all/app/${data.department}/${data.batch}/${data.type}`)
export const sendOtp = (otpdata) => API.post('/user/otp',otpdata)   
export const ForgetPassword = (forgetdata) => API.post('/user/forgotten-password',forgetdata)
export const deleteDeviceId =(id) => API.post('/user/delete',id)
export const getAllDeptCirculars = (deptData)=>API.get(`/dept/all/app/${deptData.department}/${deptData.batch}/${deptData.type}`)