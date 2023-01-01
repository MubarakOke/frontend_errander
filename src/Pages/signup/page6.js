import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SignupAction } from "../../Redux/actionCreators/signupAction";
import DisplayError from "../../Components/displayError";

const Page6 = ({ content, setContent, fields, setFields, errors }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dateTo2Digits= (num)=> {
    return num.toString().padStart(2, '0');
  }

  
function formatDate(date) {
  let formatteddate
  try{
    formatteddate= [date.getFullYear(), dateTo2Digits(date.getMonth() + 1), dateTo2Digits(date.getDate())].join('-')
  }
  catch (err){
    formatteddate=""
  }
  return formatteddate
}

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("first_name", fields.personal_information.first_name);
    formData.append("last_name", fields.personal_information.last_name);
    formData.append("middle_name", fields.personal_information.middle_name);
    formData.append("email", fields.personal_information.email);
    formData.append("phone", fields.personal_information.phone);
    formData.append("address", fields.personal_information.address);
    formData.append("lga", fields.personal_information.lga);
    formData.append("gender", fields.gender);
    formData.append("date_of_birth", formatDate(fields.date_of_birth));
    formData.append("education_qualification", fields.education);
    formData.append("internet_usage", fields.skills.internet_usage);
    formData.append("skill", fields.skills.speciality);
    formData.append("deadline_handling", fields.other_information.tight_schedule);
    formData.append("project", fields.other_information.interesting_project);
    formData.append("expectation", fields.other_information.expectation);
    formData.append("relevant_information", fields.other_information.relevant_information);
    formData.append("interest", fields.other_information.interest);
    formData.append("familiar_location", fields.other_information.familiar_location);
    dispatch(SignupAction(navigate, formData, setContent));
  };

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <span className="tablet:text-[30px] text-[25px] font-bold text-[#595959] font-[Roboto]">
          Other Information
        </span>
        <div className="text-[#8A8B8B] opacity-50 tablet:text-[22px] text-[18px] font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      {errors && errors.signup.deadline_handling? (<DisplayError message={"this field may not be blank"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Can you describe how you handle tight deadline/schedule
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
          value={fields.other_information.tight_schedule}
          onChange={(e)=>setFields({...fields, other_information:{...fields.other_information, tight_schedule:e.target.value}})}
        ></textarea>
      </div>
      {errors && errors.signup.project? (<DisplayError message={"this field may not be blank"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          What is the most interesting project you have embarked on
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
          value={fields.other_information.interesting_project}
          onChange={(e)=>setFields({...fields, other_information:{...fields.other_information, interesting_project:e.target.value}})}
        ></textarea>
      </div>
      {errors && errors.signup.expectation? (<DisplayError message={"this field may not be blank"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          What do you expect from A'SERVICE
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
          value={fields.other_information.expectation}
          onChange={(e)=>setFields({...fields, other_information:{...fields.other_information, expectation:e.target.value}})}
        ></textarea>
      </div>
      {errors && errors.signup.relevant_information? (<DisplayError message={"this field may not be blank"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Any other relevant Infromation
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
          value={fields.other_information.relevant_information}
          onChange={(e)=>setFields({...fields, other_information:{...fields.other_information, relevant_information:e.target.value}})}
        ></textarea>
      </div>
      {errors && errors.signup.interest? (<DisplayError message={"this field may not be blank"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Area of interest
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
          value={fields.other_information.interest}
          onChange={(e)=>setFields({...fields, other_information:{...fields.other_information, interest:e.target.value}})}
        ></textarea>
      </div>
      {errors && errors.signup.familiar_location? (<DisplayError message={"this field may not be blank"} />):""}
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          What are the location you are most familiar with
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
          value={fields.other_information.familiar_location}
          onChange={(e)=>setFields({...fields, other_information:{...fields.other_information, familiar_location:e.target.value}})}
        ></textarea>
      </div>
      {/* -----------------------------previous and next botton-------------------------------- */}
      <div className="flex justify-end mb-5 mt-6">
        <div
          onClick={() => setContent("remove")}
          className="flex items-center  rounded-[6px] font-[roboto] bg-[#F9F9F9] text-[#8A8B8B] py-2 px-8 font-semibold text-[18px] cursor-pointer mr-4 hover:bg-[#565352] hover:text-[#fff]"
        >
          <HiArrowNarrowLeft className="text-[22px]" />
          <span className="ml-2">Back</span>
        </div>
        <div onClick={handleSubmit} className="rounded-[6px] font-[roboto] bg-[#0E4E48] text-[#fff] py-2 px-8 font-semibold text-[18px] cursor-pointer">
          Submit
        </div>
      </div>
    </div>
  );
};

export default Page6;
