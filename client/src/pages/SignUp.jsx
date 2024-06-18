import LoadingButton from "../components/loading/LoadingButton";
import { useUserRegisterMutation } from "../features/api/apiSlice";
import Response from "../components/Response";
import { useState } from "react";
import logo from "./../assets/images/site-logo/logoFinal.png";
// import { ReactMediaRecorder } from "react-media-recorder";

const Signup = () => {
  const [signupData, signupResponse] = useUserRegisterMutation();
  const [pending, setPending] = useState(false);
  const [pass, setPass] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("private-customer");

  const signupHandler = () => {
    if (!pass) {
      setErrorPopup(true);
    } else {
      setErrorPopup(false);
      signupData({
        email,
        password,
        confirmPassword,
        role
      });
    }
  };
  console.log(role, "role");
  return (
    <section class="bg-gray-500 px-5 w-full h-full flex items-center justify-center dark:bg-gray-900">
      <Response
        response={signupResponse}
        setPending={setPending}
        type="signUp"
      />{" "}
      <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
        {/* <a href="#" class="flex items-center mb-4 font-semibold">
            <img
              class="w-10 h-10 rounded-full bg-white mr-2"
              src={logo}
              alt="logo"
            />
            <div className="flex text-white flex-col">
              <p className="">MAKUTA LAW FIRM</p>
              <p className="uppercase">Sign Up to explore more</p>
            </div>
          </a> */}
        <div class="w-[375px] md:w-[400px] bg-white px-5 rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="px-4 py-4">
            {/* <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1> */}
            <a href="/" className="text-xl absolute left-5 top-2 font-bold">
              <svg
                class="w-6 h-6 text-white"
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
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </a>
            <label
              for="password"
              class="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Register as
            </label>
            <select
              onChange={e => setRole(e.target.value)}
              name=""
              id=""
              className="w-full p-2 rounded-lg mt-2 border border-gray-300"
            >
              <option selected value="private-customer">
                Private customer
              </option>
              <option value="business-customer">Business customer</option>
              <option value="lawyer">Lawyer</option>
            </select>
            <div class="space-y-4 md:space-y-6 mt-4" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="mb-5">
                <label
                  for="repeat-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Repeat password
                </label>
                <input
                  onChange={e => setConfirmPassword(e.target.value)}
                  type="password"
                  id="repeat-password"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  placeholder="••••••••"
                />
              </div>
              <div class="flex w-full h-14 flex-col items-start justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      onChange={e =>
                        e.target.checked
                          ? (setPass(true), setErrorPopup(false))
                          : (setPass(false), setErrorPopup(true))
                      }
                      id="terms"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
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
                </div>

                {errorPopup && (
                  <p className="font-bold">
                    Please agree with our terms and condition
                  </p>
                )}
                <a
                  href="/forget"
                  class="font-medium text-blue-500 text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forget Password
                </a>
              </div>

              <LoadingButton
                pending={pending}
                onClick={signupHandler}
                title="Register"
                color="bg-blue-500"
                width="w-full"
              />
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an Account?{" "}
                <a
                  href="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
