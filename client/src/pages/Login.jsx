import React, { useState } from "react";
import LoadingButton from "../components/loading/LoadingButton";
import { useUserLoginMutation } from "../features/api/apiSlice";
import Response from "../components/Response";
// import { ReactMediaRecorder } from "react-media-recorder";

const Login = () => {
  const [loginData, loginResponse] = useUserLoginMutation();
  const [pending, setPending] = useState(false);
  const [pass, setPass] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (!pass) {
      setErrorPopup(true);
    } else {
      setErrorPopup(false);
      loginData({ email, password });
    }
  };

  return (
    <div className="w-full gap-3 bg-gray-200 h-[100vh] flex items-start justify-start">
      <div className="flex flex-[30%] bg-blue-500 h-[100vh]"></div>
      <div className="flex flex-[70%]  h-[100vh]"></div>
      <div className="absolute p-20 top-0 left-0 w-full h-[100vh] bg-transparent rounded-lg">
        <Response
          response={loginResponse}
          setPending={setPending}
          // redirectTo=""
          // redirectTo="/dashboard/customer/private"
          type="login"
          // type="loginddd"
        />
        <div className="w-full relative h-[75vh] shadow-lg flex flex-col lg:flex-row-reverse rounded-sm bg-white">
          <div className="flex relative bg-white  flex-[50%] py-8 ">
            <div class="max-w-sm mx-auto">
              {" "}
              <p className="text-xl font-bold">Login</p>
              <div class="mb-5 mt-7">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                  <input
                    onChange={(e) =>
                      e.target.checked
                        ? (setPass(true), setErrorPopup(false))
                        : (setPass(false), setErrorPopup(true))
                    }
                    id="terms"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="terms"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    class="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
              {errorPopup && (
                <p className="font-bold py-3 -mt-4">
                  please agree with our terms and condition
                </p>
              )}
              <LoadingButton
                pending={pending}
                onClick={loginHandler}
                title="Login"
                color="bg-blue-500"
                width="w-48"
              />
              <p
                for="terms"
                class="mt-10 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Don't you have an account?
                <a
                  href="/Signup"
                  class="text-blue-600 ml-2 hover:underline dark:text-blue-500"
                >
                  Register now
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-[50%] ">
            <img src="./bg-1.jpg" alt="" className="w-full brightness-75" />
          </div>
        </div>
      </div>
      {/* <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl,error }) => {
          console.log(mediaBlobUrl,error,'blob');
          return (
            <div>
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              <video src={mediaBlobUrl?mediaBlobUrl:null} controls autoPlay loop />
            </div>
          );
        }}
      /> */}
      {/* <Response
        response={loginResponse}
        setPending={setPending}
        redirectTo="/dashboard"
        // type="login"
        type="loginddd"
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
      /> */}
    </div>
  );
};

export default Login;
