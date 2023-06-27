import React, { ReactNode } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

interface LayoutProps {
    children: ReactNode;
}

const Common: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <SubHeader></SubHeader>
            <Header></Header>
            {children}
        </div>
    );
};

export default Common;
