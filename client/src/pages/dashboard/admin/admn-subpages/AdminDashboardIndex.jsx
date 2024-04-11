import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel
} from "@tanstack/react-table";
// icons
import { FaCamera } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMoreVert } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { TiSocialGooglePlus } from "react-icons/ti";
import { CgArrowLongDown } from "react-icons/cg";
import { CgArrowLongUp } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

// data
import { lawyerCustomers } from "../../../../DataFile";
// main
const AdminDashboardIndex = () => {
  // data
  const lawyers = useMemo(() => lawyerCustomers, []);

  // states
  const [filtering, setFiltering] = useState("");
  const [sorting, setSorting] = useState([]);

  // custom cells
  // lawyers cell
  const lawyerCell = ({ row }) => {
    const { profile, first_name, last_name } = row.original;
    return (
      <div className="flex items-center gap-1 py-1">
        <div className="w-[24px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            className="w-full h-full object-center object-cover"
            src={profile}
            alt=""
          />
        </div>
        <div className="text-gray-700 text-sm flex items-center gap-1">
          <span>{first_name}</span>
          <span>{last_name.toString().slice(0, 1)}.</span>
        </div>
      </div>
    );
  };

  // lawyer action cell
  const lawyerActionBtn = ({ row }) => {
    return (
      <div>
        <button
          className="text-xs text-gray-500 px-2 py-[.1rem] border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700"
          onClick={() => {
            console.log(row.original);
          }}
        >
          more
        </button>
      </div>
    );
  };

  // court place cell
  const lawyerCourtPlaceCell = ({ row }) => {
    return (
      <div>
        <span>
          {row.original.court_place.toString()}
        </span>
      </div>
    );
  };

  // columns
  // lawyers
  const lawyersColumns = [
    {
      header: "Lawyer",
      accessorKey: "first_name",
      cell: lawyerCell
    },
    {
      header: "File No",
      accessorKey: "file_no"
    },
    {
      header: "Court Place",
      accessorKey: "court_place",
      cell: lawyerCourtPlaceCell
    },
    {
      header: "action",
      accessorKey: "",
      cell: lawyerActionBtn
    }
  ];

  // tables
  // lawyers table
  const lawyersTable = useReactTable({
    data: lawyers,
    columns: lawyersColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter: filtering,
      sorting: sorting
    },
    onGlobalFilterChange: setFiltering,
    onSortingChange: setSorting
  });

  // side nav toggler
  const mainAdminSideNavToggler = () => {
    let sideNav = document.getElementById("main-admin-dashboard-nav");
    if (sideNav?.classList.contains("absolute")) {
      if (sideNav?.classList.contains("left-[-100vw]")) {
        sideNav?.classList.remove("left-[-100vw]");
        sideNav?.classList.add("left-0");
      } else {
        sideNav?.classList.remove("left-0");
        sideNav?.classList.add("left-[-100vw]");
      }
    }
  };

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
        <div className="absolute left-0 top-0 w-full h-full bg-transparent cursor-pointer transition-all ease-in-out duration-150 bg-opacity-0 hover:bg-opacity-100 [&>*:nth-child(1)]:opacity-0 hover:[&>*:nth-child(1)]:opacity-100">
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
          <div className="fixed lg:hidden left-1 top-1 z-40">
            <button
              className="text-3xl text-white z-[100] p-1 bg-black rounded-md"
              onClick={() => {
                mainAdminSideNavToggler();
              }}
            >
              <AiOutlineMenu />
            </button>
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
      {/* third container cards */}
      <div className="w-full p-[3%] ">
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[...Array(4)].map((item, index) => (
            <div key={index} className="bg-white rounded-md p-3 shadow-md">
              <header className="flex items-center justify-between pb-1 border-b border-gray-100">
                <div className="flex items-center gap-1">
                  <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div className="font-medium text-sm to-gray-50 flex items-center gap-1">
                    <span>Haddis</span>
                    <span className="hidden md:inline-flex">Fanta</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[7px] aspect-square rounded-full bg-green-500"></div>
                  <span className="text-gray-500 text-xs">online</span>
                </div>
              </header>
              <div className="my-1">
                <div className="text-gray-700 font-semibold mt-2">
                  <h3>Header Text</h3>
                </div>
                <div className="text-xs text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod beatae natus corrupti.
                  </p>
                </div>
              </div>
              <footer className="py-1 flex items-center justify-center border-t border-gray-100">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <div className="flex items-center justify-center p-1 rounded-full bg-green-500 text-white">
                      <FaPhoneVolume className="text-[.65rem]" />
                    </div>
                    <span>call</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <div className="flex items-center justify-center p-1 rounded-full bg-green-500 text-white">
                      <IoIosChatbubbles className="text-[.65rem]" />
                    </div>
                    <span>chat</span>
                  </div>

                  {/* <div className="flex items-center gap-1 cursor-pointer">
                  <div className="flex items-center justify-center p-1 rounded-full bg-green-500 text-white">
                    <BiSolidUserDetail className="text-[.65rem]"/>
                  </div>
                  <span>detail</span>
                </div> */}
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
      {/* fourth order container */}
      <div className="w-full px-[3%] pb-[3%]">
        {/* table container */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-5">
          {/* left customers table */}
          <div className="w-[100%] md:w-[50%] p-1 rounded-sm bg-white shadow-md">
            <header className="flex items-center justify-between p-1 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">
                  Customers
                </h3>
              </div>
              <div className="flex-grow px-[10%] flex items-center">
                <div className="flex items-center border border-gray-200 rounded-md px-1 py-[.13rem]">
                  <CiSearch className="text-2xl" />
                  <input
                    type="text"
                    placeholder="search"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[18px] w-full text-sm"
                    value={filtering}
                    onChange={e => setFiltering(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button className="whitespace-nowrap px-3 py-1 text-xs text-gray-700 border border-gray-100 rounded-full transition-all ease-in-out duration-300 hover:border-gray-400">
                  view all
                </button>
              </div>
            </header>
            {/* table */}
            <div className="w-full h-[70vh] overflow-y-auto overflow-x-hidden admin-dashboard-table">
              <table className="w-full">
                <thead>
                  {lawyersTable.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th
                          key={header.id}
                          className="cursor-pointer p-1 text-left whitespace-nowrap"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                            {
                              asc: (
                                <CgArrowLongDown className="inline-flex ml-1" />
                              ),
                              desc: (
                                <CgArrowLongUp className="inline-flex ml-1" />
                              )
                            }[header.column.getIsSorted() ?? null]
                          }
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {lawyersTable.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="p-1">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* right lawyers table */}
          <div className="w-[100%] md:w-[50%] p-1 rounded-sm bg-white shadow-md">
            <header className="flex items-center justify-between p-1 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Lawyers</h3>
              </div>
              <div className="flex-grow px-[10%] flex items-center">
                <div className="flex items-center border border-gray-200 rounded-md px-1 py-[.13rem]">
                  <CiSearch className="text-2xl" />
                  <input
                    type="text"
                    placeholder="search"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[18px] w-full text-sm"
                  />
                </div>
              </div>
              <div>
                <button className="whitespace-nowrap px-3 py-1 text-xs text-gray-700 border border-gray-100 rounded-full transition-all ease-in-out duration-300 hover:border-gray-400">
                  view all
                </button>
              </div>
            </header>
            {/* table */}
            <div className="w-full h-[70vh] overflow-y-auto overflow-x-hidden admin-dashboard-table">
              <table className="w-full">
                <tbody>
                  {[...Array(24)].map((customer, index) => (
                    <tr key={index} className="border-b-[1px] border-gray-200">
                      <td>
                        <div className="flex items-center gap-1 py-2">
                          <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                            <img
                              className="w-full h-full object-center object-cover"
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-700">
                            <span>Haddis</span>
                            <span>Fanta</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-sm text-gray-700">
                          <span>+251923996736</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-sm text-gray-700">
                          <span>haddis@gmail.com</span>
                        </div>
                      </td>
                      <td>
                        <NavLink to={"/admin/detail"}>
                          <MdOutlineMoreVert className="text-xl text-gray-500 transition-all ease-in-out duration-150 hover:text-gray-700" />
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="w-full bg-gray-200 text-gray-700 p-[3%] py-[5%]">
        {/* top header */}
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full text-center sm:w-auto sm:text-left">
            <div className="w-[100px] aspect-square">
              <img
                className="w-full h-full object-center object-contain"
                src="/final-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full p-5 grid gap-5 grid-cols-2 sm:grid-cols-4">
            {/* first */}
            <div>
              <ul className="flex flex-col gap-y-3 font-semibold">
                <li>
                  <NavLink>FEEBLY THEMES</NavLink>
                </li>
                <li>
                  <NavLink>PRE-SALE FAQS</NavLink>
                </li>
                <li>
                  <NavLink>SUBMIT A TICKET</NavLink>
                </li>
              </ul>
            </div>
            {/* second */}
            <div>
              <ul className="flex flex-col gap-y-3 font-semibold">
                <li>
                  <NavLink>SERVICES</NavLink>
                </li>
                <li>
                  <NavLink>THEME TWEAK</NavLink>
                </li>
              </ul>
            </div>
            {/* third */}
            <div>
              <ul className="flex flex-col gap-y-3 font-semibold">
                <li>
                  <NavLink>SHOWCASES</NavLink>
                </li>
                <li>
                  <NavLink>WIDGET KIT</NavLink>
                </li>
                <li>
                  <NavLink>SUPPORT</NavLink>
                </li>
              </ul>
            </div>
            {/* fourth */}
            <div>
              <ul className="flex flex-col gap-y-3 font-semibold">
                <li>
                  <NavLink>ABOUT US</NavLink>
                </li>
                <li>
                  <NavLink>CONTACT US</NavLink>
                </li>
                <li>
                  <NavLink>AFFILIATES</NavLink>
                </li>
                <li>
                  <NavLink>RESOURCES</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-[32px]">
          <div className="w-[75%] h-[3px] bg-gray-500"></div>
        </div>
        {/* bottom header */}
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <div className="p-1 rounded-full border-2 border-gray-700">
                <FaFacebookF />
              </div>
              <div className="p-1 rounded-full border-2 border-gray-700">
                <IoLogoTwitter />
              </div>
              <div className="p-1 rounded-full border-2 border-gray-700">
                <IoWifi />
              </div>
              <div className="p-1 rounded-full border-2 border-gray-700">
                <TiSocialGooglePlus />
              </div>
            </div>
            <div className="flex items-center justify-center my-3">
              <span>@</span>
              <span>Copyright</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboardIndex;
