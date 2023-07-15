'use client'

import { Button } from "@material-tailwind/react";

type Props={
    title:string
}
const PrimaryButton = ({title}:Props) => {
    return (
        <Button color="gray" className="hover:bg-blue-800 transition-all shadow-none hover:shadow-none duration-700">{title}</Button>
    );
};

export default PrimaryButton;