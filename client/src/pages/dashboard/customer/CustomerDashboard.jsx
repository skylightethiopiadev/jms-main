import { Outlet } from "react-router-dom";

// customer-sub-pages
import CustomerDashboardHeader from "./customer-sub-pages/CustomerDashboardHeader";
import CustomerLeftSideNav from "./customer-sub-pages/CustomerLeftSideNav";
import { GiSevenPointedStar } from "react-icons/gi";

const CustomerDashboard = () => {
  return (
    <div className="w-full h-screen flex">
      <CustomerLeftSideNav />
      <div className="ml-1 w-full">
        {/* header */}
        <CustomerDashboardHeader />
        {/* components */}
        <div className="w-full h-full bg-gray-100 p-2">
          {/* header */}
          <header className="flex items-center justify-between">
            {/* left-container */}
            <div>
              <div className="flex items-center justify-start ml-[7%] w-full my-3">
                <h3 className="text-lg font-bold mr-3">Order</h3>
                <span>15 orders found</span>
              </div>
            </div>
            {/* right */}
            <div>right</div>
          </header>
          {/* content */}
          <div className="h-full flex bg-white">
            {/* main content */}
            <div className="w-full bg-green-400">
              <Outlet />
            </div>
            {/* right content */}
            <div className="">
              {/* user profile */}
              <div>
                {/* image */}
                <div className="border-4 border-r-transparent border-sky-700 rounded-full w-[78px] h-[78px] flex items-center justify-center">
                  <img
                    src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                    alt=""
                    className="w-[64px] h-[64px] rounded-full"
                  />
                </div>
              </div>
              {/* text */}
              <div className="w-full flex items-center flex-col">
                <div className="font-semibold text-sky-500">welcome</div>
                <div className="w-full flex items-center justify-between gap-3">
                  <span className="flexs font-bold">AndreasIniesta</span>
                  <GiSevenPointedStar className="text-sky-500" />
                </div>
                <div>College </div>
              </div>
              {/* calandaer table */}
              <div>hello</div>
              {/* footer */}
              <div>footer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
