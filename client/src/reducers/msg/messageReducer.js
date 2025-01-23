import {MESSAGE} from "../../actionTypes";

const message = (state=null,action) => {
    if(action.type === MESSAGE.MESSAGE) {
        return action.payload
    }
   return state;
};

export {message};
