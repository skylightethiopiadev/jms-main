import { useState, useRef, useEffect } from "react";

// icons
import { IoAddCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

const CasesManagement = () => {
  // states
  const [caseTitle, setCaseTitle] = useState("");
  const [caseDescription, setCaseDescription] = useState("");
  const [isNewCase, setIsNewCase] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [editMode, setEditMode] = useState("");
  const [isFirstOrderSubCase, setIsFirstOrderSubCase] = useState(false);
  const [isSecondOrderSubCase, setIsSecondOrderSubCase] = useState(false);
  const [manageCase, setManageCase] = useState(false);
  const [manageSubCase, setManageSubCase] = useState(false);

  // local data
  // case categories
  const [caseCategories, setCaseCategories] = useState([
    {
      _id: 0,
      caseTitle: "Criminal",
      caseDescription:
        "In 1855 the vigorous emperor of Ethiopia, Tewodros II, invaded the then semi-independent kingdom of Shewa",
      subCases: [
        {
          _id: 11,
          title: "Intellectual Property"
        },
        {
          _id: 12,
          title: "Family"
        },
        {
          _id: 13,
          title: "Construction"
        }
      ]
    },
    {
      _id: 1,
      caseTitle: "Commercial",
      caseDescription:
        "Early in the subsequent campaigns, Haile Malakot died, and Sahle Mariam was captured and taken to the emperor’s mountain stronghold, Amba Magdela"
    }
  ]);

  // adjust text area height
  const adjustCaseDescriptionTextAreaHeight = e => {
    document.getElementById("case-description").style.height = "40px";
    document.getElementById(
      "case-description"
    ).style.height = `${e.target.scrollHeight}px`;
  };

  // submit handler
  const submitHandler = () => {
    if (caseTitle.trim()) {
      setCaseCategories([{ caseTitle, caseDescription }, ...caseCategories]);
      setCaseTitle("");
      setCaseDescription("");
      document.getElementById("case-description").style.height = "40px";
      setIsNewCase(false);
    }
  };

  // delete case category
  const deleteCaseCategory = _id => {
    let ccs = caseCategories.filter((item, index) => _id !== index);
    setCaseCategories(ccs);
  };

  // edit case
  const editCaseHandler = () => {
    let index = caseCategories.findIndex(item => item._id === isEdit?._id);
    caseCategories[index] = isEdit;
    setCaseCategories(caseCategories);
    setIsEdit(null);
    setEditMode("");
  };

  return (
    <div className="w-full p-1 relative">
      {/* cases container */}
      <div>
        {/* add new case */}
        <div>
          {/* button */}
          <div>
            <div
              className="flex items-center gap-1 w-max p-1 rounded-sm border border-blue-500 text-white bg-blue-500 transition-all ease-in-out duration-150 hover:bg-blue-400 hover:border-blue-400 cursor-pointer"
              onClick={() => {
                setIsNewCase(!isNewCase);
              }}
            >
              <div>
                <IoAddCircleOutline />
              </div>
              <div>
                <span>add new case category</span>
              </div>
              <div>
                <MdKeyboardArrowDown
                  className={`text-xl transition-all ease-in-out duration-150 ${
                    isNewCase ? "rotate-[-180deg]" : "rotate-0"
                  }`}
                />
              </div>
            </div>
          </div>
          {/* add new case category inputs */}
          <div
            className={`mt-3 overflow-hidden bg-transparent transition-all ease-in-out duration-150 ${
              isNewCase ? "h-max" : "h-0"
            }`}
          >
            <div className="w-full pl-3">
              <div className="p-3 rounded-md bg-gray-100">
                {/* title */}
                <div>
                  <div>
                    <h3 className="text-sm text-gray-600">
                      case category title
                    </h3>
                  </div>
                  <div className="w-full pl-3">
                    <div className="flex items-center w-full bg-white rounded-md">
                      <input
                        className="focus:outline-none focus:ring-0 bg-transparent border-none w-full font-semibold placeholder:text-gray-400"
                        type="text"
                        placeholder="case category title"
                        value={caseTitle}
                        onChange={e => setCaseTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* description */}
                <div className="mt-1">
                  <div>
                    <h3 className="text-sm text-gray-600">case description</h3>
                  </div>
                  <div className="w-full pl-3">
                    <div className="w-full flex bg-white rounded-md p-0 h-max">
                      <textarea
                        className="focus:outline-none focus:ring-0 border-none resize-none w-full bg-transparent h-[40px] max-h-[180px] placeholder:text-gray-400"
                        name="description"
                        id="case-description"
                        placeholder="case description here..."
                        value={caseDescription}
                        onChange={e => setCaseDescription(e.target.value)}
                        onKeyDown={adjustCaseDescriptionTextAreaHeight}
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* save changes btn */}
                <div>
                  <div className="my-3 pl-3">
                    <button
                      className="px-3 py-1 rounded-sm bg-blue-500 text-white transition-all ease-in-out duration-150 hover:bg-blue-400"
                      onClick={() => {
                        submitHandler();
                      }}
                    >
                      save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cases list */}
        <div>
          {/* list */}
          <div className="px-1">
            {/* case */}
            {caseCategories.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-between p-1 rounded-sm bg-white shadow-md mb-4 mt-1"
              >
                {/* left */}
                <div className="flex-grow">
                  {/* header */}
                  <header className="w-full flex items-center gap-1 justify-between">
                    {/* content */}
                    <div className="flex items-center gap-2 flex-grow">
                      <div>
                        <IoCheckmarkCircle className="text-2xl text-green-500" />
                      </div>
                      <div className="flex-grow flex items-center">
                        <div
                          className={`w-full border ${
                            isEdit?._id === item._id && editMode === "TITLE"
                              ? "border-green-500"
                              : "border-transparent"
                          }`}
                        >
                          <input
                            className="w-full focus:outline-none font-semibold focus:ring-0 bg-transparent border-none"
                            type="text"
                            value={
                              isEdit?._id === item._id
                                ? isEdit?.caseTitle
                                : item.caseTitle
                            }
                            disabled={
                              isEdit?._id === item._id && editMode === "TITLE"
                                ? false
                                : true
                            }
                            onChange={e => {
                              setIsEdit(prev => {
                                return {
                                  ...prev,
                                  caseTitle: e.target.value
                                };
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        {isEdit?._id === item._id && editMode === "TITLE" ? (
                          <button
                            className="p-1 rounded-full bg-green-500 text-[.65rem] text-white opacity-75 transition-all ease-in-out duration-300 hover:opacity-100"
                            onClick={() => {
                              editCaseHandler();
                            }}
                          >
                            <IoSaveSharp />
                          </button>
                        ) : (
                          <button
                            className="p-1 rounded-full bg-green-500 text-[.65rem] text-white opacity-25 transition-all ease-in-out duration-300 hover:opacity-100"
                            onClick={() => {
                              setEditMode("TITLE");
                              setIsEdit(item);
                            }}
                          >
                            <CiEdit />
                          </button>
                        )}
                      </div>
                    </div>
                  </header>
                  {/* content */}
                  <div className="pl-9 flex items-center justify-between gap-1">
                    <div
                      className={`flex-grow text-[.985rem] text-gray-700 border ${
                        isEdit?._id === item._id && editMode === "DESCRIPTION"
                          ? "border-green-500"
                          : "border-transparent"
                      }`}
                    >
                      <textarea
                        className="focus:outline-none focus:ring-0 border-none bg-transparent resize-none w-full h-[52px]"
                        name="case-description"
                        id="case-description"
                        value={
                          isEdit?._id === item._id
                            ? isEdit?.caseDescription
                            : item.caseDescription
                        }
                        onChange={e => {
                          setIsEdit(prev => {
                            return {
                              ...prev,
                              caseDescription: e.target.value
                            };
                          });
                        }}
                        disabled={
                          isEdit?._id === item._id && editMode === "DESCRIPTION"
                            ? false
                            : true
                        }
                        onKeyDown={adjustCaseDescriptionTextAreaHeight}
                      ></textarea>
                      {/* <p>{item.caseDescription}</p> */}
                    </div>
                    <div>
                      <div>
                        {isEdit?._id === item._id &&
                        editMode === "DESCRIPTION" ? (
                          <button
                            className="p-1 rounded-full bg-green-500 text-[.65rem] text-white opacity-75 transition-all ease-in-out duration-300 hover:opacity-100"
                            onClick={() => {
                              editCaseHandler();
                            }}
                          >
                            <IoSaveSharp />
                          </button>
                        ) : (
                          <button
                            className="p-1 rounded-full bg-green-500 text-[.65rem] text-white opacity-25 transition-all ease-in-out duration-300 hover:opacity-100"
                            onClick={() => {
                              setEditMode("DESCRIPTION");
                              setIsEdit(item);
                            }}
                          >
                            <CiEdit />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="my-2 pl-9">
                    <div className="flex items-center gap-1">
                      <button
                        className="flex items-center gap-1 text-sm text-blue-500"
                        onClick={() => {
                          setManageCase(!manageCase);
                        }}
                      >
                        <span>manage case</span>
                        <MdKeyboardArrowDown
                          className={`text-lg transition-all ease-in-out duration-150 ${
                            manageCase ? "rotate-[-180deg]" : "rotate-0"
                          }`}
                        />
                      </button>

                      <button
                        className="flex items-center gap-1 text-sm text-blue-500"
                        onClick={() => {
                          deleteCaseCategory(index);
                        }}
                      >
                        <span>delete</span>
                        <MdOutlineDeleteOutline className="text-lg" />
                      </button>
                    </div>
                  </div>
                  {/* sub component container */}
                  <div>
                    <div
                      className={`pl-20 overflow-hidden ${
                        manageCase ? "h-max" : "h-0"
                      }`}
                    >
                      <div className="p-2 rounded-sm border border-gray-200">
                        <div>
                          {/* list */}
                          <div>
                            {item?.subCases?.map((subItem, index) => (
                              <div
                                key={index}
                                className="w-full bg-white p-1 rounded-sm shadow-md"
                              >
                                <header
                                  className="flex items-center justify-between cursor-pointer pl-3"
                                  onClick={() => {
                                    setManageSubCase(!manageSubCase);
                                  }}
                                >
                                  <div className="flex items-center gap-1">
                                    <div className="w-[9px] aspect-square bg-blue-500 rounded-full"></div>
                                    <h3 className="text-[1rem]">
                                      {subItem?.title}
                                    </h3>
                                  </div>
                                  <div>
                                    <button>
                                      <MdKeyboardArrowDown
                                        className={`text-xl text-blue-500 transition-all ease-in-out duration-300 ${
                                          manageSubCase
                                            ? "rotate-[-180deg]"
                                            : "rotate-0"
                                        }`}
                                      />
                                    </button>
                                  </div>
                                </header>

                                {/* sub-container */}
                                <div
                                  className={`overflow-hidden transition-all ease-in-out duration-300 ${
                                    manageSubCase ? "h-auto" : "h-0"
                                  }`}
                                >
                                  {/* bar */}
                                  <div className="w-full h-[1px] bg-gray-100"></div>
                                  <div className="w-full pl-10">
                                    <div className=" p-3 border border-gray-100 rounded-sm my-1">
                                      <div>list</div>
                                      {/* btn */}
                                      <div>
                                        {/* btn */}
                                        <div className="my-1">
                                          <button
                                            className="flex items-center gap-1 text-[.875rem] text-blue-500"
                                            onClick={() => {
                                              setIsSecondOrderSubCase(
                                                !isSecondOrderSubCase
                                              );
                                            }}
                                          >
                                            <AiFillPlusCircle />
                                            <span>add new sub types</span>
                                            <MdKeyboardArrowDown
                                              className={`text-xl transition-all ease-in-out duration-300 ${
                                                isSecondOrderSubCase
                                                  ? "rotate-[-180deg]"
                                                  : "rotate-0"
                                              }`}
                                            />
                                          </button>
                                        </div>
                                      </div>
                                      {/* input */}
                                      <div
                                        className={`overflow-hidden transition-all ease-in-out duration-300 ${
                                          isSecondOrderSubCase
                                            ? "h-[75px]"
                                            : "h-0"
                                        }`}
                                      >
                                        <div className="w-full flex items-center bg-gray-50 rounded-sm">
                                          <input
                                            className="w-full focus:outline-none focus:ring-0 border-none bg-transparent"
                                            placeholder="enter sub type here"
                                            type="text"
                                          />
                                        </div>
                                        <div className="my-2">
                                          <button className="px-3 rounded-sm text-[1rem] transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white border border-blue-500 text-blue-500">
                                            save new
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* new btn */}
                        <div>
                          <button
                            className="flex items-center gap-1 text-[.875rem] text-blue-500 my-1"
                            onClick={() => {
                              setIsFirstOrderSubCase(!isFirstOrderSubCase);
                            }}
                          >
                            <span>add new sub case category</span>
                            <AiOutlinePlus
                              className={`transition-all ease-in-out duration-500 ${
                                isFirstOrderSubCase
                                  ? "rotate-[-225deg]"
                                  : "rotate-0"
                              }`}
                            />
                          </button>
                        </div>
                        {/* input container */}
                        <div>
                          <div
                            className={`overflow-hidden transition-all ease-in-out duration-150 ${
                              isFirstOrderSubCase ? "h-[80px]" : "h-0"
                            }`}
                          >
                            <div className="w-full rounded-sm bg-gray-50 flex">
                              <input
                                className="focus:outline-none focus:ring-0 w-full border-none bg-transparent"
                                type="text"
                                placeholder="enter case sub type"
                              />
                            </div>
                            <div className="mt-3 mb-1">
                              <button className="px-3 border border-blue-500 rounded-sm text-blue-500 text-[.975rem] transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white">
                                save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesManagement;
