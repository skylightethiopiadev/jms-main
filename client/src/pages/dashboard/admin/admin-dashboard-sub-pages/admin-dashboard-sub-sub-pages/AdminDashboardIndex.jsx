import Chart from "react-apexcharts";

// icons
import { RiArrowRightUpFill } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { GrVmMaintenance } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

const AdminDashboardIndex = () => {
  return (
    <div>
      {/* first order container */}
      <header className="flex justify-between mb-2">
        <div className="text-gray-700">
          <div>
            <span>makuta law firm</span>
          </div>
          <div className="text-xl font-bold">
            <h3>Activity</h3>
          </div>
        </div>
        <div>
          <button className="px-3 py-1 bg-yellow-300 rounded-sm flex gap-1 items-center transition-all ease-in-out duration-150 hover:bg-yellow-200">
            <MdOutlineManageAccounts className="text-lg" />
            <span>Account Setting</span>
          </button>
        </div>
      </header>
      {/* second order container */}
      <div className="bg-yellow-100 shadow-md rounded-md overflow-hidden">
        {/* background image */}
        <div className="relative z-0">
          <img
            className="w-full h-[100px] object-center object-cover opacity-75"
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjgyMi1hZXctMDJfMS5qcGc.jpg"
            alt=""
          />
        </div>
        {/* profile status */}
        <div className="px-[5%] pb-[16px] flex justify-between">
          {/* left */}
          <div className="relative z-10 mt-[-32px]">
            <div className="w-[52px] aspect-square border-2 border-white shadow-md rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="/gedi.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-1 font-semibold text-gray-700">
              <span>Haddis</span>
              <span>Fanta</span>
            </div>
            <div className="text-sm text-gray-700">
              <span>Software Engineer</span>
            </div>
            <div className="flex gap-1 text-xs text-gray-500">
              <CiLocationOn className="text-lg" />
              <span>Addis Ababa</span>
              <span>Ethiopia</span>
            </div>
          </div>
          {/* right */}
          <div className="flex gap-3 pt-[10px] text-[.875rem]">
            <div>
              <FaFacebookF className="text-blue-700" />
            </div>
            <div>
              <FaTwitter className="text-cyan-500" />
            </div>
            <div>
              <FaYoutube className="text-red-700" />
            </div>
            <div>
              <FaLinkedinIn className="text-sky-600" />
            </div>
            <div>
              <div className="w-[24px] mt-[-5px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-200 aspect-square flex items-center justify-center bg-gray-100 rounded-full">
                <FaPlus className="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* post-second order container */}
      <div className="mt-5 grid grid-cols-3 gap-5">
        {/* chart container */}
        {/* chart-1 */}
        <div className="bg-white p-3 rounded-sm shadow-md">
          <div>
            <div className="flex items-center gap-1">
              <div>
                <MdDashboard className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Service Area</h3>
              </div>
            </div>
            <div className="flex items-center gap-3 my-1">
              <div className="flex items-center gap-1">
                <h3 className="font-bold">20</h3>
                <span className="font-medium text-sm">total area</span>
              </div>
              <div>
                <span className="text-xs text-emerald-500 font-bold">
                  12% in last week
                </span>
              </div>
            </div>
          </div>
          <div className="my-[-30px] ml-[-16px]">
            <Chart
              series={[
                {
                  name: "Haddis",
                  data: [5, 12, 5, 21, 2, 12, 3, 22, 9, 32, 2, 19, 2]
                }
              ]}
              options={{
                chart: {
                  type: "area",
                  height: 50,
                  toolbar: {
                    show: false
                  },
                  zoom: {
                    enabled: false
                  }
                },
                grid: {
                  xaxis: {
                    lines: {
                      show: false
                    }
                  },
                  yaxis: {
                    lines: {
                      show: false
                    }
                  }
                },
                stroke: {
                  curve: "smooth",
                  width: 1
                },
                xaxis: {
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  }
                },
                yaxis: {
                  labels: {
                    show: false
                  }
                },
                tooltip: {
                  show: false
                },
                dataLabels: {
                  enabled: false
                },
                colors: ["#10e83f", "#10e83f", "#532dfc"],
                fill: {
                  type: "gradient",
                  gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.1,
                    opacityTo: 1,
                    stops: [0, 100]
                  }
                }
              }}
              type="area"
              height={100}
            />
          </div>
        </div>
        {/* chart-2 */}
        <div className="bg-white p-3 rounded-sm shadow-md">
          <div>
            <div className="flex items-center gap-1">
              <div>
                <MdGroups className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Customers</h3>
              </div>
            </div>
            <div className="flex items-center gap-3 my-1">
              <div className="flex items-center gap-1">
                <h3 className="font-bold">20</h3>
                <span className="font-medium text-sm">total area</span>
              </div>
              <div>
                <span className="text-xs text-purple-700 font-bold">
                  12% in last week
                </span>
              </div>
            </div>
          </div>
          <div className="my-[-30px] ml-[-16px]">
            <Chart
              series={[
                {
                  name: "",
                  data: [5, 12, 5, 21, 2, 12, 3, 22, 9, 32, 2, 19, 2]
                }
              ]}
              options={{
                chart: {
                  type: "area",
                  height: 50,
                  toolbar: {
                    show: false
                  },
                  zoom: {
                    enabled: false
                  }
                },
                grid: {
                  xaxis: {
                    lines: {
                      show: false
                    }
                  },
                  yaxis: {
                    lines: {
                      show: false
                    }
                  }
                },
                stroke: {
                  curve: "smooth",
                  width: 1
                },
                xaxis: {
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  }
                },
                yaxis: {
                  labels: {
                    show: false
                  }
                },
                tooltip: {
                  show: false
                },
                dataLabels: {
                  enabled: false
                },
                colors: ["#9d04bf", "#10e83f", "#532dfc"],
                fill: {
                  type: "gradient",
                  gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.1,
                    opacityTo: 1,
                    stops: [0, 100]
                  }
                }
              }}
              type="area"
              height={100}
            />
          </div>
        </div>
        {/* chart-3 */}
        <div className="bg-white p-3 rounded-sm shadow-md">
          <div>
            <div className="flex items-center gap-1">
              <div>
                <FaBalanceScale className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Cases</h3>
              </div>
            </div>
            <div className="flex items-center gap-3 my-1">
              <div className="flex items-center gap-1">
                <h3 className="font-bold">20</h3>
                <span className="font-medium text-sm">total area</span>
              </div>
              <div>
                <span className="text-xs text-yellow-500 font-bold">
                  12% in last week
                </span>
              </div>
            </div>
          </div>
          <div className="my-[-30px] ml-[-16px]">
            <Chart
              series={[
                {
                  name: "Haddis",
                  data: [5, 12, 5, 21, 2, 12, 3, 22, 9, 32, 2, 19, 2]
                }
              ]}
              options={{
                chart: {
                  type: "area",
                  height: 50,
                  toolbar: {
                    show: false
                  },
                  zoom: {
                    enabled: false
                  }
                },
                grid: {
                  xaxis: {
                    lines: {
                      show: false
                    }
                  },
                  yaxis: {
                    lines: {
                      show: false
                    }
                  }
                },
                stroke: {
                  curve: "smooth",
                  width: 1
                },
                xaxis: {
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  }
                },
                yaxis: {
                  labels: {
                    show: false
                  }
                },
                tooltip: {
                  show: false
                },
                dataLabels: {
                  enabled: false
                },
                colors: ["#f2c202", "#10e83f", "#532dfc"],
                fill: {
                  type: "gradient",
                  gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.1,
                    opacityTo: 1,
                    stops: [0, 100]
                  }
                }
              }}
              type="area"
              height={100}
            />
          </div>
        </div>
      </div>
      {/* pre-pre-third order container */}
      <div className="mt-5 grid grid-cols-2 gap-5">
        {/* left */}
        <div className="">
          <div className="p-3 rounded-sm bg-white shadow-md">
            <header className="border-b border-gray-100">
              <h3 className="uppercase">Total Profit</h3>
            </header>
            <div className="flex items-center justify-between gap-1 my-2">
              <div>
                <div>
                  <span className="text-sm">Total Income</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-bold text-gray-700">
                    <h3>320,000</h3>
                  </div>
                  <div>
                    <span className="text-red-600 font-medium text-xs">
                      21% last month
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <p>
                    Menilek’s father was Haile Malakot, later negus (king) of
                    Shewa.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="w-[90px] border-8 border-blue-400 border-l-gray-100 aspect-square rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-400">75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white rounded-sm shadow-md mt-3">
            <header className="mb-3">
              <h3 className="uppercase">payment status</h3>
            </header>
            <div className="flex items-center justify-between my-1 px-5">
              {/* cirlce 1 */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-[42px] aspect-square border-[10px] border-gray-100 border-t-blue-500  rounded-full"></div>
                <div>
                  <h3 className="font-bold">133,455</h3>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    PAYED
                  </span>
                </div>
              </div>
              {/* circle 2 */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-[42px] aspect-square border-[10px] border-gray-100 border-t-green-500  rounded-full"></div>
                <div>
                  <h3 className="font-bold">122</h3>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    PENDING
                  </span>
                </div>
              </div>
              {/* circle 3 */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-[42px] aspect-square border-[10px] border-gray-100 border-t-red-500  rounded-full"></div>
                <div>
                  <h3 className="font-bold">96</h3>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    CANCELED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-sm shadow-md p-1">
          <Chart
            type="bar"
            height={"100%"}
            series={[
              {
                name: "Net Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
              },
              {
                name: "Revenue",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
              },
              {
                name: "Free Cash Flow",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
              }
            ]}
            options={{
              chart: {
                type: "bar",
                height: 350,
                toolbar: {
                  show: false,
                }
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "55%",
                  endingShape: "rounded"
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
              },
              xaxis: {
                categories: [
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct"
                ]
              },
              yaxis: {
                title: {
                  text: "$ (thousands)"
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function(val) {
                    return "$ " + val + " thousands";
                  }
                }
              }
            }}
          />
        </div>
      </div>
      {/* pre-third order container */}
      <div className="mt-5">
        {/* content container */}
        <div className="p-[1%] flex flex-col sm:flex-row gap-5">
          {/* left */}
          <div className="w-[100%] sm:w-[50%] rounded-md overflow-hidden flex relative">
            {/* background image */}
            <div className="w-full h-full bg-sky-200 relative z-10">
              <img
                className="w-full h-full opacity-95 object-center object-cover"
                src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-poly-cost-effective-discount-offer-clearance-image_16482.jpg"
                alt=""
              />
            </div>
            {/* card */}
            <div className="absolute top-5 right-5 z-20">
              <div className="flex items-center gap-1 text-white">
                <div>
                  <IoIosSunny className="text-5xl" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">
                    31<sup>c</sup>{" "}
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold mb-[-5px]">Addis Ababa</h3>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[100%] sm:w-[50%] grid grid-cols-2 gap-5">
            <div className="bg-purple-400 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>

            <div className="bg-green-400 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>

            <div className="bg-red-400 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>

            <div className="bg-orange-300 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third order container */}
      <div className="mt-5 bg-white rounded-sm shadow-md">
        {/* header */}
        <header className="p-[1%] flex items-center justify-between">
          <div className="text-gray-700 font-bold">
            <h3>Top Rated Lawyers</h3>
          </div>
          <div>
            <div className="bg-gray-100 px-1 py-[.15rem] rounded-sm">
              <input
                type="text"
                placeholder="search"
                className="focus:outline-none focus:ring-0 bg-transparent border-none h-[18px] text-sm w-full"
              />
            </div>
          </div>
          <div>
            <button className="px-5 py-[.135rem] rounded-md border border-gray-100 text-sm text-gray-500 transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
              view all
            </button>
          </div>
        </header>
        {/* lawyers grid */}
        <div className="p-[1%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 pb-[3%]">
          {/* add new lawyer button */}
          <div>
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-[38px] aspect-square rounded-full border-2 border-white shadow-md overflow-hidden flex items-center justify-center bg-gray-50">
                <span className="text-xl text-gray-500 font-bold">+</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Add Lawyer</span>
              </div>
            </div>
          </div>
          {/* lawyer */}
          {[...Array(11)].map((lawyer, index) => (
            <div key={index} className="flex gap-1 text-sm">
              <div className="self-baseline w-[36px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="flex gap-1 text-gray-700 font-medium">
                  <span>Haddis</span>
                  <span>Fanta</span>
                </div>
                <div className="flex gap-1 text-gray-500 text-sm">
                  <div>
                    <span>A.A, Ethiopia</span>
                  </div>
                </div>
                <div>
                  <div className="flex text-xs text-yellow-500">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* fourth order container */}
      <div className="mt-5 bg-white rounded-sm">
        {/* header */}
        <header className="p-[1%] flex items-center justify-between">
          <div>
            <h3 className="text-gray-700 font-bold">Customers' Case Status</h3>
          </div>
          <div>
            <button className="px-5 py-[.135rem] rounded-md border border-gray-100 text-sm text-gray-500 transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
              view all
            </button>
          </div>
        </header>
        {/* cards */}
        <div className="bg-gray-50 py-[1%] flex flex-col sm:flex-row gap-5 justify-between">
          {/* active cases */}
          {[...Array(3)].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-md w-[100%] sm:w-[calc(100%/3)]"
            >
              <header className="p-[3%] flex items-center justify-between">
                {/* left */}
                <div className="flex gap-1">
                  <div>
                    <div className="w-[28px] aspect-square rounded-full overflow-hidden bg-emerald-500 flex items-center justify-center font-bold text-white">
                      <span>AC</span>
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <h3 className="font-bold mb-[-5px]">Active Cases</h3>
                    <span className="text-xs font-bold">1.3k cases</span>
                  </div>
                </div>
                {/* right */}
                <div>
                  <div>
                    <div className="flex relative h-[26px]">
                      <div className="absolute right-7 z-10 w-[24px] aspect-square rounded-full overflow-hidden bg-red-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute right-4 z-20 w-[24px] aspect-square rounded-full overflow-hidden bg-green-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute right-0 z-30 w-[26px] aspect-square rounded-full overflow-hidden bg-white border-2 border-white shadow-md flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          7+
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-xs text-gray-700">
                    <span>lawyers</span>
                  </div>
                </div>
              </header>
              <div className="m-[1%] p-[2%] border-y border-gray-100">
                <div className="text-sm text-gray-700">
                  <p>
                    dolor sit amet, consectetur adipisicing elit. Est maxime
                    facere culpa deleniti ab amet eaque? Quod, sunt.
                  </p>
                </div>
              </div>
              {/* footer */}
              <footer className="p-[2%] flex items-center justify-between">
                <div>
                  <div>
                    <div className="flex relative h-[26px]">
                      <div className="absolute left-0 z-10 w-[24px] aspect-square rounded-full overflow-hidden bg-red-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute left-4 z-20 w-[24px] aspect-square rounded-full overflow-hidden bg-green-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute left-7 z-30 w-[26px] aspect-square rounded-full overflow-hidden bg-white border-2 border-white shadow-md flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          7+
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-xs text-gray-700">
                    <span>customers</span>
                  </div>
                </div>
                <div>
                  <button className="flex items-center gap-1 px-1 py-[.13rem] text-gray-700 text-sm bg-gray-100 transition-all ease-in-out duration-150 hover:bg-gray-200">
                    <span>view all</span>
                    <RiArrowRightUpFill />
                  </button>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
      {/* fifth order container */}
      <div className="bg-white mt-5 pb-3">
        <header className="p-[1%] flex items-center justify-between">
          <div className="text-gray-700 font-bold">
            <h3>Customers Location</h3>
          </div>
          <div>
            <button className="flex items-center gap-1 text-sm text-gray-700">
              <IoLocationSharp className="text-lg text-blue-700" />
              <span className="hidden md:inline-flex">view in</span>
              <span>google map</span>
            </button>
          </div>
        </header>
        {/* locations grid */}
        <div className="p-[1%] grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div className="rounded-md bg-white shadow-lg overflow-hidden">
            <div>
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-[120px] object-center object-cover"
                  src="https://ethiopianbusinessreview.net/wp-content/uploads/2020/12/Bahir-Dar.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xs text-gray-500 mt-1">
                Bahir Dar, Ethiopia
              </h3>
            </div>
            <div>
              <div className="py-[1%] px-[3%] grid grid-cols-2 gap-1 font-medium text-gray-700">
                <div>
                  <span>Family</span>
                </div>
                <div>
                  <span>Copyright</span>
                </div>
                <div>
                  <span>Trademark</span>
                </div>
                <div>
                  <span>Property</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 p-[3px]">
                <div className="relative h-[28px] w-full">
                  <div className="absolute left-0 z-0 w-[24px] aspect-square bg-blue-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-3 z-10 w-[24px] aspect-square bg-red-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-5 z-20 w-[26px] aspect-square bg-white rounded-full overflow-hidden flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-white shadow-md">
                    <span>21+</span>
                  </div>
                </div>
                <button>
                  <IoLocationSharp className="text-lg text-blue-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-white shadow-lg overflow-hidden">
            <div>
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-[120px] object-center object-cover"
                  src="https://www.fanabc.com/english/wp-content/uploads/2020/05/Addis-Ababa.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xs text-gray-500 mt-1">
                Addis Ababa, Ethiopia
              </h3>
            </div>
            <div>
              <div className="py-[1%] px-[3%] grid grid-cols-2 gap-1 font-medium text-gray-700">
                <div>
                  <span>Family</span>
                </div>
                <div>
                  <span>Copyright</span>
                </div>
                <div>
                  <span>Trademark</span>
                </div>
                <div>
                  <span>Property</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 p-[3px]">
                <div className="relative h-[28px] w-full">
                  <div className="absolute left-0 z-0 w-[24px] aspect-square bg-blue-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-3 z-10 w-[24px] aspect-square bg-red-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-5 z-20 w-[26px] aspect-square bg-white rounded-full overflow-hidden flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-white shadow-md">
                    <span>21+</span>
                  </div>
                </div>
                <button>
                  <IoLocationSharp className="text-lg text-blue-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-white shadow-lg overflow-hidden">
            <div>
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-[120px] object-center object-cover"
                  src="https://portal.adamacity.gov.et/gallery_images/1700586232.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xs text-gray-500 mt-1">
                Adama, Ethiopia
              </h3>
            </div>
            <div>
              <div className="py-[1%] px-[3%] grid grid-cols-2 gap-1 font-medium text-gray-700">
                <div>
                  <span>Family</span>
                </div>
                <div>
                  <span>Copyright</span>
                </div>
                <div>
                  <span>Trademark</span>
                </div>
                <div>
                  <span>Property</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 p-[3px]">
                <div className="relative h-[28px] w-full">
                  <div className="absolute left-0 z-0 w-[24px] aspect-square bg-blue-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-3 z-10 w-[24px] aspect-square bg-red-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-5 z-20 w-[26px] aspect-square bg-white rounded-full overflow-hidden flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-white shadow-md">
                    <span>21+</span>
                  </div>
                </div>
                <button>
                  <IoLocationSharp className="text-lg text-blue-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-white shadow-lg overflow-hidden">
            <div>
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-[120px] object-center object-cover"
                  src="https://www.ethiosports.com/wp-content/uploads/2014/05/Mekele.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xs text-gray-500 mt-1">
                Mekele, Ethiopia
              </h3>
            </div>
            <div>
              <div className="py-[1%] px-[3%] grid grid-cols-2 gap-1 font-medium text-gray-700">
                <div>
                  <span>Family</span>
                </div>
                <div>
                  <span>Copyright</span>
                </div>
                <div>
                  <span>Trademark</span>
                </div>
                <div>
                  <span>Property</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 p-[3px]">
                <div className="relative h-[28px] w-full">
                  <div className="absolute left-0 z-0 w-[24px] aspect-square bg-blue-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-3 z-10 w-[24px] aspect-square bg-red-500 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                      alt=""
                    />
                  </div>
                  <div className="absolute left-5 z-20 w-[26px] aspect-square bg-white rounded-full overflow-hidden flex items-center justify-center text-gray-600 font-bold text-xs border-2 border-white shadow-md">
                    <span>21+</span>
                  </div>
                </div>
                <button>
                  <IoLocationSharp className="text-lg text-blue-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sixth order container */}
      <div className="mt-5 flex flex-col md:flex-row gap-5">
        {/* left */}
        <div className="w-[100%] md:w-[50%]">
          <header className="flex items-center justify-between pb-[3%]">
            <div>
              <h3 className="font-bold text-gray-700 text-[1rem]">Services</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 cursor-pointer px-3 py-[.13rem] border border-gray-300">
                <div className="flex items-center justify-center text-xl text-green-500">
                  <GrVmMaintenance />
                </div>
                <div className="flex items-center">
                  <span>manage service</span>
                </div>
              </div>
            </div>
          </header>
          <div className="w-full grid grid-cols-3 gap-7">
            {[...Array(6)].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-sm p-[5%] flex flex-col items-center justify-center"
              >
                <div>
                  <DiRedis className="text-3xl text-gray-700" />
                </div>
                <div className="text-gray-700 font-semibold">
                  <span>Consulting</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="w-[100%] md:w-[50%] bg-white shadow-sm p-[1%]">
          <header className="flex items-center justify-between py-[1%]">
            <div className="flex gap-1">
              <div>
                <div className="w-[48px] aspect-square border-2 shadow-md border-white rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="text-gray-700 font-semibold flex gap-1">
                  <span>Er. Haddis</span>
                  <span>Fanta</span>
                </div>
                <div className="text-xs">
                  <span>Maintenance Team Leader</span>
                </div>
              </div>
            </div>
            <div className="self-start">
              <button className="flex items-center justify-center p-1 rounded-full bg-green-500 transition-all ease-in-out duration-300 hover:bg-green-400 text-white text-xl">
                <AiFillPhone />
              </button>
            </div>
          </header>
          <div className="text-gray-700 text-sm p-[1%]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              iste maxime, aspernatur id praesentium asperiores ab facilis iure,
              fugiat minima, dicta reprehenderit! Et odio dicta obcaecati vero?
              Suscipit corporis expedita officia odit sed ipsum nisi placeat
              praesentium aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardIndex;
