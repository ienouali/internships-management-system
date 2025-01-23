import {SIDEBAR} from  "../../actionTypes"
const hideSideBar = (state = false, action) => {
        if(action.type === SIDEBAR.HIDE) {
            return true
        }
        if(action.type === SIDEBAR.SHOW) {
            return false
        }
        return state;
};

export {hideSideBar};