'use client'

import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Input, Typography } from "@material-tailwind/react";

const NewsLetterInputField = () => {
    return (
        <div className="w-full my-2">
        <Input type="email" label="Email" />
        <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2">
          <InformationCircleIcon className="w-4 h-4 -mt-px" />
         Input field should not be empty
        </Typography>
      </div>
    );
};

export default NewsLetterInputField;