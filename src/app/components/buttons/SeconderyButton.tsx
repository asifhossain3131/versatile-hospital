'use client'

import { Button } from "@material-tailwind/react";
type Props={
    title:string
}
const SeconderyButton = ({title}:Props) => {
    return (
        <Button className="bg-blue-800 hover:bg-opacity-50 transition-all shadow-none hover:shadow-none duration-700">{title}</Button>
    );
};

export default SeconderyButton;