import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import customerImage from "./../assets/images/customers/customer-i.jpg";
import logo from "./../assets/images/site-logo/logoFinal.png";

const text = msg => {
  return (
    <div className="flex items-center w-full justify-start gap-2">
      <img
        src={logo}
        alt=""
        className="w-10 bg-black h-10 self-end rounded-full border border-gray-200"
      />
      <p className="bg-main text-white px-4 py-1 rounded-full rounded-bl-none">
        {msg}
      </p>
    </div>
  );
};
const ChatBots = () => {
  const [chat, setChat] = useState(true);
  const steps = [
    {
      id: "0",
      message: "Well come to Makuta",
      // component: text,
      trigger: "1",
      avatar: logo
    },
    {
      id: "1",
      message: "What is your name?",
      trigger: "2"
    },
    {
      id: "2",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4"
    },
    {
      id: "4",
      message: "What number I am thinking?",
      trigger: "5"
    },
    {
      id: "5",
      options: [
        { value: 1, label: "Number 1", trigger: "6" },
        { value: 2, label: "Number 2", trigger: "6" },
        { value: 3, label: "Number 3", trigger: "7" }
      ]
    },
    {
      id: "6",
      message: "Wrong answer, try again.",
      trigger: "5"
    },
    {
      id: "7",
      message: "Awesome! You are a telepath!"
    }
  ];
  return (
    <div className="self-end fixed bottom-6 h-[500px]  right-5 z-50">
      {!chat && (
        <div className="fixed rounded-full border-2 border-blue-500 z-30 bottom-4 right-4 h-auto w-auto shadow-xl shadow-gray-500">
          <div className="flex w-[120px] py-1 px-2 bg-white border border-gray-400 shadow-xl shadow-gray-500 h-full rounded-md absolute right-14">
            <div className="w-full text-center text-xs">
              <p>
                Hi, How can we <br />
                help you today?
              </p>
            </div>
          </div>
          <div className="absolute h-3 w-3 rotate-45 bg-white border border-gray-400 border-l-0 border-b-0 z-30 right-[50px] top-5"></div>
          <div onClick={() => setChat(true)} class="relative cursor-pointer">
            <img class="w-11 h-11 rounded-full" src={customerImage} alt="" />
            <span class="top-2 -right-2 absolute  w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
      )}
      {chat && (
        <div className="relative">
          <ChatBot steps={steps} />
          <div className="absolute w-full h-[56px] bg-main rounded-lg rounded-b-none z-[9999] top-0 right-0 ">
            <div className="flex h-full px-4 text-white items-center justify-between w-full">
              <p className="text-lg font-bold ">Makuta</p>
              <svg
                onClick={() => setChat(false)}
                class="w-6 h-6 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBots;
