"use client";
import SectionTitle from "../section title/SectionTitle";
import Image from "next/image";
import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

const HomeContact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE || "",
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || "",
          formRef.current,
          process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || ""
        )
        .then(
          (result) => {
            if (formRef.current) {
              formRef.current.reset();
            }
            toast("message sent", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              type: "success",
            });
          },
          (error) => {
            toast("something went wrong", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              type: "error",
            });
          }
        );
    }
  };
  return (
    <div>
      <SectionTitle
        title="contact us"
        subtitle="Do you have any suggestions for us to improve ourself? Feel free to share your opinion"
      ></SectionTitle>
      <div className="flex w-9/12 flex-col mx-auto lg:flex-row gap-4 lg:gap-x-8 items-center">
        <div className="relative">
          <Image
            src={
              "https://img.freepik.com/free-photo/doctor-with-mobile-phone-checking-something-digital-tablet_329181-608.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais"
            }
            alt="contact"
            width={400}
            height={300}
          ></Image>
          <h1 className="absolute top-1/2 left-4 bg-white bg-opacity-50 font-semibold text-2xl p-4">
            Help us to improve
          </h1>
        </div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Your Suggestions
          </Typography>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input name="user_name" size="lg" label="Name" />
              <Input name="user_email" size="lg" label="Email" />
              <div className="w-full">
                <Textarea name="message" label="Message" />
              </div>
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Send message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default HomeContact;
