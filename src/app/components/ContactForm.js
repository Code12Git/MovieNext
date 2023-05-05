"use client";
import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [credentials, setcredentials] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const InputChangeHandler = (e) => {
    setcredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { username, email, phone, message } = credentials;
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          phone: phone,
          message: message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setcredentials({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-semibold mb-4 ">
          We love to hear <span className="text-red-300">from you</span>
        </h1>
        <div className="bg-slate-100 flex flex-col items-center m-auto p-10 gap-3 w-96 shadow-lg rounded-lg h-auto">
          <div>
            <p className="text-blue-400 mb-2"> Name</p>
            <input
              className="rounded-md p-2"
              name="username"
              type="text"
              value={credentials.username}
              placeholder="Enter your name"
              onChange={InputChangeHandler}
            />
          </div>
          <div>
            <p className="text-blue-400 mb-2">Email</p>
            <input
              className="rounded-md p-2"
              name="email"
              type="email"
              value={credentials.email}
              placeholder="Enter your email"
              onChange={InputChangeHandler}
            />
          </div>
          <div>
            <p className="text-blue-400 mb-2 ">Phone Number</p>
            <input
              className="rounded-md p-2"
              name="phone"
              value={credentials.phone}
              type="number"
              placeholder="Enter your name"
              onChange={InputChangeHandler}
            />
          </div>
          <div>
            <p className="text-blue-400 mb-2">Message</p>
            <textarea
              className="rounded-md p-2"
              value={credentials.message}
              name="message"
              placeholder="Enter your name"
              onChange={(e) => InputChangeHandler(e)}
            />
          </div>
          {status === "success" && <p>Thank you for your message!</p>}
          {status === "error" && (
            <p>There was an error submitting your message. Please try again.</p>
          )}
          <button
            className="bg-green-300 p-2 rounded-lg text-gray-600 hover:bg-green-400"
            onClick={SubmitHandler}
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
