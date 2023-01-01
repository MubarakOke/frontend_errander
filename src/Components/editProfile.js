import React from "react";
import Avatar2 from "../Assets/svg/Avatar2.svg";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ name, phone, email }) => {
  const Navigate = useNavigate();

  return (
    <div className="px-6 pt-12">
      <div className="flex items-center ">
        <MdOutlineArrowBackIosNew
          onClick={() => Navigate(-1)}
          className="text-[22px] text-black"
        />
        <span className="font-black text-[22px] font-[Roboto] ml-[30%]">
          Edit Profile
        </span>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img src={Avatar2} alt="Avatar" />
      </div>
      <div className="flex justify-center">
        <span className="font-medium text-[18px] text-[#FF6583] font-[Roboto] cursor-pointer">
          Change Image
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <input
          placeholder={"Full Name"}
          type={"text"}
          defaultValue={name}
          className="outline-none border-b-2 p-2 mt-10 font-medium"
        />
        <input
          placeholder={"Phone Number"}
          type={"text"}
          className="outline-none border-b-2 p-2 mt-10 font-medium"
          defaultValue={phone}
        />
        <input
          placeholder={"Email"}
          type={"email"}
          className="outline-none border-b-2 p-2 mt-10 font-medium"
          defaultValue={email}
        />
      </div>

      <div className="cursor-pointer mt-[40%] flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-medium font-[Roboto]">
        Update
      </div>
    </div>
  );
};


export default EditProfile;
