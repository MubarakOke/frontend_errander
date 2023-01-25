import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../Assets/svg/Logo.svg";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";

const SignUp = () => {
  const [content, setContent] = useState(0);
  const errors = useSelector((state) => state.error);
  const [fields, setFields]= useState({
                                        personal_information: { first_name: "",
                                                                last_name: "",
                                                                middle_name: "",
                                                                email:"",
                                                                phone:"",
                                                                address:"",
                                                                lga:""
                                                              },
                                        gender: "",
                                        date_of_birth: "",
                                        education:"",
                                        skills:{ internet_usage: "",
                                                 speciality:""
                                                },
                                        other_information:{tight_schedule:"",
                                                           interesting_project:"",
                                                           expectation:"",
                                                           relevant_information:"",
                                                           interest:"",
                                                           familiar_location:""
                                                          },
                                        })

  const handleContent = (value) => {
    if (value === "add") {
      setContent(content + 1);
    } else if (value === "remove") {
      setContent(content - 1);
    } else{
      setContent(value)
    }
  };


  const RenderContent = () => {
    switch (content) {
      case 0:
        return <Page1 setContent={handleContent} errors={errors} content={content} fields={fields} setFields={setFields} />;
      case 1:
        return <Page2 setContent={handleContent} errors={errors} content={content} fields={fields} setFields={setFields} />;
      case 2:
        return <Page3 setContent={handleContent} errors={errors} content={content} fields={fields} setFields={setFields} />;
      case 3:
        return <Page4 setContent={handleContent} errors={errors} content={content} fields={fields} setFields={setFields} />;
      case 4:
        return <Page5 setContent={handleContent} errors={errors} content={content} fields={fields} setFields={setFields} />;
      case 5:
        return <Page6 setContent={handleContent} errors={errors} content={content} fields={fields} setFields={setFields} />;
      default:
        return;
    }
  };

  return (
    <div className="px-6 py-4">
      <div className="flex justify-center w-full mb-6">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="laptop:w-[550px] tablet:w-[500px] tablet:mx-auto">
      {RenderContent()}
      </div>
    </div>
  );
};

export default SignUp;
