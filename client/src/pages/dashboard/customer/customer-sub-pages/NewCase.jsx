import { useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// main
// NewCase
const NewCase = () => {
  // local states
  const [isAllTypeOpen, setIsAllTypeOpen] = useState(false);

  return (
    <div className="bg-gray-100 h-full">
      <header className="h-[130px] bg-sky-100">header</header>
      {/* content */}
      <div className="bg-white m-2 rounded-md">
        <header className="flex items-center justify-evenly py-1">
          <div className="flex flex-col gap-y-3 relative">
            <span className="text-gray-500">Type of counceling</span>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">All Types</h3>
              <button
                className="text-lg"
                onClick={() => {
                  setIsAllTypeOpen(!isAllTypeOpen);
                }}
              >
                {isAllTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {isAllTypeOpen ? (
              <div className="absolute bg-white-400 shadow-md bottom-[-1.5rem] right-0">
                <ul>
                  <li>
                    <NavLink>list</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </header>
        {/* content */}
        <div>content</div>
      </div>
    </div>
  );
};

export default NewCase;
