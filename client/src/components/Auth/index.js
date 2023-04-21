import React from 'react'
import jwt_decode from 'jwt-decode'
 
export const createOrGetUser=async (response)=>{
 const result = jwt_decode(response.credential)
 const token =response.credential;
 console.log(token,result)
}

