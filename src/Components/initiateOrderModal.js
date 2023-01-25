import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  BsCalendar2DayFill,
  BsFillChatSquareTextFill,
  BsArrowRight,
} from "react-icons/bs";
import {MdCall} from "react-icons/md";
import { AiFillPhone, AiTwotoneShop } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import baseApi from "../Api/baseApi";
import { FetchInitiatedOrderAction, FetchRunningOrderAction} from "../Redux/actionCreators/orderAction";
import { showSpinner, hideSpinner } from "../Redux/actionCreators/spinnerAction";

const Modal = ({
  order,
  arrowVisible
}) => {
  const auth = useSelector((state) => state.auth);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const beginOrder= async ()=>{
    try{
      dispatch(showSpinner())
      await baseApi.put(`/order/${order.id}/`,
                                            {"status": "running"},
                                            {
                                              headers: {
                                                "Authorization": `Bearer ${auth.token}`,
                                                "Content-Type": "application/json",
                                              },
                                            }
                                          );
      await dispatch(FetchInitiatedOrderAction())
      await dispatch(FetchRunningOrderAction())
      toast.success("Order begun") 
      await dispatch(hideSpinner()) 
      navigate("/home/running/");   
                                
  }
    catch (err){
      dispatch(hideSpinner())  
      if(err){
      toast.error(`${err.response.data.error.details}`);
      }
      else{
        toast.error("order can't be started");
      }
    }
  }

  return (
    <div> 
      {/* ====================Modal Start============================= */}
      <div className={`mt-5 pb-5 rounded-[30px] z-30 shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)]`}>
        {/* ---------------------Modal Header  Start---------------------------- */}
        <div>
          {/* ----------------------------Title--------------------  */}
          <div className="flex justify-between bg-[#fff] mb-3  rounded-t-[30px]">
            <div className="flex flex-row p-5 font-bold text-[#616262] tablet:text-[18px]">
              Order {order.id}
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
          </div>
          {/* ----------------------------Direction--------------------  */}
          <div className="flex flex-col bg-[#fff] px-5 rounded-b-[30px]">
            <div className="flex justify-between py-4 px-6 font-medium bg-[#F2F2F2] items-center w-full rounded-[50px] text-[#2c2c2c]">
              <span className="tablet:text-[20px] text-[18px] break-words w-[42%]">{order.address}</span>{" "}
              {arrowVisible ? <div className="w-[16%] flex justify-center"><BsArrowRight className="text-[24px]" /></div> : ""}{" "}
              <span className="tablet:text-[20px] text-[18px] break-words w-[42%]">{order.preferred_shop_location}</span>
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
          {<div className="mt-4">
              <div class="table table-fixed w-full">
                <div class="table-header-group">
                    <div class="table-row">
                    <div class="table-cell tablet:text-[20px] w-[45%] font-bold text-[#0E4E48] text-[18px] pr-3">Order item(s)</div>
                    <div class="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] pr-3">Quantity</div>
                    <div class="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] pr-3">Price</div>
                    </div>
                </div>
                <div class="table-row-group">
                    {order.stock.map((value, id) => {
                        return (      
                                <div class="table-row">
                                    <div class="table-cell tablet:text-[20px] text-[18px] break-words pr-3">{value.name}</div>
                                    <div class="table-cell tablet:text-[20px] text-[18px] break-words pr-3">{value.quantity}</div>
                                    <div class="table-cell tablet:text-[20px] text-[18px] break-words pr-3">{value.price}</div>
                                </div>
                        );
                    })}   
                </div> 
              </div>  
            </div>}
          <div className="mt-4 flex  gap-3">
            <div className=" grow flex flex-col items-start col-span-2">
              {order.date_created ? (
                <div className="flex items-center">
                  <div>
                    <BsCalendar2DayFill className="text-[#0E4E48] tablet:text-[18px]" />
                  </div>
                  <span className="ml-4 tablet:text-[20px] text-[18px] break-words">{order.date_created}</span>
                </div>
              ) : (
                ""
              )}
              {order.customer_name ? (
                <div className="flex mt-2 items-center">
                  <div>
                    <FaUserAlt className="text-[#0E4E48] tablet:text-[18px]" />
                  </div>
                  <span className="ml-4 text-[18px] tablet:text-[20px] break-words">{order.customer_name}</span>
                </div>
              ) : (
                ""
              )}
              {order.customer.user.phone ? (
                <div className="flex mt-2 items-center">
                  <div>
                    <AiFillPhone className="text-[#0E4E48] tablet:text-[18px]" />
                  </div>
                  <span className="ml-4 text-[18px] tablet:text-[18px] break-words">{order.customer.user.phone}</span>
                </div>
              ) : (
                ""
              )}
              {order.preferred_shop ? (
                <div className="flex mt-2 items-center">
                  <div>
                    <AiTwotoneShop className="text-[#0E4E48] text-[17px] tablet:text-[19px]" />
                  </div>

                  <span className="ml-4 text-[18px] tablet:text-[18px] break-words">{order.preferred_shop}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {order.relevant_detail ? (
                <div className="flex mt-2 items-start">
                  <div>
                    <BsFillChatSquareTextFill className="text-[#0E4E48] text-[15px] mt-2 tablet:text-[18px]" />
                  </div>

                  <span className="ml-4 tablet:text-[20px] break-words text-[18px]">{order.relevant_detail}</span>
                </div>
              ) : (
                ""
            )}
          {/* ----------------------------content end--------------------  */}
          <div class="flex justify-center mt-3 text-[17px]">
            <button className="bg-[#0E4E48] px-8 py-1 rounded-[13px] text-[white]" onClick={beginOrder}>Begin</button>
          </div>
          <div className="relative"> 
              <a href={`tel:${order.customer.user.phone}`} target="_blank" rel="noreferrer">
                <div className="p-4 bg-[#D7EBE2] flex justify-center items-center w-[60px] h-[60px] rounded-full cursor-pointer absolute right-0 bottom-[-11px]">
                  <MdCall className="text-[#0E4E48] text-[40px]" />
                </div> 
              </a>
          </div>
        </div>
        {/* ----------------------------Modal Body end--------------------  */}
      </div>
      {/* ====================Modal End============================= */}
    </div>
  );
};

export default Modal;
