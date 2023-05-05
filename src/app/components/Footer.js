"use client";

import React from "react";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
const Footer = () => {
  return (
    <div className="bg-zinc-950	 p-4 font-serif mt-20">
      <div className="flex items-center justify-around">
        <h1 className="text-2xl text-slate-100">Movie Buzz</h1>
        <div className="flex gap-3">
          <Image src="/facebook.png" alt="facebook" height={30} width={30} />
          <Image src="/twitter.png" alt="facebook" height={30} width={30} />
          <Image src="/instagram.png" alt="facebook" height={30} width={30} />
          <Image src="/linkedin.png" alt="facebook" height={30} width={30} />
          <Image src="/youtube.png" alt="facebook" height={30} width={30} />
        </div>
      </div>
      <div className="flex justify-evenly p-5">
        <div className="flex item-center gap-24">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-100">Company</h1>
            <Stack sx={{ width: "60%", color: "grey.500" }} spacing={2}>
              <LinearProgress color="success" />
            </Stack>
            <p className="text-gray-100 opacity-40">Home</p>
            <p className="text-gray-100 opacity-40">Contact us</p>
            <p className="text-gray-100 opacity-40">About us</p>
            <p className="text-gray-100 opacity-40">Get Started</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-100">Services</h1>
            <Stack sx={{ width: "50%", color: "grey.500" }} spacing={2}>
              <LinearProgress color="success" />
            </Stack>
            <p className="text-gray-100 opacity-40">App design</p>
            <p className="text-gray-100 opacity-40">Web design</p>
            <p className="text-gray-100 opacity-40">Logo design</p>
            <p className="text-gray-100 opacity-40">Banner design</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-100">Account</h1>
            <Stack sx={{ width: "60%", color: "grey.500" }} spacing={2}>
              <LinearProgress color="success" />
            </Stack>
            <p className="text-gray-100 opacity-40"> Profile</p>
            <p className="text-gray-100 opacity-40">My account</p>
            <p className="text-gray-100 opacity-40">Preferences</p>
            <p className="text-gray-100 opacity-40">Purchase</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-100">Courses</h1>
            <Stack sx={{ width: "50%", color: "grey.500" }} spacing={2}>
              <LinearProgress color="success" />
            </Stack>
            <p className="text-gray-100 opacity-40">HTML & CSS</p>
            <p className="text-gray-100 opacity-40">Javascript</p>
            <p className="text-gray-100 opacity-40">Photography</p>
            <p className="text-gray-100 opacity-40">Photoshop</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-slate-100">Subscribe</p>
          <Stack sx={{ width: "40%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="success" />
          </Stack>
          <input
            className="p-1 rounded-md border border-white bg-black text-white"
            type="text"
            placeholder="Enter your email"
            style={{ paddingLeft: "10px" }}
          />
          <button className="bg-slate-100 p-1 rounded-md">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
