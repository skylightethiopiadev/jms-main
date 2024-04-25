import { useState } from "react";
import { v4 as uuid4 } from "uuid";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSave } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

////////////////////////////////
////////////////////////////////
// component handler methods
// header
const HeaderComponent = () => {
  return (
    <header className="w-full h-[7vh] bg-cyan-50 rounded-b-md">
      {/* header content here */}
    </header>
  );
};

// title and description component
const TitleDescription = ({ setLts }) => {
  // states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isNewMode, setIsNewMode] = useState(false);

  // submit handler
  const newListItem = () => {
    if (title.trim()) {
      setLts(prev => {
        return [{ title, description, _id: uuid4() }, ...prev];
      });
      setIsNewMode(false);
    }
    setTitle("");
    setDescription("");
  };
  return (
    <>
      {/* add new item drop btn */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer w-[82px] text-blue-700 text-sm"
          onClick={() => {
            setIsNewMode(!isNewMode);
          }}
        >
          <div>{isNewMode ? <span>cancel</span> : <span>add new</span>}</div>
          <AiOutlineClose
            className={`transition-all ease-in-out duration-300 ${
              isNewMode ? "rotate-0" : "-rotate-45"
            }`}
          />
        </div>
      </div>
      {/* input controls */}
      <div
        className={`overflow-hidden transition-all ease-in-out duration-300 ${
          isNewMode ? "h-[236px]" : "h-0"
        }`}
      >
        <div className="m-2 p-3 bg-gray-100 rounded-md">
          {/* title */}
          <div className="w-full flex items-center bg-white rounded-sm">
            <input
              className="focus:outline-none focus:ring-0 border-none bg-transparent p-1 w-full"
              type="text"
              placeholder="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          {/* description */}
          <div className="flex bg-white rounded-sm my-3">
            <textarea
              className="focus:outline-none focus:ring-0 border-none resize-none bg-transparent h-[120px] w-full p-1"
              name="description"
              id="case-description"
              placeholder="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* save btn */}
          <div>
            <button
              className="px-5 bg-blue-700 text-white rounded-sm transition-all ease-in-out duration-300 hover:bg-blue-500"
              onClick={() => {
                newListItem();
              }}
            >
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// list item
const ListItem = ({ item, setLts }) => {
  const [isMore, setIsMore] = useState(null);
  const [isExpandedMore, setIsExpandedMore] = useState(null);

  // set is more handler
  const setIsMoreHandler = item => {
    if (isMore?._id === item._id) {
      setIsMore(null);
    } else {
      setIsMore(item);
    }
  };

  return (
    <>
      {/* list item */}
      <div className="relative">
        {/* dot */}
        <div className="absolute top-3 left-[-4px] w-[7px] aspect-square rounded-full bg-green-500"></div>
        <header className="flex items-center justify-between gap-3 border-b border-gray-100">
          {/* left content */}
          <div
            className="flex-grow"
            onClick={() => {
              console.log("Hello WOrld");
            }}
          >
            <div className="">
              <input
                className="w-full focus:ring-0 focus:outline-none border-none bg-transparent py-1 px-3"
                type="text"
                value={item.title}
                disabled={true}
              />
            </div>
          </div>
          {/* right content */}
          <div className="relative">
            {/* vertical dot */}
            <div
              className="text-xl text-gray-500 transition-all ease-in-out duration-300 hover:text-gray-700 cursor-pointer"
              onClick={() => {
                setIsMoreHandler(item);
              }}
            >
              <BiDotsVerticalRounded />
            </div>
            {/* pop up */}

            <div
              className={`overflow-hidden transition-all ease-in-out duration-300 absolute right-0 top-[120%] w-[124px] bg-white shadow-md z-30 ${
                isMore?._id === item._id ? "h-[128px]" : "h-0"
              }`}
            >
              <ul>
                <li>
                  {!true ? (
                    <div className="flex items-center p-1 text-gray-700 cursor-pointer border-b border-gray-100 gap-1">
                      <div>
                        <MdSave />
                      </div>
                      <div>
                        <span>save</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center p-1 text-gray-700 cursor-pointer border-b border-gray-100 gap-1">
                      <div>
                        <AiFillEdit />
                      </div>
                      <div>
                        <span>edit</span>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <div className="flex items-center p-1 text-gray-700 cursor-pointer border-b border-gray-100 gap-1">
                    <div>
                      <MdDescription />
                    </div>
                    <div>
                      <span>description</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-1 text-gray-700 cursor-pointer border-b border-gray-100 gap-1">
                    <div>
                      <MdDelete />
                    </div>
                    <div>
                      <span>delete</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="flex items-center p-1 text-gray-700 cursor-pointer  gap-1"
                    onClick={() => {
                      if (isExpandedMore) {
                        setIsExpandedMore(null);
                      } else {
                        setIsExpandedMore(item);
                      }
                    }}
                  >
                    <div>
                      <MdKeyboardArrowDown />
                    </div>
                    <div>
                      <span>more</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* sub list */}
        <div
          className={`pl-5 overflow-hidden transition-all ease-in-out duration-300 ${
            isExpandedMore ? "h-auto" : "h-0"
          }`}
        >
          <div className="border border-gray-100 border-t-0 border-r-0">
            {item.level0?.length ? (
              <>
              <ListItems lts={item.level0} setLts={setLts}/>
              </>
            ) : (
              <></>
            )}
            <TitleDescription setLts={setLts} />
          </div>
        </div>
      </div>
    </>
  );
};

// list items
const ListItems = ({ lts, setLts }) => {
  return (
    <>
      {lts.map((item, index) => {
        return <ListItem key={index} item={item} setLts={setLts} />;
      })}
    </>
  );
};

// list item and description
const ListItemsAndTitleDescription = ({ lts, setLts }) => {
  return (
    <>
      <ListItems lts={lts} setLts={setLts} />
      <TitleDescription setLts={setLts} />
    </>
  );
};

// list and new
const ListsManager = ({ lts, setLts }) => {
  return (
    <div className="p-1">
      <div className="border">
        {lts.length ? (
          <>
            <ListItemsAndTitleDescription lts={lts} setLts={setLts} />
          </>
        ) : (
          <>
            <TitleDescription setLts={setLts} />
          </>
        )}
      </div>
    </div>
  );
};
//////////////////////////////
//////////////////////////////
// main root method
const SuperAdminCase = () => {
  const [lts, setLts] = useState([
    {
      title: "Criminal",
      description: "",
      _id: "flfkkfkfpeodihjvf-0987yhjc",
      depth: 0,
      level0: [
        {
          title: "Intellectual Property"
        },
        {
          title: "Trademark"
        },
        {
          title: "Family"
        },
        {
          title: "Haddis Menelik"
        },
      ]
    },
    {
      title: "Civil",
      description: "",
      _id: "flfkkfkfpeodihjvf-0987yhjjjfjfjfc",
      depth: 0
    }
  ]);
  return (
    <div className="flex-grow h-full bg-white">
      <HeaderComponent />
      <ListsManager lts={lts} setLts={setLts} />
    </div>
  );
};

export default SuperAdminCase;
