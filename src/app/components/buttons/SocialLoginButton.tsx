'use client'
import { Button } from '@material-tailwind/react';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-toastify';

const SocialLoginButton = () => {
    const{googleLogin}:any=useAuth()
    const handleGoogleLogin=async()=>{
        const toastId=toast.loading('Sigining in',{position:'top-center'})
        try {
         await  googleLogin()
          toast.dismiss(toastId)
          toast.success('sign in successful',{position:'top-center'})
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
        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
    );
};

export default SocialLoginButton;