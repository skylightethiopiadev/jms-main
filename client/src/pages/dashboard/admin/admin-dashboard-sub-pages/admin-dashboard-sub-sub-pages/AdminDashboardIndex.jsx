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
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {/* background image */}
        <div className="relative z-0 bg-blue-700">
          <img
            className="w-full h-[100px] object-center object-cover opacity-65"
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
          {/* <div className="flex gap-3 pt-[10px] text-[.875rem]">
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
          </div> */}
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
                  show: false
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
      {/* pre-third order  */}
      <div className="mt-5">
        <div className="p-[1%] bg-white rounded-sm shadow-md grid grid-cols-1">
          <Chart
            type="line"
            height={380}
            width={"100%"}
            series={[
              {
                name: "legal service since - 1990",
                data: [
                  8107.85,
                  8128.0,
                  8122.9,
                  8165.5,
                  8340.7,
                  8323.7,
                  8423.5,
                  8514.3,
                  8481.85,
                  8487.7,
                  8506.9,
                  8626.2,
                  8668.95,
                  8602.3,
                  8607.55,
                  8512.9,
                  8496.25,
                  8600.65,
                  8881.1,
                  9340.85
                ]
              }
            ]}
            options={{
              colors: ["#0242a8"],
              chart: {
                zoom: {
                  enabled: true
                },
                toolbar: {
                  show: false
                },
                dropShadow: {
                  enabled: true,
                  color: "#0242a8",
                  top: 12,
                  blur: 3,
                  opacity: 0.15
                }
              },
              grid: {
                padding: {
                  top: -12,
                  bottom: -12
                }
              },
              stroke: {
                curve: "smooth",
                width: 2
              },
              markers: {
                size: 0,
                shape: "square"
              },
              annotations: {
                yaxis: [
                  {
                    y: 8100,
                    borderColor: "#eb0725",
                    strokeDashArray: 0,
                    label: {
                      text: "low status",
                      borderColor: "#eb0725",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#eb0725",
                        fontSize: 16
                      }
                    }
                  },
                  {
                    y: 8400,
                    y2: 9000,
                    fillColor: "#f7be02",
                    opacity: 0.15,
                    label: {
                      text: "medium status",
                      borderColor: "#f7be02",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#f7be02",
                        fontSize: 14
                      }
                    }
                  },
                  {
                    y: 9300,
                    borderColor: "#04c441",
                    strokeDashArray: 0,
                    label: {
                      text: "climax status",
                      borderColor: "#04c441",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#04c441",
                        fontSize: 14
                      }
                    }
                  }
                ],
                xaxis: [
                  {
                    x: 3,
                    strokeDashArray: 0,
                    borderColor: "#0575e6",
                    label: {
                      text: "starting point",
                      borderColor: "#0575e6",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#0575e6",
                        fontSize: 14
                      }
                    }
                  },
                  {
                    x: 7,
                    x2: 12,
                    fillColor: "#3c07db",
                    opacity: 0.15,
                    label: {
                      text: "middle state",
                      borderColor: "#3c07db",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#3c07db",
                        fontSize: 14
                      }
                    }
                  },
                  {
                    x: 16,
                    borderColor: "#de6502",
                    strokeDashArray: 0,
                    label: {
                      text: "final state",
                      borderColor: "#de6502",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#de6502",
                        fontSize: 14
                      }
                    }
                  }
                ],
                points: [
                  {
                    x: 8,
                    y: 8514.3,
                    marker: {
                      size: 12,
                      fillColor: "#fff",
                      strokeColor: "#04c227"
                    },
                    label: {
                      text: "Critical Appointment",
                      borderColor: "#04c227",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#04c227",
                        fontSize: 14
                      }
                    }
                  },
                  {
                    x: 14,
                    y: 8602.3,
                    marker: {
                      size: 12,
                      fillColor: "#fff",
                      strokeColor: "#ba0462"
                    },
                    label: {
                      text: "danger zone",
                      borderColor: "#ba0462",
                      borderRadius: 0,
                      style: {
                        color: "#fff",
                        background: "#ba0462",
                        fontSize: 14
                      }
                    }
                  }
                ]
              }
            }}
          />
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
              <div className="w-[26px] aspect-square rounded-full border-2 border-white shadow-md overflow-hidden flex items-center justify-center bg-gray-50">
                <span className="text-xl text-gray-500 font-bold">+</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 text-sm">
                  Add Lawyer
                </span>
              </div>
            </div>
          </div>
          {/* lawyer */}
          {[...Array(7)].map((lawyer, index) => (
            <div key={index} className="flex gap-1 text-xs">
              <div className="self-baseline w-[24px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
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
    </div>
  );
};

export default AdminDashboardIndex;
