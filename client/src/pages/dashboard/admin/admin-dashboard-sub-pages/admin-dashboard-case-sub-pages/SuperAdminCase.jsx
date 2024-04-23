import { useState } from "react";
// icons
import { IoIosBriefcase } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

const SuperAdminCase = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  // case categories
  const caseCategories = [
    {
      header: "Civil",
      description: ""
    },
    {
      header: "Criminal",
      description: ""
    },
    {
      header: "Corporate",
      description: ""
    }
  ];
  return (
    <div className="flex-grow h-full bg-white">
      {/* header */}
      <header className="w-full px-3 py-2 bg-sky-50 rounded-b-md shadow-md flex items-center justify-between">
        {/* left */}
        <div>
          <div className="flex items-center gap-1">
            <div className="p-1 rounded-full border-4 border-yellow-400 border-r-yellow-50">
              <IoIosBriefcase className="text-3xl text-yellow-400" />
            </div>
            <div>
              <h3 className="font-bold normal-text">Case Controls</h3>
              <div className="flex items-center text-blue-700 cursor-pointer hover:opacity-75">
                <div>
                  <GoPlus />
                </div>
                <div>
                  <span>add new case category</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div>right</div>
      </header>
      {/* available case category */}
      <div className="w-full mt-3 px-3">
        <div>
          <h3 className="header-level-3">Available Case Categories</h3>
        </div>
        <div className="">
          <ul className="normal-text">
            {[...Array(5)].map((item, index) => (
              <li
                key={index}
                className="bg-white rounded-sm shadow-sm w-full px-3 py-1 my-2"
              >
                <header className="w-full h-full flex items-center justify-between">
                  <div>
                    <span>Criminal</span>
                  </div>
                  <div>
                    <button
                      className="rounded-full text-blue-700"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <MdKeyboardArrowDown
                        className={`text-3xl transition-all ease-in-out duration-150 ${
                          isOpen ? "rotate-[-180deg]" : "rotate-0"
                        }`}
                      />
                    </button>
                  </div>
                </header>
                <div
                  className={`w-full pl-3 transition-all ease-in-out duration-150 ${
                    isOpen
                      ? "h-max overflow-x-hidden overflow-y-auto"
                      : "h-0 overflow-hidden"
                  }`}
                >
                  {/* title */}
                  <div className="w-full border-t border-gray-200">
                    <div>
                      <h3 className="font-medium">Case Category</h3>
                    </div>
                    <div>
                      <div className="w-full relative pr-1">
                        <div className="absolute right-0 top-[-3px]">
                          <button className="rounded-full bg-green-300 text-white transition-all ease-in-out duration-150 hover:bg-green-500">
                            <CiEdit />
                          </button>
                        </div>
                        <input
                          className="focus:outline-none focus:ring-0 border-none w-full"
                          type="text"
                          value={"Criminal"}
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                  {/* case description */}
                  <div>
                    <div>
                      <h3 className="font-medium">Description</h3>
                    </div>
                    {/* text */}
                    <div className="w-full flex relative pr-1">
                      <div className="absolute right-0 top-[-3px]">
                        <button className="rounded-full bg-green-300 text-white transition-all ease-in-out duration-150 hover:bg-green-500">
                          <CiEdit />
                        </button>
                      </div>
                      <textarea
                        name="description"
                        id=""
                        disabled={true}
                        className="flex-grow focus:outline-none focus:ring-0 border-none resize-none h-[90px]"
                        value={`Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ad dolorum adipisci animi dolor quaerat quas magni,debitis voluptate odit? Deserunt culpa repellendus amet vitae, aspernatur quae, enim vero consequuntur aperiam reiciendis non!`}
                      ></textarea>
                    </div>
                  </div>
                  {/* sub categories */}
                  <div>
                    <div>
                      <h3 className="font-medium">Sub Categories</h3>
                    </div>
                    {/* sub category list */}
                    <div className="pl-3 w-full">
                      <ul>
                        {[...Array(5)].map((item, index) => (
                          <li
                            key={index}
                            className="w-full bg-white py-1 pl-2 my-1 rounded-sm shadow-sm"
                          >
                            <header className="w-full flex items-center justify-between">
                              <div>
                                <span>Family</span>
                              </div>
                              <div>
                                <button
                                  onClick={() => {
                                    setIsSubOpen(!isSubOpen);
                                  }}
                                >
                                  <MdKeyboardArrowDown
                                    className={`text-3xl text-blue-700 transition-all ease-in-out duration-150 ${
                                      isSubOpen
                                        ? "rotate-[-180deg]"
                                        : "rotate-0"
                                    }`}
                                  />
                                </button>
                              </div>
                            </header>
                            {/* detail here */}
                            <div
                              className={`w-full overflow-hidden ${
                                isSubOpen ? "h-full" : "h-0"
                              }`}
                            >
                              {/* title */}
                              <div className="border-t border-gray-100 w-full">
                                <h3 className="text-sm font-semibold">Title</h3>
                              </div>
                              <div className="w-full flex relative pr-2">
                                <div className="absolute right-0 top-[-3px]">
                                  <button className="rounded-full bg-green-300 text-white transition-all ease-in-out duration-150 hover:bg-green-500">
                                    <CiEdit />
                                  </button>
                                </div>
                                <input
                                  className="focus:outline-none focus:ring-0 border-none bg-transparent w-full"
                                  type="text"
                                  value={"Family"}
                                />
                              </div>
                              {/* list */}
                              <div>
                                <div className="text-sm font-semibold">
                                  sub categories
                                </div>
                                <ul>
                                  {[...Array(3)].map((item, index) => (
                                    <li
                                      key={index}
                                      className="px-1 my-1 cursor-pointer border-b border-gray-100"
                                    >
                                      <div className="w-full flex relative pr-3">
                                        <div className="absolute right-0 top-[-3px] flex items-center gap-3">
                                          <button className="rounded-full bg-green-300 text-white transition-all ease-in-out duration-150 hover:bg-green-500">
                                            <CiEdit />
                                          </button>
                                          <button className="rounded-full bg-red-300 text-white transition-all ease-in-out duration-150 hover:bg-red-500">
                                            <MdDelete />
                                          </button>
                                        </div>
                                        <input
                                          className="focus:outline-none focus:ring-0 border-none w-full"
                                          type="text"
                                          value={`sub list #${index + 1}`}
                                        />
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                                <div className="my-5 pl-3">
                                  <button className="flex items-center gap-1 text-blue-700">
                                    <CiCirclePlus />
                                    <span className="text-xs font-bold">
                                      add new item
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="my-3 pl-3">
            <button className="flex items-center gap-1 normal-text text-blue-700">
              <CiCirclePlus />
              <span>add new case category</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminCase;
