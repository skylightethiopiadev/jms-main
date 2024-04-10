import Chart from "react-apexcharts";
// icons
import { FaCamera } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
// main
const AdminDashboardIndex = () => {
  return (
    <div className="w-full h-full">
      {/* background profile image */}
      <div className="relative w-full h-[170px] flex">
        <div className="w-full h-full overflow-hidden bg-black">
          <img
            className="opacity-75 w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0 w-full h-full bg-transparent cursor-pointer transition-all ease-in-out duration-150 opacity-0 hover:opacity-100">
          <div className="absolute top-1 right-1 text-gray-100">
            <input
              type="file"
              name="profile-bg"
              id="profile-bg"
              accept="image/*"
              hidden
            />
            <label htmlFor="profile-bg" className="cursor-pointer">
              <FaCamera className="text-3xl" />
            </label>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div className="w-full bg-white px-[3%] pb-[32px] pt-[5px] flex items-center justify-between">
        {/* profile container */}
        <div className="flex items-center gap-1">
          <div>
            <div className="w-[120px] flex items-center justify-center aspect-square rounded-full overflow-hidden border-4 border-white shadow-md mt-[-60px] relative z-30">
              <img
                className="w-full h-full object-center object-cover"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
              />
              <div className="absolute left-0 bottom-0 w-full h-full bg-transparent cursor-pointer transition-all ease-in-out duration-300 opacity-0 hover:opacity-100">
                <div className="absolute bg-black bg-opacity-50 text-white left-0 bottom-0 w-full flex items-center justify-center">
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    accept="image/*"
                    hidden
                  />
                  <label htmlFor="profile" className="cursor-pointer">
                    <FaCamera className="text-xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 flex items-center gap-1">
              <span>Haddis</span>
              <span>Fanta</span>
            </div>
            <div>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
        {/* contact link */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 p-1 rounded-sm border border-gray-200 cursor-pointer">
            <div>
              <FaMessage />
            </div>
            <div>
              <span>message</span>
            </div>
          </div>
          <div className="flex items-center gap-1 p-1 rounded-sm border border-gray-200 cursor-pointer">
            <div>
              <BiSolidUserDetail />
            </div>
            <div>
              <span>detail</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminDashboardIndex;
