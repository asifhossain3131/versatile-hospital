import React, { ReactNode } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';

interface LayoutProps {
    children: ReactNode;
}

const Common: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <SubHeader></SubHeader>
            <Header></Header>
            <div className='min-h-[calc(100vh-345px)]'>
            {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Common;
