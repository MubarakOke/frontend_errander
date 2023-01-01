import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  BsCalendar2DayFill,
  BsFillChatSquareTextFill,
  BsArrowRight,
} from "react-icons/bs";
import { AiFillPhone, AiTwotoneShop } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch } from "react-redux";

const Modal = ({
  orderId,
  heading,
  headingIcon,
  headingIconColor,
  headingColor,
  arrowVisible,
  headingFrom,
  headingTo,
  calender,
  phone,
  rider,
  status,
  message,
  shopName,
  items,
  print,
  bottonVisible,
  bottonTitle,
  bottonClickFunction,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();


  const renderStatus = () => {
    if (status === "running") {
      return (
        <div
          className={`flex items-center justify-center bg-[#62C78A] w-2/5 p-5 rounded-tr-[30px] rounded-bl-[15px]`}
        >
          <span className="text-[15px] font-bold text-[white]">Running</span>
          <div className="ml-2 text-[20px] text-[white]">
            <MdOutlineRemoveRedEye size="25px" />
          </div>
        </div>
      );
    }
    if (status === "initiated") {
      return (
        <div
          className={`flex items-center justify-center bg-[#FDBC3F] w-2/5 p-5 rounded-tr-[30px] rounded-bl-[15px]`}
        >
          <span className="text-[15px] font-bold text-[white]">Initiated</span>
          <div className="ml-2 text-[20px] text-[red]">
            <ImCancelCircle
              onClick={() => {
                // deleteOrder();
              }}
              size="25px"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {/* ====================Modal Start============================= */}
      <div className="mt-5 pb-5 rounded-[30px] z-30 shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)]">
        {/* ---------------------Modal Header  Start---------------------------- */}
        <div>
          {/* ----------------------------Title--------------------  */}
          <div className="flex justify-between bg-[#fff] mb-3  rounded-t-[30px]">
            <div className="flex flex-row p-5 font-bold text-[#616262]">
              Order {orderId}
            </div>
            {dropdown ? (
              <div className="flex flex-row p-5">
                <IoIosArrowUp
                  className="text-[24px]"
                  onClick={() => setDropdown(false)}
                />
              </div>
            ) : (
              <div className="flex flex-row p-5">
                <IoIosArrowDown
                  className="text-[24px]"
                  onClick={() => setDropdown(true)}
                />
              </div>
            )}
            {renderStatus()}
          </div>
          {/* ----------------------------Direction--------------------  */}
          <div className="flex flex-col bg-[#fff] px-5 rounded-b-[30px]">
            <div className="flex justify-between py-4 px-6 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#2c2c2c]">
              <span>{headingFrom}</span>{" "}
              {arrowVisible ? <BsArrowRight className="text-[24px]" /> : ""}{" "}
              <span>{headingTo}</span>
            </div>
          </div>
        </div>
        {/* ---------------------Modal Header End---------------------------- */}
        {/* ----------------------------Modal Body Start--------------------  */}
        <div
          className={`flex flex-col bg-[#fff] px-5 ${
            dropdown ? "" : "hidden"
          } rounded-b-[30px]`}
        >
          {/* ----------------------------content--------------------  */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            <div className="flex flex-col items-start col-span-2">
              {calender ? (
                <div className="flex">
                  <div>
                    <BsCalendar2DayFill className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{calender}</span>
                </div>
              ) : (
                ""
              )}
              {phone ? (
                <div className="flex mt-2">
                  <div>
                    <AiFillPhone className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{phone}</span>
                </div>
              ) : (
                ""
              )}
              {rider ? (
                <div className="flex mt-2">
                  <div>
                    <FaTruck className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{rider}</span>
                </div>
              ) : (
                ""
              )}
              {message ? (
                <div className="flex mt-2">
                  <div>
                    <BsFillChatSquareTextFill className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{message}</span>
                </div>
              ) : (
                ""
              )}
              {shopName ? (
                <div className="flex mt-2">
                  <div>
                    <AiTwotoneShop className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{shopName}</span>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flex flex-col ">
              <p className="font-bold text-[#0E4E48]">Name</p>
              {items.map((value, id) => {
                return (
                  <p className="text-[14px] mt-1" key={id}>
                    {value.name}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#0E4E48]">Quantity</span>
              {items.map((value, id) => {
                return (
                  <p className="text-[14px] mt-1" key={id}>
                    {value.quantity}
                  </p>
                );
              })}
            </div>
          </div>

          {bottonVisible ? (
            <div className="flex items-center justify-center mt-4">
              <div
                className="text-[#fff] bg-[#0E4E48] w-[40%] py-3 items-center text-center rounded-[30px] cursor-pointer"
                onClick={bottonClickFunction}
              >
                {bottonTitle}
              </div>
            </div>
          ) : (
            ""
          )}

          {/* ----------------------------content end--------------------  */}
          {print ? (
            <div>
              <div className="border-b-[1px] border-[#595959] border-dotted mt-8"></div>
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-[#4964D8] font-bold">Print receipt</h1>
                <div className="shadow-[0px_1px_4px_rgba(0,0,0,0.25)] p-2 rounded-full">
                  <BsArrowRight className="text-[26px] text-[#4964D8]" />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* ----------------------------Modal Body end--------------------  */}
      </div>
      {/* ====================Modal End============================= */}
    </div>
  );
};

export default Modal;
