import React from 'react';
import Logo from "../Assets/svg/Logo.svg";
import { Link } from "react-router-dom";

function thankyou() {
  return (
    <div>
      <div className="flex mt-10 justify-center w-full">
        <img src={Logo} alt="Logo" />
      </div>
      <div className='text-center font-bold mt-7 tablet:text-[40px] laptop:text-[50px] text-[25px] mx-5'>
            <p>Thanks for registering under A'services</p>
      </div>
      <div className="text-center mt-5 tablet:text-[22px] tablet:text-[25px] text-[20px] mx-5">
          <p>You will be contacted via email within the next 24 hours for the status of your application</p>
      </div>
      <div>
      <Link to="/" className="tablet:text-[19px] tablet:w-[300px] w-[250px] mx-auto cursor-pointer mt-10 flex items-center justify-center bg-[#0E4E48] rounded-[10px] tablet:p-4 p-3 text-[#fff]">Proceed to Sign in</Link>
      </div>
    </div>
  )
}

export default thankyou