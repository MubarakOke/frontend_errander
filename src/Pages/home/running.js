import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import FooterButton from "../../Components/footerbutton";
import RunningOrderModal from "../../Components/runningOrderModal";
import OrderInitiatedEmpty from "../../Components/orderInitiatedEmpty";
import { FetchRunningOrderAction} from "../../Redux/actionCreators/orderAction";

const Running = () => {
  const runningOrders = useSelector((state) => state.runningOrders);
  const dispatch= useDispatch();

  useEffect(()=>{
    if(runningOrders==null){
      dispatch(FetchRunningOrderAction())
    }
  },[]) 

  const renderOrderModal= (order, index, margin)=>{
    return (
      <div className="laptop:w-[70]">
        <RunningOrderModal key={index} order={order} arrowVisible={1}/>
      </div>
    );
  }

  const renderList = () => {
    if (runningOrders){
      const ordersArr=Object.values(runningOrders)
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
    if (list && list.length === 0) {
      return (
        <OrderInitiatedEmpty
          title1="You have no running errand"
          title2=""
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

export default Running;
