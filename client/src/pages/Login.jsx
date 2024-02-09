import React, { useState } from "react";
import LoadingButton from "../components/loading/LoadingButton";
import { useUserLoginMutation } from "../features/api/apiSlice";
import Response from "../components/Response";

const Login = () => {
  const [loginData, loginResponse] = useUserLoginMutation();
  const [pending, setPending] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    loginData({ userName, password });
  };

  return (
    <div className="w-full gap-3 h-[100vh] flex flex-col items-center justify-center">
      <Response
        response={loginResponse}
        setPending={setPending}
        redirectTo="/dashboard"
        type="login"
      />

      <p className="text-lg font-bold">Login</p>
      <input
        type="text"
        className="p-2 w-44 rounded-md border border-gray-300"
        placeholder="user name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        className="p-2 w-44 rounded-md border border-gray-300"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <LoadingButton
        pending={pending}
        onClick={loginHandler}
        title="Login"
        color="bg-blue-500"
        width="w-44"
      />
    </div>
  );
};

export default Login;
