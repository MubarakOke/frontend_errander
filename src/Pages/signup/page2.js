import React from "react";
import Male from "../../Assets/svg/Male.svg";
import Female from "../../Assets/svg/Female.svg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import DisplayError from "../../Components/displayError";

const Page2 = ({ setContent, content, fields, setFields, errors }) => {

  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="tablet:text-[30px] text-[25px] font-bold text-[#595959] font-[Roboto]">
          Gender
        </span>
        <div className="text-[#8A8B8B] opacity-50 tablet:text-[22px] text-[18px] font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      {errors && errors.signup.gender? (<DisplayError message={"Please select gender"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Select Gender
        </h1>
        <center>
          <div className="flex flex-row justify-between tablet:w-[60%] w-[270px] mx-auto mt-8">
            <div onClick={(e)=>setFields({...fields, gender:"MALE"})} className={`shadow-[3px_-3px_7px_1px_rgba(0,0,0,0.25)] ${fields.gender==="MALE"? "bg-[#0E4E48] border-[3px]":"border-[1px]"}  border-[#C3C4C4] rounded-[55px] p-4 cursor-pointer`}>
              <img src={Male} alt="Male" />
            </div>
            <div onClick={(e)=>setFields({...fields, gender:"FEMALE"})} className={`shadow-[3px_-3px_7px_1px_rgba(0,0,0,0.25)] ${fields.gender==="FEMALE"? "bg-[#0E4E48] border-[3px]":"border-[1px]"} border-[#C3C4C4] rounded-[55px] p-4 cursor-pointer`}>
              <img src={Female} alt="Female" />
            </div>
          </div>
        </center>
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

export default Page2;

// border: 1px solid #C3C4C4;
// box-sizing: border-box;
// box-shadow: 1px -2px 5px -12px rgba(0, 0, 0, 0.25);
// border-radius: 55px;
