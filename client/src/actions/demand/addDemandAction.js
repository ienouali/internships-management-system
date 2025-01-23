import {ADD_DEMAND} from "../../actionTypes";

const Add_demand = (demand,onsuccess) => ({
    type: ADD_DEMAND.ADD,
    payload : {demand,onsuccess},
});


export {Add_demand };