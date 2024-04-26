import { useState } from "react";
import { v4 as uuid4 } from "uuid";
// icons
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin4Line } from "react-icons/ri";
import { AiOutlineSave } from "react-icons/ai";

// components
// header
const Header = () => {
  return (
    <header className="h-[7vh] rounded-t-md flex items-center bg-sky-100">
      Header
    </header>
  );
};

// add new case category
const AddNewCaseCategory = ({ setCaseCategoryList }) => {
  // states
  const [isNewCaseCategory, setIsNewCaseCategory] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // add just text area height
  const adjustTextAreaHeight = e => {
    let textarea = document.getElementById("case-description");
    textarea.style.height = "24px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  };

  // add new case category submit handler
  const addNewCaseCategorySubmitHandler = () => {
    let textarea = document.getElementById("case-description");

    if (title.trim()) {
      setCaseCategoryList(prev => {
        let ccl = [
          { title, description, _id: uuid4(), subCaseCategories: [] },
          ...prev
        ];
        return ccl;
      });
      setTitle("");
      setDescription("");
      setIsNewCaseCategory(false);
      textarea.style.height = "24px";
    }
  };

  return (
    <div>
      {/* add new case category btn */}
      <div>
        <div
          className="flex items-center gap-2 text-blue-700 cursor-pointer border border-blue-500 w-max m-1 py-[.15rem] px-3 rounded-md text-sm transition-colors ease-in-out duration-300 hover:bg-blue-500 hover:text-white"
          onClick={() => {
            setIsNewCaseCategory(!isNewCaseCategory);
          }}
        >
          <span>add new case category</span>
          <AiOutlineClose
            className={`transition-transform ease-in-out duration-300 ${
              isNewCaseCategory ? "rotate-0" : "rotate-45"
            }`}
          />
        </div>
      </div>
      {/* inputs */}
      <div
        className={`overflow-hidden transition-all ease-in-out duration-300 ${
          isNewCaseCategory ? "h-[300px]" : "h-0"
        }`}
      >
        <div className="bg-gray-100 p-3 mx-3 my-1">
          {/* title */}
          <div className="bg-white rounded-sm overflow-hidden">
            <input
              className="focus:outline-none focus:ring-0 bg-transparent p-1 border-none w-full placeholder:font-semibold placeholder:text-gray-400"
              type="text"
              placeholder="case category"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          {/* description */}
          <div className="bg-white rounded-sm overflow-hidden my-3">
            <textarea
              className="focus:outline-none focus:ring-0 resize-none border-none p-1 bg-transparent w-full placeholder:text-gray-400 h-[24px] max-h-[200px]"
              id="case-description"
              name="description"
              placeholder="case category description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              onKeyUp={adjustTextAreaHeight}
            ></textarea>
          </div>
          {/* save btn */}
          <div className="px-1 flex items-center gap-5">
            <button
              className="px-5 py-[.12rem] border border-blue-500 bg-blue-500 text-white transition-colors ease-in-out duration-300 hover:bg-transparent hover:text-blue-700 rounded-md text-sm"
              onClick={() => {
                addNewCaseCategorySubmitHandler();
              }}
            >
              save
            </button>
            <button className="px-5 py-[.12rem] border border-blue-500 text-blue-700 rounded-md text-sm transition-colors ease-in-out duration-300 hover:bg-blue-500 hover:text-white">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// case category list
const CaseCategoryList = ({ item, setCaseCategoryList }) => {
  const [isEditMode, setIsEditMode] = useState(null);
  const [editPortion, setEditPortion] = useState("");
  const [editTitle, setEditTitle] = useState(item.title);
  const [editDescription, setEditDescription] = useState(item.description);
  const [isDelete, setIsDelete] = useState(null);
  const [isCaseCategoryExpanded, setIsCaseCategoryExpanded] = useState(null);
  const [isNewSubCaseCategory, setIsNewSubCaseCategory] = useState(false);

  // sub case category
  const [subCaseCategory, setSubCaseCategory] = useState("");
  const [editSubCaseCategory, setEditSubCaseCategory] = useState({
    _id: null,
    subCaseCategory: ""
  });

  // delete case category handler
  const deleteCaseCategoryHandler = () => {
    setCaseCategoryList(prev => {
      return prev.filter(itm => itm._id !== isDelete?._id);
    });
  };

  // add new sub case category handler
  const addNewSubCaseCategoryHandler = () => {
    if (subCaseCategory.trim()) {
      setCaseCategoryList(prev => {
        let index = prev.findIndex(i => i._id === item._id);
        // prev[index].subCaseCategories = []
        prev[index].subCaseCategories.push({ subCaseCategory, _id: uuid4() });
        return prev;
      });
      setIsNewSubCaseCategory(false);
      setSubCaseCategory("");
      // console.log({ _id: item._id, subCaseCategory, id: uuid4() });
    }
  };

  return (
    <div>
      {/* header */}
      <header
        className={`flex items-center justify-between py-1 border-b relative ${
          isCaseCategoryExpanded?._id === item._id
            ? "border-gray-100"
            : "border-gray-100"
        }`}
      >
        {/* left */}
        <div className="flex items-center relative flex-grow">
          <div
            className="absolute left-[-10px] w-[20px] aspect-square rounded-full bg-green-500 flex items-center justify-center text-white cursor-pointer"
            onClick={() => {
              if (isCaseCategoryExpanded?._id === item._id) {
                setIsCaseCategoryExpanded(null);
              } else {
                setIsCaseCategoryExpanded(item);
              }
            }}
          >
            <IoMdArrowDropdown
              className={`transition-transform ease-in-out duration-300 ${
                isCaseCategoryExpanded ? "rotate-[-180deg]" : "rotate-0"
              }`}
            />
          </div>
          <div className="pl-4 flex-grow">
            <div
              className={`border ${
                isEditMode?._id === item._id && editPortion === "TITLE"
                  ? "border-green-400"
                  : "border-transparent"
              }`}
            >
              <input
                className="focus:outline-none focus:ring-0 p-1 border-none bg-transparent w-full"
                type="text"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                disabled={
                  isEditMode?._id === item._id && editPortion === "TITLE"
                    ? false
                    : true
                }
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="pl-3 pr-1 flex items-center justify-end gap-1">
          <div>
            {isEditMode?._id === item._id && editPortion === "TITLE" ? (
              <button
                className="w-[20px] aspect-square rounded-full bg-green-500 text-white transition-opacity ease-in-out duration-300 flex items-center justify-center"
                onClick={() => {
                  setEditPortion("");
                  setIsEditMode(null);
                }}
              >
                <AiOutlineSave />
              </button>
            ) : (
              <button
                className="w-[20px] aspect-square rounded-full bg-green-500 text-white opacity-35 transition-opacity ease-in-out duration-300 hover:opacity-100 flex items-center justify-center"
                onClick={() => {
                  setEditPortion("TITLE");
                  setIsEditMode(item);
                }}
              >
                <CiEdit />
              </button>
            )}
          </div>
          <div>
            <button
              className="w-[20px] aspect-square rounded-full bg-red-600 text-white opacity-35 transition-opacity ease-in-out duration-300 hover:opacity-100 flex items-center justify-center"
              onClick={() => setIsDelete(item)}
            >
              <RiDeleteBin4Line />
            </button>
          </div>
        </div>
        {/* delete conformation */}
        <div
          className={`absolute z-30 left-1/2 -translate-x-1/2 top-[100%] transition-transform ease-in-out duration-150 w-[300px] h-[100px] bg-white rounded-sm shadow-md ${
            isDelete?._id === item._id ? "scale-100" : "scale-0"
          }`}
        >
          <div className="flex items-center justify-center">
            <span>are you sure ?</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => {
                deleteCaseCategoryHandler();
              }}
            >
              yes
            </button>
            <button
              onClick={() => {
                setIsDelete(null);
              }}
            >
              no
            </button>
          </div>
        </div>
      </header>
      {/* sub-stuffs */}
      <div
        className={`ml-10 border-l border-b transition-all ease-in-out duration-300 ${
          isCaseCategoryExpanded?._id === item._id
            ? "h-auto border-gray-100"
            : "h-0 border-transparent overflow-hidden"
        }`}
      >
        {/* description */}
        {item.description ? (
          <div className="flex pl-1 items-center justify-between">
            <div
              className={`flex-grow my-1 border ${
                isEditMode?._id === item._id && editPortion === "DESCRIPTION"
                  ? "border-green-400"
                  : "border-transparent"
              }`}
            >
              <textarea
                className="focus:outline-none focus:ring-0 border-none resize-none w-full bg-transparent p-1"
                name="description"
                value={editDescription}
                onChange={e => setEditDescription(e.target.value)}
                disabled={
                  isEditMode?._id === item._id && editPortion === "DESCRIPTION"
                    ? false
                    : true
                }
              ></textarea>
            </div>
            <div className="pl-3 pr-1 flex items-center justify-end gap-1">
              <div>
                {isEditMode?._id === item._id &&
                editPortion === "DESCRIPTION" ? (
                  <button
                    className="w-[20px] aspect-square rounded-full bg-green-500 text-white transition-opacity ease-in-out duration-300 flex items-center justify-center"
                    onClick={() => {
                      setEditPortion("");
                      setIsEditMode(null);
                    }}
                  >
                    <AiOutlineSave />
                  </button>
                ) : (
                  <button
                    className="w-[20px] aspect-square rounded-full bg-green-500 text-white opacity-35 transition-opacity ease-in-out duration-300 hover:opacity-100 flex items-center justify-center"
                    onClick={() => {
                      setEditPortion("DESCRIPTION");
                      setIsEditMode(item);
                    }}
                  >
                    <CiEdit />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>add description</>
        )}
        {/* list */}
        {item?.subCaseCategories?.length ? (
          <div>
            <div className="relative">
              <header className="flex items-center justify-between border-b border-gray-100">
                {/* left */}
                <div className="px-3">
                  <h3 className="text-sm font-bold text-gray-700 uppercase">
                    {item.title} category sub lists
                  </h3>
                </div>
                {/* right */}
                <div>{/* here */}</div>
              </header>
              {/* sub list container */}
              {item?.subCaseCategories?.map(subCaseItem => {
                return (
                  <div key={subCaseItem._id}>
                    <header className="flex items-center justify-between py-1 border-b border-gray-100">
                      {/* left */}
                      <div className="flex items-center relative flex-grow">
                        <div className="absolute left-[-10px] w-[20px] aspect-square rounded-full bg-green-500 flex items-center justify-center text-white cursor-pointer z-30">
                          <IoMdArrowDropdown />
                        </div>
                        <div className="pl-4 flex-grow">
                          <div
                            className={`border ${
                              editSubCaseCategory?._id === subCaseItem._id
                                ? "border-green-400"
                                : "border-transparent"
                            }`}
                          >
                            <input
                              className="w-full focus:outline-none focus:ring-0 border-none p-1"
                              type="text"
                              value={
                                editSubCaseCategory?.subCaseCategory &&
                                editSubCaseCategory?._id === subCaseItem._id
                                  ? editSubCaseCategory?.subCaseCategory
                                  : subCaseItem?.subCaseCategory
                              }
                              disabled={
                                editSubCaseCategory?._id === subCaseItem._id
                                  ? false
                                  : true
                              }
                              onChange={e => {
                                setEditSubCaseCategory(prev => {
                                  return {
                                    ...prev,
                                    subCaseCategory: e.target.value
                                  };
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* right */}
                      <div className="pl-3 pr-1 flex items-center justify-end gap-1">
                        <div>
                          {editSubCaseCategory?._id === subCaseItem._id ? (
                            <button
                              className="w-[20px] aspect-square rounded-full bg-green-500 text-white transition-opacity ease-in-out duration-300 flex items-center justify-center"
                              onClick={() => {
                                setEditSubCaseCategory(null);
                              }}
                            >
                              <AiOutlineSave />
                            </button>
                          ) : (
                            <button
                              className="w-[20px] aspect-square rounded-full bg-green-500 text-white opacity-35 transition-opacity ease-in-out duration-300 hover:opacity-100 flex items-center justify-center"
                              onClick={() => {
                                setEditSubCaseCategory(subCaseItem);
                              }}
                            >
                              <CiEdit />
                            </button>
                          )}
                        </div>
                        <div>
                          <button className="w-[20px] aspect-square rounded-full bg-red-600 text-white opacity-35 transition-opacity ease-in-out duration-300 hover:opacity-100 flex items-center justify-center">
                            <RiDeleteBin4Line />
                          </button>
                        </div>
                      </div>
                    </header>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* add new sub case category */}
        <div>
          {/* add new sub case category btn */}
          <div>
            <div
              className="flex items-center gap-2 text-blue-700 cursor-pointer  w-max m-1 py-[.15rem] px-3 rounded-md text-sm transition-colors ease-in-out duration-300 hover:bg-blue-500 hover:text-white"
              onClick={() => {
                setIsNewSubCaseCategory(!isNewSubCaseCategory);
              }}
            >
              <span>add new sub case category</span>
              <AiOutlineClose
                className={`transition-transform ease-in-out duration-300 ${
                  isNewSubCaseCategory ? "rotate-0" : "rotate-45"
                }`}
              />
            </div>
          </div>
          {/* add new sub case category input */}
          <div
            className={`pl-3 mt-2 overflow-hidden transition-all ease-in-out duration-300 ${
              isNewSubCaseCategory ? "h-[120px]" : "h-0"
            }`}
          >
            <div className="p-2 bg-gray-100 m-1">
              <div>
                {/* input */}
                <div className="bg-white rounded-sm overflow-hidden my-3">
                  <input
                    className="w-full focus:outline-none focus:ring-0 border-none bg-transparent p-1"
                    type="text"
                    placeholder="add new sub case category"
                    value={subCaseCategory}
                    onChange={e => setSubCaseCategory(e.target.value)}
                  />
                </div>
                {/* save btn */}
                <div className="mb-1 flex items-center gap-5">
                  <button
                    className="px-5 py-[.12rem] border border-blue-500 bg-blue-500 text-white transition-colors ease-in-out duration-300 hover:bg-transparent hover:text-blue-700 rounded-md text-sm"
                    onClick={addNewSubCaseCategoryHandler}
                  >
                    save
                  </button>
                  <button className="px-5 py-[.12rem] border border-blue-500 text-blue-700 rounded-md text-sm transition-colors ease-in-out duration-300 hover:bg-blue-500 hover:text-white">
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SuperAdminCase = () => {
  // data
  const [caseCategoryLists, setCaseCategoryList] = useState([]);

  return (
    <div className="bg-white rounded-md min-h-[89vh]">
      <Header />
      {/* content container */}
      <div>
        {/* case category list */}
        <div className="p-1 pl-3">
          <div
            className={`border border-gray-100 ${
              caseCategoryLists.length ? "border-b-transparent" : ""
            }`}
          >
            {caseCategoryLists.length ? (
              <>
                {caseCategoryLists.map(item => {
                  return (
                    <CaseCategoryList
                      key={item._id}
                      item={item}
                      setCaseCategoryList={setCaseCategoryList}
                    />
                  );
                })}
              </>
            ) : (
              <div>
                <div>no case yet</div>
              </div>
            )}
          </div>
        </div>
        {/* new case category */}
        <AddNewCaseCategory setCaseCategoryList={setCaseCategoryList} />
      </div>
    </div>
  );
};

export default SuperAdminCase;
