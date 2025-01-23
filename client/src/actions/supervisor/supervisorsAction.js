import {SUPERVISORS} from "../../actionTypes";

const loadSupervisors = () => ({
    type: SUPERVISORS.LOAD
});

const setSupervisors = supervisors => ({
    type: SUPERVISORS.LOAD_SUCCESS,
    payload :supervisors
});


export {loadSupervisors, setSupervisors }