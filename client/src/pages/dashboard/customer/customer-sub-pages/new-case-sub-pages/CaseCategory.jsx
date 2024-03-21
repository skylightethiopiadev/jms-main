import { useState } from "react";
import { motion } from "framer-motion";
// icons
import { MdOutlineClose } from "react-icons/md";

const CaseCategory = ({ stepCounter, setStepCounter }) => {
  const [caseCategory, setCaseCategory] = useState(null);

  return (
    <div className="py-[3%] h-full">
      <div className="w-full flex items-center justify-center">
        <h3 className="text-2xl font-black text-gray-700 my-1">
          Case Categories{" "}
        </h3>
      </div>
      {/* case categories */}
      <div className="h-full flex justify-between gap-x-[2%] p-[1%] mt-[2%] relative">
        {/* civil */}
        <div className="w-[calc(100%/3)] bg-gray-50 h-max p-[3%] rounded-sm shadow-md ">
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-semibold text-gray-700 my-1">Civil</h3>
          </div>
          <div className="py-[3%] text-gray-700 border-t border-b border-gray-500 border-opacity-15">
            <p className="text-left">
              Civil cases are cases mostly involving individuals like contract
              of loans, divorce, adoption, maintenance, employement, succession
              of family's property. Issues{" "}
              <span
                className="font-bold cursor-pointer text-lg text-blue-600 bg-blue-50 rounded-sm px-3"
                onClick={() => {
                  setCaseCategory("civil");
                  console.log("Hello World");
                }}
              >
                ...
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center my-[5%]">
            <button className="px-[15%] py-1 rounded-sm text-white bg-blue-600" onClick={()=>{
              setStepCounter(stepCounter+1)
            }}>
              select
            </button>
          </div>
        </div>
        {/* criminal */}
        <div className="w-[calc(100%/3)] bg-gray-50 h-max p-[3%] rounded-sm shadow-md ">
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-semibold text-gray-700 my-1">
              Criminal
            </h3>
          </div>
          <div className="py-[3%] text-gray-700 border-t border-b border-gray-500 border-opacity-15">
            <p className="text-left">
              Criminal cases are cases related to different offences againest
              laws enacted to prevent crimes. Cases related to humman
              trafficking, terrorism, corruption,
              <span
                className="font-bold cursor-pointer text-lg text-blue-600 bg-blue-50 rounded-sm px-3"
                onClick={() => {
                  setCaseCategory("criminal");
                }}
              >
                ...
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center my-[5%]">
            <button className="px-[15%] py-1 rounded-sm text-white bg-red-500" onClick={()=>{
              setStepCounter(stepCounter+1)
            }}>
              select
            </button>
          </div>
        </div>
        {/* commercial */}
        <div className="w-[calc(100%/3)] bg-gray-50 h-max p-[3%] rounded-sm shadow-md ">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-700 my-1">
              Commercial
            </h3>
            <h3 className="text-2xl font-semibold text-gray-700 my-1 ">
              (Corporat Law)
            </h3>
          </div>
          <div className="py-[3%] text-gray-700 border-t border-b border-gray-500 border-opacity-15">
            <p className="text-left">
              Commercial cases are cases involving complex transactions such as
              international business. Formation,
              <span
                className="font-bold cursor-pointer text-lg text-blue-600 bg-blue-50 rounded-sm px-3"
                onClick={() => {
                  setCaseCategory("commercial");
                }}
              >
                ...
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center my-[5%]">
            <button className="px-[15%] py-1 rounded-sm text-white bg-green-500" onClick={()=>{
              setStepCounter(stepCounter+1)
            }}>
              select
            </button>
          </div>
        </div>
        {/* pop up */}
        {caseCategory ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0.75 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute z-50 bg-white left-5 top-0 w-[95%] h-[62%] rounded-sm shadow-md p-[3%]"
          >
            <div className="flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-700 my-3">
                Case Category
              </h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              dolor voluptas ab voluptates labore placeat iste quasi, culpa
              rerum, tenetur pariatur animi officiis eaque! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quaerat officia cupiditate
              hic autem corrupti, voluptatem obcaecati ullam magnam magni
              voluptas, odit incidunt repellendus sed?
            </p>
            <button
              className="absolute top-3 right-3 text-xl p-1 rounded-full bg-gray-100 transition-all ease-in-out duration-300 hover:bg-gray-200"
              onClick={() => {
                setCaseCategory(null);
              }}
            >
              <MdOutlineClose />
            </button>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CaseCategory;
