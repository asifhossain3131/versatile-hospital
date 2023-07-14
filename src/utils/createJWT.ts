import React from 'react';

const createJWT = async (payload:object) => {
try {
  const res=await fetch('/api/jwt',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(payload)
  })
  const data=await res.json()
  return data
} catch (error:any) {
  console.log(error.message)
}
};

export default createJWT;