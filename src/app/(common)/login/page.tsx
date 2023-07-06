import Image from 'next/image';
import LoginCard from './LoginCard';

const LoginPage = () => {
    return (
        <div className='relative'>
          <Image className='w-full h-[520px]' alt='login' src={'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'} width={1000} height={200}></Image>
          <LoginCard></LoginCard>
        </div>
    );
};

export default LoginPage;