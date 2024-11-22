import axios from 'axios'
import { setToken } from '../../utils/auth'

const BASE_URL = `${import.meta.env.VITE_BACK_END_URL}`
console.log(BASE_URL);

export const signup = async (formData) => {
  console.log("sending",formData);
  
  // Sign up a user
  const { data } = await axios.post(`${BASE_URL}/auth/sign-up`, formData)
console.log("risposta",data);

  // Set the token to local storage
  if(data.status) {
    alert("Registrazione riuscita ora fai il login")
  }
  return data
}

export const signIn = async (formData) => {
  // Sign up a user
  const { data } = await axios.post(`${BASE_URL}/auth/sign-in`, formData)
console.log(data);
localStorage.setItem("token",data.data.access)
console.log(data.data.access);

  // Set the token to local storage
  if(data.data.access) {
    setToken(data.data.access)
    
  }

  return data
}