import { DarkThemeToggle } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import {
  useCreateMutation,
  useLazyReadChatQuery,
  useReadQuery,
} from "../features/api/apiSlice";
import Response from "../components/Response";
import LoadingButton from "../components/loading/LoadingButton";
import Loading from "../components/loading/Loading";
import { useLocation } from "react-router-dom";

//#########################
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhoneIcon from "@material-ui/icons/Phone";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import Draggable from "react-draggable";
import { ReactMediaRecorder } from "react-media-recorder";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const location = useLocation();
  const [sendMessageData, sendMessageResponse] = useCreateMutation();
  const [sender, setSenderId] = useState("");
  const [receiver, setReceiverId] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [onlineUsers, setOnlineUsers] = useState();
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [texts, setTexts] = useState();
  const [typing, setTyping] = useState(false);
  const refer = useRef(null);

  const [trigger, { data: messageData, isLoading, isError }] =
    useLazyReadChatQuery({ refetchOnFocus: false });

  useEffect(() => {
    if (receiver && sender) {
      trigger({
        url: `/chat/${sender}.${receiver}`,
        tag: ["chats"],
      });
    }
  }, [receiver, sender]);

  const {
    data: userData,
    isLoading: userIsFetching,
    isError: userIsError,
  } = useReadQuery({
    url: `/user/users?limits=50`,
    tag: ["users"],
  });

  useEffect(() => {
    const hash = location.hash.split("#").splice(1, 2);
    // console.log(hash, "locations now");
    if (location?.hash) {
      setCurrentUser({ _id: hash[0], userName: hash[1] });
    }
  }, []);

  const focusHandler = (id) => {
    ["group", "private", "manager", "lawyer", "all"].map((e) => {
      const ids = document.getElementById(e);
      ids?.classList?.remove(
        // "border-b",
        // "bg-gray-200",
        // "border-blue-600",
        "font-extrabold",
        "text-blue-600"
      );
      if (id === e) {
        ids?.classList?.add(
          // "border-b",
          // "bg-gray-200",
          // "border-blue-600",
          "font-extrabold",
          "text-blue-600"
        );
      }
    });
  };

  useEffect(() => {
    setSocket(
      io(
        "http://localhost:5000"
        // , {
        // path: "/socket.io",
        // transports: ["websocket"],
        // secure: true,
        // }
      )
    );
  }, []);

  useEffect(() => {
    socket?.emit("connect-user", currentUser?.userName);
    socket?.on("aaa", (val) => {
      setOnlineUsers(val);
    });
  }, [socket, currentUser]);

  const sendHandler = () => {
    sender &&
      receiver &&
      sendMessageData({
        chatId: `${sender}.${receiver}`,
        sender: sender,
        receiver: receiver,
        message: {
          content: message,
          size: "20kb",
        },
        messageType: "text",
        chatType: "private",
        url: `/chat`,
        tag: ["chats"],
      });
  };

  useEffect(() => {
    if (messageData !== undefined) {
      setTexts(messageData?.data);
      socket?.emit(
        "aa",
        messageData?.data,
        `${receiver}.${sender}`,
        `${sender}.${receiver}`
      );
      socket?.on("bb", (text) => {
        setTexts(text);
      });
    }
  }, [messageData]);

  useEffect(() => {
    refer.current?.scrollIntoView();
  }, [texts]);

  useEffect(() => {
    refer.current?.scrollIntoView();
  }, [typing]);

  const createRoomHandler = (id) => {
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

  const popup = (id) => {
    const i = document.getElementById(id);
    i?.classList?.value?.includes("hidden")
      ? (i.classList?.remove("hidden"), i.classList?.add("flex"))
      : (i.classList?.remove("flex"), i.classList?.add("hidden"));
  };

  // typing handler
  const typingHandler = (e) => {
    if (e.target.value.length > 0) {
      socket?.emit("typing t", true, "this must be a chat room unique id");
      socket?.on("typing true", (bool) => {
        setTyping(bool);
      });
    } else {
      socket?.emit("typing f", false, "this must be a chat room unique id");
      socket?.on("typing false", (bool) => {
        setTyping(bool);
      });
    }
  };

  //####################################################################
  //##############################################################3####3
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket?.on("me", (id) => {
      setMe(id);
    });

    socket?.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    console.log(id, "ids");
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  return (
    <div className="flex w-full h-[100vh">
      {/* side navigation */}
      <div className="hidden md:flex border-r py-2 items-start justify-start shadow-md">
        <ul className="space-y-0 font-medium">
          <li
            onClick={() => {
              // focusHandler("menu");
              closeLists();
            }}
          >
            <a
              href="#"
              id="menu"
              className="flex flex-col items-center px-9 border-gray-400 py-4 text-gray-900 dark:text-white group"
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
              {/* <span className="ms-3">Dashboard</span> */}
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("all")}>
            <a
              href="#"
              id="all"
              className="flex flex-col items-center font-extrabold  text-blue-600  p-2 dark:text-white group"
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
              <span className="">All</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("group")}>
            <a
              href="#"
              id="group"
              className="flex flex-col items-center p-2  group"
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

              <span className="">Groups</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("private")}>
            <a
              href="#"
              id="private"
              className="flex flex-col items-center p-2 group"
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
              <span className="">Privates</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("manager")}>
            <a
              href="#"
              id="manager"
              className="flex flex-col items-center p-2 group"
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

              <span className="">Managers</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("lawyer")}>
            <a
              href="#"
              id="lawyer"
              className="flex flex-col items-center p-2 group"
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

              <span className="">Lawyers</span>
            </a>
          </li>{" "}
        </ul>
      </div>

      <Response response={sendMessageResponse} setPending={setPending} />

      {/* search and user list */}
      <div id="user_list_container" className="hidden md:block md:flex-[25%]">
        <div
          id="user_lists"
          className="flex border-r flex-col flex-[25%] h-[100vh]"
        >
          {/* search */}
          <form className="px-2 mt-3">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2 bottom-[5.5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          {userIsFetching && <Loading text="text-gray-500" />}
          {userIsError && <p>something went wrong unable to read the users</p>}
          {/* user list */}
          <div className="flex flex-col  mt-3 h-full overflow-y-scroll">
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              {userData && userData?.data?.length > 0 ? (
                userData?.data?.map((user, i) => {
                  if (user?._id !== currentUser?._id) {
                    return (
                      <li
                        key={i}
                        id={i.toString()}
                        onClick={() => {
                          createRoomHandler(i);
                          setReceiverId(user?._id);
                          setSenderId(currentUser?._id);
                          // fetchUsersMessage();
                        }}
                        className="p-3 hover:bg-gray-200"
                      >
                        <div className="flex cursor-pointer items-center space-x-4 rtl:space-x-reverse">
                          <div className="relative">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={user?.profilePicture}
                              alt={user?.userName}
                            />
                            <span
                              className={`top-0 left-7 absolute  w-3.5 h-3.5 ${
                                onlineUsers?.includes(user?.userName)
                                  ? "bg-green-400"
                                  : "bg-gray-200"
                              }  border-2 border-white dark:border-gray-800 rounded-full`}
                            ></span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {user?.userName}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  }
                })
              ) : (
                <div className="w-full text-center">No user found</div>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-[62%]">
        {/* video */}

        {/* <Draggable>
            <div className="h-40 z-20 w-40 bg-blue-500">
              hello this is new draggable componnent
            </div>
          </Draggable> */}
        <div className="container p-10 flex flex-col gap-2">
          <div className="video-container">
            <div className="video">
              {stream && (
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
              )}
            </div>
            <div className="video">
              {callAccepted && !callEnded ? (
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
              ) : null}
            </div>
          </div>
          <div className="myId">
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "20px" }}
            />
            <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AssignmentIcon fontSize="large" />}
              >
                Copy ID
              </Button>
            </CopyToClipboard>

            <TextField
              id="filled-basic"
              label="ID to call"
              variant="filled"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <div className="call-button">
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={leaveCall}
                >
                  End Call
                </Button>
              ) : (
                <IconButton
                  color="primary"
                  aria-label="call"
                  onClick={() => callUser(idToCall)}
                >
                  <PhoneIcon fontSize="large" /> call
                </IconButton>
              )}
              {idToCall}
            </div>
          </div>
          <div>
            {receivingCall && !callAccepted ? (
              <div className="caller">
                <h1>{name} is calling...</h1>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={answerCall}
                >
                  Answer
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
