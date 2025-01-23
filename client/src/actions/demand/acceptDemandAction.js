import {ACCEPT_DEMAND} from "../../actionTypes";

const acceptDemand = (demand,onsuccess) => ({
    type: ACCEPT_DEMAND.ACCEPT,
    payload : {demand,onsuccess},
});

export { acceptDemand };