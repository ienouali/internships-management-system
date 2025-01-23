import {REFUSED_DEMAND} from "../../actionTypes";

const refuseDemand = (demand,onsuccess) => ({
    type: REFUSED_DEMAND.REFUSED,
    payload : {demand,onsuccess},
});



export { refuseDemand };