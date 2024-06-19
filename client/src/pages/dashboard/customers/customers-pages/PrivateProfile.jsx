import React, { useEffect, useState } from "react";
import {
  useLazyReadQuery,
  useUpdateMutation,
  useUpdateUsersCredentialsMutation
} from "../../../../features/api/apiSlice";
import Response from "../../../../components/Response";
import LoadingButton from "../../../../components/loading/LoadingButton";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import customerImage from "../../../../assets/images/customers/customer-i.jpg";
import { useLocation } from "react-router-dom";

const PrivateProfile = () => {
  const user = JSON.parse(localStorage.getItem("makuta_user"));
  const location = useLocation();
  const id = location?.search?.split("?id=")[1];
  const [trigger, { data: users, isFetching, isError }] = useLazyReadQuery();
  useEffect(() => {
    trigger({
      url: `/user/users?_id=${id ? id : user?._id}&populatingValue=user`,
      tag: ["users"]
    });
  }, []);

  const [updateData, updateResponse] = useUpdateMutation();
  const [pending, setPending] = useState(false);
  const [employed, setEmployed] = useState(false);

  console.log(employed, "employed");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    if (user?.user) {
      const data = users?.data[0]?.user;
      setFirstName(data?.firstName ? data.firstName : firstName);
      setMiddleName(data?.middleName ? data.middleName : middleName);
      setLastName(data?.lastName ? data.lastName : lastName);
      setGender(data?.gender ? data.gender : gender);
      setPhone(data?.phone ? data.phone : phone);
      setAddress(data?.address ? data.address : address);
      setEmail(users?.data ? users?.data[0]?.email : email);
      setBio(data?.bio ? data.bio : bio);
      setNationality(data?.nationality ? data.nationality : nationality);
      setProfilePicture(
        data?.profilePicture ? data.profilePicture : profilePicture
      );
    }
  }, [users]);

  const updateHandler = () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("middleName", middleName);
    formData.append("lastName", lastName);
    formData.append("gender", gender);
    formData.append("phone", phone);
    // formData.append("address", address);
    formData.append("nationality", nationality);
    formData.append("profilePicture", profilePicture);
    formData.append("bio", bio);
    formData.append("url", `/user/privates?id=${users?.data[0]?.user?._id}`);
    formData.append("tag", ["privates"]);
    updateData(formData);
  };

  const [emailData, emailResponse] = useUpdateUsersCredentialsMutation();
  const emailUpdateHandler = () => {
    emailData({
      email,
      id: users?.data[0]?._id
    });
  };

  console.log(users, "user");
  return (
    <div className="w-full h-auto pb-10 -mt-6  px-5 flex flex-col gap-3">
      <Response
        response={updateResponse}
        setPending={setPending}
        type="update"
      />
      <Response response={emailResponse} setPending={setPending} />
      {/* <>
        <div className="border mb-5 p-5 rounded-lg w-full items-start justify-center shadow flex flex-col gap-1">
          <div className="w-full">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <LoadingButton
            pending={pending}
            onClick={emailUpdateHandler}
            title="Change Email"
            color="bg-main"
            width="w-52"
          />
        </div>

        <div className="w-full flex gap-5 items-center justify-between mb-3">
          <div className=" w-full">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First Name"
              required
            />
          </div>

          <div className=" w-full">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Middle Name
            </label>
            <input
              onChange={e => setMiddleName(e.target.value)}
              value={middleName}
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Middle Name"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Little bio
          </label>
          <textarea
            onChange={e => setBio(e.target.value)}
            value={bio}
            type="text"
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="About yourself"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gender
          </label>
          <select
            onChange={e => setGender(e.target.value)}
            //   value={gender}
            name=""
            id=""
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="male">
              Male
            </option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
            onChange={e => setPhone(e.target.value)}
            value={phone}
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            onChange={e => setAddress(e.target.value)}
            value={address}
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Addiss ababa, Ethiopia"
            required
          />
        </div>
        <div className="mb-8">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nationality
          </label>
          <input
            onChange={e => setNationality(e.target.value)}
            value={nationality}
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nationality"
            required
          />
        </div>

        <div className="mb-5  w-max relative">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profile Picture
          </label>
          {user?.user?.profilePicture?.length > 0 ? (
            <img
              src={user?.user?.profilePicture}
              alt=""
              className="w-[150px] h-[100px] rounded-sm"
            />
          ) : (
            <div className="w-[150px] h-[100px] rounded-sm flex flex-col border items-center justify-center">
              <p>No profile picture </p>
              <p>Please choose!</p>
            </div>
          )}

          <input
            onChange={e => setProfilePicture(e.target.files[0])}
            type="file"
            id="profile"
            className="opacity-0 absolute w-8 h-8 bottom-[8px] left-1/2 -translate-x-1/2 text-[1.05rem] p-2 flex items-center justify-center bg-sky-500 rounded-full cursor-pointer text-gray-100 transition-all ease-in-out duration-300 hover:text-gray-100 hover:bg-sky-700 "
          />
          <label
            htmlFor="profile"
            className="absolute opacity-100 bottom-[8px] left-1/2 -translate-x-1/2 text-[1.05rem] p-2 flex items-center justify-center bg-sky-500 rounded-full cursor-pointer text-gray-100 transition-all ease-in-out duration-300 hover:text-gray-100 hover:bg-sky-700"
          >
            <FaCamera />
          </label>
        </div>

        <div className="mb-10">
          <LoadingButton
            pending={pending}
            onClick={updateHandler}
            title="Update Profile"
            color="bg-main"
            width="w-52"
          />
        </div>
      </> */}

      <p className=" font-bold text-lg">Personnel Information</p>
      <div className="border bg-gray-100 mb-5 p-5 rounded-lg w-full items-start justify-center shadow flex flex-col gap-1">
        <p>
          Your Email information, you can change it when ever your want and make
          sure that the email you entered must be yours and correct.
        </p>
        <div className="w-full">
          <div className="p-1 w-full bg-white rounded-sm border border-gray-200">
            <div className="font-semibold">
              <span>Email</span>
            </div>
            <div className="border-b w-full border-gray-300">
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="enter first name"
                className="focus:outline-none w-full focus:ring-0 border-none outline-none p-1 bg-transparent placeholder:text-sm"
              />
            </div>
          </div>
        </div>
        <LoadingButton
          pending={pending}
          onClick={emailUpdateHandler}
          title="Change"
          color="bg-blue-700"
          width="w-32 sm:py-[6px] sm:rounded-sm"
        />
      </div>
      {/* first order container */}
      <div className="px-[.75%] md:px-[1.5%] bg-gray-100 lg:px-[3%] py-1 md:py-3 border-gray-200 border rounded-md">
        <div>
          <p>
            Dear Customers, Please take a moment to fill out the following
            fields based on your personal information. Providing us with this
            details will help us better understand your needs and enable us to
            deliver the highest quality service tailored to your specific
            requirements. We are committed to going above and beyond to ensure
            your satisfaction with our offerings.
          </p>
        </div>
      </div>

      {/* second order container */}
      <div className=" border-gray-200 border rounded-md mt-5">
        {/* personal information part */}
        <div className="p-3 bg-gray-100">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            {/* form */}
            <div className="w-full">
              <header className="flex items-center py-1 justify-between">
                <div>
                  <h3 className="w-max border-b border-gray-300 text-lg">
                    Personal Information
                  </h3>
                </div>
                <div>{/* right content */}</div>
              </header>
              {/* personal detail form */}

              {/* name */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* first name */}
                <div>
                  <div className="p-1 bg-white rounded-sm border border-gray-200">
                    <div className="font-semibold">
                      <span>First Name</span>
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="enter first name"
                        className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* middle name */}
                <div>
                  <div className="p-1 bg-white rounded-sm border border-gray-200">
                    <div className="font-semibold">
                      <span>Middle Name</span>
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="enter middle name"
                        className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* last name */}
                <div>
                  <div className="p-1 bg-white rounded-sm border border-gray-200">
                    <div className="font-semibold">
                      <span>Last Name</span>
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="enter last name"
                        className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* gender-birth-date-nationality */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                {/* gender */}
                <div>
                  <div className="p-1 bg-white rounded-sm border border-gray-200">
                    <div className="font-semibold">
                      <span>Gender</span>
                    </div>

                    <div className="flex items-center gap-3 my-1">
                      <div class="flex items-center">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-radio-1"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                        >
                          male
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 ring-0 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-radio-2"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                        >
                          female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* date of birth */}
                <div>
                  <div className="p-1 bg-white rounded-sm border border-gray-200">
                    <div className="font-semibold">
                      <span>Date of Birth</span>
                    </div>
                    <div>
                      <input
                        type="date"
                        className="focus:ring-0 focus:outline-none ring-0 border-none p-[.1rem] placeholder:text-sm text-sm"
                      />
                    </div>
                  </div>
                </div>
                {/* nationality */}
                <div>
                  <div className="p-1 bg-white rounded-sm border border-gray-200">
                    <div className="font-semibold">
                      <span>Nationality</span>
                    </div>
                    <div className="flex gap-1">
                      <div>
                        <input
                          type="text"
                          placeholder="enter nationality"
                          className="focus:ring-0 focus:outline-none ring-0 border-none p-[.1rem] placeholder:text-sm text-sm"
                        />
                      </div>
                      {/* <div>
                            <div className="flex items-center justify-center cursor-pointer text-xl">
                              <IoMdArrowDropdown />
                            </div>
                          </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* address and contact information part */}
        <div className="p-3 bg-gray-100 mt-5">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            {/* form */}
            <div className="w-full">
              <header className="flex items-center py-1 justify-between">
                <div>
                  <h3 className="w-max border-b border-gray-300 text-lg">
                    Contact Information
                  </h3>
                </div>
                <div>{/* right content */}</div>
              </header>
              {/* contact detail form */}
              <div className="my-3">
                {/* name */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {/* phone */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Phone Number</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="enter  phone number"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* postal code */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Country</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="enter your country"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* region */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Region</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="enter region"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  {/* city */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>City</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="enter city"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  {/* sub-city */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Sub-City</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="enter sub-city"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* house number */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>House Number</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="enter house number"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* preferable information part */}
        <div className="p-3 bg-gray-100 mt-5">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            {/* form */}
            <div className="w-full">
              <header className="flex items-center py-1 justify-between">
                <div>
                  <h3 className="w-max border-b border-gray-300 text-lg">
                    Employment Status
                  </h3>
                </div>
                <div>{/* right content */}</div>
              </header>
              {/* contact detail form */}
              <div className="my-3">
                {/* name */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {/* Preferred Method Of Communication */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Employed</span>
                      </div>

                      <div className="flex items-center gap-3 my-[2.5px]">
                        <div class="flex items-center">
                          <input
                            onChange={e => setEmployed(true)}
                            checked={employed ? true : false}
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-radio-1"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                          >
                            Employed
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            onChange={e => setEmployed(false)}
                            checked={employed ? false : true}
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 ring-0 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-radio-2"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                          >
                            Not Employed
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {Preferred Appointment Date} */}
                  {employed && (
                    <>
                      <div>
                        <div className="p-1 bg-white rounded-sm border border-gray-200">
                          <div className="font-semibold">
                            <span>Job Title</span>
                          </div>
                          <div className="border-b border-gray-300">
                            <input
                              type="text"
                              placeholder="enter job title"
                              className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="p-1 bg-white rounded-sm border border-gray-200">
                          <div className="font-semibold">
                            <span>Current Employer</span>
                          </div>
                          <div className="border-b border-gray-300">
                            <input
                              type="text"
                              placeholder="enter current employer"
                              className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* preferable information part */}
        <div className="p-3 bg-gray-100 mt-5">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            {/* form */}
            <div className="w-full">
              <header className="flex items-center py-1 justify-between">
                <div>
                  <h3 className="w-max border-b border-gray-300 text-lg">
                    Preferal Information
                  </h3>
                </div>
                <div>{/* right content */}</div>
              </header>
              {/* contact detail form */}
              <div className="my-3">
                {/* name */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {/* Preferred Method Of Communication */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Preferred Method Of Communication</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="select "
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/* {Preferred Appointment Date} */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Preferred Appointment Date</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="select"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  {/* time */}
                  <div>
                    <div className="p-1 bg-white rounded-sm border border-gray-200">
                      <div className="font-semibold">
                        <span>Preferred Appointment Time</span>
                      </div>
                      <div className="border-b border-gray-300">
                        <input
                          type="text"
                          placeholder="enter time"
                          className="focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* submit or cancel btn information part */}
        <div className="p-3 mt-5">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="flex items-center gap-3">
              <button className="px-7 py-1 rounded-sm text-white bg-blue-700 transition-colors ease-in-out duration-200 hover:bg-blue-600">
                Submit
              </button>
              <button className="px-7 py-1 rounded-sm text-white bg-gray-700 transition-colors ease-in-out duration-200 hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateProfile;
