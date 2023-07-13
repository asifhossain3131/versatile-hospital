import React, { ReactNode } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from '@/providers';

interface LayoutProps {
    children: ReactNode;
}

const Common: React.FC<LayoutProps> = ({ children }) => {
    return (
      <Providers>
          <div>
            <ToastContainer />
            <SubHeader></SubHeader>
            <Header></Header>
            <div className='min-h-[calc(100vh-345px)]'>
            {children}
            </div>
            <Footer></Footer>
        </div>
      </Providers>
    );
};

export default Common;
