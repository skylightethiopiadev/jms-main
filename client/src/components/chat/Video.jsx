import { PushPinOutlined } from "@mui/icons-material";
import React from "react";

const Video = ({
  setRemotePeerIdValue,
  remotePeerIdValue,
  remoteVideoRef,
  currentUserVideoRef,
  peerId,
  call,
  setDisplayVideo,
}) => {
  return (
    <div className="flex relative flex-col items-start gap-2 justify-start p-4 h-[100vh] w-[70%] bg-white">
      {/* <h1>Current user id is {peerId}</h1>
        <input
          type="text"
          value={remotePeerIdValue}
          onChange={(e) => setRemotePeerIdValue(e.target.value)}
        />
        <button onClick={() => call(remotePeerIdValue)}>Call</button>
        <div>
          <video ref={currentUserVideoRef} />
        </div>
        <div>
          <video ref={remoteVideoRef} />
        </div> */}
      <div className="flex gap-2 items-center">
        <p
          onClick={() => setDisplayVideo(false)}
          className="text-sm absolute left-1 top-1 px-2 hover:text-gray-600"
        >
          back
        </p>
        <h1>Current user id is {peerId}</h1>
        <input
          type="text"
          value={remotePeerIdValue}
          onChange={(e) => setRemotePeerIdValue(e.target.value)}
        />
        <button onClick={() => call(remotePeerIdValue)}>Call</button>
      </div>
      <div className="relative w-full">
        <video
          ref={remoteVideoRef}
          alt=""
          controls
          className="h-[440px] object-cover object-center border border-gray-300 rounded-xl w-full"
        />
        <PushPinOutlined
          fontSize="small"
          className="absolute text-blue-500 cursor-pointer rotate-45 top-1 left-1"
        />
        <div className="absolute top-1 right-1 w-24 h-16">
          <video
            ref={currentUserVideoRef}
            className=" border w-full object-cover object-center h-full border-gray-300  rounded-md "
          />
          <PushPinOutlined
            fontSize="small"
            className="absolute cursor-pointer rotate-45 top-1 right-1"
          />
        </div>
      </div>

      <div className="flex gap-5 w-full items-center mt-4 justify-center">
        <div className="p-2 hover:bg-gray-500/50 cursor-pointer  rounded-full bg-gray-400/50">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
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
              d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
            />
          </svg>
        </div>
        <button
          onClick={() => setDisplayVideo(false)}
          className="px-7 py-3 rounded-full bg-red-500 text-white hover:bg-red-400"
        >
          End call
        </button>
        <div className="p-2 hover:bg-gray-500/50 cursor-pointer rounded-full bg-gray-400/50">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
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
              d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Video;
