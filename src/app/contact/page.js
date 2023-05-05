import React from "react";

import Image from "next/image";
import ContactForm from "../components/ContactForm";
const ContactPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold  text-center mt-3 ">Contact Us</h1>
      <div className="grid grid-flow-row md:grid-cols-2 md:gap-3 lg:grid-cols-3 p-9">
        <div className="flex flex-col gap-2 font-sans items-center bg-slate-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:ease-out hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
          <Image src="/gmail.png" width={40} height={40} alt="gmail" />
          <p>Email</p>
          <p>Monday to Friday Expected</p>
          <p>response time: 72 hours</p>
          <p>Send Email </p>
        </div>
        <div className="flex flex-col gap-2 font-sans items-center bg-slate-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:ease-out hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
          <Image src="/chat.png" width={40} height={40} alt="chat" />
          <p>Live Chat</p>
          <p>Weekdays: 9 AM - 6 PM ET</p>
          <p>Weekdays:9 AM -5 PM ET</p>
          <p>Chat Now </p>
        </div>
        <div className="flex flex-col gap-2 font-sans items-center bg-slate-100 p-6 rounded-lg transition duration-300 ease-in-out transform hover:ease-out hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
          <Image src="/group.png" width={40} height={40} alt="group" />
          <p>Community Forum</p>
          <p>Monday to Friday Expected</p>
          <p>response time:72 hours </p>
          <p>Ask The Community </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
