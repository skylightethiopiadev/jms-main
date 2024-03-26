import React, { useContext, useEffect, useState } from "react";
// import { userContext } from "../../../App";
import {
  useReadQuery,
  useUpdateMutation,
} from "../../../features/api/apiSlice";
import Loading from "../../../components/loading/Loading";
import { format } from "timeago.js";
import customerImage from "../../../assets/images/customers/customer-i.jpg";
import Lists from "../../../components/Lists";
import LoadingButton from "../../../components/loading/LoadingButton";
import Response from "../../../components/Response";

const Applications = ({ type }) => {
  // const context = useContext(userContext);
  // console.log(context, "context");
  const {
    data: cases,
    isFetching,
    isError,
  } = useReadQuery({
    url: `/user/cases?category[eq]=${"Civil"}&populatingType=cases&populatingValue=user`, //civil will be context
    tag: ["cases"],
  });

  const [updateCaseData, updateCaseResponse] = useUpdateMutation();

  const [payment, setPayment] = useState({
    amount: "",
    percent: "",
    deadline: "",
    total: "",
    remaining: "",
    user: "",
    manager: "",
    case: "",
    status: "Pending",
  });

  const [payments, setPayments] = useState();
  const [total, setTotal] = useState(0);
  const [remaining, setRemaining] = useState(
    cases?.data[0]?.paymentDetail?.remaining
  );
  const [payed, setPayed] = useState(0);
  const [onPending, setOnPending] = useState(0);
  const [pending, setPending] = useState(false);
  const [caseId, setCaseId] = useState("");

  const addPayments = () => {
    if (payment?.amount?.length > 0 && payment?.deadline?.length > 0) {
      setPayments([...payments, payment]);
      setPayment({ amount: "", percent: "", deadline: "" });
    }
  };

  useEffect(() => {
    console.log(cases?.data[0]?.paymentDetail?.remaining, "llllllllllllllll");
    setRemaining(cases?.data[0]?.paymentDetail?.remaining);
    console.log(remaining, "fffffffffffffffffff");
    const data = cases?.data[0]?.paymentDetail;
    if (cases?.data && data) {
      setTotal(data?.total);
      setRemaining(data?.remaining);
      setPayed(data?.payed);
      setOnPending(data?.pending);
      setPayments(data?.rounds);
      setCaseId(cases?.data[0]?._id);
    }
    // console.log(cases?.data[0]?.paymentDetail?.rounds, "payments");
  }, [cases?.data]);

  const caseAcceptHandler = () => {
    updateCaseData({
      url: `/user/cases?id=${caseId}`,
      tag: ["cases"],
      paymentDetail: {
        total,
        remaining,
        payed,
        pending: onPending,
        rounds: payments,
        status: "Pending",
      },
    });
  };

  const caseRejectHandler = () => {
    //
  };
  // console.log("user data", cases?.data[0]);
  return (
    <div className="w-full flex items-center justify-center h-auto">
      <Response
        response={updateCaseResponse}
        setPending={setPending}
        type="signUp"
      />
      {isFetching && <Loading width="w-40" text="text-black" />}
      {isError && <p>something went wrong unable to read the data</p>}
      {cases && cases?.data //add context here
        ? cases?.data?.map((c) => {
            return (
              <div className="flex w-full flex-col gap-5 items-center border border-gray-200">
                <div className="w-full flex gap-5 items-start justify-between  rounded-sm p-4">
                  <div className="flex max-w-[400px] flex-col gap-3 items-start justify-start">
                    <p className="text-lg font-bold uppercase">{c?.category}</p>
                    <p className="font-bold">
                      ID: <span className="ml-2 font-normal">{c?.caseId}</span>
                    </p>
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
                      status:{" "}
                      <span className="ml-2 font-normal">{c?.status}</span>
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
                      status:{" "}
                      <span className="ml-2 font-normal">{c?.status}</span>
                    </p>
                  </div>
                </div>
                <div className="flex p-4 flex-col w-full items-start gap-5 justify-between mt-2">
                  <div className="w-full flex flex-col gap-5">
                    <div>
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Total salary
                      </label>
                      <input
                        onChange={(e) => setTotal(e.target.value)}
                        type="number"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="52,000.00 birr"
                        value={total}
                        required
                      />
                    </div>
                    <div className="flex flex-col  gap-5 w-full">
                      <div className="flex flex-col  gap-2">
                        <div class="flex flex-col gap-2 hover:border-red-500 border  rounded-lg p-2.5 w-full pb-6 mb-4">
                          <Lists
                            list={payment}
                            setList={setPayment}
                            lists={payments}
                            setLists={setPayments}
                            addLists={addPayments}
                            totalAmount={total}
                            setRemaining={setRemaining}
                            remaining={remaining}
                            payed={payed}
                            setPayed={setPayed}
                            onPending={onPending}
                            setOnPending={setOnPending}
                            paymentDetail={cases?.data[0].paymentDetail}
                            title="Payments"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 items-center gap-10">
                      <LoadingButton
                        pending={pending}
                        onClick={caseAcceptHandler}
                        title="Accept"
                        color="bg-yellow-500"
                        width="w-48"
                      />
                      <LoadingButton
                        pending={pending}
                        onClick={caseRejectHandler}
                        title="Reject"
                        color="bg-red-500"
                        width="w-48"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : !isFetching && <div>There is no cases to display</div>}
      {/* </div> */}
    </div>
  );
};

export default Applications;
