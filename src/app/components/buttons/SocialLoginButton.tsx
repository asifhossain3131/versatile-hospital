'use client'
import { Button } from '@material-tailwind/react';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-toastify';
import Image from 'next/image';

const SocialLoginButton = () => {
    const{googleLogin}:any=useAuth()
    const handleGoogleLogin=async()=>{
        const toastId=toast.loading('Sigining in',{position:'top-center'})
        try {
        const res= await  googleLogin()
         if(res){
          toast.dismiss(toastId)
          toast.success('sign in successful',{position:'top-center'})
          const user={name:res.user.displayName, email:res.user.email,role:'user'}
          const response=await fetch('../../api/createUser',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          const data=await response.json()
         }
        } catch (error) {
          toast.dismiss(toastId)
          toast.error('Something went wrong!',{position:'top-center'})
        }
    }
    return (
        <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 justify-center"
        onClick={handleGoogleLogin}
      >
        <Image src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
    );
};

export default SocialLoginButton;