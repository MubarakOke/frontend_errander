import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Calendar } from "react-calendar";
import './calendar.css';
import DisplayError from "../../Components/displayError";


const Page3 = ({ content, setContent, fields, setFields, errors }) => {

  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="tablet:text-[30px] text-[25px]  font-bold text-[#595959] font-[Roboto]">
          Date of Birth
        </span>
        <div className="text-[#8A8B8B] opacity-50 tablet:text-[22px] text-[18px] font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      {errors && errors.signup.date_of_birth? (<DisplayError message={"Please choose your date of birth"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Select Date of Birth
        </h1>
        <div className="mt-4 flex justify-center">
          <Calendar  onChange={(date)=>setFields({...fields, date_of_birth: date})} value={fields.date_of_birth}  />
        </div>

        {/* --------------Next and Previous--------------------- */}
        <div className="flex justify-end mt-6">
          <div
            onClick={() => setContent("remove")}
            className="flex items-center rounded-[6px] font-[roboto] bg-[#F9F9F9] text-[#8A8B8B] py-2 px-8 font-semibold text-[18px] cursor-pointer mr-4 hover:bg-[#565352] hover:text-[#fff]"
          >
            <HiArrowNarrowLeft className="text-[22px]" />
            <span className="ml-2">Back</span>
          </div>
          <div
            onClick={() => setContent("add")}
            className="rounded-[6px] font-[roboto] bg-[#0E4E48] text-[#fff] py-2 px-8 font-semibold text-[18px] cursor-pointer"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
