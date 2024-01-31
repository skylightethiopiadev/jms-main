import React, { useEffect, useState } from "react";
import Facebook from "@material-ui/icons/Facebook";
import Email from "@material-ui/icons/Email";
import EnhancedEncryption from "@material-ui/icons/EnhancedEncryption";
import Person from "@material-ui/icons/Person";
import ViewHeadlineSharp from "@material-ui/icons/Gavel";
import { Close } from "@material-ui/icons";
import LoadingButton from "../components/loading/LoadingButton";
import { useUserLoginMutation } from "../features/api/apiSlice";

const SignUp = () => {
  const [loginData, loginResponse] = useUserLoginMutation();
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [pending, setPending] = useState(false);

  const loginHandler = () => {
    loginData({ userName, password });
    console.log("user logged in clicked");
  };

  const validatorHandler = (val) => {};

  useEffect(() => {
    loginResponse.status === "fulfilled"
      ? (setError(false),
        sessionStorage.setItem(
          "gsm-token",
          "Bearer " + JSON.parse(JSON.stringify(loginResponse?.data?.token))
        ),
        sessionStorage.setItem(
          "gsm-user",
          JSON.stringify(loginResponse?.data?.data)
        ),
        navigate("/", { replace: true }),
        context.setUserType(
          JSON.parse(sessionStorage.getItem("gsm-user")).role
        ),
        context.setSetting(true),
        context.setLogin(false))
      : null;

    loginResponse.status === "rejected"
      ? (setError(true), setErrorMessage(loginResponse?.error?.data?.message))
      : setError(false);
    loginResponse.status === "pending" ? setPending(true) : setPending(false);
  }, [loginResponse]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="bg-blue-500 w-auto px-6 py-4 md:px-12 md:py-10 font-bold flex flex-col items-center justify-center rounded-xl h-auto">
        <div className="flex items-center justify-center gap-4">
          <div className="p-2 rounded-full w-auto h-auto bg-white text-black">
            <ViewHeadlineSharp />
          </div>

          <p className="uppercase font-semibold text-2xl tracking-wide">
            gsm law firm
          </p>
        </div>

        <div className="rounded-lg p-6 md:p-10 flex flex-col mt-3 bg-white relative h-full w-auto">
          {/* <div className=" absolute left-0 top-0 px-4 py-2 bg-red-200 text-red-500 rounded-lg rounded-b-none text-center border w-full border-red-500">
            <Close
              onClick={() => console.log("closed")}
              className="absolute right-1 top-1 cursor-pointer hover:text-red-400 text-red-500"
            />
            <p className="text-xs">Invalid user name or password</p>
          </div> */}

          <div className="flex flex-col md:items-center md:flex-row gap-x-4 gap-y-2">
            <p className="font-bold text-lg text-gray-800">Sign up </p>
          </div>

          <p className="text-xs text-gray-500 mt-3 w-full">First name</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border-gray-400 mt-1 text-xs w-80 border px-2 py-2 rounded-sm focus:outline-gray-500"
            placeholder="first name"
          />

          <p className="text-xs text-gray-500 mt-3 w-full">First name</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border-gray-400 mt-1 text-xs w-full border px-2 py-2 rounded-sm focus:outline-gray-500"
            placeholder="first name"
          />
          <p className="text-xs text-gray-500 mt-3 w-full">First name</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border-gray-400 mt-1 text-xs w-full border px-2 py-2 rounded-sm focus:outline-gray-500"
            placeholder="first name"
          />
          <p className="text-xs text-gray-500 mt-3 w-full">First name</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border-gray-400 mt-1 text-xs w-full border px-2 py-2 rounded-sm focus:outline-gray-500"
            placeholder="first name"
          />
          <p className="text-xs text-gray-500 mt-3 w-full">First name</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border-gray-400 mt-1 text-xs w-full border px-2 py-2 rounded-sm focus:outline-gray-500"
            placeholder="first name"
          />
          <p className="text-xs text-gray-500 mt-3 w-full">First name</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border-gray-400 mt-1 text-xs w-full border px-2 py-2 rounded-sm focus:outline-gray-500"
            placeholder="first name"
          />

          <LoadingButton
            pending={true}
            onClick={loginHandler}
            title="Sign in."
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
