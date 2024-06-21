import React from "react";
import CustomersHeader from "./customers/customers-components/CustomersHeader";
import CustomersSideNav from "./customers/customers-components/CustomersSideNav";
import Message from "../Message";

const MessageContainer = () => {
  return (
    <div className="w-full fixed top-0 left-0 h-[100vh] bg-white">
      <CustomersHeader />

      <CustomersSideNav />
      <div className="w-full xl:w-[86.5%] absolute z-20 h-[92.5vh] top-11 left-1 xl:left-[182px] bg-white ">
        <Message />
      </div>
    </div>
  );
};

export default MessageContainer;
