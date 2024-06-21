import { useState, useMemo } from "react";

// icons
import { TiPrinter } from "react-icons/ti";
import { AiFillPrinter } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { IoCheckmarkCircle } from "react-icons/io5";

const ConfirmNewCase = props => {
  // state
  const [isPrint, setIsPrint] = useState(false);

  const finalNewCaseFormData = useMemo(
    () => ({
      caseTree: {
        firstCaseCategory: props?.newCaseHistory?.caseCategory,
        secondCaseCategory:
          props?.newCaseHistory?.subCaseCategory?.subType?.caseName,
        thirdCaseCategory:
          props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory?.subSubType
            ?.title
      },
      requestedServices: props?.newCaseHistory?.services,
      textIn: props?.newCaseHistory?.textIn,
      fileIn: props?.newCaseHistory?.fileIn,
      selectedLawyer: props?.newCaseHistory?.selectedLawyer
    }),
    []
  );

  // new case form submit handler
  const newCaseFormSubmitHandler = () => {
    console.log(finalNewCaseFormData);
    // console.log(finalNewCaseFormData?.textIn);
  };

  // cancel form submission
  const cancelNewCaseFormSubmissionHandler = () => {
    props?.setNewCaseHistory({
      caseCategory: "",
      subCaseCategory: {
        subType: null,
        subSubCaseCategory: {
          subSubType: null
        }
      },
      services: [],
      textIn: null,
      fileIn: [],
      selectedLawyer: null
    });
    props?.setStepCounter(0);
  };

  return (
    <div className="overflow-y-auto h-[66vh] p-2 flex relative text-[1.05rem]">
      <div className="flex-grow bg-white rounded-md border border-gray-200 p-3 h-max">
        <header className="p-3 border border-gray-100 relative rounded-md">
          <h4 className="font-semibold my-2">New Case Filled Form Summary</h4>
          <div className="text-sm">
            <p>
              It is with great satisfaction that we inform you of the
              commencement of your legal case. The court has formally registered
              your file, and all essential information is readily available for
              your review. Following, you will discover comprehensive details
              such as the venue of the court, your unique file number, an
              overview of the case, a summary of the proceedings to date, and
              the schedule for upcoming appointments. Please examine the
              particulars and the projected timeline. Rest assured; our
              dedicated team will be with you at every phase of the process.
            </p>
          </div>
          <div>
            <div
              className="self-start flex items-center cursor-pointer px-1 rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-400 border border-gray-200 absolute right-1 top-1"
              onClick={() => {
                setIsPrint(true);
              }}
            >
              <TiPrinter className="text-blue-700" />
              <span>print</span>
            </div>
          </div>
        </header>

        {/* case and lawyer */}
        <div className="p-3 border border-gray-100 relative rounded-md mt-5 flex gap-10">
          <div className="bg-white shadow-md w-max whitespace-nowrap max-w-[350px]">
            {/* <header className='px-3 py-1 text-gray-700'>
                            <h3>Case Tree</h3>
                        </header> */}
            <div className="border border-gray-300 m-3 ml-5 border-b-transparent text-[.875rem]">
              <div className="flex items-center gap-2 border-b py-1.5 pr-3">
                <div className="ml-[-11px]">
                  <div className="w-[20px] aspect-square rounded-full bg-green-400 flex items-center justify-center text-sm  text-white">
                    <span>1</span>
                  </div>
                </div>
                <div>
                  <span>{props?.newCaseHistory?.caseCategory} Case</span>
                </div>
              </div>

              <div className="flex items-center gap-2 border-b py-1.5 pr-3">
                <div className="ml-[-11px]">
                  <div className="w-[20px] aspect-square rounded-full bg-green-400 flex items-center justify-center text-sm  text-white">
                    <span>2</span>
                  </div>
                </div>
                <div>
                  <span>
                    {props?.newCaseHistory?.subCaseCategory?.subType?.caseName}
                  </span>
                </div>
              </div>

              {props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory
                ?.subSubType?.title ? (
                <div className="flex items-center gap-2 border-b py-1.5 pr-3">
                  <div className="ml-[-11px]">
                    <div className="w-[20px] aspect-square rounded-full bg-green-400 flex items-center justify-center text-sm  text-white">
                      <span>3</span>
                    </div>
                  </div>
                  <div>
                    <span>
                      {
                        props?.newCaseHistory?.subCaseCategory
                          ?.subSubCaseCategory?.subSubType?.title
                      }
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {finalNewCaseFormData?.selectedLawyer ? (
            <div className="flex-grow h-max flex gap-10 p-5 bg-green-300 shadow-md">
              <div className="flex flex-col items-center whitespace-nowrap">
                <div className="w-[42px] border-2 border-white shadow-md aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center gap-1 font-semibold text-gray-800 text-sm">
                  <span>Haddis</span>
                  <span>Fanta</span>
                </div>
                <div className="text-xs">
                  <span>selected lawyer</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3">
                  <div className="flex items-center text-yellow-400">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                  <div className="flex items-center cursor-pointer text-sm text-gray-700 hover:text-blue-700">
                    <div>
                      <FiBarChart2 className="text-lg" />
                    </div>
                    <div>
                      <span>rate me</span>
                    </div>
                  </div>
                </div>
                <div className="my-1 text-[.95rem]">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem, id eum rem itaque quasi quae autem.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div className="text-sm mb-1">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat tempore minima dolorem sunt illum, cumque ipsum iure
                    deleniti vel.
                  </p>
                </div>
                <div>
                  <button
                    className="px-3 py-0.5 bg-gray-400 text-sm transition-colors ease-in-out duration-300 hover:bg-gray-600 rounded-sm text-white"
                    onClick={() => {
                      props?.setStepCounter(3);
                    }}
                  >
                    select lawyer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* final documents */}
        <div className="p-3 border border-gray-100 relative rounded-md mt-5 text-[.95rem]">
          {/* description */}
          <div>
            <h3 className="font-bold my-2">Description</h3>

            {finalNewCaseFormData?.textIn ? (
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{
                  __html: finalNewCaseFormData?.textIn
                }}
              ></div>
            ) : (
              <div>
                <div>
                  <div className="text-sm mb-1">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quaerat tempore minima dolorem sunt illum, cumque ipsum
                      iure deleniti vel.
                    </p>
                  </div>
                  <div>
                    <button
                      className="px-3 py-0.5 bg-gray-400 text-sm my-3 transition-colors ease-in-out duration-300 hover:bg-gray-600 rounded-sm text-white"
                      onClick={() => {
                        props?.setStepCounter(2);
                      }}
                    >
                      add description
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* requested services */}
          <div>
            <h3 className="font-bold my-2">Required Services</h3>
            <div>
              {props?.newCaseHistory?.services?.length > 0 ? (
                <>
                  {props?.newCaseHistory?.services.map((item, index) => {
                    return (
                      <div className="flex gap-2 py-[.12rem] ml-5">
                        <div className="text-lg text-green-500">
                          <IoCheckmarkCircle />
                        </div>
                        <div>
                          <p>{item}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div>
                  <div>
                    <div className="text-sm mb-1">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quaerat tempore minima dolorem sunt illum, cumque
                        ipsum iure deleniti vel.
                      </p>
                    </div>
                    <div>
                      <button
                        className="px-3 py-0.5 bg-gray-400 text-sm my-3 transition-colors ease-in-out duration-300 hover:bg-gray-600 rounded-sm text-white"
                        onClick={() => {
                          props?.setStepCounter(2);
                        }}
                      >
                        add services
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* file */}
          <div>
            <h3 className="font-bold my-2 mt-4">Attached Documents</h3>
            {finalNewCaseFormData?.fileIn?.length > 0 ? (
              <div>
                {finalNewCaseFormData?.fileIn?.map((item, index) => {
                  return (
                    <div className="px-5 py-3 border border-gray-200 rounded-md flex gap-3 items-center mb-2">
                      {/* file icon */}
                      <div>
                        <div className="w-[32px] aspect-square rounded-full overflow-hidden flex items-center justify-center border border-gray-400">
                          <FaFileAlt className="text-lg text-gray-500" />
                        </div>
                      </div>
                      {/* text */}
                      <div>
                        <div>
                          <span>{item?.name}</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          <span>{item?.size / 1000}kb</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <div>
                  <div className="text-sm mb-1">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quaerat tempore minima dolorem sunt illum, cumque ipsum
                      iure deleniti vel.
                    </p>
                  </div>
                  <div>
                    <button
                      className="px-3 py-0.5 bg-gray-400 text-sm my-3 transition-colors ease-in-out duration-300 hover:bg-gray-600 rounded-sm text-white"
                      onClick={() => {
                        props?.setStepCounter(2);
                      }}
                    >
                      attach file
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* action buttons */}
        <div className="my-5">
          <div className="flex items-center gap-5">
            <div
              className="px-5 py-[.1rem] rounded-sm bg-blue-600 text-white transition-colors ease-in-out duration-300 hover:bg-blue-500 cursor-pointer"
              onClick={() => {
                newCaseFormSubmitHandler();
              }}
            >
              <span>submit</span>
            </div>
            <div
              className="px-5 py-[.1rem] rounded-sm bg-gray-600 text-white transition-colors ease-in-out duration-300 hover:bg-gray-500 cursor-pointer"
              onClick={() => {
                cancelNewCaseFormSubmissionHandler();
              }}
            >
              <span>cancel</span>
            </div>
          </div>
        </div>
      </div>

      {/* case summary pop-up */}
      <div
        className={`transition-transform ease-in-out duration-300 fixed inset-0 bg-gray-100 z-50 flex items-center justify-center ${
          isPrint ? "scale-100" : "scale-0"
        }`}
      >
        {/* action btn */}
        <div className="absolute right-1 top-1 z-50">
          <div className="flex items-center gap-3 px-3">
            <div className="flex items-center gap-1 p-1 rounded-sm text-sm cursor-pointer">
              <AiFillPrinter className="text-xl text-blue-700" />
              <span>Print</span>
            </div>
            <div
              className="flex items-center gap-1 border border-gray-300 px-1 py-[.1rem] cursor-pointer transition-colors ease-in-out duration-300 hover:bg-gray-300"
              onClick={() => {
                setIsPrint(false);
              }}
            >
              <MdOutlineClose />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="absolute z-40 w-[75%] h-[98%] bg-white rounded-md overflow-hidden flex flex-col">
          {/* header */}
          <header className="flex justify-between px-5 py-7 gap-10">
            {/* left */}
            <div className="self-center w-[100px] bg-transparent">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-center object-cover"
                  src="/logoFinal.png"
                  alt=""
                />
              </div>
            </div>
            {/* right */}
            <div className="flex-grow border-b-8 border-yellow-300 self-start">
              <div className="w-max py-1">
                <h1 className="text-4xl">MAKUTA LAW FIRM</h1>
                <h1 className="">New Case Summary Form</h1>
              </div>
            </div>
          </header>
          {/* content */}
          <div className="flex-grow flex gap-10">
            <div className="w-[100px] h-full"></div>
            <div className="w-[85%] px-5 text-[.9875rem]">
              {/* top */}
              <div>
                <h3 className="font-semibold">Case Statement</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  itaque esse vero! Inventore asperiores excepturi eius
                  consectetur molestias corrupti modi rerum doloremque labore
                  aspernatur? Recusandae exercitationem harum reiciendis culpa
                  modi porro molestiae.
                </p>
              </div>
              {/* bottom */}
              <div className="my-3 ml-16">
                <div className="border-l border-green-500 py-d1">
                  {/* first */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="ml-[-13px]">
                      <div className="w-[24px] aspect-square rounded-full bg-white flex items-center justify-center border border-green-500">
                        <span>1</span>
                      </div>
                    </div>
                    <div>
                      <span>{props?.newCaseHistory?.caseCategory} Case</span>
                    </div>
                  </div>
                  {/* second */}
                  <div className="flex items-center gap-3 my-3">
                    <div className="ml-[-13px]">
                      <div className="w-[24px] aspect-square rounded-full bg-white flex items-center justify-center border border-green-500">
                        <span>2</span>
                      </div>
                    </div>
                    <div>
                      <span>
                        {
                          props?.newCaseHistory?.subCaseCategory?.subType
                            ?.caseName
                        }
                      </span>
                    </div>
                  </div>
                  {/* third */}
                  {props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory
                    ?.subSubType?.title ? (
                    <div className="flex items-center gap-3">
                      <div className="ml-[-13px]">
                        <div className="w-[24px] aspect-square rounded-full bg-white flex items-center justify-center border border-green-500">
                          <span>3</span>
                        </div>
                      </div>
                      <div>
                        <span>
                          {
                            props?.newCaseHistory?.subCaseCategory
                              ?.subSubCaseCategory?.subSubType?.title
                          }
                        </span>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {/* services */}
              <div>
                <h3 className="mt-5 font-semibold w-max border-b border-gray-500 mb-2">
                  Requested Services
                </h3>
                <div className="ml-14">
                  <div className="flex gap-x-5 gap-y-3 flex-wrap">
                    {props?.newCaseHistory?.services?.length > 0 ? (
                      <>
                        {props?.newCaseHistory?.services.map((item, index) => {
                          return (
                            <div key={index} className="flex gap-1">
                              <div className="flex items-center">
                                <div className="w-[7px] aspect-square rounded-full bg-green-600"></div>
                              </div>
                              <div>
                                <span>{item}</span>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <div>
                        <span>No Servece Requested</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNewCase;
