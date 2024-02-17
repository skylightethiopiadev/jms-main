import { DarkThemeToggle } from "flowbite-react";
import React from "react";

const Chat = () => {
  const focusHandler = (id) => {
    ["group", "private", "manager", "lawyer", "all"].map((e) => {
      const ids = document.getElementById(e);
      ids?.classList?.remove(
        "border-b",
        "bg-gray-200",
        "border-blue-600",
        "text-blue-600"
      );
      if (id === e) {
        ids?.classList?.add(
          "border-b",
          "bg-gray-200",
          "border-blue-600",
          "text-blue-600"
        );
      }
    });
  };

  const createRoomHandler = (id) => {
    console.log(id, "running");
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((e) => {
      const ids = document.getElementById(e);
      ids?.classList?.remove("bg-gray-200");
      if (id === e) {
        ids?.classList?.add("bg-gray-200");
      }
    });
  };

  const closeLists = () => {
    const i = document.getElementById("user_lists");
    const ii = document.getElementById("user_list_container");
    ii.classList?.remove("md:flex-[25%]");
    i?.classList?.value?.includes("hidden")
      ? (i.classList?.remove("hidden"),
        i.classList?.add("flex"),
        ii.classList?.add("md:flex-[25%]"))
      : (i.classList?.remove("flex"),
        i.classList?.add("hidden"),
        ii.classList?.remove("md:flex-[25%]"));
  };

  return (
    <div className="flex w-full h-[100vh">
      {/* side navigation */}
      <div className="hidden md:flex border-r py-2 items-start justify-start shadow-md">
        <ul class="space-y-0 font-medium">
          <li
            onClick={() => {
              // focusHandler("menu");
              closeLists();
            }}
          >
            <a
              href="#"
              id="menu"
              class="flex flex-col items-center px-9 border-gray-400 py-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
              {/* <span class="ms-3">Dashboard</span> */}
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("all")}>
            <a
              href="#"
              id="all"
              class="flex flex-col items-center border-b border-blue-600 text-blue-600 bg-gray-200  p-2 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-6 h-6  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                />
              </svg>
              <span class="">All</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("group")}>
            <a
              href="#"
              id="group"
              class="flex flex-col items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>

              <span class="">Groups</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("private")}>
            <a
              href="#"
              id="private"
              class="flex flex-col items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span class="">Privates</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("manager")}>
            <a
              href="#"
              id="manager"
              class="flex flex-col items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.5 11.5 11 13l4-3.5M12 20A16.4 16.4 0 0 1 5 6.7L12 4l7 2.7A16.7 16.7 0 0 1 12 20Z"
                />
              </svg>

              <span class="">Managers</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("lawyer")}>
            <a
              href="#"
              id="lawyer"
              class="flex flex-col items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.3-.6-1-1-1.6-1H7.6c-.7 0-1.3.4-1.6 1M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              <span class="">Lawyers</span>
            </a>
          </li>{" "}
        </ul>
      </div>

      {/* search and user list */}
      <div id="user_list_container" className="hidden md:block md:flex-[25%]">
        <div
          id="user_lists"
          className="flex border-r flex-col flex-[25%] h-[100vh]"
        >
          {/* search */}
          <form className="px-2 mt-3">
            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2 bottom-[5.5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          {/* user list */}
          <div className="flex flex-col  mt-3 h-full overflow-y-scroll">
            <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                (e, i) => {
                  return (
                    <li
                      key={i}
                      id={i.toString()}
                      onClick={() => createRoomHandler(i)}
                      class="p-3 hover:bg-gray-200"
                    >
                      <div class="flex cursor-pointer items-center space-x-4 rtl:space-x-reverse">
                        <div class="relative">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="gedi.jpg"
                            alt=""
                          />
                          <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@flowbite.com
                          </p>
                        </div>
                        {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div> */}
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-[62%]">
        <div class="flex-1  justify-between flex flex-col h-screen">
          {/* user profile detail */}
          <div className="w-full flex border-b justify-between items-center">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                id="menu"
                class="flex flex-col md:hidden ml-2 items-center p-2 border-gray-400 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
                {/* <span class="ms-3">Dashboard</span> */}
              </a>
              <div class="relative ml-4 py-2">
                <img class="w-10 h-10 rounded-full" src="gedi.jpg" alt="" />
                {/* <span class="top-6 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  last seen recently
                </p>
              </div>
            </div>

            <div class="flex items-center mr-4 space-x-2">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>

              {/* <DarkThemeToggle /> */}
            </div>
          </div>

          {/* messages */}
          <div
            id="messages"
            class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            <div class="chat-message">
              <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      Can be verified on any platform using docker
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>

            {/* <button
              data-tooltip-target="tooltip-default"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Default tooltip
            </button>

            <div
              id="tooltip-default"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Tooltip content
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div> */}

            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                      Your error message says permission denied, npm global
                      installs must be given root privileges.
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      Command was run with root privileges. I'm sure about that.
                    </span>
                  </div>
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      I've update the description so it's more obviously now
                    </span>
                  </div>
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      FYI https://askubuntu.com/a/700266/510172
                    </span>
                  </div>
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      Check the line above (it ends with a # so, I'm running it
                      as root )<pre># npm install -g @vue/devtools</pre>
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                      Any updates on this issue? I'm getting the same error when
                      trying to install devtools. Thanks
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      Thanks for your message David. I thought I'm alone with
                      this issue. Please, ? the issue to support it :)
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                      Are you using sudo?
                    </span>
                  </div>
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                      Run this command sudo chown -R `whoami`
                      /Users/.npm-global/ then install the package globally
                      without using sudo
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      It seems like you are from Mac OS world. There is no
                      /Users/ folder on linux ?
                    </span>
                  </div>
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      I have no issue with any other packages installed with
                      root permission globally.
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                      yes, I have a mac. I never had issues with root permission
                      as well, but this helped me to solve the problem
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      I get the same error on Arch Linux (also with sudo)
                    </span>
                  </div>
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      I also have this issue, Here is what I was doing until
                      now: #1076
                    </span>
                  </div>
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      even i am facing
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
          </div>

          {/* message input field */}
          <div class="border-t border-gray-200  shadow-sm px-4 pt-3">
            <div class="relative items-center justify-center flex gap-2 border border-gray-300 rounded-lg mb-3">
              <button
                type="button"
                class="inline-flex items-center p-1  justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Write your message!"
                class="w-full text-gray-600  focus:border-none p-3 border-none focus:outline-none focus:rounded-sm"
              />

              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg px-4 py-1  mr-2 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span class="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
