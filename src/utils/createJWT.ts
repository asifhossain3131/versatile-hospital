import React from 'react';

const createJWT = async (payload:object) => {
  const res=await fetch('/api/jwt',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(payload)
  })
};

export default createJWT;