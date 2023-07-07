"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";

const RegistrationCard = () => {
  return (
    <Card
      color="white"
      className="absolute top-6 right-8 lg:right-16 p-4"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Create an account
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type="text" size="lg" label="Name" />
          <Input type="te;" size="lg" label="Phone number" />
          <Input type="email" size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?
          <Link
            href={"/login"}
            className="font-medium text-blue-500 transition-colors ml-2 hover:text-blue-700"
          >
            Login
          </Link>
        </Typography>
      </form>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 justify-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
    </Card>
  );
};

export default RegistrationCard;
