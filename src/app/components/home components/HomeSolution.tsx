"use client";

import { Avatar, Badge } from "@material-tailwind/react";
import SectionTitle from "../section title/SectionTitle";

const HomeSolution = () => {
  return (
    <div>
      <SectionTitle
        title="easy solution"
        subtitle="Follow just few steps to have your proper solutions in the easiest and quickest way"
      ></SectionTitle>
      <div>
        <Badge content="5" overlap="circular" placement="top-end">
          <Avatar
            src="https://cdn-icons-png.flaticon.com/128/4850/4850806.png"
            alt="profile picture"
          />
        </Badge>
      </div>
    </div>
  );
};

export default HomeSolution;
