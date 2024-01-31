import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

const Response = ({ response, setPending }) => {
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    console.log(response, "response");

    response.status === "pending" ? setPending(true) : setPending(false);

    response.status === "fulfilled"
      ? (setError(false),
        setSuccess(true),
        setSuccessMessage(response?.data?.msg),
        setTimeout(() => {
          setSuccess(false);
        }, 4000))
      : null;

    response.status === "rejected"
      ? (setError(true), setErrorMessage([response?.error?.data?.msg]))
      : setError(false);
  }, [response]);

  return (
    <div>
      {error && errorMessage && (
        <div className="flex items-start justify-center z-50 fixed w-auto top-44 right-4 flex-col shadow-sm shadow-black gap-2  h-auto py-8 px-2 rounded-md bg-red-200 border border-red-500">
          <p className="underline text-[14px] font-bold text-red-600">
            Error Messages {"("}
            {errorMessage?.length}
            {")"}
          </p>

          {errorMessage?.map((err, i) => {
            return (
              <p key={i} className="text-[14px] text-red-500">
                {i + 1}. {err} <br />
              </p>
            );
          })}

          <Close
            fontSize="small"
            onClick={() => setError(false)}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </div>
      )}
      {success && successMessage && (
        <div className="flex items-start justify-center fixed w-auto top-44 z-50 max-w-[400px] right-4 flex-col shadow-sm shadow-black gap-2  h-auto py-8 px-2 rounded-md bg-emerald-200 border border-emerald-500">
          <p className="text-[14px] font-bold text-emerald-500">
            {successMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default Response;
