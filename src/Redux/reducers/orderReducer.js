import * as type from "../actionCreators/types";
import _ from 'lodash'


export const InitiatedOrderReducer= (state=null, action)=>{
    switch(action.type){
        case type.fetchInitiatedOrderType:
            return {..._.mapKeys(action.payload, order=>`order${order.id}`)}
        case type.signoutType:
            return null;
        default:
            return state;
    }
};

export const RunningOrderReducer= (state=null, action)=>{
    switch(action.type){
        case type.fetchRunningOrderType:
            return {..._.mapKeys(action.payload, order=>`order${order.id}`)}
        case type.signoutType:
            return null;
        default:
            return state;
    }
};

export const CompletedOrderReducer= (state=null, action)=>{
    switch(action.type){
        case type.fetchCompletedOrderType:
            return {..._.mapKeys(action.payload, order=>`order${order.id}`)}
        case type.signoutType:
            return null;
        default:
            return state;
    }
};

export const ActiveOrderReducer= (state=null, action)=>{
    switch(action.type){
        case type.activeOrder:
            return action.payload
        default:
            return state;
    }
};