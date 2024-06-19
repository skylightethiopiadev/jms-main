import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../../App";
import { useUpdateMutation } from "../../../../features/api/apiSlice";
import Response from "../../../../components/Response";
import LoadingButton from "../../../../components/loading/LoadingButton";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import customerImage from "../../../../assets/images/customers/customer-i.jpg";

const CustomerProfile = () => {
  const context = useContext(userContext);

  const [updateData, updateResponse] = useUpdateMutation();
  const [pending, setPending] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    if (context?.user?.user) {
      const data = context?.user?.user;
      setFirstName(data?.firstName ? data.firstName : firstName);
      setMiddleName(data?.middleName ? data.middleName : middleName);
      setLastName(data?.lastName ? data.lastName : lastName);
      setGender(data?.gender ? data.gender : gender);
      setPhone(data?.phone ? data.phone : phone);
      setAddress(data?.address ? data.address : address);
      setBio(data?.bio ? data.bio : bio);
      setNationality(data?.nationality ? data.nationality : nationality);
      setProfilePicture(
        data?.profilePicture ? data.profilePicture : profilePicture
      );
    }
  }, [context]);

  const updateHandler = () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("middleName", middleName);
    formData.append("lastName", lastName);
    formData.append("gender", gender);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("nationality", nationality);
    formData.append("profilePicture", profilePicture);
    formData.append("bio", bio);
    formData.append("url", `/user/privates?id=${users?.data[0]?.user?._id}`);
    formData.append("tag", ["users", "privates", "lawyers"]);
    updateData(formData);
  };

  console.log(context, profilePicture, "context");
  return (
    <div className="w-full h-[100vh] pb-10 pt-5 overflow-y-scroll px-5 flex flex-col gap-3">
      <Response response={updateResponse} setPending={setPending} />
      <div className="mb-5">
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

      <div className="mb-5">
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
        {context?.user?.user?.profilePicture?.length > 0 ? (
          <img
            src={context?.user?.user?.profilePicture}
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
    </div>
  );
};

export default CustomerProfile;
