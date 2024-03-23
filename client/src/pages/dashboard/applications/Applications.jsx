import React, { useContext } from "react";
import { userContext } from "../../../App";
import { useReadQuery } from "../../../features/api/apiSlice";
import Loading from "../../../components/loading/Loading";
import { format } from "timeago.js";
import customerImage from "../../../assets/images/customers/customer-i.jpg";

const Applications = ({ type }) => {
  const context = useContext(userContext);
  const {
    data: cases,
    isFetching,
    isError,
  } = useReadQuery({
    url: `/user/cases?category[eq]=${context?.user?.user?.specializedArea}&populatingType=cases&populatingValue=user`,
    tag: ["cases"],
  });

  console.log(context?.user, "user data", cases?.data);
  return (
    <div className="w-full flex items-center justify-center h-auto">
      {isFetching && <Loading width="w-40" text="text-black" />}
      {isError && <p>something went wrong unable to read the data</p>}
      {/* <div className="w-full grid bg-white grid-cols-1 gap-4 place-items-center my-5 px-4"> */}
      {cases && cases?.data ? (
        cases?.data?.map((c) => {
          return (
            <div className="w-full flex gap-5 items-start justify-between border border-gray-200 rounded-sm p-4">
              <div className="flex max-w-[400px] flex-col gap-3 items-start justify-start">
                <p className="text-lg font-bold uppercase">{c?.category}</p>
                <p className="font-bold">
                  type: <span className="ml-2 font-normal">{c?.type}</span>
                </p>
                <p className="font-bold">
                  sub type:{" "}
                  <span className="ml-2 font-normal">{c?.subType}</span>
                </p>
                <div className="flex font-bold flex-col gap-2">
                  services:
                  <div className="flex flex-col gap-2">
                    <span className="ml-2 font-normal">
                      {c?.services.map((s) => (
                        <p className="ml-4">
                          - {s} <br />
                        </p>
                      ))}
                    </span>
                  </div>
                </div>
                <p className="font-bold">
                  description:{" "}
                  <span className="ml-2 font-normal">{c?.description}</span>
                </p>
                <p className="font-bold">
                  created at:{" "}
                  <span className="ml-2 font-normal">
                    {format(c?.createdAt)}
                  </span>
                </p>
                <p className="font-bold">
                  status: <span className="ml-2 font-normal">{c?.status}</span>
                </p>
                <p className="font-bold">
                  updated at:{" "}
                  <span className="ml-2 font-normal">
                    {format(c?.createdAt)}
                  </span>
                </p>
              </div>
              <div className="flex font-bold flex-col gap-y-3 items-start justify-start">
                <img
                  src={customerImage}
                  alt=""
                  className="w-40 h-40 self-center rounded-sm mt-4"
                />
                <p className="font-bold">
                  customer type:{" "}
                  <span className="ml-2 font-normal">{c?.user?.role}</span>
                </p>
                <p className="font-bold">
                  full name:{" "}
                  <span className="ml-2 font-normal">
                    {"gedeon agmas dires"}
                  </span>
                </p>
                <p className="font-bold">
                  address:{" "}
                  <span className="ml-2 font-normal">{"Addiss ababa"}</span>
                </p>
                <p className="font-bold">
                  email:{" "}
                  <span className="ml-2 font-normal">{c?.user?.email}</span>
                </p>
                <p className="font-bold">
                  premium status:{" "}
                  <span className="ml-2 font-normal">
                    {c?.user?.isPro ? "premium" : "basic"}
                  </span>
                </p>
                <p className="font-bold">
                  status: <span className="ml-2 font-normal">{c?.status}</span>
                </p>
                <div className="flex flex-col w-full items-center gap-3 justify-between mt-2">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Total salary
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="total salary"
                      required
                    />

                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Initial percent
                    </label>

                    <input
                      type="number"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="initial payment"
                      required
                    />
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Salary
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="total salary"
                      required
                    />
                  </div>
                  <button className="py-1 px-5 bg-yellow-500 text-white rounded-full">
                    Accept
                  </button>
                  <button className="py-1 px-5 bg-red-500 text-white rounded-full">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>There is no cases to display</div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Applications;
