import React, { useEffect } from "react";
import OrderInitiatedEmpty from "../../Components/orderInitiatedEmpty";
import { useSelector, useDispatch} from "react-redux";
import FooterButton from "../../Components/footerbutton";
import InitiateOrderModal from "../../Components/initiateOrderModal";
import { FetchInitiatedOrderAction } from "../../Redux/actionCreators/orderAction";



const Order = () => {
  const initiatedOrders = useSelector((state) => state.initiatedOrders);
  const dispatch= useDispatch();

  useEffect(()=>{
    if(initiatedOrders==null){
      dispatch(FetchInitiatedOrderAction())
    }
  },[]) 
  
   
  const renderOrderModal= (order, index, margin)=>{
        return (
          <div className="laptop:w-[70]">
            <InitiateOrderModal key={index} order={order} arrowVisible={1} />
          </div>
        );
  }

  const renderList = () => {
    if (initiatedOrders){
      const ordersArr=Object.values(initiatedOrders)
      return ordersArr.map((order, index) => {
       return renderOrderModal(order, index)
    });
    }
    else{
      return 
    }
  };

  const renderContent = () => {
    const list = renderList();
    if (list && list.length === 0 ) {
      return (
        <OrderInitiatedEmpty
          title1="You have no order!"
          title2="Create order(s) now."
        />
      );
    }

    return (
      <div className="tablet:grid tablet:grid-cols-1 laptop:grid-cols-2 bigscreen:grid-cols-3 tablet:gap-2">
      {list}
      </div>);
  };

  return (<div className="">
    <div className="px-6 z-5 tablet:mb-[50px] mb-[95px] mt-[50px]">
    {renderContent()}
    </div>
    <FooterButton />
    </div>);
};

export default Order;
