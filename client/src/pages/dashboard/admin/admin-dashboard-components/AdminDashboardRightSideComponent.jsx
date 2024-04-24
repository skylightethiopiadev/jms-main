// icons
import { BiSolidUserDetail } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import { BiRightArrowCircle } from "react-icons/bi";

const AdminDashboardRightSideComponent = () => {

  // admin right side component toggler
  const adminRightSideComponentToggler = () => {
    let rightSideComponent = document.getElementById(
      "admin-right-side-nav-component"
    );
    if (rightSideComponent?.classList.contains('absolute')) {
      if (rightSideComponent?.classList.contains('right-[-100vw]')) {
        rightSideComponent?.classList.remove('right-[-100vw]')
        rightSideComponent?.classList.add('right-0')
      } else {
        rightSideComponent?.classList.remove('right-0')
        rightSideComponent?.classList.add('right-[-100vw]')
      }
    }
  };
  return (
    <div className="bg-white absolute right-[-100vw] top-0 z-30 shadow-lg w-[290px] transition-all ease-in-out duration-300 xl:relative xl:right-auto xl:top-auto xl:z-0 xl:shadow-none h-[93vh] xl:w-[350px] p-[1%]" id="admin-right-side-nav-component">
      <div className="absolute z-30 top-1 left-1 xl:hidden">
        <button
          className="text-xl text-gray-500 transition-all ease-in-out duration-150 hover:text-gray-700"
          onClick={() => {
          adminRightSideComponentToggler()
        }}>
          <BiRightArrowCircle />
        </button>
      </div>
      {/* header */}
      <header className="flex items-center justify-between pt-[7%] xl:pt-[1%] xl:py-[1%]">
        <div>
          <h3 className="font-bold text-gray-700">My Status</h3>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1 text-purple-500 transition-all ease-in-out duration-300 hover:text-purple-700">
            <BiSolidUserDetail className="text-xl" />
            <span className="text-xs ">status detail</span>
          </button>
        </div>
      </header>
      {/* image */}
      <div className="w-full h-[120px] rounded-md overflow-hidden mt-1">
        <img
          className="w-full h-full object-cover object-center"
          src="https://c1.wallpaperflare.com/preview/577/911/680/hot-air-ballooning-balloon-cappadocia-dawn.jpg"
          alt=""
        />
      </div>
      {/* description */}
      <div className="mt-3 text-gray-700">
        <h3 className="font-bold my-1">Description</h3>
        <p>
          Eos debitis alias iste beatae, explicabo non, quae iusto earum officia
          cupiditate ad doloribus?
        </p>
      </div>
      {/* tags */}
      <div className="mt-3 text-gray-700">
        <div>
          <h3 className="font-bold">Tags</h3>
        </div>
        <div className="ml-3 flex flex-wrap gap-3">
          {[...Array(2)].map((item, index) => (
            <div key={index} className="py-1 px-3 bg-white shadow-md">
              <span>Consulting</span>
            </div>
          ))}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full text-xl font-semibold bg-gray-50 border-2 border-white shadow-md w-[28px] aspect-square cursor-pointer">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      {/* timeline */}
      <div className="mt-5 text-gray-700">
        <div>
          <h3 className="font-bold">Timeline</h3>
        </div>
        <div className="ml-3">
          {[...Array(2)].map((item, index) => (
            <div key={index} className="py-1 px-3 my-1 flex gap-1 text-xs">
              <div>
                <GoClockFill className="text-xl text-green-400"/>
              </div>
              <div className="text-gray-700">
                <div className="font-semibold mb-[-3px] text-sm"><h3>Prepare to launch</h3></div>
                <div><span>1 week ago</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardRightSideComponent;
