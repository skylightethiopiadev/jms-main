// icons
import { BiSolidUserDetail } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";

const AdminDashboardRightSideComponent = () => {
  return (
    <div className="bg-white h-[93vh] w-[350px] p-[1%]">
      {/* header */}
      <header className="flex items-center justify-between py-[1%]">
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
          {[...Array(5)].map((item, index) => (
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
          {[...Array(3)].map((item, index) => (
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
