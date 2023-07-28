import React, { ReactNode } from 'react';
import DashboardSidebar from './DashboardSidebar';

interface LayoutProps {
    children: ReactNode;
}
const DashboardLayout: React.FC<LayoutProps> = ({ children }) =>  {
    return (
        <div className='flex'>
            <DashboardSidebar></DashboardSidebar>
            <div className='bg-blue-gray-50 w-full'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;