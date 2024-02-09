import React from "react";
import "./loading.css";

const LoadingButton = (props) => {
  return (
    <div className="w-auto">
      {props.pending && (
        <div
          className={`flex gap-2 ${props.width} mt-3 ${props.color} text-white py-[5px] px-4 items-center justify-center rounded-sm`}
        >
          <div className="loader"></div>
          <p className="text-white font-semibold">Loading...</p>
        </div>
      )}
      {!props.pending && (
        <button
          onClick={() => props.onClick()}
          className={`flex gap-2 ${props.width} mt-3 ${props.color} text-white py-2 px-4 items-center justify-center rounded-sm`}
        >
          {props.title}
        </button>
      )}
    </div>
  );
};

export default LoadingButton;
