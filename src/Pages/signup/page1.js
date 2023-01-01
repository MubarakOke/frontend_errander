import React from "react";
import { Link } from "react-router-dom";
import DisplayError from "../../Components/displayError";

const Page1 = ({ setContent, content, fields, setFields, errors }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="tablet:text-[30px] text-[25px] font-bold text-[#595959] font-[Roboto]">
          Personal information
        </span>
        <div className="text-[#8A8B8B] tablet:text-[22px] text-[18px] opacity-50 font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      {/* -------------------------input value--------------------- */}
      {errors && errors.signup.first_name? (<DisplayError message={"Firstname field may not be blank"} />):""}
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full tablet:!text-[15px] h-9 text-sm peer outline-none border-b-2 py-2"
          value={fields.personal_information.first_name}
          onChange={(e)=>setFields({...fields, personal_information:{...fields.personal_information, first_name:e.target.value}})}
        />
        <label className="text-[#8A8B8B] tablet:!text-[17px] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          First Name
        </label>
      </div>
      {errors && errors.signup.last_name? (<DisplayError message={"Lastname field may not be blank"} />):""}
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full tablet:!text-[15px] h-9 text-sm peer outline-none border-b-2 py-2"
          value={fields.personal_information.last_name}
          onChange={(e)=>setFields({...fields, personal_information:{...fields.personal_information, last_name:e.target.value}})}
        />
        <label className="text-[#8A8B8B] tablet:!text-[17px] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Last Name
        </label>
      </div>
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full tablet:!text-[15px] h-9 text-sm peer outline-none border-b-2 py-2"
          value={fields.personal_information.middle_name}
          onChange={(e)=>setFields({...fields, personal_information:{...fields.personal_information, middle_name:e.target.value}})}
        />
        <label className="text-[#8A8B8B] tablet:!text-[17px] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Middle Name
        </label>
      </div>
      {errors && errors.signup.email? (<DisplayError message={"please provide email"} />):""}
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full tablet:!text-[15px] h-9 text-sm peer outline-none border-b-2 py-2"
          value={fields.personal_information.email}
          onChange={(e)=>setFields({...fields, personal_information:{...fields.personal_information, email:e.target.value}})}
        />
        <label className="text-[#8A8B8B] tablet:!text-[17px] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Email
        </label>
      </div>
      {errors && errors.signup.phone? (<DisplayError message={"Phone number field may not be blank"} />):""}
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full tablet:!text-[15px] h-9 text-sm peer outline-none border-b-2 py-2"
          value={fields.personal_information.phone}
          onChange={(e)=>setFields({...fields, personal_information:{...fields.personal_information, phone:e.target.value}})}
        />
        <label className="text-[#8A8B8B] tablet:!text-[17px] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Phone Number
        </label>
      </div>
      {errors && errors.signup.address? (<DisplayError message={"Home Adress field may not be blank"} />):""}
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full tablet:!text-[15px] h-9 text-sm peer outline-none border-b-2 py-2"
          value={fields.personal_information.address}
          onChange={(e)=>setFields({...fields, personal_information:{...fields.personal_information, address:e.target.value}})}
        />
        <label className="text-[#8A8B8B] tablet:!text-[17px] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Home Address
        </label>
      </div>
      {errors && errors.signup.lga? (<DisplayError message={"LGA field may not be blank"} />):""}
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full tablet:!text-[15px] h-9 text-sm peer outline-none border-b-2 py-2"
          value={fields.personal_information.lga}
          onChange={(e)=>setFields({...fields, personal_information:{...fields.personal_information, lga:e.target.value}})}
        />
        <label className="text-[#8A8B8B] tablet:!text-[17px] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Local Government Area
        </label>
      </div>
      {/* -------------------------input value--------------------- */}

      {/* ---------------------Next------------------------ */}
      <div className="flex justify-end mt-6">
        <div
          onClick={() => setContent("add")}
          className="rounded-[6px] font-[roboto] bg-[#0E4E48] text-[#fff] py-2 px-8 font-semibold text-[18px] cursor-pointer"
        >
          Next
        </div>
      </div>
      <div className="font-bold mt-4 text-center">
        <span className="text-base text-[#8A8B8B]  tablet:text-[19px]">
          Already have an account?
        </span>

        <Link to="/" className="text-[red] tablet:text-[19px] font-[poppins]">
          {" "}
          Sign in!
        </Link>
      </div>
    </div>
  );
};

export default Page1;
