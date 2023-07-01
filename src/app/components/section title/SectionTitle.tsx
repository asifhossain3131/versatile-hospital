import React from 'react';

type Props={
    title:string,
    subtitle:string
}
const SectionTitle = ({title, subtitle}:Props) => {
    return (
        <div className='mt-12 mb-8 w-1/2 mx-auto text-center'>
            <h1 className='font-semibold text-lg text-blue-800 uppercase mb-2 '>{title}</h1>
            <h2 className='font-medium text-2xl '>{subtitle}</h2>
        </div>
    );
};

export default SectionTitle;